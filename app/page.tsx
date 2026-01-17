import Link from "next/link";
import { newsArticles } from "@/data/news";
import ReactionBar from "@/components/ReactionBar";

// Product tiles data
const products = [
  {
    name: "Copilot",
    description: "Your AI companion for work and creativity. Get help writing, coding, designing, and more with intelligent assistance that understands context.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-indigo-500/90 to-purple-600/90",
    link: "/about",
  },
  {
    name: "Bing",
    description: "Search reimagined with AI. Find answers, generate content, and explore the web with an intelligent search experience that goes beyond links.",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a2e50e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-teal-400/90 to-emerald-600/90",
    link: "/about",
  },
  {
    name: "Edge",
    description: "The browser built for the AI era. Integrated copilot features, enhanced privacy, and seamless productivity tools for modern browsing.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-orange-400/90 to-red-600/90",
    link: "/about",
  },
  {
    name: "GroupMe",
    description: "Stay connected with AI-enhanced group messaging. Smart replies, content generation, and organization features for better communication.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-fuchsia-500/90 to-pink-600/90",
    link: "/about",
  },
];

export default function Home() {
  const latestNews = newsArticles.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="AI Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-100 text-sm font-medium backdrop-blur-sm border border-indigo-400/50 mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
              New Research Release
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
              Approachable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 animate-gradient-x">
                Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-lg drop-shadow-md">
              Responsible AI that amplifies human potential. <br/>
              Building trustworthy systems for a better future.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/about"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2 ring-1 ring-gray-200"
              >
                More about MAI Super Intelligence
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 shadow-lg"
              >
                Join our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Latest updates
              </h2>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl">
                Stories, research breakthroughs, and perspectives from our team.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
            >
              View all news
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestNews.map((article, idx) => (
              <div
                key={article.slug}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              >
                <Link href={`/news/${article.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={article.heroImage} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </Link>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-sky-50 text-sky-700 rounded-full mb-4 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <Link href={`/news/${article.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-sky-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                       {/* Description would go here if available */}
                       Read the full story to learn more about our latest advancements.
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-400 mb-2 flex justify-between">
                       <span>{article.date}</span>
                       <span>{article.readingTime}</span>
                    </div>
                    <ReactionBar itemId={`home-news-${article.slug}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Teaser Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Office" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />
        </div>
        
        <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help shape the future
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a global team of researchers, engineers, and dreamers dedicated to 
            building AI that works for everyone.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Explore open roles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-16 h-16 mx-auto text-sky-100 mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed space-y-6">
            <p>&ldquo;This is a story of 21st century technology, why it matters so much and what we can do to make it work for everyone.</p>
            <p>Soon we will live surrounded by AIs. They will carry out complex tasks—operating businesses, producing unlimited digital content and running core government services.</p>
            <p>The coming wave will make this next decade the most productive in history. It represents nothing less than a step change in human capability and human society, introducing both risks and innovations on an awesome scale.</p>
            <p>This is what is coming.&rdquo;</p>
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
             <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://the-coming-wave.com/static/1916eae7183ac9cee8ac2142472349b0/075de/mustafa-suleyman-profile.webp" alt="CEO" className="w-full h-full object-cover" />
             </div>
             <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">Mustafa Suleyman</p>
                <p className="text-sky-600 font-medium">CEO, MAI Super Intelligence</p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering the world with AI
            </h2>
            <p className="text-xl text-gray-500">
              Our AI-powered products help billions of people work smarter, create freely, 
              and connect meaningfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative h-96 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              >
                <div className="absolute inset-0 z-0">
                  <Link href={product.link} className="block w-full h-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient}`} />
                  </Link>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end pointer-events-none">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-auto">
                    <Link href={product.link}>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-white text-lg mb-6 max-w-md line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link href={product.link} className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 group-hover:bg-white group-hover:text-gray-900 transition-all">
                        Learn more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      
                    </div>
                    {/* Darker background for reaction bar visibility */}
                    <div className="mt-4 pt-2 border-t border-white/20">
                         {/* We need a specialized light version of reaction bar or just style the container */}
                         <div className="bg-black/20 backdrop-blur-sm rounded-xl p-2">
                           <ReactionBar itemId={`home-product-${product.name}`} />
                         </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
