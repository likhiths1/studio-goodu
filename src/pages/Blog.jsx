import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import BlogHeader from "../components/BlogHeader";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import LatestPostsSection from "../components/LatestPostsSection";
import ExtraContactSection from "../components/ExtraContactSection";


export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <FeatureBar />
      <FeaturedBlogSection />
      <LatestPostsSection />
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
