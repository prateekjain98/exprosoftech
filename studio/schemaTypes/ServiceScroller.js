import { defineField, defineType } from "sanity";

const serviceType = defineType({
    name: 'service',
    title: 'Service Scroller',
    type: 'document',
    fields: [
      defineField({
        name: 'number',
        title: 'Number',
        type: 'string',
        description: 'Service number (e.g., "01", "02", "03")',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Main title of the service',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'subheading',
        title: 'Subheading',
        type: 'string',
        description: 'Brief subtitle describing the service',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Detailed description of the service',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'Service illustration or icon',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
      }),
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subheading',
        media: 'image'
      }
    }
});

export default serviceType;