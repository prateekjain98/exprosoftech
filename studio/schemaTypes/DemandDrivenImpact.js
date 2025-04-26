import {defineType , defineField} from 'sanity'
export const demandDrivenImpact = defineType({
    name: 'demandDrivenImpact',
    title: 'Demand Driven Impact',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'imageOverlayTitle',
        title: 'Image Overlay Title',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'imageOverlayDescription',
        title: 'Image Overlay Description',
        type: 'text',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'image',
        title: 'Impact Image',
        type: 'object',
        fields: [
            defineField({
            name: 'src',
            title: 'Image Source',
            type: 'image',
            options: {
              hotspot: true
            }
          }),
          defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            validation: Rule => Rule.required()
          }),
        ]
      }),
      defineField({
        name: 'stats',
        title: 'Statistics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
                defineField({
                name: 'value',
                title: 'Value',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: Rule => Rule.required()
              })
            ]
          }
        ],
        validation: Rule => Rule.required().min(1)
      })
    ]
  })