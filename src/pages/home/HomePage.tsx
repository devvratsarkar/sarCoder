import HomeBanner from "../../components/banners/HomeBanner";
import AgencyValueProposition from "../../components/pages/home/AgencyValueProposition";
import PlatformFeatures from "../../components/pages/home/PlatformFeatures";
import WeWorkWith from "../../components/pages/home/WeWorkWith";

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <PlatformFeatures />
            <WeWorkWith />
            <AgencyValueProposition />
        </>
    )
}
