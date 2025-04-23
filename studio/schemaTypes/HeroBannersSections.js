import { defineType, defineField } from 'sanity'

export const heroBannerSections = defineType({
  name: 'heroBannerSections',
  title: 'Hero Banner Sections',
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
      name: 'image',
      title: 'Image',
      type: 'object',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'src',
            title: 'Image URL',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
          })
        ],
      }]
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'isCalendly',
            title: 'Is Calendly Link',
            type: 'boolean',
            initialValue: false
          })
        ]
      }]
    })
  ]
})