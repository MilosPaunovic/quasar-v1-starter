const MODE_KEY = 'mode';
const DEFAULT_MODE = 'light';

const MODE_SERVICE = {
  /**
   * Get the saved mode string from LocalStorage or get default value.
   * @returns {String} Mode string saved in LocalStorage or default value.
   */
  getMode: () => localStorage.getItem(MODE_KEY) ?? DEFAULT_MODE,
  /**
   * Update mode details in LocalStorage.
   * @param  {String} mode Mode details string.
   * @returns {void}
   */
  updateMode: (mode) => localStorage.setItem(MODE_KEY, mode),
  /**
   * Remove all mode details from LocalStorage.
   * @returns {void}
   */
  removeMode: () => localStorage.removeItem(MODE_KEY),
};

export { MODE_SERVICE };
