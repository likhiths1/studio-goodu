import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import BlogHeader from "../components/BlogHeader";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import LatestPostsSection from "../components/LatestPostsSection";
import ExtraContactSection from "../components/ExtraContactSection";
import { AnimatedSection } from "../components/AnimatedSection";
import AwardsSection from "../components/AwardsSection";
import InternalSection from "../components/InternalSection";

export default function Blog() {
  return (
    <>
      <Navbar />
      <AnimatedSection>
        <BlogHeader />
      </AnimatedSection>
      <AnimatedSection>
        <FeatureBar />
      </AnimatedSection>
      <AnimatedSection>
        <InternalSection />
      </AnimatedSection>
      <AnimatedSection>
        <div className="py-12 sm:py-16 md:py-20"></div>
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedBlogSection />
      </AnimatedSection>
      <AnimatedSection>
        <AwardsSection />
      </AnimatedSection>
     {/* <AnimatedSection>
        <LatestPostsSection />
      </AnimatedSection> */}
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
