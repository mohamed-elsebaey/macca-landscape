import Image from "next/image";
import Link from "next/link";
import React from "react";

import { companyName } from "@/constants";
import heroImage from '@/public/images/hero-image.png'
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <>
      {/*  */}
      <section className="section-margin relative ">
        <div className="content-width">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-start text-center">
                اخلق حديقة أحلامك مع
                <span className="m-2 p-1 rounded inline-block bg-gradient-to-r from-lime-400 to-sky-400 px-2 font-bold text-white">
                  {companyName.ar}
                </span>
              </h2>
              <p className="lg:text-start text-center">
                نقدم لك حلولاً متكاملة لتصميم وتنسيق الحدائق والمساحات الخضراء،
                مع فريق من الخبراء يضمن لك أعلى معايير الجودة والابتكار. استمتع
                بجمال الطبيعة في منزلك أو مكان عملك مع تصاميم عصرية ونباتات
                مختارة بعناية وأنظمة ري ذكية تدوم طويلاً.
              </p>
              <ul className="list-inside list-disc space-y-1 text-gray-500">
                <li>تصميم حدائق خاصة وعامة بأحدث الأساليب</li>
                <li>توريد وتركيب نباتات وزهور موسمية ودائمة</li>
                <li>تنفيذ شلالات ونوافير ومسطحات خضراء</li>
                <li>أنظمة ري أوتوماتيكية وصيانة دورية</li>
              </ul>

              <div className="flex gap-4">
                <Link href="/#contact-us">
                  <Button
                    variant="default"
                    size="lg"
                    className="font-semibold cursor-pointer bg-gradient-to-r from-lime-400 to-sky-400 shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-105 hover:bg-sky-500 focus:ring"
                  >
                    تواصل معنا 
                  </Button>
                </Link>
                <Link
                  href="/#videos"
                  className="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-lime-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  شاهد أعمالنا
                </Link>
                {/* <DownloadCompanyProfileButton /> */}
              </div>
            </div>
            <div className="overflow-hidden">
              <Image
                width={1000}
                height={1000}
                className="lg:mx-0 mx-auto max-h-[550px] rounded-3xl object-cover"
                src={heroImage.src}
                alt="hero image"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
