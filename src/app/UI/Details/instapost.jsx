import React from "react";
import Script from "next/script";

export default function InstaPost() {
  return (
    <section>
      <div className="flex justify-center items-center text-center mb-[60px] mt-[100px]">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Post Update
        </h1>
      </div>

      <div className="relative flex justify-center items-center w-full h-auto px-[40px] md:px-[60px] lg:px-[100px]">
        <blockquote
          className="instagram-media relative flex w-full max-w-[700px]"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/DGKk-4lSJX2/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        >
          <div className="p-4">
            <a
              href="https://www.instagram.com/p/DGKk-4lSJX2/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              className="block text-center text-blue-500 font-semibold text-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="w-24 h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="w-16 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="py-16"></div>
              <div className="w-12 h-12 mx-auto mb-3">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 60 60"
                  version="1.1"
                  fill="#000"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-511.000000, -20.000000)"
                      fill="#000000"
                    >
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-blue-500 text-sm font-semibold">
                View this post on Instagram
              </div>
            </a>
            <div className="py-4"></div>
            <div className="text-center text-gray-400 text-sm">
              <a
                href="https://www.instagram.com/p/DGKk-4lSJX2/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank"
                className="text-gray-400"
              >
                A post shared by Bali Run Calendar - Running Events &
                Communities (@baliruncalendar)
              </a>
            </div>
          </div>
        </blockquote>
        <Script src="//www.instagram.com/embed.js" async />
      </div>
    </section>
  );
}
