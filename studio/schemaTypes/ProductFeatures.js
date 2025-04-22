import { defineField, defineType } from 'sanity'

export const productFeaturesType = defineType({
  name: 'productFeatures',
  title: 'Product Features',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'object',
      fields: [
        defineField({
          name: 'value',
          title: 'Value',
          type: 'string',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required()
        })
      ]
    }),
  ]
})