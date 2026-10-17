'use client'

import { useMemo, useState } from 'react'
import type { GuitarTab } from '@/lib/sanity/types'

interface Props {
  tabs: GuitarTab[]
}

type PriceFilter = 'Free' | 'Paid' | null

function FilterGroup({
  label,
  options,
  active,
  onSelect,
}: {
  label: string
  options: string[]
  active: string | null
  onSelect: (val: string | null) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] min-w-[70px]">
        {label}
      </span>
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          active === null
            ? 'bg-[hsl(var(--primary))] text-white'
            : 'bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
        }`}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(active === opt ? null : opt)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            active === opt
              ? 'bg-[hsl(var(--primary))] text-white'
              : 'bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default function TabShop({ tabs }: Props) {
  const [composerFilter, setComposerFilter] = useState<string | null>(null)
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null)
  const [priceFilter, setPriceFilter] = useState<PriceFilter>(null)

  const composers = useMemo(() => {
    const seen = new Set<string>()
    const list: string[] = []
    for (const tab of tabs) {
      const label = tab.composer ?? 'Original'
      if (!seen.has(label)) {
        seen.add(label)
        list.push(label)
      }
    }
    return list
  }, [tabs])

  const difficulties = useMemo(() => {
    const order: GuitarTab['difficulty'][] = ['Beginner', 'Intermediate', 'Advanced']
    const available = new Set(tabs.map((t) => t.difficulty))
    return order.filter((d) => available.has(d))
  }, [tabs])

  const filteredTabs = useMemo(() => {
    return tabs.filter((tab) => {
      if (composerFilter !== null) {
        const label = tab.composer ?? 'Original'
        if (label !== composerFilter) return false
      }
      if (difficultyFilter !== null && tab.difficulty !== difficultyFilter) return false
      if (priceFilter === 'Free' && !tab.isFree) return false
      if (priceFilter === 'Paid' && tab.isFree) return false
      return true
    })
  }, [tabs, composerFilter, difficultyFilter, priceFilter])

  const hasFilters = composerFilter !== null || difficultyFilter !== null || priceFilter !== null

  return (
    <div>
      {/* Filters */}
      {tabs.length > 2 && (
        <div className="mb-8 space-y-3 p-4 rounded-xl bg-[hsl(var(--secondary)/0.5)] border border-[hsl(var(--border))]">
          {composers.length > 1 && (
            <FilterGroup
              label="Composer"
              options={composers}
              active={composerFilter}
              onSelect={setComposerFilter}
            />
          )}
          {difficulties.length > 1 && (
            <FilterGroup
              label="Difficulty"
              options={difficulties}
              active={difficultyFilter}
              onSelect={setDifficultyFilter}
            />
          )}
          <FilterGroup
            label="Type"
            options={['Free', 'Paid']}
            active={priceFilter}
            onSelect={(v) => setPriceFilter(v as PriceFilter)}
          />
          {hasFilters && (
            <div className="pt-1">
              <button
                onClick={() => {
                  setComposerFilter(null)
                  setDifficultyFilter(null)
                  setPriceFilter(null)
                }}
                className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] underline transition-colors"
              >
                Clear all filters
              </button>
              <span className="ml-3 text-xs text-[hsl(var(--muted-foreground))]">
                {filteredTabs.length} of {tabs.length} tabs
              </span>
            </div>
          )}
        </div>
      )}

      {/* Grid */}
      {filteredTabs.length > 0 ? (
        <div
          className={`grid gap-5 ${
            filteredTabs.length === 1
              ? 'max-w-sm'
              : filteredTabs.length === 2
              ? 'md:grid-cols-2 max-w-2xl'
              : 'md:grid-cols-3'
          }`}
        >
          {filteredTabs.map((tab) => (
            <div key={tab._id} className="card p-6 group">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-[hsl(var(--primary))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="badge text-xs">{tab.difficulty}</span>
                {tab.isFree && (
                  <span className="badge text-xs !bg-green-600/10 !text-green-600 !border-green-600/20">
                    Free
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold mb-0.5 group-hover:text-[hsl(var(--primary))] transition-colors">
                {tab.title}
              </h3>
              {tab.composer && (
                <p className="text-sm text-[hsl(var(--primary))] font-medium mb-2">
                  {tab.composer}
                </p>
              )}
              {!tab.composer && (
                <p className="text-sm text-[hsl(var(--muted-foreground))] font-medium mb-2">
                  Original Composition
                </p>
              )}
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
                {tab.description}
              </p>

              <div className="flex items-center justify-end mb-4">
                <span className="text-xl font-bold text-[hsl(var(--primary))]">
                  {tab.price}
                </span>
              </div>

              {tab.link ? (
                <a
                  href={tab.link}
                  {...(tab.isFree
                    ? { download: true }
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="btn-primary w-full justify-center text-sm"
                >
                  {tab.isFree ? 'Download Free' : 'Purchase'}
                </a>
              ) : (
                <span className="btn-secondary w-full justify-center text-sm cursor-default opacity-50">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-[hsl(var(--muted-foreground))]">
          <p className="text-sm">No tabs match the selected filters.</p>
          <button
            onClick={() => {
              setComposerFilter(null)
              setDifficultyFilter(null)
              setPriceFilter(null)
            }}
            className="mt-2 text-sm text-[hsl(var(--primary))] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      <p className="mt-6 text-center text-sm text-[hsl(var(--muted-foreground))]">
        More tabs and arrangements coming soon!
      </p>
    </div>
  )
}
