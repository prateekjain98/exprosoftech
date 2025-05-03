import {defineType, defineField} from 'sanity'

export const productDropdownType = defineType({
  name: 'productDropdownContent',
  title: 'Product Dropdown Content',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Name of the product (e.g., "Intuiflow", "Loyalty Engine", "SFA")',
      validation: Rule => Rule.required()
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
          description: 'Short category label (e.g., "Supply Chain Solution")',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main heading for the product in the dropdown',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Detailed description of the product',
          validation: Rule => Rule.required()
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
          validation: Rule => Rule.min(2).max(8)
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Optional background image for the dropdown panel',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'productImages',
          title: 'Product Images',
          type: 'array',
          of: [
            {
              type: 'image',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          validation: Rule => Rule.max(2)
        })
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this product should be displayed in the navigation',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'dropdownContent.tagline'
    }
  }
})