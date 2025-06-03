
import Image from 'next/image';
import { Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import aboutUsImage1 from '@/public/aboutUsImage1.jpeg'; // Assuming you have an about us image
import aboutUsImage2 from '@/public/aboutUsImage2.jpeg'; // Assuming you have an about us image

import { about, hero, team } from './_constants';



const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      {/* Hero Section */}
      <section className="section-margin py-24 relative overflow-hidden">
        <div className="content-width flex items-center relative z-10">
          <div className="flex flex-col lg:flex-row text-center lg:text-start lg:justify-between gap-16 items-center w-full">
            {/* Content */}
            <div className='flex flex-col gap-8 w-full lg:w-1/2'>
              <div className="space-y-8">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {hero.title}
                  <span className="block text-gradient-2">{hero.subtitle}</span>
                </h1>
                <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
                  {hero.description}
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center nature-card p-6 organic-border leaf-shadow">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold natural-gradient bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600 mt-3 font-medium">{hero.projectsCompleted}</div>
                </div>
                <div className="text-center nature-card p-6 organic-border leaf-shadow">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold natural-gradient bg-clip-text text-transparent">16+</div>
                  <div className="text-sm text-gray-600 mt-3 font-medium">{hero.yearsExperience}</div>
                </div>
                <div className="text-center nature-card p-6 organic-border leaf-shadow">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold natural-gradient bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-gray-600 mt-3 font-medium">{hero.happyClients}</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}

            <div className="relative z-10 w-full lg:w-1/2">
              <div className="relative organic-border overflow-hidden leaf-shadow">
                <Image
                  width={800}
                  height={500}
                  src={aboutUsImage1}
                  alt="معرض المناظر الطبيعية الجميلة"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-emerald-900/10"></div>
              </div>

              {/* Enhanced Floating Cards */}
              <div className="float absolute -top-8 -right-8 nature-card organic-border leaf-shadow p-8 max-w-xs backdrop-blur-lg animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 natural-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">✓</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-xl">تصميم خبير</div>
                    <div className="text-sm text-gray-600 mt-1">تنسيق حدائق احترافي</div>
                  </div>
                </div>
              </div>

              <div className="float absolute -bottom-8 -left-8 nature-card organic-border leaf-shadow p-8 max-w-xs backdrop-blur-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 natural-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">🌱</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-xl">نباتات مميزة</div>
                    <div className="text-sm text-gray-600 mt-1">جودة عالية من المشتل</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className='order-2 lg:order-1'>
              <Image
                width={800}
                height={500}
                src={aboutUsImage2}
                alt="معرض المناظر الطبيعية الجميلة"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="text-right order-1 lg:order-2">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{about.mission}</h2>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {about.missionText}
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{about.vision}</h2>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {about.visionText}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Team */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="content-width">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gradient-2 mb-6">
              {about.meetTeam}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {about.teamSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-200 border-0">
                <CardContent className="p-10">
                  <div className="w-40 h-40 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                    {/* <span className="text-2xl text-green-600 font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span> */}
                    <Image src={member.profileImage} alt={member.description} width={220} height={220} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-6 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
