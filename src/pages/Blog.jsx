import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import BlogHeader from "../components/BlogHeader";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import LatestPostsSection from "../components/LatestPostsSection";
import ExtraContactSection from "../components/ExtraContactSection";
import { AnimatedSection } from "../components/AnimatedSection";
import AwardsSection from "../components/AwardsSection";

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
