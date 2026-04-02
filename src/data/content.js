import { CONTENT_URL } from '../config/remoteData'

/**
 * Charge `content.json` depuis l'API client.
 * @returns {Promise<object>} Objet racine (navbar, hero, features, …)
 */
export async function loadContent() {
  const res = await fetch(CONTENT_URL)
  if (!res.ok) {
    throw new Error(`content.json (${res.status})`)
  }
  return res.json()
}
