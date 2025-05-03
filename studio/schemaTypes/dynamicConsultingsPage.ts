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
                type: 'string',
                options: {
                  list: [
                    'Cube',
                    'ChartLineUp',
                    'Gear',
                    'ChartPieSlice',
                    'Brain',
                    'Truck',
                    'Package',
                    'Coins',
                    'ChartBar',
                    'Medal',
                    'Gauge',
                    'Robot',
                    'Receipt',
                    'Wallet',
                    'ChartDonut',
                    'Clock',
                    'Database',
                    'Plugs',
                    'Lightning',
                    'Handshake',
                    'Target'
                  ]
                }
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
                        type: 'string',
                        options: {
                          list: [
                            'Cube',
                            'ChartLineUp',
                            'Gear',
                            'ChartPieSlice',
                            'Brain',
                            'Truck',
                            'Package',
                            'Coins',
                            'ChartBar',
                            'Medal',
                            'Gauge',
                            'Robot',
                            'Receipt',
                            'Wallet',
                            'ChartDonut',
                            'Clock',
                            'Database',
                            'Plugs',
                            'Lightning',
                            'Handshake',
                            'Target'
                          ]
                        }
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
                      list: [
                        'Cube',
                        'ChartLineUp',
                        'Gear',
                        'ChartPieSlice',
                        'Brain',
                        'Truck',
                        'Package',
                        'Coins',
                        'ChartBar',
                        'Medal',
                        'Gauge',
                        'Robot',
                        'Receipt',
                        'Wallet',
                        'ChartDonut',
                        'Clock',
                        'Database',
                        'Plugs',
                        'Lightning',
                        'Handshake',
                        'Target'
                      ]
                    }
                  }),
                  defineField({ name: 'title', type: 'string' }),
                  defineField({ name: 'description', type: 'text' })
                ]
              }]
            }),
            defineField({
              name: 'empowermentImage',
              type: 'image',
              fields: [
                defineField({ name: 'alt', type: 'string' })
              ]
            })
          ]
        }),
        
      ]
    }),

    defineField({
      name: 'industryApplications',
      title: 'Industry Applications Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main heading for the industry applications section'
        }),
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Optional tagline displayed above the title'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Subheading text that appears below the title'
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
          description: 'Text for the call-to-action link',
          initialValue: 'Find Out How It Works for Your Industry →'
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'URL for the call-to-action link',
          initialValue: '#contact'
        }),
        defineField({
          name: 'isCalendly',
          title: 'Is Calendly',
          type: 'boolean',
          description: 'Indicates if the CTA link is a Calendly link',
          initialValue: true
        }),
        defineField({
          name: 'industries',
          title: 'Industry Applications',
          type: 'array',
          description: 'List of industries where your solutions apply',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'name',
                title: 'Industry Name',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
                description: 'Brief description of how your solution helps this industry'
              }),
              defineField({
                name: 'icon',
                title: 'Icon',
                type: 'string',
                description: 'Icon to represent this industry',
                options: {
                  list: [
                    {title: 'Store', value: 'FaStore'},
                    {title: 'Hotel', value: 'FaHotel'},
                    {title: 'Plane', value: 'FaPlane'},
                    {title: 'Restaurant', value: 'FaUtensils'},
                    {title: 'Shopping Bag', value: 'FaShoppingBag'},
                    {title: 'Car', value: 'FaCarAlt'},
                    {title: 'Game', value: 'FaGamepad'},
                    {title: 'Education', value: 'FaGraduationCap'},
                    {title: 'Shopping Cart', value: 'FaShoppingCart'},
                    {title: 'Industry', value: 'FaIndustry'},
                    {title: 'Network', value: 'FaNetworkWired'},
                    {title: 'Finance', value: 'FaMoneyBillWave'},
                    {title: 'Phone', value: 'FaPhoneAlt'},
                    {title: 'Boxes', value: 'FaBoxes'},
                    {title: 'Building', value: 'FaBuilding'},
                    {title: 'Location', value: 'FaSearchLocation'},
                    {title: 'Business Person', value: 'FaUserTie'},
                    {title: 'Technology', value: 'FaLaptopCode'},
                    {title: 'Healthcare', value: 'FaHospital'},
                    {title: 'Server', value: 'FaServer'}
                  ]
                }
              })
            ]
          }]
        }),
        defineField({
          name: 'compatibility',
          title: 'Integration & Technical Compatibility',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Integration & Technical Compatibility'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              initialValue: 'We understand the importance of aligning new systems with your existing IT infrastructure:'
            }),
            defineField({
              name: 'features',
              title: 'Compatibility Features',
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
                    type: 'text'
                  }),
                ]
              }]
            })
          ]
        }),
        defineField({
          name: 'timeline',
          title: 'Implementation Timeline',
          type: 'array',
          description: 'Timeline showing implementation milestones',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'period',
                title: 'Time Period',
                type: 'string',
                description: 'e.g., "3-6 Months"',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
                description: 'What happens during this period'
              })
            ]
          }]
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
                  options: {
                    list: [
                      'Cube',
                      'ChartLineUp',
                      'Gear',
                      'ChartPieSlice',
                      'Brain',
                      'Truck',
                      'Package',
                      'Coins',
                      'ChartBar',
                      'Medal',
                      'Gauge',
                      'Robot',
                      'Receipt',
                      'Wallet',
                      'ChartDonut',
                      'Clock',
                      'Database',
                      'Plugs',
                      'Lightning',
                      'Handshake',
                      'Target'
                    ]
                  },
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
