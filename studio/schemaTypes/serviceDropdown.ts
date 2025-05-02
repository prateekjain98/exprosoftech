import {defineType, defineField} from 'sanity'

export const serviceDropdownType = defineType({
  name: 'serviceDropdownContent',
  title: 'Service Dropdown Content',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      description: 'Name of the service (e.g., "Channel Loyalty Management", "Channel Reach Expansion", or "default" for the default view)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isDefaultView',
      title: 'Is Default View',
      type: 'boolean',
      description: 'Set to true if this is the default view shown when no service is hovered',
      initialValue: false
    }),
    // Dropdown content as an object
    defineField({
      name: 'dropdownContent',
      title: 'Dropdown Content',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Short category label (e.g., "Client Success Stories")',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main title (e.g., "Transforming Businesses")',
          validation: Rule => Rule.required()
        }),
        defineField({
            name:'subtitle',
            title:'Subtitle',
            type:'string',
            description:'Subtitle (e.g., "Transforming Businesses")',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Brief description text',
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'string',
              validation: Rule => Rule.required()
            }
          ],
          description: 'Key features of this service (max 4 recommended)',
        }),
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
                  description: 'Metric value (e.g., "5x", "100%")',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  description: 'Metric description',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          validation: Rule => Rule.min(1).max(4)
        }),
        defineField({
          name: 'successStories',
          title: 'Success Stories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'company',
                  title: 'Company',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'achievement',
                  title: 'Achievement',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          description: 'Success stories to display in the default view',
          validation: Rule => Rule.min(0).max(5)
        }),
        defineField({
          name: 'hoverPrompt',
          title: 'Hover Prompt',
          type: 'string',
          description: 'Text prompting users to hover over services (for default view)',
        }),
        defineField({
          name: 'companyLogo',
          title: 'Company Logo',
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ],
          description: 'Company logo for case studies'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Background image for the right panel',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this service should be displayed in the navigation',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'isDefaultView',
      description: 'dropdownContent.title'
    },
    prepare({title, subtitle, description}) {
      return {
        title,
        subtitle: subtitle ? '🔵 Default View' : description
      }
    }
  }
})
