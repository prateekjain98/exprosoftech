import { defineType, defineField } from 'sanity'

export default defineType({
    name: "contact",
    title: "Contact Page",
    type: "document",
    fields: [
      defineField({
        name: "title",
        title: "Page Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "description",
        title: "Page Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "meta_title",
        title: "Meta Title",
        type: "string",
      }),
      defineField({
        name: "image",
        title: "Featured Image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      // Contact Hero Section
      defineField({
        name: "hero",
        title: "Hero Section",
        type: "object",
        fields: [
          defineField({
            name: "heroImage",
            title: "Hero Background Image",
            type: "image",
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: "logo",
            title: "Company Logo",
            type: "object",
            fields: [
              defineField({
                name: "src",
                title: "Logo Image",
                type: "image",
                options: {
                  hotspot: true,
                },
              }),
              defineField({
                name: "alt",
                title: "Alt Text",
                type: "string",
                validation: (Rule) => Rule.required(),
              }),
            ],
          }),
          defineField({
            name: "title",
            title: "Title",
            type: "string",
          }),
          defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
          }),
          defineField({
            name: "description",
            title: "Description",
            type: "text",
          }),
          defineField({
            name: "contact_info",
            title: "Contact Information Cards",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  defineField({
                    name: "icon",
                    title: "Icon",
                    type: "string",
                    options: {
                      list: [
                        { title: "Home", value: "home" },
                        { title: "Phone", value: "phone" },
                        { title: "Location Pin", value: "locationPin" },
                        { title: "Building", value: "building" },
                        { title: "Email", value: "email" },
                        { title: "Clock", value: "clock" },
                      ],
                    },
                  }),
                  defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                  }),
                  defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                  }),
                ],
              },
            ],
          }),
          defineField({
            name: "list",
            title: "Service Cards",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  defineField({
                    name: "icon",
                    title: "Icon",
                    type: "string",
                    options: {
                      list: [
                        { title: "Home", value: "home" },
                        { title: "Phone", value: "phone" },
                        { title: "Location Pin", value: "locationPin" },
                        { title: "Building", value: "building" },
                        { title: "Email", value: "email" },
                        { title: "Clock", value: "clock" },
                        { title: "Services", value: "services" },
                        { title: "Support", value: "support" },
                      ],
                    },
                  }),
                  defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                  }),
                  defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                  }),
                ],
              },
            ],
          }),
        ],
      }),
      // FAQ Section
      defineField({
        name: "faq",
        title: "FAQ Section",
        type: "object",
        fields: [
          defineField({
            name: "heading",
            title: "Section Heading",
            type: "object",
            fields: [
              defineField({
                name: "title",
                title: "Title",
                type: "string",
              }),
              defineField({
                name: "subtitle",
                title: "Subtitle",
                type: "string",
              }),
              defineField({
                name: "description",
                title: "Description",
                type: "text",
              }),
            ],
          }),
          defineField({
            name: "faqItems",
            title: "FAQ Items",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  defineField({
                    name: "title",
                    title: "Question",
                    type: "string",
                  }),
                  defineField({
                    name: "description",
                    title: "Answer",
                    type: "text",
                  }),
                ],
              },
            ],
          }),
        ],
      }),
      // Consultation CTA Section
      defineField({
        name: "consultationCTA",
        title: "Consultation CTA",
        type: "object",
        fields: [
          defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
          }),
          defineField({
            name: "title",
            title: "Title",
            type: "string",
          }),
          defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
          }),
          defineField({
            name: "description",
            title: "Description",
            type: "text",
          }),
          defineField({
            name: "metrices",
            title: "Metrics",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  defineField({
                    name: "value",
                    title: "Value",
                    type: "string",
                  }),
                  defineField({
                    name: "label",
                    title: "Label",
                    type: "string",
                  }),
                  defineField({
                    name: "icon",
                    title: "Icon Name",
                    type: "string",
                    description: "Enter icon name (ChartLine, Gauge, or Clock)",
                  }),
                ],
              },
            ],
          }),
          defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
          }),
          defineField({
            name: "image",
            title: "CTA Image",
            type: "object",
            fields: [
              defineField({
                name: "src",
                title: "Image",
                type: "image",
              }),
              defineField({
                name: "alt",
                title: "Alt Text",
                type: "string",
              }),
            ],
          }),
        ],
      }),
    ],
  });