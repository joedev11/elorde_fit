import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import FlashRun from "@/components/sections/FlashRun";
import Bootcamp from "@/components/sections/Bootcamp";
import Hyrox from "@/components/sections/Hyrox";
import GroupRuns from "@/components/sections/GroupRuns";
import Collections from "@/components/sections/Collections";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AboutBrand from "@/components/sections/AboutBrand";
import CTABanner from "@/components/sections/CTABanner";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <FlashRun />
      <Bootcamp />
      <Hyrox />
      <GroupRuns />
      <Collections />
      <FeaturedProducts />
      <AboutBrand />
      <CTABanner />
      <Testimonials />
    </>
  );
}
