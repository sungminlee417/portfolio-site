import { getGuitarTabs, getPricingPlans, getFaqItems } from '@/lib/sanity/queries'
import GuitarContent from './GuitarContent'

export const metadata = {
  title: 'Guitar — Sungmin Lee',
  description:
    'Classical and fingerstyle guitar lessons, tabs, and sheet music by Sungmin Lee. BM/MM in Classical Guitar Performance.',
}

export default async function GuitarPage() {
  const [tabs, pricingPlans, faqItems] = await Promise.all([
    getGuitarTabs(),
    getPricingPlans(),
    getFaqItems('guitar'),
  ])

  return <GuitarContent tabs={tabs} pricingPlans={pricingPlans} faqItems={faqItems} />
}
