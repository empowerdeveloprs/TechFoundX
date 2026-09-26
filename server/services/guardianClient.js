import { guardianConfig } from '../config/guardian.js'

export async function guardianHealth() {
  const response = await fetch(
    `${guardianConfig.url}/guardian/health`,
    {
      method: 'GET',
      signal: AbortSignal.timeout(guardianConfig.timeoutMs),
    }
  )

  if (!response.ok) {
    throw new Error(`TFX Guardian health check failed: ${response.status}`)
  }

  return response.json()
}

export async function guardianVerify(payload) {
  if (!guardianConfig.key) {
    throw new Error('TFX_GUARDIAN_KEY is not configured')
  }

  const response = await fetch(
    `${guardianConfig.url}/guardian/verify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Guardian-Key': guardianConfig.key,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(guardianConfig.timeoutMs),
    }
  )

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(
      result.message || `TFX Guardian verification failed: ${response.status}`
    )
  }

  return result
}
