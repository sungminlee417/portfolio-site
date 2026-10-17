/**
 * Seed script — migrates all hardcoded site content into Sanity.
 *
 * Prerequisites:
 *   1. Create a Sanity project at https://sanity.io/manage
 *   2. Copy .env.local.example → .env.local and fill in your project ID + a write token
 *   3. Run:  npx ts-node --project tsconfig.scripts.json scripts/seed-sanity.ts
 *      OR:   npx tsx scripts/seed-sanity.ts
 *
 * Safe to re-run — skips documents that already exist (matched by a stable _id).
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env.local') })
dotenv.config({ path: resolve(process.cwd(), '.env'), override: false })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ---------------------------------------------------------------------------
// Guitar Tabs
// ---------------------------------------------------------------------------
const guitarTabs = [
  {
    _id: 'guitarTab-sparks',
    _type: 'guitarTab',
    title: 'Sparks',
    composer: 'Coldplay',
    description:
      "Fingerstyle guitar arrangement of Coldplay's Sparks. Fully tabbed with standard notation.",
    difficulty: 'Beginner',
    isFree: true,
    price: 'Free',
    link: '/tabs/sparks.pdf',
    order: 1,
  },
  {
    _id: 'guitarTab-from-the-start',
    _type: 'guitarTab',
    title: 'From the Start',
    composer: 'Laufey',
    description:
      "Fingerstyle guitar arrangement of Laufey's From the Start. Fully tabbed with standard notation.",
    difficulty: 'Intermediate',
    isFree: true,
    price: 'Free',
    link: '/tabs/from-the-start.pdf',
    order: 2,
  },
  {
    _id: 'guitarTab-sketch-1',
    _type: 'guitarTab',
    title: 'Sketch #1 in D Major',
    description:
      'Original composition for fingerstyle guitar. Fully tabbed with standard notation.',
    difficulty: 'Intermediate',
    isFree: false,
    price: '$1.99',
    link: 'https://sungminleeguitars.gumroad.com/l/cineua',
    order: 3,
  },
]

// ---------------------------------------------------------------------------
// Software Projects
// ---------------------------------------------------------------------------
const softwareProjects = [
  {
    _id: 'softwareProject-calorie-counter',
    _type: 'softwareProject',
    name: 'Calorie Counter',
    description:
      'Track your daily nutrition and macros with customizable food entries and goals.',
    highlights: [
      'AI-powered food search and logging with Vercel AI SDK',
      'Supports sending images of foods to assist with AI recognition',
      'Role-based access control via Supabase RLS',
      'Real-time macro progress visualizations',
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Zod', 'Vercel AI SDK'],
    link: 'https://calorie-counter-teal.vercel.app/',
    repo: 'https://github.com/sungminlee417/calorie-counter',
    featured: true,
    order: 1,
  },
  {
    _id: 'softwareProject-portfolio-site',
    _type: 'softwareProject',
    name: 'Portfolio Site',
    description: 'This very site — built with Next.js to showcase software and music work.',
    highlights: [],
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Sanity'],
    repo: 'https://github.com/sungminlee417/Portfolio_Site',
    featured: false,
    order: 2,
  },
]

// ---------------------------------------------------------------------------
// Client Projects
// ---------------------------------------------------------------------------
const clientProjects = [
  {
    _id: 'clientProject-luke-benedict',
    _type: 'clientProject',
    name: 'Luke Benedict',
    client: 'Composer & Pianist',
    description:
      "Professional website for innovative composer-pianist Luke Benedict, showcasing his modernistic compositions and concert performances.",
    year: '2024',
    link: 'https://lukebenedict.com/',
    services: ['Web Design', 'Development', 'Content Strategy'],
    features: [
      'Showcase of modernistic compositions and concert repertoire',
      'Event calendar with upcoming performances',
      'Media gallery with recordings and press materials',
      'Responsive design optimized for all devices',
    ],
    order: 1,
  },
  {
    _id: 'clientProject-muse-duo',
    _type: 'clientProject',
    name: 'The Muse Duo',
    client: 'Chamber Music Ensemble',
    description:
      'Elegant website for The Muse Duo, a neo-classical guitar and piano ensemble founded at Eastman School of Music.',
    year: '2024',
    link: 'https://themuseduo.com/',
    services: ['Web Design', 'Development', 'Branding'],
    features: [
      'Ensemble biography and artist profiles',
      'Performance calendar and booking information',
      'Media section with audio and video recordings',
      'Cohesive visual branding and design system',
    ],
    order: 2,
  },
]

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
const skills = [
  // Frontend
  { _id: 'skill-javascript', _type: 'skill', name: 'JavaScript', icon: 'javascript.png', category: 'Frontend', order: 1 },
  { _id: 'skill-typescript', _type: 'skill', name: 'TypeScript', icon: 'typescript.svg.png', category: 'Frontend', order: 2 },
  { _id: 'skill-react', _type: 'skill', name: 'React', icon: 'react.svg.png', category: 'Frontend', order: 3 },
  { _id: 'skill-nextjs', _type: 'skill', name: 'Next.js', icon: 'nextjs.svg', category: 'Frontend', order: 4 },
  { _id: 'skill-redux', _type: 'skill', name: 'Redux', icon: 'redux.svg', category: 'Frontend', order: 5 },
  { _id: 'skill-tailwind', _type: 'skill', name: 'Tailwind CSS', icon: 'tailwind.svg.png', category: 'Frontend', order: 6 },
  // Backend
  { _id: 'skill-nodejs', _type: 'skill', name: 'Node.js', icon: 'nodejs.svg.png', category: 'Backend', order: 1 },
  { _id: 'skill-express', _type: 'skill', name: 'Express', icon: 'express.png', category: 'Backend', order: 2 },
  { _id: 'skill-python', _type: 'skill', name: 'Python', icon: 'python.svg.png', category: 'Backend', order: 3 },
  { _id: 'skill-django', _type: 'skill', name: 'Django', icon: 'django.svg.png', category: 'Backend', order: 4 },
  { _id: 'skill-flask', _type: 'skill', name: 'Flask', icon: 'flask.png', category: 'Backend', order: 5 },
  // Database & Cloud
  { _id: 'skill-postgresql', _type: 'skill', name: 'PostgreSQL', icon: 'postgresql.png', category: 'Database & Cloud', order: 1 },
  { _id: 'skill-sqlite3', _type: 'skill', name: 'SQLite3', icon: 'sqlite3.svg.png', category: 'Database & Cloud', order: 2 },
  { _id: 'skill-supabase', _type: 'skill', name: 'Supabase', icon: 'supabase.png', category: 'Database & Cloud', order: 3 },
  { _id: 'skill-sanity', _type: 'skill', name: 'Sanity', icon: 'sanity.svg', category: 'Database & Cloud', order: 4 },
  { _id: 'skill-decap', _type: 'skill', name: 'Decap CMS', icon: 'decap.jpg', category: 'Database & Cloud', order: 5 },
  { _id: 'skill-aws', _type: 'skill', name: 'AWS', icon: 'aws.png', category: 'Database & Cloud', order: 6 },
  { _id: 'skill-docker', _type: 'skill', name: 'Docker', icon: 'docker.svg', category: 'Database & Cloud', order: 7 },
]

// ---------------------------------------------------------------------------
// Pricing Plans
// ---------------------------------------------------------------------------
const pricingPlans = [
  {
    _id: 'pricingPlan-single',
    _type: 'pricingPlan',
    name: 'Single Lesson',
    price: '$70',
    per: '/ session',
    description: 'Perfect for trying things out or occasional tune-ups',
    features: [
      '60-minute private lesson',
      'In-person or online via Zoom',
      'Personalized feedback & exercises',
      'Lesson notes sent after each session',
    ],
    popular: false,
    order: 1,
  },
  {
    _id: 'pricingPlan-4-pack',
    _type: 'pricingPlan',
    name: '4-Lesson Pack',
    price: '$250',
    per: '/ 4 sessions',
    description: 'The most popular choice — build momentum weekly',
    features: [
      'Four 60-minute lessons',
      'In-person or online via Zoom',
      'Custom practice plan between lessons',
      'Lesson notes & recordings',
      'Priority scheduling',
    ],
    popular: true,
    savings: 'Save $30',
    order: 2,
  },
  {
    _id: 'pricingPlan-8-pack',
    _type: 'pricingPlan',
    name: '8-Lesson Pack',
    price: '$450',
    per: '/ 8 sessions',
    description: 'Best value for committed students ready to level up',
    features: [
      'Eight 60-minute lessons',
      'In-person or online via Zoom',
      'Comprehensive progress tracking',
      'Lesson notes & recordings',
      'Priority scheduling',
      'Free repertoire consultation',
    ],
    popular: false,
    savings: 'Save $110',
    order: 3,
  },
]

// ---------------------------------------------------------------------------
// FAQ Items
// ---------------------------------------------------------------------------
const faqItems = [
  {
    _id: 'faq-online-lessons',
    _type: 'faqItem',
    question: 'Do you offer online lessons?',
    answer:
      "Yes! Lessons are available both in-person and online via Zoom. Online sessions work great — I can see your hands, share my screen for music, and record sessions for you to review later.",
    category: 'guitar',
    order: 1,
  },
  {
    _id: 'faq-skill-level',
    _type: 'faqItem',
    question: 'What skill level do I need?',
    answer:
      'All levels are welcome — from complete beginners to advanced players preparing for recitals or competitions.',
    category: 'guitar',
    order: 2,
  },
  {
    _id: 'faq-guitar-type',
    _type: 'faqItem',
    question: 'Do I need a classical guitar?',
    answer:
      "A nylon-string classical guitar is ideal, but a steel-string acoustic works too, especially for fingerstyle. I can help you choose an instrument if you're looking to buy.",
    category: 'guitar',
    order: 3,
  },
  {
    _id: 'faq-cancellation',
    _type: 'faqItem',
    question: "What's your cancellation policy?",
    answer:
      "I ask for 24 hours' notice for cancellations or rescheduling. Late cancellations may be charged the full session rate.",
    category: 'guitar',
    order: 4,
  },
  {
    _id: 'faq-tab-format',
    _type: 'faqItem',
    question: 'What format are the tabs in?',
    answer:
      'All tabs come as PDF files with standard notation and tablature. Some packs include Guitar Pro files as well.',
    category: 'guitar',
    order: 5,
  },
]

// ---------------------------------------------------------------------------
// Seed runner
// ---------------------------------------------------------------------------
async function seedCollection<T extends { _id: string; _type: string }>(
  label: string,
  docs: T[],
) {
  console.log(`\nSeeding ${label}...`)
  let created = 0
  let skipped = 0

  for (const doc of docs) {
    const existing = await client.getDocument(doc._id)
    if (existing) {
      console.log(`  skip  ${doc._id}`)
      skipped++
    } else {
      await client.createOrReplace(doc)
      console.log(`  create ${doc._id}`)
      created++
    }
  }

  console.log(`  → ${created} created, ${skipped} already existed`)
}

async function main() {
  console.log('🌱 Starting Sanity seed...')
  console.log(`Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'}`)

  await seedCollection('Guitar Tabs', guitarTabs)
  await seedCollection('Software Projects', softwareProjects)
  await seedCollection('Client Projects', clientProjects)
  await seedCollection('Skills', skills)
  await seedCollection('Pricing Plans', pricingPlans)
  await seedCollection('FAQ Items', faqItems)

  console.log('\n✅ Seed complete!')
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
