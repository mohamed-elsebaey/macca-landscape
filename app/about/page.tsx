import AboutUsPage from "@/components/pages/about-us/AboutUsPage";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: 'عن مكة لاندسكيب',
  description: 'اكتشف كيف يمكننا تحويل مساحتك الخارجية إلى ملاذ طبيعي جميل.',
};

export default function page() {
  return (
    <AboutUsPage />
  );
}
