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
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
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
                              'DollarSign',
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
                              'Star',
                              'Target',
                              'Trophy',
                              'Truck'
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
                      { title: 'Activity', value: 'Activity' },
                      { title: 'Arrow Right', value: 'ArrowRight' },
                      { title: 'Brain', value: 'Brain' },
                      { title: 'Briefcase', value: 'Briefcase' },
                      { title: 'Chart Bar', value: 'ChartBar' },
                      { title: 'Chart Line Up', value: 'ChartLineUp' },
                      { title: 'Chart Pie', value: 'ChartPie' },
                      { title: 'Check Circle', value: 'CheckCircle' },
                      { title: 'Clock', value: 'Clock' },
                      { title: 'Cloud', value: 'Cloud' },
                      { title: 'Code', value: 'Code' },
                      { title: 'Coins', value: 'Coins' },
                      { title: 'Cube', value: 'Cube' },
                      { title: 'Database', value: 'Database' },
                      { title: 'Desktop', value: 'Desktop' },
                      { title: 'Dollar Sign', value: 'DollarSign' },
                      { title: 'Gauge', value: 'Gauge' },
                      { title: 'Gear', value: 'Gear' },
                      { title: 'Globe', value: 'Globe' },
                      { title: 'Handshake', value: 'Handshake' },
                      { title: 'Lightbulb Filament', value: 'LightbulbFilament' },
                      { title: 'Lightning', value: 'Lightning' },
                      { title: 'Lock', value: 'Lock' },
                      { title: 'Medal', value: 'Medal' },
                      { title: 'Package', value: 'Package' },
                      { title: 'Plugs', value: 'Plugs' },
                      { title: 'Receipt', value: 'Receipt' },
                      { title: 'Robot', value: 'Robot' },
                      { title: 'Rocket', value: 'Rocket' },
                      { title: 'Settings', value: 'Settings' },
                      { title: 'Shield Check', value: 'ShieldCheck' },
                      { title: 'Star', value: 'Star' },
                      { title: 'Storefront', value: 'Storefront' },
                      { title: 'Target', value: 'Target' },
                      { title: 'Trophy', value: 'Trophy' },
                      { title: 'Truck', value: 'Truck' },
                      { title: 'User Circle', value: 'UserCircle' },
                      { title: 'Users', value: 'Users' }
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
              }),
              
            ]
          }]
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string'
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        }),
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
                  'Lightbulb',
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
                  'UserGroup',
                  'Wallet'
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
      name: 'dynamicServiceShowcaseSection',
      title: 'Salesforce Development Expertise',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Show Dynamic Service Showcase Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire Dynamic Service Showcase Section'
        }),
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
                name: 'id',
                title: 'Service ID',
                type: 'string',
                description: 'Unique identifier for the service'
              }),
              defineField({
                name: 'title',
                title: 'Service Title',
                type: 'string'
              }),
              defineField({
                name: 'content',
                title: 'Service Content',
                type: 'blockContent',
                description: 'Rich content for the service including description, features, and other details'
              }),
              defineField({
                name: 'image',
                title: 'Service Image',
                type: 'image',
                description: 'Main image for the service'
              })
            ]
          }]
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
