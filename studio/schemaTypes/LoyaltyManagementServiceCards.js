import { defineType, defineField } from 'sanity'

export const loyaltyManagementServiceCards = defineType({
    name: 'loyaltyManagementServiceCards',
    title: 'Loyaly Management Service Cards',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required()
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required()
      }),
      defineField({
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.required()
      })
    ]
})