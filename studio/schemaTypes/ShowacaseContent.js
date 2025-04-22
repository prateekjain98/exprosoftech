import { defineType, defineField } from 'sanity'

export const showcaseContentTypes = defineType({
  name: 'showcaseContent',
  title: 'Showcase Content',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Feature Title',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'description',
            title: 'Feature Description',
            type: 'text',
            validation: Rule => Rule.required()
          })
        ]
      }]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        defineField({
          name: 'src',
          title: 'Image Source',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        })
      ]
    })
  ]
})
