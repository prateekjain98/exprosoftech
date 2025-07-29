import {defineType, defineField} from 'sanity'

export const serviceDropdownType = defineType({
  name: 'serviceDropdownContent',
  title: 'Service Dropdown Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Service title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL slug for the service (e.g., "salesforce-development")',
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
      description: 'Service description',
      validation: Rule => Rule.required()
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
