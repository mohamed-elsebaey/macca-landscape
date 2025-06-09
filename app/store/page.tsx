import { StorePage } from "@/components/pages/store/StorePage";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'المتجر',
    description: 'تسوق منتجات وخدمات مكة لاندسكيب لتصميم وتنسيق الحدائق والمساحات الخارجية بأعلى جودة وابتكار.',
    keywords: [
        "مكة لاندسكيب", "المتجر", "منتجات الحدائق", "خدمات تنسيق الحدائق", "تصميم حدائق", "Landscape Store", "Macca Landscape Store"
    ],
};

export default function page() {
    return (
        <StorePage />
    );
}
