import { defineType, defineField } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Company Name',
      type: 'string',
      description: 'Name of the company or project',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Type of case study (e.g., "Manufacturing Excellence")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Results Description',
      type: 'text',
      description: 'Brief description of results/outcomes (keep concise)',
      validation: Rule => Rule.required().max(120)
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      description: 'Company logo (preferably with transparent background)',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the logo'
        })
      ]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Dark, high-contrast image that works well with overlays',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the background image'
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this case study (lower numbers first)',
      validation: Rule => Rule.required().integer().positive()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'logo'
    }
  }
})