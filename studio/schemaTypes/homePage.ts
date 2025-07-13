import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // Hero Banner Section
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
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'blueTitle',
          title: 'Blue Title Words',
          type: 'string',
          description: 'Words that should appear in blue color (usually the last two words of the title)',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField(    {
          name: 'image',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'src', type: 'image', title: 'Image' }),
                defineField({ name: 'alt', type: 'string', title: 'Alt Text' })
              ]
            }
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
                defineField({ 
                  name: 'overlayIframeSrc', 
                  type: 'string', 
                  title: 'Overlay iFrame Source',
                  description: 'URL to load in the overlay iframe (required when Has Overlay is enabled)',
                  hidden: ({ parent }) => !parent?.hasOverlay
                }),
                defineField({ 
                  name: 'overlayTitle', 
                  type: 'string', 
                  title: 'Overlay Title',
                  description: 'Title displayed in the overlay header',
                  hidden: ({ parent }) => !parent?.hasOverlay,
                  initialValue: 'Content'
                })
              ]
            }
          ]
        })
      ]
    }),

    // Clients Section
    defineField({
      name: 'clientsSection',
      title: 'Clients Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Is Visible',
          type: 'boolean',
          initialValue: true
        }),
        defineField({
          name: 'clients',
          title: 'Clients',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'logo', type: 'image' })
              ]
            }
          ]
        })
      ]
    }),

    // Offerings Section
    defineField({
      name: 'offeringsSection',
      title: 'Offerings Section',
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
                defineField({ name: 'description', type: 'text' }),
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

    // Features Grid Section
    defineField({
      name: 'FeaturesSection',
      title: 'Features Section',
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
          name: 'features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'tagline', type: 'string' }),
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({
                  name: 'metrics',
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
                          description: 'Metric value (e.g., "85%", "40%", "99%")'
                        }),
                        defineField({
                          name: 'label',
                          title: 'Label',
                          type: 'string',
                          description: 'Metric description (e.g., "Efficiency Gain", "Cost Reduction")'
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
                              'Target',
                              'Activity',
                              'CheckCircle',
                              'Star',
                              'Trophy',
                              'DollarSign',
                              'Settings',
                              'ChartPie',
                              'BiRocket'
                            ]
                          },
                          description: 'Icon name for the metric display'
                        })
                      ]
                    }
                  ],
                  description: 'Optional metrics to display for this feature'
                }),
                defineField({ name: 'image', type: 'image' }),
                defineField({ 
                  name: 'icon', 
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Gear', value: 'Gear' },
                      { title: 'ChartLineUp', value: 'ChartLineUp' },
                      { title: 'Database', value: 'Database' },
                      { title: 'Users', value: 'Users' },
                      { title: 'ArrowRight', value: 'ArrowRight' },
                      { title: 'Briefcase', value: 'Briefcase' },
                      { title: 'ChartBar', value: 'ChartBar' },
                      { title: 'Cloud', value: 'Cloud' },
                      { title: 'Code', value: 'Code' },
                      { title: 'CurrencyDollar', value: 'CurrencyDollar' },
                      { title: 'Desktop', value: 'Desktop' },
                      { title: 'Globe', value: 'Globe' },
                      { title: 'LightbulbFilament', value: 'LightbulbFilament' },
                      { title: 'Lightning', value: 'Lightning' },
                      { title: 'Lock', value: 'Lock' },
                      { title: 'Rocket', value: 'Rocket' },
                      { title: 'ShieldCheck', value: 'ShieldCheck' },
                      { title: 'Storefront', value: 'Storefront' },
                      { title: 'Truck', value: 'Truck' },
                      { title: 'UserCircle', value: 'UserCircle' }
                    ]
                  }
                })
              ]
            }
          ]
        })
      ]
    }),

    // Scrollable Services Section
    defineField({
      name: 'ScrollableServicesSection',
      title: 'Scrollable Services Section',
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
          name: 'services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'number', type: 'string' }),
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'subheading', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'image', type: 'image' }),
              ]
            }
          ]
        })
      ]
    }),

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

    // Products Section
    defineField({
      name: 'productsSection',
      title: 'Products Section',
      type: 'object',
      fields: [
        defineField({
          name: 'products',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'image', type: 'image' }),
                defineField({ name: 'label', type: 'string' }),
                defineField({ name: 'buttonHref', type: 'string' }),
                defineField({ name: 'buttonLabel', type: 'string' }),
                defineField({ name: 'mainCTA', type: 'boolean' }),
                defineField({
                  name: 'features',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'description', type: 'text' })
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

    defineField({
      name: 'cloudSpecializations',
      title: 'Cloud Specializations',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          type: 'boolean',
          title: 'Is Visible',
        }),
        defineField({
          name: 'heading',
          type: 'object',
          fields: [
            defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description' })
          ]
        }),
        defineField({
          name: 'specializations',
          title: 'Cloud Specializations',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'id', type: 'string', title: 'ID' }),
              defineField({ name: 'name', type: 'string', title: 'Name' }),
              defineField({ name: 'description', type: 'text', title: 'Description' }),
              defineField({ name: 'icon', type: 'string', options: {
                list:[
                  { title: 'Cloud', value: 'FaCloud' },
                  { title: 'Database', value: 'FaDatabase' },
                  { title: 'Sales' , value:'FaDollarSign'},
                  { title: 'ChartLine', value: 'FaChartLine' },
                  { title: 'Headphones', value: 'FaHeadphones' },
                  { title: 'Globe', value: 'FaGlobe' },
                  { title: 'Bolt', value: 'FaBolt' },
                  { title: 'Industry', value: 'FaIndustry' },
                  { title: 'MoneyBillWave', value: 'FaMoneyBillWave' },
                  { title: 'GraduationCap', value: 'FaGraduationCap' },
                  { title: 'BoxOpen', value: 'FaBoxOpen' },
                  { title: 'Users', value: 'FiUsers' },
                  { title: 'Settings', value: 'FiSettings' },
                  { title: 'Box', value: 'FiBox' },
                  { title: 'TrendingUp', value: 'FiTrendingUp' },
                  { title: 'Target', value: 'FiTarget' },
                  { title: 'Shield', value: 'FiShield' },
                  { title: 'Zap', value: 'FiZap' },
                  { title: 'Cpu', value: 'FiCpu' },
                  { title: 'Globe', value: 'FiGlobe' },
                  { title: 'Layers', value: 'FiLayers' },
                  { title: 'Database', value: 'FiDatabase' },
                  { title: 'Code', value: 'FiCode' },
                  { title: 'Briefcase', value: 'FiBriefcase' },
                  { title: 'BarChart', value: 'FiBarChart2' }
                ]
              }, title: 'Icon' }),
              defineField({
                name: 'features',
                type: 'array',
                of: [{ type: 'string' }],
                title: 'Features'
              })
            ]
          }]
        })
      ]
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
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          
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
    
    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'list',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'active', type: 'boolean' })
              ]
            }
          ]
        })
      ]
    })
  ]
})
