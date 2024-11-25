import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            appName: "ToDoList App",
            date: "Today is {{date, DATE_SHORT}}",
          },
          itemList: {
            notResolvedOnly: "not resolved only",
            allItems: "all items",
            counter_zero: "No items to show",
            counter_one: "Only one item to show",
            counter_other: "Showing {{count}} items",
          },
          errors: {
            failedToLoadList: "Failed to load overview!",
          },
        },
      },
      cs: {
        translation: {
          header: {
            appName: "Aplikace úkolovník",
            date: "Dnes je {{date, DATE_SHORT}}",
          },
          itemList: {
            notResolvedOnly: "pouze nevyřešené",
            allItems: "všechny položky",
            counter_zero: "Žádná položka k zobrazení",
            counter_one: "Zobrazuji pouze jednu položku",
            counter_few: "Zobrazuji {{count}} položky",
            counter_other: "Zobrazuji {{count}} položek",
          },
          errors: {
            failedToLoadList: "Nepodařilo se načíst přehled úkolovníků!",
          },
        },
      },
    },
  });

// new usage
i18n.services.formatter.add("DATE_SHORT", (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_SHORT);
});

i18n.services.formatter.add("DATE_HUGE", (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;
