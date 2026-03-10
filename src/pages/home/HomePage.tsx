import HomeBanner from "../../components/banners/HomeBanner";
import AgencyValueProposition from "../../components/pages/home/AgencyValueProposition";
import CreativeStudioSection from "../../components/pages/home/CreativeStudioSection";
import PlatformFeatures from "../../components/pages/home/PlatformFeatures";
import ServicesTechSection from "../../components/pages/home/ServicesTechSection";
import WeWorkWith from "../../components/pages/home/WeWorkWith";

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <PlatformFeatures />
            <CreativeStudioSection />
            <WeWorkWith />
            <ServicesTechSection />
            <AgencyValueProposition />
        </>
    )
}
