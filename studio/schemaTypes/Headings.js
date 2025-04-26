import { defineField , defineType } from 'sanity'

export const headingType = defineType({
    name:'heading',
    title: 'Heading',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            type: 'string',
            validation : (Rule) => Rule.optional(),
        }),
        defineField({
            name: 'title',
            type: 'string',
            validation : (Rule) => Rule.required(),
        })
        , defineField({
            name: 'description',
            type: 'text',
            validation : (Rule) => Rule.required(),
        })
    ]
})