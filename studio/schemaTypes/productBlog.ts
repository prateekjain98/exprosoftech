import { defineType, defineField } from 'sanity'

export const productBlogType = defineType({
  name: 'productBlog',
  title: 'Product Blog',
  type: 'document',
  fields: [
    defineField({
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string',
        description: 'Title for search engines (if different from main title)'
    }),
    defineField({
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        description: 'Description for search engines',
        validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'string',
      description: 'Optional: Override the default canonical URL. If left empty, will use the automatic URL construction.'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the blog post',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    
  ],
  orderings: [
    {
      title: 'Date (newest first)',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
      date: 'date'
    },
    prepare(selection) {
      const {author, date} = selection
      const formattedDate = new Date(date).toLocaleDateString()
      return {
        ...selection, 
        subtitle: `${formattedDate} • by ${author}`
      }
    }
  }
}) 