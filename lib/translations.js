import { db } from "@/lib/db"

// Default locales
export const locales = ["fr", "ar"]
export const defaultLocale = "fr"

// Get translation for a specific key and locale
export async function getTranslation(key, locale = defaultLocale) {
  try {
    const translation = await db.translation.findUnique({
      where: {
        locale_key: {
          locale,
          key,
        },
      },
    })

    return translation?.value || key
  } catch (error) {
    console.error("Error fetching translation:", error)
    return key
  }
}

// Get all translations for a locale
export async function getTranslations(locale = defaultLocale) {
  try {
    const translations = await db.translation.findMany({
      where: {
        locale,
      },
    })

    const translationsMap = {}
    translations.forEach((t) => {
      translationsMap[t.key] = t.value
    })

    return translationsMap
  } catch (error) {
    console.error("Error fetching translations:", error)
    return {}
  }
}

// Set a translation
export async function setTranslation(key, value, locale = defaultLocale) {
  try {
    return await db.translation.upsert({
      where: {
        locale_key: {
          locale,
          key,
        },
      },
      update: {
        value,
      },
      create: {
        locale,
        key,
        value,
      },
    })
  } catch (error) {
    console.error("Error setting translation:", error)
    throw error
  }
}

// Delete a translation
export async function deleteTranslation(key, locale = defaultLocale) {
  try {
    return await db.translation.delete({
      where: {
        locale_key: {
          locale,
          key,
        },
      },
    })
  } catch (error) {
    console.error("Error deleting translation:", error)
    throw error
  }
}

// Client-side translation function
export function t(translations, key, defaultValue = key) {
  return translations[key] || defaultValue
}

