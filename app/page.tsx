// import FeaturedProjects from "@/components/sections/featuredProjects/FeaturedProjects";
import { Hero } from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import { Stats } from "@/components/sections/stats/Stats";
// import Swiper from "@/components/sections/swiper/Swiper";
import { TestPage } from "@/components/test/TestPage";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      {/* <Swiper /> */}
      {/* <FeaturedProjects /> */}
      <TestPage />
    </>
  );
}
