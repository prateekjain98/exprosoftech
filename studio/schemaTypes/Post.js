import { defineField } from 'sanity'

export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
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
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the featured image (for accessibility)'
        })
      ]
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'string',
      description: 'Optional: Override the default canonical URL. If left empty, will use the automatic URL construction.'
    }),
    defineField({
      name: 'isLive',
      title: 'Is Live',
      type: 'boolean',
      initialValue: true,
      description: 'Controls page visibility on exprosoftech.com. When false, page will be hidden on production but visible on other hostnames.'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the post'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'metrices',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
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
                      'User',
                      'Bug',
                      'ShoppingCart'
                    ]
                  },
                  description: 'Icon name from Phosphor Icons (e.g., ChartLine, Gauge, Clock)',
                }
              ]
            }
          ],
        },
        {
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', type: 'string', title: 'Label' },
                { name: 'link', type: 'string', title: 'Link' },
                { 
                  name: 'isOpenBooking', 
                  type: 'boolean', 
                  title: 'Opens Booking Form',
                  description: 'Enable overlay with iframe functionality instead of regular link'
                }
              ]
            }
          ]
        },
        {
          name: 'image',
          title: 'Image',
          type: 'object',
          fields: [
            {
              name: 'src',
              title: 'Image Source',
              type: 'image',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }
          ]
        },
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image'
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    }
  }
}
