import { defineType, defineField } from 'sanity';

export const faqSection = defineType({
    name: 'faqSection',
    title: 'FAQ Section',
    type: 'document',
    fields: [
        
        defineField({
            name: 'title',
            title: 'FAQ for Page:',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'pageTitle',
            title: 'Section Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Section Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'list',
            title: 'FAQ List',
            type: 'array',
            of: [
            defineField({
                type: 'object',
                name: 'faqItem',
                title: 'FAQ Item',
                fields: [
                defineField({
                    name: 'title',
                    title: 'Question',
                    type: 'string',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'description',
                    title: 'Answer',
                    type: 'text',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'active',
                    title: 'Initially Expanded',
                    type: 'boolean',
                    initialValue: false
                })
                ]
            })
            ],
            validation: Rule => Rule.required().min(1)
        })
    ],
  })