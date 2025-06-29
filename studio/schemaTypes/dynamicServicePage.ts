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
                type: 'string',
                options: {
                  list: [
                    // Analytics/Data icons
                    { title: 'Chart Line', value: 'FaChartLine' },
                    { title: 'Chart Bar', value: 'FaChartBar' },
                    { title: 'Chart Pie', value: 'FaChartPie' },
                    { title: 'Chart Area', value: 'FaChartArea' },
                    { title: 'Analytics', value: 'FaChartSimple' },
                    
                    // Performance/Speed icons
                    { title: 'Gauge', value: 'FaGauge' },
                    { title: 'Tachometer', value: 'FaTachometerAlt' },
                    { title: 'Bolt/Lightning', value: 'FaBolt' },
                    { title: 'Rocket', value: 'FaRocket' },
                    
                    // Financial icons
                    { title: 'Dollar Sign', value: 'FaDollarSign' },
                    { title: 'Money Bill', value: 'FaMoneyBill' },
                    { title: 'Coins', value: 'FaCoins' },
                    { title: 'Percentage', value: 'FaPercent' },
                    { title: 'Piggy Bank', value: 'FaPiggyBank' },
                    
                    // Growth/Success icons
                    { title: 'Arrow Up', value: 'FaArrowUp' },
                    { title: 'Arrow Trend Up', value: 'FaArrowTrendUp' },
                    { title: 'Trophy', value: 'FaTrophy' },
                    { title: 'Medal', value: 'FaMedal' },
                    { title: 'Star', value: 'FaStar' },
                    
                    // Time/Efficiency icons
                    { title: 'Clock', value: 'FaClock' },
                    { title: 'Hourglass', value: 'FaHourglass' },
                    { title: 'Calendar', value: 'FaCalendar' },
                    
                    // User/Customer icons
                    { title: 'User', value: 'FaUser' },
                    { title: 'Users', value: 'FaUsers' },
                    { title: 'User Group', value: 'FaUserGroup' },
                    { title: 'Handshake', value: 'FaHandshake' },
                    
                    // Technology icons
                    { title: 'Gear', value: 'FaGear' },
                    { title: 'Cogs', value: 'FaCogs' },
                    { title: 'Microchip', value: 'FaMicrochip' },
                    { title: 'Server', value: 'FaServer' },
                    { title: 'Database', value: 'FaDatabase' },
                    { title: 'Cloud', value: 'FaCloud' }
                  ]
                }
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
          description: 'Overlay element that appears on the bottom-right of the image',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Main value to display (e.g., "35+", "100%", "50K+")',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Description text below the value',
              validation: Rule => Rule.required()
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
          name: 'isVisible',
          title: 'Show Features Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire features section'
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
                type: 'string',
                options: {
                  list: [
                    { title: 'Chart Line', value: 'FaChartLine' },
                    { title: 'Chart Bar', value: 'FaChartBar' },
                    { title: 'Chart Pie', value: 'FaChartPie' },
                    { title: 'Chart Area', value: 'FaChartArea' },
                    { title: 'Analytics', value: 'FaChartSimple' },
                    
                    // Performance/Speed icons
                    { title: 'Gauge', value: 'FaGauge' },
                    { title: 'Tachometer', value: 'FaTachometerAlt' },
                    { title: 'Bolt/Lightning', value: 'FaBolt' },
                    { title: 'Rocket', value: 'FaRocket' },
                    
                    // Financial icons
                    { title: 'Dollar Sign', value: 'FaDollarSign' },
                    { title: 'Money Bill', value: 'FaMoneyBill' },
                    { title: 'Coins', value: 'FaCoins' },
                    { title: 'Percentage', value: 'FaPercent' },
                    { title: 'Piggy Bank', value: 'FaPiggyBank' },
                    
                    // Growth/Success icons
                    { title: 'Arrow Up', value: 'FaArrowUp' },
                    { title: 'Arrow Trend Up', value: 'FaArrowTrendUp' },
                    { title: 'Trophy', value: 'FaTrophy' },
                    { title: 'Medal', value: 'FaMedal' },
                    { title: 'Star', value: 'FaStar' },
                    
                    // Time/Efficiency icons
                    { title: 'Clock', value: 'FaClock' },
                    { title: 'Hourglass', value: 'FaHourglass' },
                    { title: 'Calendar', value: 'FaCalendar' },
                    
                    // User/Customer icons
                    { title: 'User', value: 'FaUser' },
                    { title: 'Users', value: 'FaUsers' },
                    { title: 'User Group', value: 'FaUserGroup' },
                    { title: 'Handshake', value: 'FaHandshake' },
                    
                    // Technology icons
                    { title: 'Gear', value: 'FaGear' },
                    { title: 'Cogs', value: 'FaCogs' },
                    { title: 'Microchip', value: 'FaMicrochip' },
                    { title: 'Server', value: 'FaServer' },
                    { title: 'Database', value: 'FaDatabase' },
                    { title: 'Cloud', value: 'FaCloud' }
                  ]
                }
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
          name: 'isVisible',
        title: 'Show Benefits Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire benefits section'
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
                type: 'string',
                options: {
                  list:[
                    { title: 'Chart Line', value: 'FaChartLine' },
                    { title: 'Handshake', value: 'FaHandshake' },
                    { title: 'Heart', value: 'FaHeart' },
                    { title: 'Lightbulb', value: 'FaLightbulb' },
                    { title: 'Shield', value: 'FaShieldAlt' },
                    { title: 'Users', value: 'FaUsers' },
                    { title: 'Globe', value: 'FaGlobe' },
                    { title: 'Chart Bar', value: 'FaChartBar' },
                    { title: 'Headset', value: 'FaHeadset' },
                    { title: 'Money Bill', value: 'FaMoneyBillWave' },
                    { title: 'Network', value: 'FaNetworkWired' },
                    { title: 'Industry', value: 'FaIndustry' },
                    { title: 'Shopping Cart', value: 'FaShoppingCart' },
                    { title: 'Phone', value: 'FaPhoneAlt' },
                    { title: 'Boxes', value: 'FaBoxes' },
                    { title: 'Building', value: 'FaBuilding' },
                    { title: 'Search Location', value: 'FaSearchLocation' },
                    { title: 'Map Marker', value: 'FaMapMarkedAlt' },
                    { title: 'Store', value: 'FaStore' },
                    { title: 'Recycle', value: 'FaRecycle' },
                    { title: 'Calendar', value: 'FaCalendarAlt' },
                    { title: 'Filter', value: 'FaFilter' },
                    { title: 'Chart Pie', value: 'FaChartPie' },
                    { title: 'Chart Area', value: 'FaChartArea' },
                    { title: 'Analytics', value: 'FaChartBar' },
                    // { title: 'Gauge', value: 'FaTachometerAlt' },
                    { title: 'Tachometer', value: 'FaTachometerAlt' },
                    { title: 'Bolt/Lightning', value: 'FaBolt' },
                    { title: 'Rocket', value: 'FaRocket' },
                    { title: 'Dollar Sign', value: 'FaDollarSign' },
                    { title: 'Coins', value: 'FaCoins' },
                    { title: 'Percentage', value: 'FaPercent' },
                    { title: 'Piggy Bank', value: 'FaPiggyBank' },
                    { title: 'Arrow Up', value: 'FaArrowUp' },
                    { title: 'Arrow Trend Up', value: 'FaArrowUp' },
                    { title: 'Trophy', value: 'FaTrophy' },
                    { title: 'Medal', value: 'FaMedal' },
                    { title: 'Star', value: 'FaStar' },
                    { title: 'Clock', value: 'FaClock' },
                    { title: 'Hourglass', value: 'FaHourglass' },
                    { title: 'User', value: 'FaUser' },
                    { title: 'User Group', value: 'FaUsers' },
                    { title: 'Gear', value: 'FaCogs' },
                    { title: 'Cogs', value: 'FaCogs' },
                    { title: 'Microchip', value: 'FaMicrochip' },
                    { title: 'Server', value: 'FaServer' },
                    { title: 'Database', value: 'FaDatabase' },
                    { title: 'Cloud', value: 'FaCloud' },

                     
                    // New additions for Salesforce benefits (non-duplicates)
                    { title: 'Code', value: 'FaCode' }, // Apex Design Patterns
                    { title: 'Git', value: 'FaGitAlt' }, // Version Controlling
                    { title: 'Jenkins', value: 'FaJenkins' }, // CI/CD
                    { title: 'Box Open', value: 'FaBoxOpen' }, // Sandboxes/Scratch Orgs
                    { title: 'Flask', value: 'FaFlask' }, // Multi-Level Testing
                    { title: 'Magic', value: 'FaMagic' }, // Low/No Code
                    { title: 'Comment', value: 'FaCommentAlt' }, // Commented Code
                    { title: 'Lock', value: 'FaLock' } // Data Masking
                  ]
                }
              })
            ]
          }]
        })
      ]
    }),

    defineField({
      name: 'bestPracticesSection',
      title: 'Best Practices Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
        title: 'Show Benefits Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire benefits section'
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
          name: 'bestPractices',
          title: 'Best Practices Section',
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
                type: 'string',
                options: {
                  list:[
                    { title: 'Chart Line', value: 'FaChartLine' },
                    { title: 'Handshake', value: 'FaHandshake' },
                    { title: 'Heart', value: 'FaHeart' },
                    { title: 'Lightbulb', value: 'FaLightbulb' },
                    { title: 'Shield', value: 'FaShieldAlt' },
                    { title: 'Users', value: 'FaUsers' },
                    { title: 'Globe', value: 'FaGlobe' },
                    { title: 'Chart Bar', value: 'FaChartBar' },
                    { title: 'Headset', value: 'FaHeadset' },
                    { title: 'Money Bill', value: 'FaMoneyBillWave' },
                    { title: 'Network', value: 'FaNetworkWired' },
                    { title: 'Industry', value: 'FaIndustry' },
                    { title: 'Shopping Cart', value: 'FaShoppingCart' },
                    { title: 'Phone', value: 'FaPhoneAlt' },
                    { title: 'Boxes', value: 'FaBoxes' },
                    { title: 'Building', value: 'FaBuilding' },
                    { title: 'Search Location', value: 'FaSearchLocation' },
                    { title: 'Map Marker', value: 'FaMapMarkedAlt' },
                    { title: 'Store', value: 'FaStore' },
                    { title: 'Recycle', value: 'FaRecycle' },
                    { title: 'Calendar', value: 'FaCalendarAlt' },
                    { title: 'Filter', value: 'FaFilter' },
                    { title: 'Chart Pie', value: 'FaChartPie' },
                    { title: 'Chart Area', value: 'FaChartArea' },
                    { title: 'Analytics', value: 'FaChartBar' },
                    // { title: 'Gauge', value: 'FaTachometerAlt' },
                    { title: 'Tachometer', value: 'FaTachometerAlt' },
                    { title: 'Bolt/Lightning', value: 'FaBolt' },
                    { title: 'Rocket', value: 'FaRocket' },
                    { title: 'Dollar Sign', value: 'FaDollarSign' },
                    { title: 'Coins', value: 'FaCoins' },
                    { title: 'Percentage', value: 'FaPercent' },
                    { title: 'Piggy Bank', value: 'FaPiggyBank' },
                    { title: 'Arrow Up', value: 'FaArrowUp' },
                    { title: 'Arrow Trend Up', value: 'FaArrowUp' },
                    { title: 'Trophy', value: 'FaTrophy' },
                    { title: 'Medal', value: 'FaMedal' },
                    { title: 'Star', value: 'FaStar' },
                    { title: 'Clock', value: 'FaClock' },
                    { title: 'Hourglass', value: 'FaHourglass' },
                    { title: 'User', value: 'FaUser' },
                    { title: 'User Group', value: 'FaUsers' },
                    { title: 'Gear', value: 'FaCogs' },
                    { title: 'Cogs', value: 'FaCogs' },
                    { title: 'Microchip', value: 'FaMicrochip' },
                    { title: 'Server', value: 'FaServer' },
                    { title: 'Database', value: 'FaDatabase' },
                    { title: 'Cloud', value: 'FaCloud' },

                     
                    // New additions for Salesforce best practices (non-duplicates)
                    { title: 'Code', value: 'FaCode' }, // Apex Design Patterns
                    { title: 'Git', value: 'FaGitAlt' }, // Version Controlling
                    { title: 'Jenkins', value: 'FaJenkins' }, // CI/CD
                    { title: 'Box Open', value: 'FaBoxOpen' }, // Sandboxes/Scratch Orgs
                    { title: 'Flask', value: 'FaFlask' }, // Multi-Level Testing
                    { title: 'Magic', value: 'FaMagic' }, // Low/No Code
                    { title: 'Comment', value: 'FaCommentAlt' }, // Commented Code
                    { title: 'Lock', value: 'FaLock' } // Data Masking
                  ]
                }
              })
            ]
          }]
        })
      ]
    }),

    // Process Section
    defineField({
      name: 'processSection',
      title: 'Horizontal Navigation Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Show Horizontal Navigation Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire Horizontal Navigation Section'
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
      name: 'stepsSection',
      title: 'Steps Section',
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
          title: 'Main Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Step Title',
                type: 'string'
              }),
              defineField({
                name: 'description',
                title: 'Step Description',
                type: 'text'
              }),
              defineField({
                name: 'containers',
                title: 'Step Containers',
                type: 'array',
                of: [{
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Container Title',
                      type: 'string'
                    }),
                    defineField({
                      name: 'description',
                      title: 'Container Description',
                      type: 'text'
                    })
                  ]
                }]
              })
            ]
          }]
        })
      ]
    }),

    // Scrollable Logos Section
    defineField({
      name: 'integrationTypesSection',
      title: 'Integration Types Section',
      type: 'object',
      fields: [
        defineField({
          name: 'isVisible',
          title: 'Show Integration Types Section',
          type: 'boolean',
          initialValue: false,
          description: 'Toggle to show or hide the entire Integration Types Section'
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
          name: 'items',
          title: 'Logo Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'number',
                title: 'Number',
                type: 'string',
                description: 'Display number (e.g., "01", "02", etc.)'
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
                name: 'logos',
                title: 'Logo Images',
                type: 'array',
                of: [{
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'src',
                      title: 'Logo Source',
                      type: 'image'
                    }),
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string'
                    })
                  ]
                }]
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
      
    })
  ]
})  