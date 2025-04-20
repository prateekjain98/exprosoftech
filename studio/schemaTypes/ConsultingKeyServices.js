import { defineType, defineField } from 'sanity'

export const keyServices = defineType({
  name: 'keyServices',
  title: 'Key Services',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Service ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'points',
      title: 'Service Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Point Text',
              type: 'text'
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'metrics',
      title: 'Service Metrics',
      type: 'object',
      fields: [
        defineField({
          name: 'mainMetric',
          title: 'Main Metric',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string'
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string'
            }),
            defineField({
              name: 'trend',
              title: 'Trend',
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'highlights',
          title: 'Metric Highlights',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string'
                }),
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string'
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string'
                })
              ]
            }
          ]
        })
      ]
    })
  ]
})