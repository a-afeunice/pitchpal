import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [privacy, setPrivacy] = useState('public');
  const [dataRetention, setDataRetention] = useState('30 days');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleDataRetentionChange = (e) => {
    setDataRetention(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update logic
    console.log('Settings updated:', { theme, notifications, language, privacy, dataRetention });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Dashboard Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Theme Settings */}
        <section className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Theme</h2>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">Light Theme</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">Dark Theme</span>
            </label>
          </div>
        </section>

        {/* Notifications Settings */}
        <section className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Enable Notifications</span>
          </label>
        </section>

        {/* Language Preferences */}
        <section className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Language Preferences</h2>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </section>

        {/* Privacy Settings */}
        <section className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Privacy Settings</h2>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="privacy"
                value="public"
                checked={privacy === 'public'}
                onChange={handlePrivacyChange}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">Public</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="privacy"
                value="private"
                checked={privacy === 'private'}
                onChange={handlePrivacyChange}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">Private</span>
            </label>
          </div>
        </section>

        {/* Data Management */}
        <section className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Data Management</h2>
          <label className="block text-gray-700 mb-2">Data Retention Period</label>
          <select
            value={dataRetention}
            onChange={handleDataRetentionChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="30 days">30 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
            <option value="1 year">1 year</option>
          </select>
          <p className="text-gray-600 text-sm mt-2">Choose how long your data is retained before it is automatically deleted.</p>
        </section>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
