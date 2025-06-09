import CartPage from "@/components/pages/cart/CartPage";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'سلة التسوق',
    description: 'استعرض محتويات سلة التسوق الخاصة بك في متجر مكة لاندسكيب وواصل عملية الشراء للحصول على أفضل منتجات وخدمات تنسيق الحدائق.',
    keywords: [
        "سلة التسوق", "مكة لاندسكيب", "شراء منتجات الحدائق", "خدمات تنسيق الحدائق", "تصميم حدائق", "تسوق", "Macca Landscape Cart", "Landscape Shopping Cart"
    ],
};

export default function page() {
    return (
        <CartPage />
    );
}
