import {defineType , defineField} from 'sanity'

export const consultingDropdownType = defineType({
    name:"consultingDropdownNavbar",
    title:"Consulting Dropdown Navbar",
    type:"document",
    fields:[
        defineField({
            name:"backgroundImg",
            title:"Background Image",
            type:"image",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:"title",
            title:"Title",
            type:"string",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:"imageUrl",
            title:"Company Logo",
            type:"image",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:"alt",
            title:"Image Alt Text",
            type:"string",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:"tagline",
            title:"Tagline",
            type:"string",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:'subtitle',
            title:"Subtitle",
            type:"string",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
            validation:(Rule) => Rule.required()
        }),
    ]

})