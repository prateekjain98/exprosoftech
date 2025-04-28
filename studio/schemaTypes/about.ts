import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name:'title',
      title:'Title',
      type:'string'
    }),
    // Meta Section

    defineField({
      name: 'meta',
      title: 'Meta Information',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Page Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Page Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'meta_title',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),

    // Banner Section
    defineField({
      name: 'bannerSection',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'text' }]
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // Company Section
    defineField({
      name: 'companySection',
      title: 'Company Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'text' }]
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // Leadership Team Section
    defineField({
      name: 'leadershipSection',
      title: 'Leadership Team Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'leaders',
          title: 'Team Members',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'name', type: 'string', title: 'Name' }),
              defineField({ name: 'title', type: 'string', title: 'Position Title' }),
              defineField({ name: 'description', type: 'text', title: 'Description' }),
              defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn URL' }),
              defineField({
                name: 'image',
                type: 'image',
                title: 'Profile Image',
                options: { hotspot: true }
              })
            ]
          }]
        })
      ]
    }),

    // Why Choose Us Section
    defineField({
      name: 'whySection',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
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
        }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', type: 'string', title: 'Feature Title' }),
              defineField({ name: 'description', type: 'text', title: 'Feature Description' }),
              defineField({ name: 'icon', type: 'string', title: 'Feature Icon' })
            ]
          }]
        })
      ]
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
          type: 'string'
        }),
        defineField({
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string'
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
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', type: 'string', title: 'Question' }),
              defineField({ name: 'description', type: 'text', title: 'Answer' }),
              defineField({
                name: 'active',
                type: 'boolean',
                title: 'Is Active',
                initialValue: false
              })
            ]
          }]
        })
      ]
    })
  ]
})
