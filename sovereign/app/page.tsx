import Hero from "@/app/components/Hero";
import AwardWinningSection from "@/app/components/AwardWinningSection";
import SellOrRentSection from "@/app/components/SellorrentSection";
import ConveyancingSection from "@/app/components/ConveyancingSection";
import LatestNewsSection from "@/app/components/LatestNewsSection";
import PartnersLogo from "./components/PartnersLogo";

export default function Home() {
  return (
    <>
      <Hero />
      <AwardWinningSection />
      <SellOrRentSection />
      <ConveyancingSection />
      <LatestNewsSection />
      <PartnersLogo />
    </>
  );
}