import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'guitarTab',
  title: 'Guitar Tab',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'composer',
      title: 'Composer / Artist',
      type: 'string',
      description: 'Leave blank for original compositions',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFree',
      title: 'Free Download',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "Free" or "$1.99". Populated automatically if Free Download is checked.',
    }),
    defineField({
      name: 'link',
      title: 'Download / Purchase Link',
      type: 'url',
      description: 'Direct PDF path (e.g. /tabs/sparks.pdf) or Gumroad URL',
    }),
    defineField({
      name: 'genre',
      title: 'Genre / Style',
      type: 'string',
      description: 'e.g. "Fingerstyle", "Classical", "Pop Arrangement"',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'composer',
      difficulty: 'difficulty',
    },
    prepare({ title, subtitle, difficulty }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} · ${difficulty}` : `Original · ${difficulty}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
