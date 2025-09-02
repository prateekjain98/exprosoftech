import React from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "./common/Button";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  body: string;
  author: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts = [] }) => {
  const blogSectionContent = {
    subtitle: "Latest Insights",
    title: "Our Blog",
    description:
      "Stay updated with our latest thoughts, insights, and industry trends",
  };

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-10" data-aos="fade-up-sm">
            <SectionHeader
              tagline={blogSectionContent.subtitle}
              heading={blogSectionContent.title}
              subheading={blogSectionContent.description}
            />
          </div>
          <div
            className="col-12 mt-12"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row gx-4 gy-5 justify-center md:gx-5">
              {posts?.map((blog) => (
                <div key={blog._id} className="md:col-6 lg:col-4">
                  <div className="bg-body h-full">
                    {blog.image && (
                      <div className="relative flex items-center justify-center">
                        <div className="aspect-video w-full mb-6 overflow-hidden rounded-3xl">
                          <img
                            className="h-full w-full object-cover"
                            src={blog.image}
                            alt={blog.title}
                            width={400}
                            height={250}
                          />
                        </div>
                      </div>
                    )}
                    <div className="mb-4 flex items-center gap-x-2">
                      <img
                        className="w-5"
                        src="/images/icons/png/date.png"
                        alt="date icon"
                        width={20}
                        height={20}
                      />
                      <p className="inline-block font-medium text-tertiary">
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    {blog.title && (
                      <h3 className="h5 mb-3">
                        <a
                          href={`/blog/${blog.slug}/`}
                          className="hover:text-primary transition-colors"
                        >
                          {blog.title}
                        </a>
                      </h3>
                    )}
                    {blog.excerpt && (
                      <p className="mb-6 text-text">{blog.excerpt}</p>
                    )}
                    <a
                      className="btn btn-text border-none inline-flex items-center gap-2 hover:text-primary transition-colors"
                      href={`/blog/${blog.slug}/`}
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More
                      <div className="icon-wrapper">
                        <span className="icon" aria-hidden="true">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-12 mt-12 flex justify-center"
            data-aos="fade-up-sm"
            data-aos-delay="400"
          >
            <Button href="/blog/" variant="primary" showArrow={true}>
              See More Blogs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
