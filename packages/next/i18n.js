/**
 * For more information please refer to documentation
 * https://github.com/vinissimus/next-translate#add-i18njs-config-file
 */

module.exports = {
  locales: ["en", "ta"],
  defaultLocale: "en",
  pages: {
    "*": ["common", "screen"]
  },
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`locale/${lang}/${ns}.json`).then((m) => m.default)
};
