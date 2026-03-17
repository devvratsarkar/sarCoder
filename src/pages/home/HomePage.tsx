import HomeBanner from "../../components/banners/HomeBanner";
import WhyWorkWithUs from "../../components/pages/home/WhyWorkWithUs";
import CreativeStudioSection from "../../components/pages/home/CreativeStudioSection";
import PrecisionArchitecture from "../../components/pages/home/PrecisionArchitecture";
import PlatformFeatures from "../../components/pages/home/PlatformFeatures";
import PoweredBySection from "../../components/pages/home/PoweredBySection";
import ProjectsPortfolioSection from "../../components/pages/home/ProjectsPortfolioSection";
import ServicesTechSection from "../../components/pages/home/ServicesTechSection";
import TeamSection from "../../components/pages/home/TeamSection";
import TimeLine from "../../components/pages/home/TimeLine";
import WeWorkWith from "../../components/pages/home/WeWorkWith";

export default function HomePage() {
    return (
        <>
            <div className="space-y-20">
                <HomeBanner />
                <PlatformFeatures />
                <WeWorkWith />
                <TimeLine />
                <PrecisionArchitecture />
                <CreativeStudioSection />
                <ProjectsPortfolioSection />
                <PoweredBySection />
                <TeamSection />
                <ServicesTechSection />
                <WhyWorkWithUs />
            </div>
        </>
    )
}
