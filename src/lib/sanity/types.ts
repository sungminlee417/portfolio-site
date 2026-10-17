export interface GuitarTab {
  _id: string
  title: string
  composer?: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  isFree: boolean
  price: string
  link?: string
  genre?: string
  order: number
}

export interface SoftwareProject {
  _id: string
  name: string
  description: string
  highlights?: string[]
  stack: string[]
  link?: string
  repo?: string
  featured: boolean
  order: number
}

export interface ClientProject {
  _id: string
  name: string
  client?: string
  description: string
  year?: string
  link?: string
  services?: string[]
  features?: string[]
  order: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Skill {
  _id: string
  name: string
  icon: string
  category: 'Frontend' | 'Backend' | 'Database & Cloud'
  order: number
}

export interface PricingPlan {
  _id: string
  name: string
  price: string
  per?: string
  description?: string
  features: string[]
  popular: boolean
  savings?: string
  order: number
}

export interface FaqItem {
  _id: string
  question: string
  answer: string
  category: 'guitar' | 'software'
  order: number
}
