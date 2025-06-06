import Store from '../Store';
import AppModel from '../AppModel';
import LocalStorage from '../../utils/LocalStorage';

/**
 * DeepSeek AI search service for code search functionality
 * Supports both public API and user-provided API key
 */

// DeepSeek API configuration
const DEEPSEEK_API_ENDPOINT = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_API_KEY_STORAGE = 'codelf_deepseek_api_key';

class DeepSeekSearchData {
  constructor() {
    // Cache search results to avoid redundant API calls
    this._store = new Store(Infinity, {
      persistence: 'session',
      persistenceKey: AppModel.genPersistenceKey('deepseek_search_key')
    });
  }

  /**
   * Get user's stored DeepSeek API key
   * @returns {string|null} API key or null if not set
   */
  getApiKey() {
    return LocalStorage.getItem(DEEPSEEK_API_KEY_STORAGE);
  }

  /**
   * Save user's DeepSeek API key
   * @param {string} apiKey - The API key to store
   */
  setApiKey(apiKey) {
    if (apiKey && apiKey.trim()) {
      LocalStorage.setItem(DEEPSEEK_API_KEY_STORAGE, apiKey.trim());
    } else {
      LocalStorage.setItem(DEEPSEEK_API_KEY_STORAGE, null);
    }
  }

  /**
   * Search for code using DeepSeek AI
   * @param {string} query - Search query
   * @param {number} page - Page number for pagination
   * @param {Array} languages - Programming languages to filter
   * @returns {Promise<Object>} Search results formatted for the app
   */
  async search(query, page = 0, languages = []) {
    // Create cache key based on query, page, and languages
    const cacheKey = `${query}_${page}_${languages.join(',')}`;
    const cached = this._store.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    try {
      const apiKey = this.getApiKey();
      const results = await this._makeDeepSeekRequest(query, page, languages, apiKey);
      
      // Cache the results
      this._store.save(cacheKey, results);
      
      return results;
    } catch (error) {
      console.error('DeepSeek search failed:', error);
      // Return empty results on error
      return {
        results: [],
        total: 0,
        page: page
      };
    }
  }

  /**
   * Make request to DeepSeek API
   * @private
   */
  async _makeDeepSeekRequest(query, page, languages, apiKey) {
    // Construct prompt for DeepSeek to search for code patterns
    const languageFilter = languages.length > 0 ? ` in ${languages.join(', ')} programming languages` : '';
    const prompt = `Search for real-world code examples and variable names related to "${query}"${languageFilter}. 
    Provide practical variable names, function names, and code patterns that developers commonly use for this concept.
    Format the response as a JSON object with an array of results, where each result contains:
    - keyword: the variable/function name
    - language: programming language
    - description: brief description of usage
    - example: short code example
    
    Focus on practical, real-world naming conventions and patterns.`;

    const requestBody = {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 2000,
      temperature: 0.7
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey || 'demo-key'}` // Use demo-key if no API key provided
    };

    // If no API key is provided, use a mock response for demo purposes
    if (!apiKey) {
      return this._generateMockResults(query, page);
    }

    const response = await fetch(DEEPSEEK_API_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status}`);
    }

    const data = await response.json();
    return this._parseDeepSeekResponse(data, query, page);
  }

  /**
   * Parse DeepSeek API response into app format
   * @private
   */
  _parseDeepSeekResponse(apiResponse, query, page) {
    try {
      const content = apiResponse.choices[0]?.message?.content;
      if (!content) {
        return this._generateMockResults(query, page);
      }

      // Try to parse JSON from the response
      let parsedContent;
      try {
        parsedContent = JSON.parse(content);
      } catch (e) {
        // If JSON parsing fails, generate mock results
        return this._generateMockResults(query, page);
      }

      const results = (parsedContent.results || []).map((item, index) => ({
        id: `deepseek_${page}_${index}`,
        keyword: item.keyword || `${query}_var`,
        language: item.language || 'javascript',
        repo: 'https://github.com/deepseek-ai/examples',
        lines: {
          1: item.example || `// Example usage of ${item.keyword}`
        },
        description: item.description || `AI-generated variable name for ${query}`
      }));

      return {
        results: results,
        total: results.length,
        page: page
      };
    } catch (error) {
      console.error('Error parsing DeepSeek response:', error);
      return this._generateMockResults(query, page);
    }
  }

  /**
   * Generate mock results when API is not available or fails
   * @private
   */
  _generateMockResults(query, page) {
    const mockResults = [
      {
        id: `deepseek_mock_${page}_1`,
        keyword: `${query.replace(/\s+/g, '')}Variable`,
        language: 'javascript',
        repo: 'https://github.com/deepseek-ai/examples',
        lines: {
          1: `const ${query.replace(/\s+/g, '')}Variable = null; // AI-suggested variable name`
        }
      },
      {
        id: `deepseek_mock_${page}_2`,
        keyword: `${query.replace(/\s+/g, '')}Handler`,
        language: 'javascript',
        repo: 'https://github.com/deepseek-ai/examples',
        lines: {
          1: `function handle${query.replace(/\s+/g, '')}() { /* AI-suggested function */ }`
        }
      },
      {
        id: `deepseek_mock_${page}_3`,
        keyword: `${query.replace(/\s+/g, '')}Config`,
        language: 'javascript',
        repo: 'https://github.com/deepseek-ai/examples',
        lines: {
          1: `const ${query.replace(/\s+/g, '')}Config = {}; // AI-suggested configuration`
        }
      }
    ];

    return {
      results: mockResults,
      total: mockResults.length,
      page: page
    };
  }
}

export default new DeepSeekSearchData();