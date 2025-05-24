import { Hero } from "@/components/sections/hero/Hero";
import { Stats } from "@/components/sections/stats/Stats";
import Swiper from "@/components/sections/swiper/Swiper";
import { TestPage } from "@/components/test/TestPage";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Swiper />
      <TestPage />
    </>
  );
}
