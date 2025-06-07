import Services from "@/components/sections/services/Services";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'خدماتنا',
    description: 'خدمات مكة لاندسكيب تشمل تصميم وتنفيذ وصيانة الحدائق والمساحات الخضراء باستخدام أحدث التقنيات وأفضل النباتات.',
    keywords: [
      "خدمات مكة لاندسكيب", "تصميم حدائق", "تنفيذ حدائق", "صيانة حدائق", "مشتل", "زراعة", "Landscape Services", "Garden Maintenance"
    ],
};

export default function page() {
    return (
        <div className="py-12">
            <Services />
        </div>
    );
}
