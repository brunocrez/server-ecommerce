export interface ICreateProduct {
  name: string
  slug: string
  fullPrice: number
  finalPrice: number
  category: string
  description: string
}

export type ProductType = ICreateProduct & { id: string }
