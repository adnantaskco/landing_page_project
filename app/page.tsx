
import ConsultationSection from "./component/BookaDemo";
import SetupSection from "./component/Buildfor";
import CaseStudySection from "./component/Casestudy";
import EarlyBirdSection from "./component/Earlybierd";
import FAQSection from "./component/FAQ";
import Footer from "./component/footer";
import HeroSection from "./component/Golive";
import HeroSection1 from "./component/Herosection";
import HeroSection3 from "./component/herosection2";
import HowItWorksSection from "./component/Howitworks";
import MarqueeSection from "./component/marqee";
import FeatureMarquee from "./component/Marqueesection";
import PlatformOSSection from "./component/Platformsection";
import PricingSection from "./component/Pricing";
import ProblemSection from "./component/Problemsection";
import FeaturesSection from "./component/Riskfree";
import SetupCardsSection from "./component/Setupcard";
import KeyStatsSection from "./component/timesection";


export default function Home() {
  return (
 <>
 <HeroSection3/>
 {/* <HeroSection1/> */}
 <KeyStatsSection/>
 <MarqueeSection/>
 {/* <ProblemSection/> */}
 <PlatformOSSection/>
 
 <CaseStudySection/>
 <SetupCardsSection/>
 <SetupSection/>
 <PricingSection/>
 <HowItWorksSection/>
 <FeaturesSection/>
 <EarlyBirdSection/>
 <FAQSection/>
 <ConsultationSection/>
  <HeroSection/>
  <Footer/>
 </>

 
 );
}
