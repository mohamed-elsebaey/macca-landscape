import image1 from "@/public/images/hero-image.png";
import image2 from "@/public/images/العاصمة الادارية النهر الأخضر/all.webp";
import image3 from "@/public/images/العاصمة الادارية حي الوزاراء/all.webp";
import image4 from "@/public/images/مدينة الشبخ زايد/all.webp";
import image5 from "@/public/images/مدينة 6 أكتوبر/all.webp";
import image6 from "@/public/images/فلل/all.webp";
import image7 from "@/public/images/التجمع الخامس/all.webp";
import image8 from "@/public/images/مدينة الزعفرانه/all.webp";
import image9 from "@/public/images/مدينة العلمين/all.webp";
import { StaticImageData } from "next/image";

export type ProjectImage = {
  url: string;
  width: number;
  height: number;
  alt?: string;
  blurDataURL?: string; 
};

export type Project = {
  id: number,
  title: string;
  titleEn: string;
  category: string;
  year: string;
  image: string | StaticImageData;
  description?: string;
  images: ProjectImage[];
};

export const categories = ["الكل", "معارض", "حكومي", "مدن", "فلل"];

export const projects: Project[]  = [
  {
    id: 1,
    title: "معرض زهور الربيع 2025",
    titleEn: "Spring Flowers Exhibition 2025",
    category: "معارض",
    year: "2025",
    image: image1,
    description: "",
    images: Array.from({ length: 55 }, (_, i) => ({
      url: `/images/${encodeURIComponent("معرض زهور الربيع")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `صورة من معرض زهور الربيع 2025 رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 2,
    title: "النهر الأخضر العاصمة الإدارية",
    titleEn: "Green River, New Administrative Capital",
    category: "حكومي",
    year: "2024",
    image: image2,
    description: "",
    images: Array.from({ length: 10 }, (_, i) => ({
      url: `/images/${encodeURIComponent("العاصمة الادارية النهر الأخضر")}/${
        i + 1
      }.webp`,
      width: 1200,
      height: 800,
      alt: `النهر الأخضر العاصمة الإدارية صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 3,
    title: "حي الوزراء العاصمة الإدارية ",
    titleEn: "Ministers District, New Administrative Capital",
    category: "حكومي",
    year: "2024",
    image: image3,
    description: "",
    images: Array.from({ length: 4 }, (_, i) => ({
      url: `/images/${encodeURIComponent("العاصمة الادارية حي الوزاراء")}/${
        i + 1
      }.webp`,
      width: 1200,
      height: 800,
      alt: `حي الوزراء العاصمة الإدارية صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 4,
    title: "مدينة الشيخ زايد",
    titleEn: "Sheikh Zayed City",
    category: "مدن",
    year: "2024",
    image: image4,
    description: "",
    images: Array.from({ length: 7 }, (_, i) => ({
      url: `/images/${encodeURIComponent("مدينة الشبخ زايد")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `مدينة الشيخ زايد صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 5,
    title: "مدينة 6 أكتوبر",
    titleEn: "6th of October City",
    category: "مدن",
    year: "2024",
    image: image5,
    description: "",
    images: Array.from({ length: 6 }, (_, i) => ({
      url: `/images/${encodeURIComponent("مدينة 6 أكتوبر")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `مدينة 6 أكتوبر صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 6,
    title: "فلل خاصة",
    titleEn: "Private Villas",
    category: "فلل",
    year: "2024",
    image: image6,
    description: "",
    images: Array.from({ length: 9 }, (_, i) => ({
      url: `/images/${encodeURIComponent("فلل")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `فلل خاصة صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 7,
    title: "التجمع الخامس",
    titleEn: "Fifth Settlement",
    category: "مدن",
    year: "2024",
    image: image7,
    description: "",
    images: Array.from({ length: 5 }, (_, i) => ({
      url: `/images/${encodeURIComponent("التجمع الخامس")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `التجمع الخامس صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 8,
    title: "مدينة الزعفرانة",
    titleEn: "Zaafarana City",
    category: "مدن",
    year: "2024",
    image: image8,
    description: "",
    images: Array.from({ length: 4 }, (_, i) => ({
      url: `/images/${encodeURIComponent("مدينة الزعفرانه")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `مدينة الزعفرانة صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
  {
    id: 9,
    title: "مدينة العلمين الجديدة",
    titleEn: "New Alamein City",
    category: "مدن",
    year: "2024",
    image: image9,
    description: "",
    images: Array.from({ length: 6 }, (_, i) => ({
      url: `/images/${encodeURIComponent("مدينة العلمين")}/${i + 1}.webp`,
      width: 1200,
      height: 800,
      alt: `مدينة العلمين الجديدة صورة رقم ${i + 1}`,
      blurDataURL: "",
    })),
  },
];
