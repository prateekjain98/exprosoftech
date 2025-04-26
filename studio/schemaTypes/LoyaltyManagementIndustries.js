import { defineType, defineField } from 'sanity'

export const loyaltyIndustries = defineType({
  name: 'loyaltyIndustries',
  title: 'Loyalty Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Industry Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Industry Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ],
})