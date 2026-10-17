import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "$70"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'per',
      title: 'Price Period',
      type: 'string',
      description: 'e.g. "/ session" or "/ 4 sessions"',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'popular',
      title: 'Most Popular',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'savings',
      title: 'Savings Badge',
      type: 'string',
      description: 'e.g. "Save $30" — leave blank to hide',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'price' },
  },
})
