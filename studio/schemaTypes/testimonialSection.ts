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
            }),
            defineField({
              name: 'content',
              title: 'Testimonial Content',
              type: 'text',
              description: 'The testimonial text',
              validation: Rule => Rule.required().min(20).max(300)
            }),
            defineField({
              name: 'stars',
              title: 'Star Rating',
              type: 'number',
              description: 'Rating out of 5 stars',
              validation: Rule => Rule.required().min(1).max(5),
              initialValue: 5
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar',
              type: 'image',
              description: 'Logo of the Company (optional)',
              options: {
                hotspot: true
              }
            }),
           
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'company',
              media: 'avatar',
              stars: 'stars'
            },
            prepare({ title, subtitle, media, stars }) {
              return {
                title: `${title} (${stars}★)`,
                subtitle,
                media
              }
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