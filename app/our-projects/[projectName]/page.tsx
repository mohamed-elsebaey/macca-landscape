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
      keywords: [],
    };
  }

  return {
    title: project.title,
    description:
      project.description ||
      `تفاصيل مشروع ${project.title} من تنفيذ مكة لاندسكيب، خبرة في تصميم وتنفيذ الحدائق والمساحات الخارجية بمصر.`,
    keywords: [
      "مشاريع مكة لاندسكيب",
      project.title,
      project.category,
      "تصميم حدائق",
      "تنفيذ حدائق",
      "Landscape Project",
      "Garden Design",
      "حدائق مصر",
    ],
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
