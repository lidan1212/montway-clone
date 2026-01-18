import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import TruePriceGuarantee from "@/components/TruePriceGuarantee";
import MembershipBenefits from "@/components/MembershipBenefits";
import PopularServices from "@/components/PopularServices";
import StateCards from "@/components/StateCards";
import FAQ from "@/components/FAQ";
import LatestStories from "@/components/LatestStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ReviewsCarousel />
      <HowItWorks />
      <WhyChooseUs />
      <TruePriceGuarantee />
      <MembershipBenefits />
      <PopularServices />
      <StateCards />
      <FAQ />
      <LatestStories />
      <Footer />
    </main>
  );
}
