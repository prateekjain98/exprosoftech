import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'leadershipTeam',
  title: 'Leadership Team',
  type: 'document',
  fields: [
    defineField({
      name: 'leaders',
      title: 'Leaders',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'image',
            title: 'Image URL',
            type: 'string',
            validation: Rule => Rule.required()
          })
        ]
      }],
      validation: Rule => Rule.required().min(1)
    })
  ]
})