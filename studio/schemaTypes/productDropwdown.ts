import {defineType, defineField} from 'sanity'

export const productDropdownType = defineType({
  name: 'productDropdownContent',
  title: 'Product Dropdown Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Product title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL slug for the product (e.g., "loyalty-engine")',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Product description',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isLive',
      title: 'Is Live',
      type: 'boolean',
      description: 'Toggle to show/hide this product in the navigation dropdown',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare({title, description}) {
      return {
        title,
        subtitle: description
      }
    }
  }
})