import {defineType, defineField} from 'sanity'

export const dynamicProductPageType = defineType({
  name: 'dynamicProductPage',
  title: 'Dynamic Product Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'The URL path for this product (e.g., "sfa" for /products/sfa)',
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
      description: 'Title used for SEO purposes',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description used for SEO purposes',
      validation: Rule => Rule.required()
    }),
    
    // Header Content Section
    defineField({
      name: 'headerContent',
      title: 'Header Content',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'Short text displayed as a badge (e.g., "Enterprise SFA Solution")'
        }),
        defineField({
          name: 'title',
          title: 'Header Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Header Image',
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
        }),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Button Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'link',
                  title: 'Button Link',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'variant',
                  title: 'Button Variant',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Primary', value: 'primary'},
                      {title: 'Secondary', value: 'secondary'}
                    ]
                  },
                  initialValue: 'primary'
                }),
                defineField({
                  name: 'isCalendly',
                  title: 'Is Calendly Link',
                  type: 'boolean',
                  initialValue: false
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(1)
        })
      ],
      validation: Rule => Rule.required()
    }),
    
    // Features Grid Section
    defineField({
      name: 'featuresGridSection',
      title: 'Features Grid Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
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
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: Rule => Rule.required()
            }),
          ],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
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
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string',
                  description: 'Icon name from Phosphor Icons (e.g., ShoppingCart, MapPin, etc.)',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'stats',
                  title: 'Feature Stats (Optional)',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'value',
                      title: 'Stat Value',
                      type: 'string',
                      description: 'The numeric or text value (e.g., "85%", "2x", etc.)'
                    }),
                    defineField({
                      name: 'label',
                      title: 'Stat Label',
                      type: 'string',
                      description: 'Description of what the stat represents'
                    })
                  ]
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(4)
        })
      ],
      validation: Rule => Rule.required()
    }),
    
    // Mobile Features Section
    defineField({
      name: 'mobileFeaturesSection',
      title: 'Mobile Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'features',
          title: 'Mobile Features',
          type: 'array',
          of: [
            {
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
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(3)
        }),
        defineField({
          name: 'image',
          title: 'Mobile Image',
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
    }),
    
    // Feature Showcase Section
    defineField({
      name: 'featureShowcaseSection',
      title: 'Feature Showcase Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'features',
          title: 'Showcase Features',
          type: 'array',
          of: [
            {
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
                  type: 'text',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(2)
        }),
        defineField({
          name: 'image',
          title: 'Showcase Image',
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
    }),
    
    // Additional Features Section
    defineField({
      name: 'additionalFeaturesSection',
      title: 'Additional Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
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
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: Rule => Rule.required()
            })
          ],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'features',
          title: 'Additional Features',
          type: 'array',
          of: [
            {
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
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(3)
        })
      ],
      validation: Rule => Rule.required()
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
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string',
          validation: Rule => Rule.required()
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
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Question',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'description',
                  title: 'Answer',
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'active',
                  title: 'Initially Active',
                  type: 'boolean',
                  initialValue: false
                })
              ]
            }
          ],
          validation: Rule => Rule.required().min(3)
        })
      ],
      validation: Rule => Rule.required()
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
    
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     subtitle: 'slug.current'
  //   },
  //   prepare({ title, subtitle }) {
  //     return {
  //       title,
  //       subtitle: `/products/${subtitle}`
  //     }
  //   }
  // }
}) 