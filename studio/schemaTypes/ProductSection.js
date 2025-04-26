import {defineType , defineField} from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Product Section',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'label',
        title: 'Label',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'buttonHref',
        title: 'Button URL',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'mainCTA',
        title: 'Is Main CTA',
        type: 'boolean',
        initialValue: false,
      }),
      defineField({
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Feature Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'description',
                title: 'Feature Description',
                type: 'text',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
        validation: (Rule) => Rule.required().min(1),
      }),
    ],
  })