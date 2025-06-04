// components/ImageMasonryGallery.tsx
"use client";

import Image from "next/image";
import { ProjectImage } from "@/components/pages/our-projects/_constants";

interface Props {
  images: ProjectImage[];
}

const ImageMasonryGallery = ({ images }: Props) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={img.url}
            alt={img.alt || ""}
            width={img.width}
            height={img.height}
            sizes={`
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            `}
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            placeholder={img.blurDataURL ? "blur" : undefined}
            blurDataURL={img.blurDataURL}
            priority={idx < 3} // Load first 3 images eagerly
            loading={idx >= 3 ? "lazy" : "eager"}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageMasonryGallery;


// // components/ImageMasonryGallery.tsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ProjectImage } from "@/components/pages/our-projects/_constants";

// interface Props {
//   images: ProjectImage[];
//   batchSize?: number; // حجم كل دفعة تحميل (افتراضيًا 10)
// }

// const ImageMasonryGallery = ({ images, batchSize = 10 }: Props) => {
//   // عدد الصور التي تم عرضها/تحميلها حاليًا
//   const [loadedCount, setLoadedCount] = useState<number>(batchSize);
//   const loadMoreRef = useRef<HTMLDivElement>(null);

//   // بمجرد أن ترصد الـ observer أن sentinel أصبح في العرض (داخل الـ viewport)
//   // نزيد loadedCount بقدر batchSize (أو أقل إذا اقتربنا من نهاية المصفوفة)
//   useEffect(() => {
//     if (loadedCount >= images.length) return; // إذا حملنا كل الصور ننهي الـ observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setLoadedCount((prev) =>
//               Math.min(prev + batchSize, images.length)
//             );
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.1,
//       }
//     );

//     if (loadMoreRef.current) {
//       observer.observe(loadMoreRef.current);
//     }

//     return () => {
//       if (loadMoreRef.current) {
//         observer.unobserve(loadMoreRef.current);
//       }
//     };
//   }, [loadedCount, images.length, batchSize]);

//   // نحصل على قسم الصور التي نريد عرضها حاليًا
//   const toDisplay = images.slice(0, loadedCount);

//   return (
//     <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
//       {toDisplay.map((img, idx) => (
//         <div
//           key={idx}
//           className="relative mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg"
//         >
//           <Image
//             src={img.url}
//             alt={img.alt || ""}
//             width={img.width}
//             height={img.height}
//             sizes={`
//               (max-width: 640px) 100vw,
//               (max-width: 1024px) 50vw,
//               33vw
//             `}
//             className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//             placeholder={img.blurDataURL ? "blur" : undefined}
//             blurDataURL={img.blurDataURL}
//             loading="lazy"
//           />
//         </div>
//       ))}

//       {/* sentinel لعند تحميل دفعة جديدة عند وصوله للعرض */}
//       {loadedCount < images.length && (
//         <div ref={loadMoreRef} className="h-1 w-full"></div>
//       )}
//     </div>
//   );
// };

// export default ImageMasonryGallery;
