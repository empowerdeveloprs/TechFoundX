import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import healthRouter from './routes/health.js'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json({ limit: '1mb' }))

app.use('/api', healthRouter)

const PORT = Number(process.env.API_PORT || 7000)

app.listen(PORT, () => {
  console.log(`TechFoundX API running on ${PORT}`)
})
