import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientProject',
  title: 'Client Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project / Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Type',
      type: 'string',
      description: 'e.g. "Composer & Pianist", "Chamber Music Ensemble"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Live Site URL',
      type: 'url',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "Web Design", "Development", "Branding"',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'client' },
  },
})
