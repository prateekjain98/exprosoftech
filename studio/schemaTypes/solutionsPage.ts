import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'solutionsPage',
  title: 'Solutions Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
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
    // Hero Banner Section
    defineField({
      name: 'banner',
      title: 'Hero Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Banner Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Banner Description',
          type: 'text'
        }),
        defineField({
          name: 'buttons',
          title: 'Call to Action Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Button Label',
                  type: 'string'
                }),
                defineField({
                  name: 'link',
                  title: 'Button Link',
                  type: 'string'
                }),
                defineField({
                  name: 'isCalendly',
                  title: 'Is Calendly Link',
                  type: 'boolean',
                  initialValue: false
                })
              ]
            }
          ]
        }),
        defineField({
          name: 'image',
          title: 'Banner Image',
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
          name: 'floatingElements',
          title: 'Floating Elements',
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
                  name: 'title',
                  title: 'Element Title',
                  type: 'string'
                }),
                defineField({
                  name: 'value',
                  title: 'Element Value',
                  type: 'string'
                }),
                defineField({
                  name: 'color',
                  title: 'Element Color',
                  type: 'string'
                }),
                defineField({
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Top Left', value: 'topLeft' },
                      { title: 'Bottom Right', value: 'bottomRight' }
                    ]
                  }
                })
              ]
            }
          ]
        })
      ]
    }),
    // Features Section
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
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
            })
          ]
        }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'tagline',
                  title: 'Feature Tagline',
                  type: 'string'
                }),
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string'
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text'
                }),
                defineField({
                  name: 'image',
                  title: 'Feature Image',
                  type: 'image'
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string'
                }),
                defineField({
                  name: 'metrics',
                  title: 'Feature Metrics',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'value',
                          title: 'Metric Value',
                          type: 'string'
                        }),
                        defineField({
                          name: 'label',
                          title: 'Metric Label',
                          type: 'string'
                        }),
                        defineField({
                          name: 'icon',
                          title: 'Metric Icon',
                          type: 'string'
                        })
                      ]
                    }
                  ]
                })
              ]
            }
          ]
        })
      ]
    }),
    // Why Choose Section
    defineField({
      name: 'whyChoose',
      title: 'Why Choose Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text'
        }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string'
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text'
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string'
                })
              ]
            }
          ]
        })
      ]
    }),
    // Additional Benefits Section
    defineField({
      name: 'benefits',
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
          title: 'Benefits List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Benefit Title',
                  type: 'string'
                }),
                defineField({
                  name: 'description',
                  title: 'Benefit Description',
                  type: 'text'
                }),
                defineField({
                  name: 'icon',
                  title: 'Benefit Icon',
                  type: 'string'
                })
              ]
            }
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
          title: 'Section Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text'
        }),
        defineField({
          name: 'list',
          title: 'FAQ List',
          type: 'array',
          of: [
            {
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
                  title: 'Is Active',
                  type: 'boolean',
                  initialValue: false
                })
              ]
            }
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'Solutions Page'
      }
    }
  }
}) 