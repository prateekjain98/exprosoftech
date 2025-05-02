// schemas/testimonialSection.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the testimonial section',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Tagline or subtitle (appears above the title)'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description text below the title'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Name of the person giving the testimonial',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              description: 'Job title or role of the person',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              description: 'Company or organization name',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'content',
              title: 'Testimonial Content',
              type: 'text',
              description: 'The testimonial text',
              validation: Rule => Rule.required().min(20).max(300)
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar',
              type: 'image',
              description: 'Profile picture of the person (optional)',
              options: {
                hotspot: true
              }
            }),
            defineField({
              name: 'companyLogo',
              title: 'Company Logo',
              type: 'image',
              description: 'Logo of the company (optional)',
              options: {
                hotspot: true
              }
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'company',
              media: 'avatar'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(3)
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
})