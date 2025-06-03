import Services from "@/components/sections/services/Services";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'عن خدماتنا',
    description: 'اكتشف كيف يمكننا تحويل مساحتك الخارجية إلى ملاذ طبيعي جميل.',
};

export default function page() {
    return (
        <div className="py-12">
            <Services />
        </div>
    );
}
