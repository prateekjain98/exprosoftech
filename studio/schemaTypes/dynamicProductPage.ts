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
      
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for SEO purposes',
      
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description used for SEO purposes',
      
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
              
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              
            })
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
                defineField({
                  name: 'label',
                  title: 'Button Label',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'link',
                  title: 'Button Link',
                  type: 'string',
                  
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
        })
      ],
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
              
            }),
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
          ],
          
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
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string',
                  options: {
                    list:[
                      "ShoppingCart",
                      "MapPin",
                      "Package",
                      "Book",
                      "Users",
                      "ChartLineUp",
                      "Target",
                      "ChatCenteredText",
                      "Lightbulb",
                      "ChartBar",
                      "QrCode",
                      "Receipt",
                      "CurrencyDollar",
                      "Recycle",
                      "Shield",
                      "Wallet",
                      "Stack",
                      "UserFocus",
                      "Rocket",
                      "Globe",
                      "Gear",
                      "DeviceMobile",
                      "ArrowsClockwise",
                      "MessageCircle",
                      "Filter",
                      "MousePointer",
                      "CodePen"
                    ]
                  },
                  description: 'Icon name from Phosphor Icons (e.g., ShoppingCart, MapPin, etc.)'
                  //  // Temporarily commented out
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

        })
      ],
      
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
          
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          
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
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string',
                  options: {
                    list:[
                      "ShoppingCart",
                      "MapPin",
                      "Package",
                      "Book",
                      "Users",
                      "ChartLineUp",
                      "Target",
                      "ChatCenteredText",
                      "Lightbulb",
                      "ChartBar",
                      "QrCode",
                      "Receipt",
                      "CurrencyDollar",
                      "Recycle",
                      "Shield",
                      "Wallet",
                      "Stack",
                      "UserFocus",
                      "Rocket",
                      "Globe",
                      "Gear",
                      "DeviceMobile",
                      "ArrowsClockwise",
                      "RefreshCw",
                      "Database",
                      "Bell",
                      "Layers"
                    ]
                  },
                  
                })
              ]
            }
          ],

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
              
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              
            })
          ],
          
        }),
        defineField({
          name:'metricValues',
          title:'Metric Values',
          type:'array',
          of:[
            {
              type:'object',
              fields:[
                defineField({
                  name:'value',
                  title:'Value',
                  type:'string',
                }),
                defineField({
                  name:'label',
                  title:'Label',
                  type:'string',
                })
              ]
            }
          ]
        })
      ],
      
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
          title: 'Benefits Section',
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
              // defineField({
              //   name: 'icon',
              //   title: 'Icon',
              //   type: 'string',
              //   options: {
              //     list:[
              //       { title: 'Chart Line', value: 'FaChartLine' },
              //       { title: 'Handshake', value: 'FaHandshake' },
              //       { title: 'Heart', value: 'FaHeart' },
              //       { title: 'Lightbulb', value: 'FaLightbulb' },
              //       { title: 'Shield', value: 'FaShieldAlt' },
              //       { title: 'Users', value: 'FaUsers' },
              //       { title: 'Globe', value: 'FaGlobe' },
              //       { title: 'Chart Bar', value: 'FaChartBar' },
              //       { title: 'Headset', value: 'FaHeadset' },
              //       { title: 'Money Bill', value: 'FaMoneyBillWave' },
              //       { title: 'Network', value: 'FaNetworkWired' },
              //       { title: 'Industry', value: 'FaIndustry' },
              //       { title: 'Shopping Cart', value: 'FaShoppingCart' },
              //       { title: 'Phone', value: 'FaPhoneAlt' },
              //       { title: 'Boxes', value: 'FaBoxes' },
              //       { title: 'Building', value: 'FaBuilding' },
              //       { title: 'Search Location', value: 'FaSearchLocation' },
              //       { title: 'Map Marker', value: 'FaMapMarkedAlt' },
              //       { title: 'Store', value: 'FaStore' },
              //       { title: 'Recycle', value: 'FaRecycle' },
              //       { title: 'Calendar', value: 'FaCalendarAlt' },
              //       { title: 'Filter', value: 'FaFilter' },
              //       { title: 'Chart Pie', value: 'FaChartPie' },
              //       { title: 'Chart Area', value: 'FaChartArea' },
              //       { title: 'Analytics', value: 'FaChartBar' },
              //       // { title: 'Gauge', value: 'FaTachometerAlt' },
              //       { title: 'Tachometer', value: 'FaTachometerAlt' },
              //       { title: 'Bolt/Lightning', value: 'FaBolt' },
              //       { title: 'Rocket', value: 'FaRocket' },
              //       { title: 'Dollar Sign', value: 'FaDollarSign' },
              //       { title: 'Coins', value: 'FaCoins' },
              //       { title: 'Percentage', value: 'FaPercent' },
              //       { title: 'Piggy Bank', value: 'FaPiggyBank' },
              //       { title: 'Arrow Up', value: 'FaArrowUp' },
              //       { title: 'Arrow Trend Up', value: 'FaArrowUp' },
              //       { title: 'Trophy', value: 'FaTrophy' },
              //       { title: 'Medal', value: 'FaMedal' },
              //       { title: 'Star', value: 'FaStar' },
              //       { title: 'Clock', value: 'FaClock' },
              //       { title: 'Hourglass', value: 'FaHourglass' },
              //       { title: 'User', value: 'FaUser' },
              //       { title: 'User Group', value: 'FaUsers' },
              //       { title: 'Gear', value: 'FaCogs' },
              //       { title: 'Cogs', value: 'FaCogs' },
              //       { title: 'Microchip', value: 'FaMicrochip' },
              //       { title: 'Server', value: 'FaServer' },
              //       { title: 'Database', value: 'FaDatabase' },
              //       { title: 'Cloud', value: 'FaCloud' },

                     
              //       // New additions for Salesforce best practices (non-duplicates)
              //       { title: 'Code', value: 'FaCode' }, // Apex Design Patterns
              //       { title: 'Git', value: 'FaGitAlt' }, // Version Controlling
              //       { title: 'Jenkins', value: 'FaJenkins' }, // CI/CD
              //       { title: 'Box Open', value: 'FaBoxOpen' }, // Sandboxes/Scratch Orgs
              //       { title: 'Flask', value: 'FaFlask' }, // Multi-Level Testing
              //       { title: 'Magic', value: 'FaMagic' }, // Low/No Code
              //       { title: 'Comment', value: 'FaCommentAlt' }, // Commented Code
              //       { title: 'Lock', value: 'FaLock' } // Data Masking
              //     ]
              //   }
              // })
            ]
          }]
        })
      ]
    }),
    
    // Feature Showcase Section
    defineField({
      name: 'featureShowcaseSection',
      title: 'Feature Showcase Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          
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
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  
                })
              ]
            }
          ],
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
              
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              
            })
          ],
          
        }),
        defineField({
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            })
          ]
        })
      ],
      
    }),
    
    //Additional Features / Benefits Section 
    defineField({
      name:'benfitsSection',
      title:'Benefits Section',
      type:'object',
      fields:[
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',

            })
          ],
        }),

        defineField({
          name: 'benefits',
          title: 'Benefits Section / Additional Features',
          type: 'array',
          of: [
              {
                type: 'object',
                fields: [
                  defineField({
                    name: 'title',
                    title: 'Benefit Title',
                    type: 'string',
                    
                  }),
                  defineField({
                    name: 'description',
                    title: 'Benefit Description',
                    type: 'text',
                  }),
                ]
              } 
          ]
        })
      ]
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
              
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              
            })
          ],
          
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
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'string',
                  options: {
                    list:[
                      "ShoppingCart",
                      "MapPin",
                      "Package",
                      "Book",
                      "Users",
                      "ChartLineUp",
                      "Target",
                      "ChatCenteredText",
                      "Lightbulb",
                      "ChartBar",
                      "QrCode",
                      "Receipt",
                      "CurrencyDollar",
                      "Recycle",
                      "Shield",
                      "Wallet",
                      "Stack",
                      "UserFocus",
                      "Rocket",
                      "Globe",
                      "Gear",
                      "DeviceMobile",
                      "ArrowsClockwise",
                    ]
                  },
                  
                })
              ]
            }
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
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          
        }),
        defineField({
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string',
          
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
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Answer',
                  type: 'text',
                  
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

        })
      ],
      
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