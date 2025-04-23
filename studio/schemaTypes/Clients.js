import { defineType, defineField } from 'sanity'

export const clientsType = defineType({
  name: 'clients',
  title: 'Client Logos',
  type: 'document',
  fields: [
    defineField({
      name: 'clientLogos',
      title: 'Client Logos',
      type: 'array',
      of: [{
        type: 'string'
      }],
      validation: Rule => Rule.required().min(1)
    })
  ]
})