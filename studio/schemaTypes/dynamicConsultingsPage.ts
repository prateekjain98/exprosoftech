import {defineType, defineField} from 'sanity'

export const dynamicConsultingsPageType = defineType({
  name: 'dynamicConsultingsPage',
  title: 'Dynamic Consultings Page',
  type: 'document',
  fields: [
    // Basic SEO and Page Info
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        description: 'The URL path for this service (e.g., "b2b-sales" for /services/b2b-sales)',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        validation: Rule => Rule.required()
    }),  
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),

    // Banner Section
    defineField({
      name: 'banner',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'image',
          title: 'Images',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'src',
                title: 'Image',
                type: 'image'
              }),
              defineField({
                name: 'alt',
                title: 'Alt Text',
                type: 'string'
              })
            ]
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
                type: 'string'
              }),
              defineField({
                name: 'link',
                title: 'Link',
                type: 'string'
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
    }),

    // Impact Section
    defineField({
      name: 'impact',
      title: 'Impact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string'
        }),
        defineField({
          name: 'imageOverlayTitle',
          title: 'Image Overlay Title',
          type: 'string'
        }),
        defineField({
          name: 'imageOverlayDescription',
          title: 'Image Overlay Description',
          type: 'text'
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'object',
          fields: [
            defineField({
              name: 'src',
              title: 'Image',
              type: 'image'
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'value',
                title: 'Value',
                type: 'string'
              }),
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string'
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text'
              })
            ]
          }]
        })
      ]
    }),

    // Challenges Section
    defineField({
      name: 'challenges',
      title: 'Challenges Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'challengesList',
          title: 'Challenges List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string'
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text'
              }),
              defineField({
                name: 'icon',
                title: 'Icon',
                type: 'image'
              })
            ]
          }]
        })
      ]
    }),

    // Key Services Section
    defineField({
      name: 'keyServices',
      title: 'Key Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'id',
                title: 'Service ID',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string'
              }),
              defineField({
                name: 'icon',
                title: 'Icon',
                type: 'string'
              }),
              defineField({
                name: 'points',
                title: 'Points',
                type: 'array',
                of: [{type: 'string'}]
              }),
              defineField({
                name: 'metrics',
                title: 'Metrics',
                type: 'object',
                fields: [
                  defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string'
                  }),
                  defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string'
                  }),
                  defineField({
                    name: 'trend',
                    title: 'Trend',
                    type: 'string'
                  })
                ]
              }),
              defineField({
                name: 'highlights',
                title: 'Metric Highlights',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      defineField({
                        name: 'icon',
                        title: 'Icon Name',
                        type: 'string'
                      }),
                      defineField({
                        name: 'value',
                        title: 'Value',
                        type: 'string'
                      }),
                      defineField({
                        name: 'label',
                        title: 'Label',
                        type: 'string'
                      })
                    ]
                  }
                ]
              })
            ]
          }]
        })
      ]
    }),

    // Business Guidance Section
    defineField({
      name: 'businessGuidance',
      title: 'Business Guidance Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'image',
          type: 'image',
          fields: [
            defineField({ name: 'alt', type: 'string' })
          ]
        }),
        defineField({
          name: 'guidancePoints',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'id', type: 'number' }),
              defineField({ name: 'title', type: 'string' }),
              defineField({ name: 'description', type: 'text' })
            ]
          }]
        }),
        defineField({
          name: 'empowerment',
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'subtitle', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({
              name: 'points',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ 
                    name: 'icon',
                    type: 'string',
                    options: {
                      list: ['ChartLineUp', 'Brain', 'Handshake', 'Target']
                    }
                  }),
                  defineField({ name: 'title', type: 'string' }),
                  defineField({ name: 'description', type: 'text' })
                ]
              }]
            })
          ]
        })
      ]
    }),

    // FAQ Section
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'list',
          title: 'FAQ List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Question',
                type: 'string'
              }),
              defineField({
                name: 'description',
                title: 'Answer',
                type: 'text'
              }),
              defineField({
                name: 'active',
                title: 'Initially Active',
                type: 'boolean',
                initialValue: false
              })
            ]
          }]
        })
      ]
    }),

    // CTA Section
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Icon name from Phosphor Icons (e.g., ChartLine, Gauge, Clock)',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(3)
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: Rule => Rule.required()
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
      ],
      validation: Rule => Rule.required()
    })
  ]
})
