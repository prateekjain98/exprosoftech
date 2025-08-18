import { defineType, defineField } from 'sanity'

export const productBlogType = defineType({
  name: 'productBlog',
  title: 'Product Blog',
  type: 'document',
  fields: [
    defineField({
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string',
        description: 'Title for search engines (if different from main title)'
    }),
    defineField({
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        description: 'Description for search engines',
        validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'string',
      description: 'Optional: Override the default canonical URL. If left empty, will use the automatic URL construction.'
    }),
    defineField({
      name: 'isLive',
      title: 'Is Live',
      type: 'boolean',
      initialValue: true,
      description: 'Controls page visibility on exprosoftech.com. When false, page will be hidden on production but visible on other hostnames.'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the featured image (for accessibility)'
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the blog post',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),

    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          
        }),
        defineField({
          name: 'metrices',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options:{
                      list: [
                        'Activity',
                        'Brain',
                        'ChartBar',
                        'ChartLineUp',
                        'ChartPie',
                        'CheckCircle',
                        'Clock',
                        'Coins',
                        'Cube',
                        'Database',
                        'Gauge',
                        'Gear',
                        'Handshake',
                        'Lightning',
                        'Medal',
                        'Package',
                        'Plugs',
                        'Receipt',
                        'Robot',
                        'Settings',
                        'Target',
                        'Trophy',
                        'Truck',
                        'Wallet'
                      ]
                    },
                  description: 'Icon name from Phosphor Icons (e.g., ChartLine, Gauge, Clock)',
                  
                })
              ]
            }
          ],
        }),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string', title: 'Label' }),
                defineField({ name: 'link', type: 'string', title: 'Link' }),
                defineField({ 
                  name: 'isOpenBooking', 
                  type: 'boolean', 
                  title: 'Opens Booking Form',
                  description: 'Enable overlay with iframe functionality instead of regular link'
                }),
                
              ]
            }
          ]
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'object',
          fields: [
            defineField({
              name: 'src',
              title: 'Image Source',
              type: 'image',
              
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              
            })
          ],
          
        })
      ],
      
    }),
    
  ],
  orderings: [
    {
      title: 'Date (newest first)',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
      date: 'date'
    },
    prepare(selection) {
      const {author, date} = selection
      const formattedDate = new Date(date).toLocaleDateString()
      return {
        ...selection, 
        subtitle: `${formattedDate} • by ${author}`
      }
    }
  }
}) 