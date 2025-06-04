'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Leaf, Flower } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { categories, projectsSummary } from './_constants';
import Link from 'next/link';

const OurProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredProjects =
    selectedCategory === 'الكل'
      ? projectsSummary
      : projectsSummary.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-green-50/80 backdrop-blur-sm">
        <div className="content-width flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="float w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center shadow-sm">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gradient-2">
              أعمالنا في تنسيق الحدائق
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`px-8 py-3 rounded-2xl transition-all duration-300 font-semibold
                  ${selectedCategory === category
                    ? `shadow-md transform`
                    : `text-green-600 hover:bg-green-100 hover:text-green-700`
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="content-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group backdrop-blur-sm hover:shadow-2xl transition-all duration-300 
                          overflow-hidden hover:scale-[1.02] py-0"
            >
              <div className="relative overflow-hidden h-96 w-full">
                <Image
                  width={800}
                  height={800}
                  src={project.image}
                  alt={`Image of ${project.title} project (${project.category})`}
                  priority={index < 3 ? true : false}
                  loading={index > 3 ? 'lazy' : 'eager'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Leaf className="float w-5 h-5 text-white" />
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <Link href={`/our-projects/${project.titleEn}`}>
                    <Button
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-green-700 hover:text-green-800 font-bold 
                                 shadow-md backdrop-blur-sm border"
                    >
                      <Flower className="w-5 h-5 ml-2 text-green-600" />
                      عرض التفاصيل
                    </Button>
                  </Link>
                </div>
              </div>

              <CardContent className="flex flex-col items-center text-center gap-2 pb-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-green-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProjectsPage;
