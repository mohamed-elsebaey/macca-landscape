import { ArrowLeft, Calendar, MapPin, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedProjects = () => {

  const projects = [
    {
      id: 1,
      title: 'حديقة معرض الربيع',
      location: 'مركز معارض القاهرة',
      year: '2024',
      image: '/lovable-uploads/bcd80272-b3bb-4b7c-aaf8-a5b387f95fc7.png',
      description: 'عرض نابض بالحياة يعرض الزهور الموسمية وتقنيات تنسيق الحدائق الحديثة.',
      category: 'معرض'
    },
    {
      id: 2,
      title: 'إضاءة الحديقة المسائية',
      location: 'مسكن خاص',
      year: '2024',
      image: '/lovable-uploads/5dc69bbd-d3f2-4fd3-9fd7-09f2179c317d.png',
      description: 'منظر طبيعي ليلي مذهل يتميز بإضاءة استراتيجية وترتيبات نباتية متنوعة.',
      category: 'سكني'
    },
    {
      id: 3,
      title: 'جنة نباتية',
      location: 'مجمع تجاري',
      year: '2024',
      image: '/lovable-uploads/ff16dc30-7def-47d9-9a78-a3e715fc9c59.png',
      description: 'حديقة خضراء تتميز بالنباتات الاستوائية ومسارات الحجر الطبيعي.',
      category: 'تجاري'
    }
  ];

  return (
    <section className="section-margin py-16 bg-gradient-to-b from-emerald-50 via-green-50 to-lime-50 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-300 to-green-400" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', filter: 'blur(60px)'}}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-lime-300 to-emerald-400" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', filter: 'blur(40px)'}}></div>
      </div>

      <div className="content-width relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4 text-gradient-2">
            المشاريع المميزة
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            استكشف أحدث تحف تنسيق الحدائق التي تُظهر خبرتنا في إنشاء بيئات خارجية مذهلة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 nature-card transform hover:-translate-y-6 organic-border leaf-shadow">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-emerald-900/20 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute top-6 right-6 z-20">
                  <span className="natural-gradient text-white px-6 py-3 organic-border text-sm font-bold leaf-shadow backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <Button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 nature-card text-green-700 hover:bg-green-50 leaf-shadow organic-border z-20">
                  <Eye className="w-5 h-5 ml-2" />
                  عرض التفاصيل
                </Button>
              </div>
              <CardContent className="p-10 text-right">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-base text-gray-500 pt-6 border-t border-green-100">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span className="font-medium">{project.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button className="natural-gradient hover:shadow-2xl text-white px-16 py-6 organic-border font-bold text-xl leaf-shadow transform transition hover:scale-110 group">
            عرض جميع المشاريع
            <ArrowLeft className="mr-4 w-7 h-7 group-hover:-translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;