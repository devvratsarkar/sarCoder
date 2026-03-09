import HomeBanner from "../../components/banners/HomeBanner";
import AgencyValueProposition from "../../components/pages/AgencyValueProposition";
import PlatformFeatures from "../../components/pages/PlatformFeatures";
import WeWorkWith from "../../components/pages/WeWorkWith";

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
