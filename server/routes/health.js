import { Router } from 'express'
import { guardianHealth } from '../services/guardianClient.js'

const router = Router()

router.get('/health', async (_req, res) => {
  let guardian = {
    status: 'UNAVAILABLE',
  }

  try {
    guardian = await guardianHealth()
  } catch {
    // Backend remains available even when Guardian is temporarily unavailable.
  }

  res.json({
    service: 'TechFoundX API',
    status: 'UP',
    guardian,
  })
})

export default router
