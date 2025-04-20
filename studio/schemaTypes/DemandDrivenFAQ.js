import {defineType , defineField} from 'sanity'

export const demandDrivenFAQType = defineType({
    name:'demandDrivenFaq',
    title:'Demand Driven FAQ',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type: 'string'
        }),
        defineField({
            name:'description',
            title:'Description',
            type: 'text'
        }),
        defineField({
            name:'active',
            title: 'Acrive',
            type: 'boolean',
            validation: rule => rule.optional()
        }),
    ]
})