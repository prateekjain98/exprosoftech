import { defineType, defineField } from 'sanity'

export const productAdditionalFeatures = defineType({
  name: 'productAdditionalFeatures',
  title: 'Product Additional Features',
  type: 'document',
  fields: [
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
          }),
          defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            validation: Rule => Rule.required()
          })
        ]
      }],
      validation: Rule => Rule.required().min(1)
    })
  ]
})