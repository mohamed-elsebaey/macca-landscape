// app/[projectName]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, ProjectImage } from "@/components/pages/our-projects/_constants";
import { Metadata } from "next";



type Props = {
  params: {
    projectName: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const param = (await params).projectName
  const decodedTitle = decodeURIComponent(param);
  const project = projects.find((proj) => proj.titleEn === decodedTitle);

  if (!project) {
    return {
      title: "",
      description: "",
    };
  }

  return {
    title: project.title,
    description: project.description || "اكتشف المزيد عن مشاريع مكة لاندسكيب.",
  };
}

export default async function Page({ params }: Props) {
  const param = (await params).projectName
  const decodedTitle = decodeURIComponent(param);
  const project = projects.find((proj) => proj.titleEn === decodedTitle);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen content-width py-16">
      
      {/* حاوية Masonry باستخدام الـ Columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {project.images.map((img: ProjectImage, idx: number) => (
          <div
            key={idx}
            className="relative mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={img.url}
              alt={img.alt || project.title}
              width={img.width}
              height={img.height}
              sizes={`(max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                       33vw`}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              placeholder={img.blurDataURL ? "blur" : undefined}
              blurDataURL={img.blurDataURL}
              loading="lazy" //.lazy is default in Next 13 عموماً، لكن نضيفها هنا ضمانًا
            />
          </div>
        ))}
      </div>
    </main>
  );
}
