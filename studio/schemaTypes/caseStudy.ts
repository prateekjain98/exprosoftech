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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Longer description for case study listing and meta description',
      validation: Rule => Rule.max(300)
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      description: 'What challenge did the client face?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'blockContent',
      description: 'Detailed solution provided'
    }),
    defineField({
      name: 'results',
      title: 'Results & Impact',
      type: 'blockContent',
      description: 'Quantifiable results and business impact'
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      description: 'Key performance indicators and improvements',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'improvement', type: 'string', title: 'Improvement' }
          ]
        }
      ]
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'Industry or sector of the client'
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      description: 'How long did the project take?'
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      description: 'List of services provided for this case study',
      of: [{ type: 'string' }]
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
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the case study (used in listings and detail page)',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the featured image'
        })
      ],
      
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When was this case study published?',
      initialValue: () => new Date().toISOString()
    }),
    // defineField({
    //   name: 'order',
    //   title: 'Display Order',
    //   type: 'number',
    //   description: 'Order in which to display this case study (lower numbers first)',
    //   validation: Rule => Rule.required().integer().positive()
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'logo'
    }
  }
})