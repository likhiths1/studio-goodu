import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import BlogHeader from "../components/BlogHeader";
import ExtraContactSection from "../components/ExtraContactSection";
import BlogDetailSection from "../components/BlogDetailSection";
import CallToActionSection from "../components/CallToActionSection";

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <FeatureBar />
      <BlogDetailSection />
      <CallToActionSection />
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
