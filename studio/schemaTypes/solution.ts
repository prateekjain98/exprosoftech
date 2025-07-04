import { defineType, defineField } from 'sanity'

export const solutionType = defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Solution Title',
      type: 'string',
      description: 'Name of the solution',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline for the solutions page header (e.g., "Our Solutions")',
      validation: Rule => Rule.max(50)
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Main heading for the solutions page header',
      validation: Rule => Rule.max(100)
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      description: 'Descriptive subheading for the solutions page header',
      validation: Rule => Rule.max(300)
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO meta title for the solutions page (recommended: 50-60 characters)',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO meta description for the solutions page (recommended: 150-160 characters)',
      validation: Rule => Rule.max(160)
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
      description: 'Type of solution (e.g., "Digital Transformation", "Process Optimization")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description of the solution (keep concise)',
      validation: Rule => Rule.required().max(120)
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Longer description for solution listing and meta description',
      validation: Rule => Rule.max(300)
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge Addressed',
      type: 'text',
      description: 'What challenge does this solution address?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      type: 'blockContent',
      description: 'Detailed approach and methodology used in this solution'
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits & Value',
      type: 'blockContent',
      description: 'Key benefits and value proposition of this solution'
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      description: 'Key features and capabilities of this solution',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Feature Title' },
            { name: 'description', type: 'text', title: 'Feature Description' },
            { name: 'icon', type: 'string', title: 'Icon Name (optional)' }
          ]
        }
      ]
    }),
    defineField({
      name: 'industry',
      title: 'Target Industry',
      type: 'string',
      description: 'Primary industry or sector this solution serves'
    }),
    defineField({
      name: 'complexity',
      title: 'Complexity Level',
      type: 'string',
      description: 'Implementation complexity (e.g., "Low", "Medium", "High")',
      options: {
        list: [
          { title: 'Low', value: 'Low' },
          { title: 'Medium', value: 'Medium' },
          { title: 'High', value: 'High' }
        ]
      }
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      description: 'List of technologies and tools used in this solution',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'logo',
      title: 'Solution Logo',
      type: 'image',
      description: 'Solution logo or icon (preferably with transparent background)',
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
      description: 'Main image for the solution (used in listings and detail page)',
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
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When was this solution published?',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this solution (lower numbers first)',
      validation: Rule => Rule.integer().positive()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage'
    }
  }
}) 