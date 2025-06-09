'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const cart = {
    title: 'سلة التسوق',
    empty: 'سلتك فارغة',
    continueShopping: 'متابعة التسوق',
    orderSummary: 'ملخص الطلب',
    subtotal: 'المجموع الفرعي',
    shipping: 'الشحن',
    free: 'مجاني',
    total: 'الإجمالي',
    checkout: 'إتمام الشراء',
    checkoutMessage: 'شكراً لطلبك! في التطبيق الحقيقي، سيتم معالجة الدفع.'
}

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

    const handleCheckout = () => {
        const message = [
            "طلب شراء من موقع مكة لاندسكيب",
            "_______________________________",
            ...cartItems.map(
            (item, idx) =>
                `${idx + 1}. ${item.name}\n    الكمية: ${item.quantity}\n    السعر: ${(item.price * item.quantity).toFixed(2)} ج.م`
            ),
            "_______________________________",
            `المجموع الفرعي: ${getCartTotal().toFixed(2)} ج.م`,
            `الشحن: مجاني`,
            `الإجمالي: ${getCartTotal().toFixed(2)} ج.م`,
            "_______________________________",
            "يرجى مراجعة الطلب والتواصل لإتمام الشراء."
        ].join('\n');
        const phone = '201002905831';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        clearCart();
    };

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen py-16 px-4 sm:py-24">
                <div className="content-width text-center">
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 natural-gradient animate-pulse rounded-full flex items-center justify-center shadow-2xl">
                            <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-gradient-2 mb-6 sm:mb-8">
                        {cart.title}
                    </h1>
                    <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12">
                        {cart.empty}
                    </p>
                    <Link href='/store'>
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl">
                            {cart.continueShopping}
                        </Button>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-16 px-2 sm:px-4 sm:py-24">
            <div className="content-width">
                <div className="text-center mb-8 sm:mb-12">
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 natural-gradient animate-pulse rounded-full flex items-center justify-center shadow-2xl">
                            <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-gradient-2">
                        {cart.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-12">
                    <div className="lg:col-span-2">
                        {cartItems.map(item => (
                            <Card key={item.id} className="mb-4 sm:mb-6 shadow-xl border-0 bg-white/90 backdrop-blur-md">
                                <CardContent className="p-4 sm:p-8">
                                    <div className="flex flex-col sm:flex-row items-center sm:space-x-6 sm:space-x-reverse space-y-4 sm:space-y-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl shadow-lg"
                                        />
                                        <div className="flex-1 text-center sm:text-right">
                                            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-gradient-2 font-bold text-base sm:text-xl">
                                                {item.price}ج.م
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="rounded-xl"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </Button>
                                            <span className="mx-2 sm:mx-4 px-2 sm:px-4 py-1 sm:py-2 border-2 rounded-xl font-bold text-base sm:text-lg min-w-[40px] sm:min-w-[60px] text-center">
                                                {item.quantity}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="rounded-xl"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50 rounded-xl"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div>
                        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md">
                            <CardContent className="p-4 sm:p-8 text-center sm:text-right">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                    {cart.orderSummary}
                                </h3>
                                <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                                    <div className="flex justify-between text-base sm:text-lg">
                                        <span>{getCartTotal().toFixed(2)}ج.م</span>
                                        <span>{cart.subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-base sm:text-lg">
                                        <span>{cart.free}</span>
                                        <span>{cart.shipping}</span>
                                    </div>
                                    <div className="border-t-2 pt-2 sm:pt-4">
                                        <div className="flex justify-between font-bold text-lg sm:text-2xl">
                                            <span className="text-gradient-2">{getCartTotal().toFixed(2)}ج.م</span>
                                            <span>{cart.total}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    disabled={getCartTotal() < 5000}
                                    className={`w-full py-2 rounded-2xl font-bold text-base sm:text-lg shadow-xl
                                        ${getCartTotal() < 5000
                                            ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                                            : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white cursor-pointer"
                                        }`
                                    }
                                >
                                    {cart.checkout}
                                </button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
