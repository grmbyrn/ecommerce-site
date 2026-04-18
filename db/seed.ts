import { config } from 'dotenv'
config()

import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import sampleData from './sample-data'

async function main() {
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
  const prisma = new PrismaClient({ adapter })

  await prisma.product.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.verificationToken.deleteMany()
  await prisma.user.deleteMany()

  await prisma.product.createMany({ data: sampleData.products })
  await prisma.user.createMany({ data: sampleData.users })

  console.log('Database seeded successfully.')
}

main()
