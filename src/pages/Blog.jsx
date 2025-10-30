import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ContactSection from "../components/ContactSection";
import BlogHeader from "../components/BlogHeader";
import FeaturedBlogSection from "../components/FeaturedBlogSection";


export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <FeatureBar />
      <FeaturedBlogSection />
      <ContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
