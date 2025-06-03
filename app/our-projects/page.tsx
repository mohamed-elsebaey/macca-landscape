import OurProjectsPage from "@/components/pages/our-projects/OurProjectsPage";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'مشاريعنا',
    description: 'اكتشف مشاريعنا المميزة في تصميم المناظر الطبيعية.',
};

export default function page() {
    return (
        <OurProjectsPage />
    );
}
