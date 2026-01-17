"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { newsArticles, NewsArticle } from "@/data/news";

type SortOrder = "newest" | "oldest";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsArticles.map((a) => a.category)));
    return ["all", ...cats];
  }, []);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let articles = [...newsArticles];
    
    // Filter by category
    if (selectedCategory !== "all") {
      articles = articles.filter((a) => a.category === selectedCategory);
    }
    
    // Sort by date (assuming date format is "Month DD, YYYY")
    articles.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    
    return articles;
  }, [selectedCategory, sortOrder]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1504384308090-c54be3855833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
             alt="News" 
             className="w-full h-full object-cover opacity-40 blur-sm"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">Newsroom</h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl font-light">
            Stories, updates, and perspectives from MAI Super Intelligence. <br/>
            Discover how we're shaping the future of intelligence.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize ${
                    selectedCategory === category
                      ? "bg-sky-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-gray-500">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  // Simple hash function to get a consistent image for the slug
  const hash = article.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col animate-fade-in-up"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={article.heroImage} 
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-sky-50 text-sky-700 rounded-full capitalize">
            {article.category}
          </span>
          <span className="text-xs font-medium text-gray-500">
            {article.readingTime}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2 mb-3 leading-tight">
          {article.title}
        </h2>
        
        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>
        
        <div className="text-xs font-medium text-gray-500 pt-4 border-t border-gray-100 w-full">
          {article.date}
        </div>
      </div>
    </Link>
  );
}
