import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name:'title',
      title:'Title',
      type:'string'
    }),
    // Meta Section

    defineField({
      name: 'meta',
      title: 'Meta Information',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Page Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Page Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'meta_title',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),

    // Banner Section
    defineField({
      name: 'bannerSection',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'text' }]
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'imageOverlay',
          title: 'Image Overlay',
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Value' }),
            defineField({ name: 'label', type: 'string', title: 'Label' }),
          ]
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
      ]
    }),

    defineField({
      name: 'contentSection',
      title: 'Content Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Show Content Section',
          type: 'boolean',
          initialValue: true,
          description: 'Toggle to show or hide the entire content section'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string'
        }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'text' }]
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'imageOverlay',
          title: 'Image Overlay',
          type: 'object',
          description: 'Overlay element that appears on the bottom-right of the image',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Main value to display (e.g., "35+", "100%", "50K+")',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Description text below the value',
            }),
            defineField({
               name: 'position',
               title: 'Position',
               type: 'string',
               description: 'Position of the overlay on the image',
               options: {
                 list: [
                   { title: 'Bottom Right', value: 'bottomRight' },
                   { title: 'Bottom Left', value: 'bottomLeft' },
                   { title: 'Top Right', value: 'topRight' },
                   { title: 'Top Left', value: 'topLeft' }
                 ]
               },
               initialValue: 'bottomRight'
             })
          ]
        }),
        defineField({
          name: 'cta',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'link', type: 'string', title: 'Link' }),
            defineField({ name: 'isOpenBooking', type: 'boolean', title: 'Opens Booking Form' })
          ]
        })
      ]
    }),

    defineField({
      name: 'businessGuidance',
      title: 'Provide Value Section',
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
                        'Target',
                        'Lightbulb',
                        'LayerGroup',
                        'CheckCircle'
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
      name: 'offeringsSection',
      title: 'Our Core Values',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'subtitle', type: 'string' },
            { name: 'description', type: 'text' }
          ]
        }),
        defineField({
          name: 'offerings',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'array', of: [{ type: 'text' }] }),
                defineField({ 
                  name: 'iconName', 
                  type: 'string',
                  title: 'Icon',
                                      options: {
                      list: [
                        { title: 'Users', value: 'Users' },
                        { title: 'Settings', value: 'Settings' },
                        { title: 'Box', value: 'Box' },
                        { title: 'Trending Up', value: 'TrendingUp' },
                        { title: 'Target', value: 'Target' },
                        { title: 'Shield', value: 'Shield' },
                        { title: 'Lightning', value: 'Lightning' },
                        { title: 'CPU', value: 'Cpu' },
                        { title: 'Globe', value: 'Globe' },
                        { title: 'Layers', value: 'Layers' },
                        { title: 'Lightbulb', value: 'Lightbulb' },
                        { title: 'Rocket', value: 'Rocket' },
                        { title: 'Gear', value: 'Gear' },
                        { title: 'Brain', value: 'Brain' },
                        { title: 'Chart Line Up', value: 'ChartLineUp' },
                        { title: 'Database', value: 'Database' },
                        { title: 'Chart Bar', value: 'ChartBar' },
                        { title: 'Cloud', value: 'Cloud' },
                        { title: 'Code', value: 'Code' },
                        { title: 'Briefcase', value: 'Briefcase' },
                        { title: 'Consulting', value: 'consulting' },
                        { title: 'Services', value: 'services' },
                        { title: 'Products', value: 'products' }
                      ]
                    }
                }),
              ]
            }
          ]
        })
      ]
    }),

    // Company Section
    defineField({
      name: 'companySection',
      title: 'Community Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'text' }]
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'imageOverlay',
          title: 'Image Overlay',
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Value' }),
            defineField({ name: 'label', type: 'string', title: 'Label' }),
          ]
        }),
      ]
    }),

    defineField({
      name: 'partnerLogosSection',
      title: 'Partner Logos Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Show Partner Logos Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire partner logos section'
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading for the partner logos section'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Description text that appears below the title'
        }),
        defineField({
          name: 'logos',
          title: 'Partner Logos',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'src',
                title: 'Logo Image',
                type: 'image',
                description: 'Upload the partner logo image'
              }),
              defineField({
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Alternative text for the logo (for accessibility)'
              }),
              defineField({
                name: 'name',
                title: 'Partner Name',
                type: 'string',
                description: 'Name of the partner company'
              })
            ]
          }]
        })
      ]
    }),

    // Leadership Team Section
    defineField({
      name: 'leadershipSection',
      title: 'Leadership Team Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'leaders',
          title: 'Team Members',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'name', type: 'string', title: 'Name' }),
              defineField({ name: 'title', type: 'string', title: 'Position Title' }),
              defineField({ name: 'description', type: 'text', title: 'Description' }),
              defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn URL' }),
              defineField({
                name: 'image',
                type: 'image',
                title: 'Profile Image',
                options: { hotspot: true }
              })
            ]
          }]
        })
      ]
    }),

    // Why Choose Us Section
    defineField({
      name: 'whySection',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', type: 'string', title: 'Feature Title' }),
              defineField({ name: 'description', type: 'text', title: 'Feature Description' }),
              defineField({ 
                name: 'icon', 
                type: 'string', 
                title: 'Feature Icon',
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
                    'Target',
                    'Lightbulb',
                    'LayerGroup',
                    'CheckCircle',
                    'UserGroup'
                  ]
                }
              })
            ]
          }]
        })
      ]
    }),

    // Industries Section
    defineField({
      name: 'industriesSection',
      title: 'Industry Applications Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'subtitle', type: 'string' }),
            defineField({ name: 'description', type: 'text' })
          ]
        }),
        defineField({
          name: 'industries',
          title: 'Industries',
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

    // Image Content Section
    defineField({
      name: 'companyActivitiesSection',
      title: 'Company Activities Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Show Image Content Section',
          type: 'boolean',
          initialValue: true,
          description: 'Toggle to show or hide the entire image content section'
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
          type: 'blockContent',
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
              description: 'Alternative text for the image (for accessibility)'
            })
          ],
          validation: Rule => Rule.required()
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
              defineField({ name: 'title', type: 'string', title: 'Question' }),
              defineField({ name: 'description', type: 'text', title: 'Answer' }),
              defineField({
                name: 'active',
                type: 'boolean',
                title: 'Is Active',
                initialValue: false
              })
            ]
          }]
        })
      ]
    })
  ]
})
