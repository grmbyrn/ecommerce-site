export type Product = {
  slug: string
  images: string[]
  name: string
  brand?: string
  rating?: number
  stock?: number
  price?: number | string
}
