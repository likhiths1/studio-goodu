import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarBlack';
import BlogHeader from '../components/BlogHeader';
import FeatureBar from '../components/FeatureBar';
import { BLOG_POSTS } from '../data/blogPosts';
import CallToActionSection from '../components/CallToActionSection';
import ExtraContactSection from '../components/ExtraContactSection';
import FooterSection from '../components/FooterSection';

export default function BlogPage() {
  const posts = Object.values(BLOG_POSTS);

  return (
    <>
      <Navbar />
      <BlogHeader />
      <FeatureBar />
      
      <div className="bg-[#FEF6ED] py-16 px-4 md:px-6">
        <div className="max-w-[1300px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium text-center text-black mb-16">
            Our Blog
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group block overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30" />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-medium text-black mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.intro[0]}
                  </p>
                  <span className="text-black font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <CallToActionSection />
      <ExtraContactSection />
      <FooterSection />
    </>
  );
}
