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
                defineField({ name: 'icon', type: 'image' }),
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
