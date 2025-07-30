export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the post'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'blockContent'
    },
    {
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
                      'Target'
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
                },
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
          ],
        }
      ],
    }
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
