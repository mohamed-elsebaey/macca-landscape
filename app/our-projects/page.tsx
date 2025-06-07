import OurProjectsPage from "@/components/pages/our-projects/OurProjectsPage";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'مشاريعنا',
    description: 'استعرض أبرز مشاريع مكة لاندسكيب في تصميم وتنفيذ الحدائق والمساحات الخارجية بمختلف أنواعها.',
    keywords: [
      "مشاريع مكة لاندسكيب", "أعمالنا", "تصميم حدائق", "تنفيذ حدائق", "Landscape Projects", "Garden Portfolio", "معارض زهور", "مشاريع حكومية", "مشاريع فلل"
    ],
};

export default function page() {
    return (
        <OurProjectsPage />
    );
}
