import Store from '../Store';
import * as Tools from '../../utils/Tools';
import { LocalStorage } from '../../utils/LocalStorage';
import AppModel from '../AppModel';
import * as Configs from '../../constants/Configs';

/**
 * DeepSeek API integration for code search
 * Uses OpenAI-compatible API with Bearer token authentication
 */

class DeepSeekData {
  constructor() {
    this._store = new Store(Infinity, {
      persistence: 'session',
      persistenceKey: AppModel.genPersistenceKey('deepseek_search_key')
    });
  }

  /**
   * Search code using DeepSeek API
   * @param {string} query - search query
   * @param {number} page - page number
   * @param {Array} languages - programming languages filter
   * @returns {Promise} search results
   */
  async searchCode(query, page = 0, languages = []) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('DeepSeek API key not configured');
    }

    const cacheId = Tools.MD5(`deepseek_${query}_${page}_${languages.join(',')}`);
    const cache = this._store.get(cacheId);
    if (cache) {
      return cache;
    }

    // Prepare search prompt for DeepSeek
    const langFilter = languages.length > 0 ? ` in ${languages.join(', ')} programming language(s)` : '';
    const prompt = `Search for variable names and code examples related to "${query}"${langFilter}. Provide real-world usage examples from popular repositories. Format the response as a JSON array with items containing: id, name, repo, language, lines (code snippets), and url fields.`;

    try {
      const response = await fetch(`${Configs.DEEPSEEK_API_BASE}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-coder',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 2048,
          temperature: 0.3
        })
      });

      if (!response.ok) {
        throw new Error(`DeepSeek API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      
      if (!content) {
        throw new Error('Invalid response from DeepSeek API');
      }

      // Parse the response and adapt to searchcode.com format
      const results = this._parseDeepSeekResponse(content, query);
      
      const searchResult = {
        results: results,
        total: results.length,
        page: page,
        query: query
      };

      this._store.save(cacheId, searchResult);
      return searchResult;

    } catch (error) {
      console.error('DeepSeek API search failed:', error);
      throw error;
    }
  }

  /**
   * Parse DeepSeek response and adapt to searchcode.com format
   * @param {string} content - raw response content
   * @param {string} query - original search query
   * @returns {Array} formatted results
   */
  _parseDeepSeekResponse(content, query) {
    try {
      // Try to extract JSON from the response
      let jsonData;
      try {
        jsonData = JSON.parse(content);
      } catch (e) {
        // If not valid JSON, try to extract JSON from markdown code blocks
        const jsonMatch = content.match(/```(?:json)?\s*(\[[\s\S]*?\])\s*```/);
        if (jsonMatch) {
          jsonData = JSON.parse(jsonMatch[1]);
        } else {
          // Fallback: create synthetic results based on content
          return this._createSyntheticResults(content, query);
        }
      }

      if (!Array.isArray(jsonData)) {
        return this._createSyntheticResults(content, query);
      }

      // Adapt to searchcode.com format
      return jsonData.map((item, index) => ({
        id: `deepseek_${Tools.MD5(JSON.stringify(item))}_${index}`,
        name: item.name || `${query}_example_${index + 1}`,
        repo: item.repo || 'https://github.com/example/repository',
        language: item.language || 'JavaScript',
        lines: item.lines || { 1: item.code || `// Example usage of ${query}` },
        url: item.url || `https://github.com/example/repository/blob/main/example.js`,
        filename: item.filename || `example.${this._getFileExtension(item.language || 'JavaScript')}`,
        score: 100 - index // Higher score for earlier results
      }));

    } catch (error) {
      console.error('Failed to parse DeepSeek response:', error);
      return this._createSyntheticResults(content, query);
    }
  }

  /**
   * Create synthetic results when parsing fails
   * @param {string} content - response content
   * @param {string} query - search query
   * @returns {Array} synthetic results
   */
  _createSyntheticResults(content, query) {
    const lines = content.split('\n').filter(line => line.trim());
    const codeLines = lines.filter(line => 
      line.includes(query) || 
      line.match(/[a-zA-Z_][a-zA-Z0-9_]*/) ||
      line.includes('function') ||
      line.includes('const') ||
      line.includes('var') ||
      line.includes('let')
    );

    if (codeLines.length === 0) {
      return [{
        id: `deepseek_${Tools.MD5(content)}_0`,
        name: `${query}_example`,
        repo: 'https://github.com/deepseek-ai/DeepSeek-Coder',
        language: 'JavaScript',
        lines: { 1: `// DeepSeek suggested: ${query}` },
        url: 'https://github.com/deepseek-ai/DeepSeek-Coder',
        filename: 'example.js',
        score: 100
      }];
    }

    return codeLines.slice(0, 10).map((line, index) => ({
      id: `deepseek_${Tools.MD5(line)}_${index}`,
      name: `${query}_example_${index + 1}`,
      repo: 'https://github.com/deepseek-ai/DeepSeek-Coder',
      language: 'JavaScript',
      lines: { [index + 1]: line },
      url: 'https://github.com/deepseek-ai/DeepSeek-Coder',
      filename: `example_${index + 1}.js`,
      score: 100 - index
    }));
  }

  /**
   * Get file extension for language
   * @param {string} language - programming language
   * @returns {string} file extension
   */
  _getFileExtension(language) {
    const extensions = {
      'JavaScript': 'js',
      'TypeScript': 'ts',
      'Python': 'py',
      'Java': 'java',
      'C++': 'cpp',
      'C': 'c',
      'C#': 'cs',
      'Go': 'go',
      'Rust': 'rs',
      'PHP': 'php',
      'Ruby': 'rb',
      'Swift': 'swift',
      'Kotlin': 'kt',
      'Scala': 'scala',
      'HTML': 'html',
      'CSS': 'css'
    };
    return extensions[language] || 'txt';
  }

  /**
   * Set DeepSeek API key
   * @param {string} apiKey - API key
   */
  setApiKey(apiKey) {
    if (apiKey) {
      LocalStorage.setItem(Configs.DEEPSEEK_API_KEY_STORAGE, apiKey);
    } else {
      LocalStorage.removeItem(Configs.DEEPSEEK_API_KEY_STORAGE);
    }
  }

  /**
   * Get DeepSeek API key
   * @returns {string|null} API key
   */
  getApiKey() {
    return LocalStorage.getItem(Configs.DEEPSEEK_API_KEY_STORAGE);
  }

  /**
   * Check if DeepSeek is configured
   * @returns {boolean} true if API key is set
   */
  isConfigured() {
    return !!this.getApiKey();
  }
}

export default new DeepSeekData();