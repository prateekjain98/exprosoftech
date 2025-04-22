import { defineType, defineField } from 'sanity'

export const LoayltyManagementkeyIssuesType = defineType({
  name: 'LoayltyManagementkeyIssues',
  title: 'Loyalty Management Key Issues',
  type: 'document',
  fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
        validation: Rule => Rule.required()
        }),
    ]
})