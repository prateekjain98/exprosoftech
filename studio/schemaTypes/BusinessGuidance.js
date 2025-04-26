import { defineType, defineField } from 'sanity'

export const businessGuidanceType = defineType({
    name: 'businessGuidance',
    title: 'Business Guidance',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true // Enables image hotspot for better cropping
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for accessibility',
                    validation: Rule => Rule.required()
                }),
            ],
        }),
        defineField({
            name: 'guidancePoints',
            title: 'Guidance Points',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'number',
                            validation: Rule => Rule.required().min(1)
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
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description'
                        }
                    }
                }
            ],
            validation: Rule => Rule.required().min(1)
        })
    ]
})