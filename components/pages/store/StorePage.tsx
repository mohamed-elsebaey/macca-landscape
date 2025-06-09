'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Filter } from 'lucide-react';

import { categories, ProductProps, products, store, sunlightOptions } from './_constants';


export const StorePage = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSunlight, setSelectedSunlight] = useState('all');



    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSunlight = selectedSunlight === 'all' || product.sunlight === selectedSunlight;
        return matchesCategory && matchesSunlight;
    });

    const handleAddToCart = (product: ProductProps) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-bl from-green-50 via-white to-emerald-50">
            <main className="py-24">
                <div className="content-width">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-6xl font-bold text-gradient-2 mb-6">
                            {store.title}
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {store.subtitle}
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-6 mb-16 justify-center items-center">
                        <Filter className="w-6 h-6 text-green-600" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-white/90 backdrop-blur-md border-2 border-green-200 rounded-2xl px-8 py-4 focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-xl text-lg font-medium"
                        >
                            {categories.map(cat => (
                                <option key={cat.value} value={cat.value}>
                                    {cat.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedSunlight}
                            onChange={(e) => setSelectedSunlight(e.target.value)}
                            className="bg-white/90 backdrop-blur-md border-2 border-green-200 rounded-2xl px-8 py-4 focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-xl text-lg font-medium"
                        >
                            {sunlightOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProducts.map(product => (
                            <Card key={product.id} className="py-0 group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-md overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-80 object-cover"
                                    />
                                    {/* <div className="absolute top-6 left-6">
                                        <button className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-colors">
                                            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
                                        </button>
                                    </div> */}
                                    <div className="absolute bottom-6 right-6">
                                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                <CardContent className="p-8 text-right">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                                            {product.sunlight}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Button
                                            onClick={() => handleAddToCart(product)}
                                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-2xl px-8 py-3 font-bold shadow-xl transform transition hover:scale-105"
                                        >
                                            <ShoppingCart className="w-5 h-5 ml-2" />
                                            {store.addToCart}
                                        </Button>
                                        <span className="text-3xl font-bold text-gradient-2">
                                            {product.price} ج.م
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};


