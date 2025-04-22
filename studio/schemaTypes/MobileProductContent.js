import { defineType, defineField } from 'sanity'

export const mobileFeaturesTypes = defineType({
  name: 'mobileFeatures',
  title: 'Mobile Features',
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
      of: [
        {
          type: 'object',
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
              title: 'Icon',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        defineField({
          name: 'src',
          title: 'Source',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        })
      ],
      validation: Rule => Rule.required()
    })
  ]
})