import { notFound } from "next/navigation";
import { projects } from "@/components/pages/our-projects/_constants";
import { Metadata } from "next";
import ImageMasonryGallery from "@/components/sections/ImageMasonryGallery";

type Props = {
  params: Promise<{
    projectName: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params;
  const decodedTitle = decodeURIComponent(projectName);
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
  const { projectName } = await params;
  const decodedTitle = decodeURIComponent(projectName);
  const project = projects.find((proj) => proj.titleEn === decodedTitle);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen content-width py-16">
      <ImageMasonryGallery images={project.images} />
    </main>
  );
}
