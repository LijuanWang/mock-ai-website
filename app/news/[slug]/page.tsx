import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  
  if (!article) {
    return { title: "Article Not Found" };
  }
  
  return {
    title: `${article.title} | MAI Super Intelligence News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Back Link */}
            <Link
              href="/news"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to news
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-sky-100 text-sky-700 rounded-full capitalize">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">{article.date}</span>
              <span className="text-sm text-gray-400">·</span>
              <span className="text-sm text-gray-500">{article.readingTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-xl text-gray-600">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500 font-medium">Featured Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <article className="max-w-3xl prose">
            <div 
              className="whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />
          </article>

          {/* Share & Back */}
          <div className="max-w-3xl mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link
                href="/news"
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to news
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Share:</span>
                <button 
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button 
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label="Share on X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold text-gray-900 mt-4 mb-2">$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="text-gray-600 ml-4">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="text-gray-600 ml-4">$2</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-600 mb-4">')
    .replace(/^(?!<[hl]|<li)(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p class="text-gray-600 mb-4">${match}</p>`;
    });
}
