export interface ICreateAddress {
  userId: string
  street: string
  city: string
  state: string
  country: string
  postalCode: string
  neighborhood: string
  number: number
  complement?: string
}
