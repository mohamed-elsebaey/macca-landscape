import { Palette, TreePine, Wrench, Leaf, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
    const services = [
        {
            icon: Palette,
            title: 'تصميم المساحات الخضراء',
            description: 'تصميم حدائق احترافية ومخصصة تتوافق مع بيئتك ورؤيتك.',
            features: [
                'تحليل موقع الأرض',
                'عرض ثلاثي الأبعاد للتصميم',
                'اختيار نباتات زينة مناسبة',
                'تخطيط العناصر الصلبة (Hardscape)'
            ]
        },
        {
            icon: TreePine,
            title: 'توريد نباتات الزينة',
            description: 'نوفر مجموعة واسعة من النباتات وأشجار الزينة من مشتلنا المتخصص.',
            features: [
                'تنوع واسع من الأنواع',
                'نباتات صحية ومعتنى بها',
                'استشارات زراعية متخصصة',
                'خدمة التوصيل إلى الموقع'
            ]
        },
        {
            icon: Wrench,
            title: 'التركيب والتنفيذ',
            description: 'خدمات تركيب احترافية لتحويل التصميم إلى واقع في حديقتك.',
            features: [
                'تهيئة الموقع وتجهيزه',
                'زراعة النباتات والأشجار',
                'تركيب أنظمة الري الآلي',
                'ضمان جودة العمل وسلامة المواد'
            ]
        },
        {
            icon: Leaf,
            title: 'الصيانة الدورية',
            description: 'رعاية مستمرة للحفاظ على حديقة صحية وخضراء طوال العام.',
            features: [
                'تقليم وتشكيل النباتات',
                'تسميد ومغذيات طبيعية',
                'مكافحة الآفات والأمراض',
                'خدمات العناية الموسمية'
            ]
        },
        {
            icon: Users,
            title: 'الاستشارات الزراعية',
            description: 'خبراء تنسيق الحدائق يقدمون لك النصائح والحلول لجميع تحدياتك.',
            features: [
                'زيارة ميدانية لتقييم الموقع',
                'حلول تقنية لمشكلات صحة النبات',
                'اقتراح أفكار تصميمية مبتكرة',
                'متابعة دورية وتعديل الخطة'
            ]
        },
        {
            icon: Shield,
            title: 'برامج العناية بالحدائق',
            description: 'برامج شاملة للعناية بالحديقة لضمان استدامتها وجمالها.',
            features: [
                'جداول صيانة منتظمة',
                'مراقبة صحة النباتات بانتظام',
                'تحديثات موسمية وتنسيق متجدد',
                'خدمات الطوارئ والإصلاح السريع'
            ]
        }
    ];

    return (
        <section
            dir="rtl"
            className="py-10 section-margin text-foreground"
        >
            <div className="content-width">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gradient-2">
                        خدماتنا
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
                        من الفكرة إلى التنفيذ، نقدم حلول تنسيق حدائق متكاملة لتحويل مساحتك الخارجية إلى تحفة طبيعية.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group transition-all duration-300 border border-border bg-gray-100 hover:bg-gray-200 hover:border-primary hover:shadow-xl"
                        >
                            <CardContent className="p-8">
                                <div className="mb-6">
                                    <div className="w-16 h-16 background-gradient rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                                        <service.icon className="w-8 h-8 text-primary-foreground transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-right text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="mb-4 text-right text-foreground">
                                        {service.description}
                                    </p>
                                </div>
                                <ul className="space-y-2 pr-4">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-sm text-muted-foreground"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full ml-3 bg-primary"></div>
                                            <span className="text-right">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://wa.me/+201002905831"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <Button size='lg'>احصل على استشارة مجانية</Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
