export interface Location {
  id: number
  name: string
  zone: string
  services: string[]
}

export interface Loan {
  id: number
  title: string
  description: string
  icon: string
  maxAmount: string
  features: string[]
}

export interface Property {
  id: number
  type: string
  location: string
  purpose: 'Buy' | 'Sell' | 'Rent'
  price?: string
  size?: string
}

export interface Project {
  id: number
  title: string
  location: string
  description: string
  status: 'Completed' | 'Ongoing'
  completionDate?: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export interface Stat {
  id: number
  number: string
  label: string
  suffix: string
  icon: string
}