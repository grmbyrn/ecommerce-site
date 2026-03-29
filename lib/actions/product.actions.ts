'use server'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import type { Product as FrontendProduct } from "../types"
import type { Product as PrismaProduct } from '@prisma/client'
import { LATEST_PRODUCTS_LIMIT } from "../constants"

// Get latest products
export async function getLatestProducts(){
    const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
    const prisma = new PrismaClient({ adapter })

    try {
        // Data is a Prisma object
        const data = await prisma.product.findMany({
            take: LATEST_PRODUCTS_LIMIT,
            orderBy: { createdAt: 'desc' }
        })

        // Map Prisma model to frontend `Product` type and convert Decimal -> number
        const mapped: FrontendProduct[] = data.map((p: PrismaProduct) => {
            const images: string[] = p.images ?? []
            const priceRaw = p.price
            const ratingRaw = p.rating

            const price = typeof priceRaw === 'object' && typeof priceRaw.toNumber === 'function'
                ? priceRaw.toNumber()
                : Number(priceRaw)

            const rating = typeof ratingRaw === 'object' && typeof ratingRaw.toNumber === 'function'
                ? ratingRaw.toNumber()
                : Number(ratingRaw)

            return {
                slug: p.slug,
                images,
                name: p.name,
                brand: p.brand,
                rating,
                stock: p.stock,
                price,
            }
        })

        return mapped
    } finally {
        await prisma.$disconnect()
    }
}