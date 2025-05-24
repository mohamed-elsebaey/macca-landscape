import React from "react";

// import image1 from "@/public/images/image1.jpg";
// import image2 from "@/public/images/background-image-2.jpg";
// import image3 from "@/public/images/background-image-3.jpg";
// import image4 from "@/public/images/background-image-4.jpg";
// import Link from "next/link";
// import Image from "next/image";
// import { companyName } from "@/constants";

export const TestPage = () => {
  return (
    <>
      {/* <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1700731993.png"
                alt="Blazer image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Black Blazer
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Men’s Suits</p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1700732011.png"
                alt="printed top image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Red Flowers
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Womenswear</p>
              </div>
            </a>

            <a
              href="javascript:;"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1700732027.png"
                alt="Denim jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Denim Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Children Wear</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}

      {/* <div dir='ltr' className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
        <div className="mx-auto max-w-xl lg:max-w-screen-xl">
          <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900">
                  This is Flippy
                </p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                The #1 Marketplace <br />
                in
                <span className="inline-block text-green-500">
                  Pacific Ocean
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                consequuntur quaerat! Optio.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
              <a
                href="/"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"
              >
                {" "}
                Start a free Trial{" "}
              </a>
              <a
                href="/"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-green-500 px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto"
              >
                Watch a demo video
              </a>
            </div>

            <div className="mt-6 flex justify-center -space-x-4 lg:justify-start">
              <img
                className="h-12 w-12 rounded-full ring ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <img
                className="h-12 w-12 rounded-full ring ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <img
                className="h-12 w-12 rounded-full ring ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              />
              <div className="">
                <span className="pl-8 font-semibold">Customer Reviews</span>
                <div className="flex w-auto items-center justify-center space-x-1 pl-8">
                  <svg
                    className="h-auto w-5 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-400">
                    {" "}
                    4.9 •{" "}
                    <a href="#" className="text-sm font-normal underline">
                      129 reviews
                    </a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
            <svg
              className="h-full w-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="img1" x="0" y="0" width="1" height="1">
                  <image
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMaxYMax slice"
                    href={image1.src}
                  />
                </pattern>
              </defs>

              <path
                fill="url(#img1)"
                d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div> */}

      {/* <div dir='ltr' className="relative mx-auto my-20 flex max-w-xl flex-col items-center justify-center px-10 py-20">
        <svg
          className="absolute -top-10 -left-10 text-9xl opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
          />
        </svg>
        <h1 className="mb-6 text-4xl font-black text-white">Amazing!</h1>
        <p className="max-w-md text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aperiam placeat esse incidunt blanditiis maxime at quisquam ipsum quia
          voluptates?
        </p>
        <div className="-z-10 absolute overflow-hidden h-full w-full flex justify-center">
          <svg
            className="w-[40rem] sm:w-full shrink-0"
            viewBox="0 0 225 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M2.00003 57.0391C-3.60997 75.6991 2.82003 103.009 17.37 117.559C31.91 132.109 54.95 139.839 76.94 137.559C92.8 135.909 107.42 129.519 122.71 125.509C138 121.499 155.69 120.159 168.97 127.889C175.82 131.869 181.35 138.159 189.42 139.599C196.67 140.899 204.25 137.719 209.18 132.909C214.1 128.099 216.79 121.879 218.85 115.679C224.65 98.2691 226.3 79.8191 223.68 61.8391C221.84 49.2191 217.61 36.3491 207.83 26.8991C192.99 12.5491 169.11 9.13909 147.21 6.14909C127.53 3.45909 107.79 0.419095 87.87 0.589095C67.95 0.749095 47.5701 4.3391 30.9601 13.9091C14.3401 23.4691 2.05003 39.6891 2.00003 57.0391Z"
              fill="url(#paint0_linear_15_6)"
            />{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_15_6"
                x1="-40.5"
                y1="78.5"
                x2="225"
                y2="53"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#4e923d" />{" "}
                <stop offset="1" stopColor="#0a5c39" />{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </svg>
        </div>
        <div className="mt-4 flex items-center rounded-xl bg-white px-10 py-4">
          <Image
            className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full object-cover align-middle"
            src={image2.src}
            alt="CEO Image"
            width={100}
            height={100}
            loading="lazy"
          />
          <div className="ml-3 ">
            <h4 className="text-lg font-semibold">Mohamed Ramadan</h4>
            <h4 className="mt-px text-xs">CEO, Macca Landscape</h4>
          </div>
        </div>
      </div> */}
    </>
  );
};
