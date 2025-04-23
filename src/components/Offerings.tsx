import React from "react";
import SectionHeader from "./SectionHeader";
import { sanityClient } from "sanity:client";

interface OfferingsItem {
  icon: string;
  title: string;
  description: string;
}

interface OfferingsData {
  title: string;
  subtitle: string;
  description: string;
  list: OfferingsItem[];
}

interface Heading {
  _id: string;
  subtitle?: string;  // Optional since it's not required in schema
  title: string;
  description: string;
}

interface Card {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const offeringsData: OfferingsData = {
  subtitle: "Comprehensive Offerings",
  title: "Leverage Our Expertise",
  description:
    "Partner with Greymetre - From strategy to execution, we empower businesses with expert consulting, hands-on service support, and cutting-edge technology. Whether it's sales acceleration, operations efficiency, supply chain transformation, or digital innovation, our tailored solutions drive sustainable growth and competitive advantage.",
  list: [
    {
      icon: "/images/OfferingsOne.png",
      title: "Consulting",
      description: "Expert Guidance, Transformative Results",
    },
    {
      icon: "/images/OfferingsThree.png",
      title: "Services",
      description: "Tailored solutions and Turnkey implementation",
    },
    {
      icon: "/images/OfferingsTwo.png",
      title: "Products",
      description: "Innovative Tools to Drive Excellence",
    },
  ],
};

const CARDS_QUERY = `*[_type == "card"]{
  _id,
  title,
  description,
  "imageUrl": image.asset->url
}`;

const HEADINGS_QUERY = `*[_type == "heading"] | order(_createdAt asc) {
  _id,
  subtitle,
  title,
  description
}`;

export const Offerings = async () => {

  // Fetch cards with revalidation
  const cards = await sanityClient.fetch<Card[]>(CARDS_QUERY);

  const headings = await sanityClient.fetch<Heading[]>(HEADINGS_QUERY, {});

  const heading = headings[0];
  return (
    <section className="section">
      <div className="max-w-[85rem] mx-auto px-3">
        <div className="row">
          <div className="mx-auto lg:col-11">
            <SectionHeader
              tagline={heading?.subtitle || ''}
              heading={heading?.title || ''}
              subheading={heading?.description || ''}
              alignment="center"
            />
          </div>
          <div className="col-12 pt-20">
            <div className="row g-4 justify-center">
                {cards.map((card: Card, index: number) => (
                <div
                  key={card._id}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="min-h-full rounded-3xl bg-white p-4 transition-all shadow-xl">
                  <div className="mb-3">
                    <div className="aspect-square w-full rounded-2xl">
                    {card.imageUrl && (
                      <img
                      src={card.imageUrl}
                      alt={`icon related to ${card.title}`}
                      className="h-full w-full object-contain"
                      />
                    )}
                    </div>
                  </div>
                  <div className="text-left mb-4">
                    {card.title && (
                    <h3
                      className="h5 mb-2 md:text-3xl font-medium text-dark tracking-wide"
                      dangerouslySetInnerHTML={{ __html: card.title }}
                    />
                    )}
                    {card.description && (
                    <p
                      className="text-text"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                    )}
                  </div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
