import React, { useState } from 'react';
import './App.css';
import { i18n } from './translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng';

const App = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
  };

  return (
    <div className="App">
      <h1>{i18n.t('home.titles.app')}</h1>
      <p>{i18n.t('home.messages.helloText')}</p>
      <button>{i18n.t('home.buttons.save')}</button>
      <br />
      <br />
      <small>{i18n.t('home.messages.exampleText')}</small>
      <br />
      <br />
      <select onChange={handleSelectChange} value={language}>
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
      </select>
    </div>
  );
};

export default App;
