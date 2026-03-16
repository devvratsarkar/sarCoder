import HomeBanner from "../../components/banners/HomeBanner";
import AgencyValueProposition from "../../components/pages/home/AgencyValueProposition";
import CreativeStudioSection from "../../components/pages/home/CreativeStudioSection";
import PrecisionArchitecture from "../../components/pages/home/PrecisionArchitecture";
import PlatformFeatures from "../../components/pages/home/PlatformFeatures";
import PoweredBySection from "../../components/pages/home/PoweredBySection";
import ServicesTechSection from "../../components/pages/home/ServicesTechSection";
import TeamSection from "../../components/pages/home/TeamSection";
import TimeLine from "../../components/pages/home/TimeLine";
import WeWorkWith from "../../components/pages/home/WeWorkWith";

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <PlatformFeatures />
            <TimeLine />
            <PrecisionArchitecture />
            <PoweredBySection />
            <CreativeStudioSection />
            <WeWorkWith />
            <TeamSection />
            <ServicesTechSection />
            <AgencyValueProposition />
        </>
    )
}
