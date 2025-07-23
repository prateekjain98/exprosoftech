import React, { useEffect, useState } from "react";
import { sanityClient } from "sanity:client";
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

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsQuery = `*[_type == "post"] | order(date desc)[0..2] {
          title,
          "slug": slug.current,
          date,
          excerpt,
          "image": image.asset->url,
          "body": body,
          "author": author->name
        }`;

        const fetchedPosts = await sanityClient.fetch(postsQuery);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const blogSectionContent = {
    subtitle: "Latest Insights",
    title: "Our Blog",
    description:
      "Stay updated with our latest thoughts, insights, and industry trends",
  };

  if (loading) {
    return (
      <section className="section overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-10">
              <div>Loading...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  <div className="blog-card">
                    {blog.image && (
                      <div className="blog-image">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                    )}
                    <div className="blog-content">
                      <h3>{blog.title}</h3>
                      <p>{blog.excerpt}</p>
                      <div className="blog-meta">
                        <span>{blog.author}</span>
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                      </div>
                    </div>
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
