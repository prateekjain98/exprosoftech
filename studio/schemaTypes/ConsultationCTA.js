import { defineType, defineField } from 'sanity'

export const consultationCTAType =  defineType({
    name: 'consultationCTA',
    title: 'Consultation CTA',
    type: 'document',
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
        title: 'Metrices',
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
              }),
            ],
          },
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
            title: 'Source URL',
            type: 'url',
          }),
          defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          }),
        ],
      }),
    ],
})