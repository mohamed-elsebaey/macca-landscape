import AboutUsPage from "@/components/pages/about-us/AboutUsPage";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: 'عن مكة لاندسكيب',
  description: 'تعرف على تاريخ وخبرة مكة لاندسكيب في تصميم وتنسيق الحدائق والمساحات الخارجية، مع التزامنا بالجودة والابتكار.',
  keywords: [
    "مكة لاندسكيب", "عن الشركة", "فريق العمل", "خبرة", "تصميم حدائق", "تنسيق حدائق", "Landscape Egypt", "About Macca Landscape"
  ],
};

export default function page() {
  return (
    <AboutUsPage />
  );
}
