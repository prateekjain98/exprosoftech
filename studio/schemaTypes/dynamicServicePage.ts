import {defineType, defineField} from 'sanity'

export const dynamicServicePageType = defineType({
  name: 'dynamicServicePage',
  title: 'Dynamic Service Page',
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

    // Banner Section
    defineField({
      name: 'banner',
      title: 'Banner Section',
      type: 'object',
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
        }),
        defineField({
          name: 'image',
          title: 'Banner Image',
          type: 'object',
          fields: [
            defineField({
              name: 'src',
              title: 'Image Source',
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
          name: 'floatingElements',
          title: 'Floating Elements',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'icon',
                title: 'Icon',
                type: 'string'
              }),
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string'
              }),
              defineField({
                name: 'value',
                title: 'Value',
                type: 'string'
              }),
              defineField({
                name: 'color',
                title: 'Color',
                type: 'string'
              }),
              defineField({
                name: 'position',
                title: 'Position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Top Left', value: 'topLeft'},
                    {title: 'Top Right', value: 'topRight'},
                    {title: 'Bottom Left', value: 'bottomLeft'},
                    {title: 'Bottom Right', value: 'bottomRight'}
                  ]
                }
              })
            ]
          }]
        })
      ]
    }),

    // Features Section
    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'tagline',
              title: 'Tagline',
              type: 'string'
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            })
          ]
        }),
        defineField({
          name: 'features',
          title: 'Features',
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
                name: 'tagline',
                title: 'Tagline',
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
                type: 'string'
              }),
              defineField({
                name: 'image',
                title: 'Image',
                type: 'image'
              })
            ]
          }]
        })
      ]
    }),

    // Services Section
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'tagline',
              title: 'Tagline',
              type: 'string'
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            })
          ]
        }),
        defineField({
          name: 'services',
          title: 'Services',
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
                name: 'features',
                title: 'Features',
                type: 'array',
                of: [{type: 'string'}]
              })
            ]
          }]
        })
      ]
    }),

    // Benefits Section
    defineField({
      name: 'benefitsSection',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'tagline',
              title: 'Tagline',
              type: 'string'
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            })
          ]
        }),
        defineField({
          name: 'benefits',
          title: 'Benefits',
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
                type: 'string'
              })
            ]
          }]
        })
      ]
    }),

    // Process Section
    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'tagline',
              title: 'Tagline',
              type: 'string'
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            })
          ]
        }),
        defineField({
          name: 'steps',
          title: 'Process Steps',
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
                name: 'image',
                title: 'Image',
                type: 'image'
              })
            ]
          }]
        })
      ]
    }),

    // Industries Section
    defineField({
      name: 'industriesSection',
      title: 'Industries Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'tagline',
              title: 'Tagline',
              type: 'string'
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text'
            })
          ]
        }),
        defineField({
          name: 'industries',
          title: 'Industries',
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
                type: 'string'
              })
            ]
          }]
        })
      ]
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string'
        }),
        defineField({
          name: 'pageTitle',
          title: 'Page Title',
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
    })
  ]
})