import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/NavbarBlack";
import BlogHeader from "../components/BlogHeader";
import FeatureBar from "../components/FeatureBar";
import BlogDetailSection from "../components/BlogDetailSection";
import CallToActionSection from "../components/CallToActionSection";
import ExtraContactSection from "../components/ExtraContactSection";
import FooterSection from "../components/FooterSection";
import { getBlogPost, getAdjacentPosts } from "../data/blogPosts";

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [adjacentPosts, setAdjacentPosts] = useState({ prev: null, next: null });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const postData = getBlogPost(id);
        const { prev, next } = getAdjacentPosts(id);
        
        if (!postData) {
          console.error(`Blog post with id ${id} not found`);
          return;
        }
        
        setPost(postData);
        setAdjacentPosts({ prev, next });
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [id]);
  
  const handlePrev = () => {
    if (adjacentPosts.prev) {
      navigate(`/blog/${adjacentPosts.prev.id}`);
      window.scrollTo(0, 0);
    }
  };
  
  const handleNext = () => {
    if (adjacentPosts.next) {
      navigate(`/blog/${adjacentPosts.next.id}`);
      window.scrollTo(0, 0);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FEF6ED] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FEF6ED] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-lg mb-8 text-center">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <BlogHeader />
      <FeatureBar />
      <BlogDetailSection 
        post={post}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={!!adjacentPosts.prev}
        hasNext={!!adjacentPosts.next}
      />
      <CallToActionSection />
      <ExtraContactSection />
      <FooterSection />
    </>
  );
}
