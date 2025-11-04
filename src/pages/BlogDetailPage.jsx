import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import BlogHeader from "../components/BlogHeader";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import LatestPostsSection from "../components/LatestPostsSection";
import ExtraContactSection from "../components/ExtraContactSection";
import BlogDetailSection from "../components/BlogDetailSection";


export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <FeatureBar />
      <BlogDetailSection />
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
