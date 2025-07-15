import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    // Company Information
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Exporsoftech'
    }),
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue: 'Streamline operations with cutting-edge solutions that future-proof your business.'
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),

    // Contact Information
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: Rule => Rule.required().email(),
          initialValue: 'info@exporsoftech.com'
        })
      ]
    }),

    // Partner/Certification Logos
    defineField({
      name: 'partnerLogos',
      title: 'Partner/Certification Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Partner Name',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'url',
              title: 'Partner URL (optional)',
              type: 'url'
            }),
            defineField({
              name: 'description',
              title: 'Description (optional)',
              type: 'string'
            })
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo'
            }
          }
        }
      ]
    }),

    // Copyright Information
    defineField({
      name: 'copyright',
      title: 'Copyright Information',
      type: 'string',
      
    })
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'description'
    }
  }
}) 