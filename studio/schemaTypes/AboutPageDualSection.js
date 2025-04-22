import { defineType, defineField } from 'sanity'
import { min } from 'date-fns'

export const aboutDualData = defineType({
    name: 'aboutDualData',
    title: 'About Dual Section',
    type: 'document',
    fields: [
      defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        validation: Rule => Rule.required()
      }),
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
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'text' }],
        validation: Rule => Rule.required(min(1))
      }),
      defineField({
        name: 'featuredImage',
        title: 'Featured Image URL',
        type: 'string',
        validation: Rule => Rule.required()
      })
    ]
  })