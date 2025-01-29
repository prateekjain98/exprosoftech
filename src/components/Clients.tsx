import { useEffect, useState } from "react";

interface ClientsProps {
  list: string[];
}

export const Clients: React.FC<ClientsProps> = ({ list }) => {
  return (
    <section className="section">
      <div className="max-w-[85rem] mx-auto px-3 overflow-hidden">
        <div className="row">
          <div className="col-12" data-aos="fade-up-sm">
            <div className="text-center sm:flex sm:flex-col">
              <p className="text-black pt-4 text-[1.5rem] font-bold">
                We have been working with some Fortune{" "}
                <span className="text-primary">500+</span> clients
              </p>
            </div>
          </div>
          <div
            className="col-12 pt-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="marquee">
              <div className="marquee-track">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="marquee-content">
                    {list?.map((logo, idx) => (
                      <div key={idx} className="flex items-center mx-6">
                        <img
                          src={logo}
                          alt="brand logo"
                          className="w-36"
                          height="120"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .marquee {
            position: relative;
            width: 100%;
            overflow: hidden;
            max-width: 100vw;
          }

          .marquee::before,
          .marquee::after {
            content: "";
            position: absolute;
            top: 0;
            width: 10rem;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }

          .marquee::before {
            left: 0;
            background: linear-gradient(to right, white, transparent);
          }

          .marquee::after {
            right: 0;
            background: linear-gradient(to left, white, transparent);
          }

          .marquee-track {
            display: flex;
            opacity: 1;
            width: fit-content;
            animation: scroll 30s linear infinite;
            max-width: none;
          }

          .marquee-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            flex-shrink: 0;
            max-width: none;
          }

          .marquee-content img {
            max-width: 144px;
            width: auto;
            height: auto;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee:hover .marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};
