import React, { useState } from 'react';
import { Dropdown, Icon, Modal, Button, Input, Message } from 'semantic-ui-react';
import { SEARCH_ENGINES, SEARCH_ENGINE_CONFIG } from '../constants/Configs';
import DeepSeekSearchData from '../models/metadata/DeepSeekSearchData';

/**
 * Search Engine Selector Component
 * Allows users to choose between different search engines (SearchCode, DeepSeek AI)
 * Includes settings modal for DeepSeek API key configuration
 */
export default function SearchEngineSelector(props) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(DeepSeekSearchData.getApiKey() || '');
  const [showApiKeyMessage, setShowApiKeyMessage] = useState(false);

  const searchEngineOptions = Object.entries(SEARCH_ENGINE_CONFIG).map(([key, config]) => ({
    key: key,
    value: key,
    text: config.name,
    icon: config.icon,
    description: config.description
  }));

  /**
   * Handle search engine selection change
   */
  function handleSearchEngineChange(e, { value }) {
    // Show API key settings for DeepSeek if no key is configured
    if (value === SEARCH_ENGINES.DEEPSEEK && !DeepSeekSearchData.getApiKey()) {
      setSettingsOpen(true);
      setShowApiKeyMessage(true);
    }
    
    props.onSearchEngineChange && props.onSearchEngineChange(value);
  }

  /**
   * Handle settings modal open
   */
  function handleSettingsOpen() {
    setSettingsOpen(true);
    setShowApiKeyMessage(false);
  }

  /**
   * Handle settings modal close
   */
  function handleSettingsClose() {
    setSettingsOpen(false);
    setShowApiKeyMessage(false);
  }

  /**
   * Save API key to local storage
   */
  function handleSaveApiKey() {
    DeepSeekSearchData.setApiKey(apiKey);
    setSettingsOpen(false);
    setShowApiKeyMessage(false);
  }

  /**
   * Clear API key from storage
   */
  function handleClearApiKey() {
    setApiKey('');
    DeepSeekSearchData.setApiKey('');
  }

  const currentEngine = SEARCH_ENGINE_CONFIG[props.currentEngine] || SEARCH_ENGINE_CONFIG[SEARCH_ENGINES.SEARCHCODE];

  return (
    <>
      <div className="search-engine-selector">
        <Dropdown
          selection
          compact
          value={props.currentEngine || SEARCH_ENGINES.SEARCHCODE}
          options={searchEngineOptions}
          onChange={handleSearchEngineChange}
          className="search-engine-dropdown"
        />
        
        {/* Settings button for DeepSeek */}
        {props.currentEngine === SEARCH_ENGINES.DEEPSEEK && (
          <Button 
            icon="setting" 
            size="small" 
            basic
            title="DeepSeek API Settings"
            onClick={handleSettingsOpen}
            className="engine-settings-btn"
          />
        )}
      </div>

      {/* Settings Modal for DeepSeek API Key */}
      <Modal
        open={settingsOpen}
        onClose={handleSettingsClose}
        size="small"
        closeIcon
      >
        <Modal.Header>
          <Icon name="brain" color="purple" />
          DeepSeek AI Settings
        </Modal.Header>
        <Modal.Content>
          {showApiKeyMessage && (
            <Message info>
              <Message.Header>API Key Optional</Message.Header>
              <p>
                You can use DeepSeek AI without an API key with limited functionality, 
                or provide your own API key for full features and higher rate limits.
              </p>
            </Message>
          )}
          
          <div className="field">
            <label>DeepSeek API Key (Optional)</label>
            <Input
              type="password"
              placeholder="Enter your DeepSeek API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              action={{
                icon: 'eye',
                onClick: (e) => {
                  const input = e.target.previousElementSibling;
                  input.type = input.type === 'password' ? 'text' : 'password';
                }
              }}
            />
            <div className="help-text" style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
              Get your API key from <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener noreferrer">DeepSeek Platform</a>
            </div>
          </div>

          <Message info size="small">
            <Icon name="info circle" />
            <div>
              <strong>Privacy Notice:</strong> Your API key is stored locally in your browser and never sent to our servers.
              Only you have access to it.
            </div>
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClearApiKey} basic>
            Clear Key
          </Button>
          <Button onClick={handleSettingsClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveApiKey} primary>
            <Icon name="save" />
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}