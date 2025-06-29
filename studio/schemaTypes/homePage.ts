import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // Hero Banner Section
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
                defineField({ name: 'isCalendly', type: 'boolean', title: 'Is Calendly Button' })
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
