import { Rule } from '@sanity/types';
const singleBlogSchema = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "Enter the title of the blog post",
        validation: (Rule:Rule) =>
          Rule.required().max(100).warning("Title should not exceed 100 characters."),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        description: "Unique identifier for the blog URL",
        options: {
          source: "title", // Generates slug from the title
          maxLength: 96,
        },
        validation: (Rule:Rule) => Rule.required().error("Slug is required."),
      },
      {
        name: "author",
        title: "Author",
        type: "string",
        description: "Enter the author's name",
        validation: (Rule:Rule) =>
          Rule.required().max(50).warning("Author name should not exceed 50 characters."),
      },
      {
        name: "date",
        title: "Publish Date",
        type: "text",
        description: "Select the publish date",
        validation: (Rule:Rule) => Rule.required().error("Date is required."),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        description: "Upload an image for the blog post",
        options: {
          hotspot: true, // Enables image cropping in Sanity Studio
        },
        validation: (Rule:Rule) => Rule.required().error("Image is required."),
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        description: "Add textual content for the blog post",
        of: [
          {
            type: "block", // Only text content is supported
            
          },
        ],
        validation: (Rule:Rule) => Rule.required().error("Content is required."),
      },
    ],
  };
  
  export default singleBlogSchema;
  