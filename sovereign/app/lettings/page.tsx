import LettingHero from "@/app/components/lettings/LettingHero";
import LettingServicesSection from "@/app/components/lettings/LettingServicesSection";
import ConveyancingSection from "@/app/components/ConveyancingSection";
import LatestNewsSection from "@/app/components/LatestNewsSection";
import PartnersLogo from "@/app/components/PartnersLogo";
export default function Lettings() {
    return(
        <>
        <LettingHero />
        <LettingServicesSection />
        <ConveyancingSection />
        <LatestNewsSection />
        <PartnersLogo />
        </>
    );
}