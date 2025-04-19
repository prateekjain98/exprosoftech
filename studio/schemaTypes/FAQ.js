import {defineType , defineField} from 'sanity'

export const faqType = defineType({
    name:'faq',
    title:'FAQ',
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
        })
    ]
})