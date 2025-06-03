import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { projects } from "@/components/pages/our-projects/_constants";
import { notFound } from "next/navigation";


interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    projectName: string;
  }>;
}


export default async function Layout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = (await params).projectName;

  return (
    <div className="min-h-screen">
      <Breadcrumb projectTitleEn={resolvedParams} />
      {children}
    </div>
  );
}

const Breadcrumb = ({ projectTitleEn }: { projectTitleEn: string }) => {
  const decodedTitle = decodeURIComponent(projectTitleEn);
  const project = projects.find((proj) => proj.titleEn === decodedTitle);

  if (!project) {
    return notFound();
  }
    
  return (
    <div className="section-margin pt-20 pb-4 border-b">
      <ul className="content-width flex items-center font-medium">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex gap-2 items-center hover:text-primary"
          >
            <Home className="w-4 h-4" />
            الرئيسية
          </Link>
          <ArrowLeft className="w-4 h-4 mx-2" />
        </li>
        <li className="flex items-center">
          <Link href="/our-projects" className="hover:text-primary">
            أعمالنا
          </Link>
          <ArrowLeft className="w-4 h-4 mx-2" />
        </li>
        <li className="text-primary font-semibold">{project?.title}</li>
      </ul>
    </div>
  );
};
