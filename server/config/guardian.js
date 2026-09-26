export const guardianConfig = {
  url: process.env.TFX_GUARDIAN_URL || 'http://127.0.0.1:7001',
  key: process.env.TFX_GUARDIAN_KEY || '',
  timeoutMs: Number(process.env.TFX_GUARDIAN_TIMEOUT_MS || 5000),
}
