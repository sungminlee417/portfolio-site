import { client, isSanityConfigured } from './client'
import type {
  GuitarTab,
  SoftwareProject,
  ClientProject,
  Skill,
  SkillCategory,
  PricingPlan,
  FaqItem,
} from './types'

const revalidate = { next: { revalidate: 60 } }

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T[]> {
  if (!isSanityConfigured) return []
  try {
    return await client.fetch<T[]>(query, params, revalidate)
  } catch {
    return []
  }
}

export async function getGuitarTabs(): Promise<GuitarTab[]> {
  return safeFetch<GuitarTab>(
    `*[_type == "guitarTab"] | order(order asc) {
      _id, title, composer, description, difficulty, isFree, price, link, genre, order
    }`,
  )
}

export async function getSoftwareProjects(): Promise<SoftwareProject[]> {
  return safeFetch<SoftwareProject>(
    `*[_type == "softwareProject"] | order(featured desc, order asc) {
      _id, name, description, highlights, stack, link, repo, featured, order
    }`,
  )
}

export async function getClientProjects(): Promise<ClientProject[]> {
  return safeFetch<ClientProject>(
    `*[_type == "clientProject"] | order(order asc) {
      _id, name, client, description, year, link, services, features, order
    }`,
  )
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const skills = await safeFetch<Skill>(
    `*[_type == "skill"] | order(order asc) {
      _id, name, icon, category, order
    }`,
  )

  const categoryOrder = ['Frontend', 'Backend', 'Database & Cloud']
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return categoryOrder
    .filter((cat) => grouped[cat]?.length)
    .map((cat) => ({ title: cat, skills: grouped[cat] }))
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return safeFetch<PricingPlan>(
    `*[_type == "pricingPlan"] | order(order asc) {
      _id, name, price, per, description, features, popular, savings, order
    }`,
  )
}

export async function getFaqItems(category: 'guitar' | 'software'): Promise<FaqItem[]> {
  return safeFetch<FaqItem>(
    `*[_type == "faqItem" && category == $category] | order(order asc) {
      _id, question, answer, category, order
    }`,
    { category },
  )
}
