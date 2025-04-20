import { defineType, defineField } from 'sanity'

export const challengesAddressedType = defineType({
  name: 'challengesWeAddress',
  title: 'Consulting Challenges section',
  type: 'document',
  fields: [
        defineField({
            name: 'title',
            title: 'Challenge Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Challenge Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'icon',
            title: 'Challenge Icon',
            type: 'image',
        validation: Rule => Rule.required()
        }),
    ]
})
       
