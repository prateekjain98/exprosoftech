import { defineType, defineField } from 'sanity'

export const loyaltyManagementProcessSteps = defineType({
  name: 'loyaltyProcessSteps',
  title: 'Loyalty Process Steps',
  type: 'document',
  fields: [
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
      name: 'image',
      title: 'Image URL',
      type: 'url',
      validation: Rule => Rule.required()
    }),
 ],
  
})