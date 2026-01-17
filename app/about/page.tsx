import Link from "next/link";

const values = [
  {
    title: "Safety First",
    description: "Every system we build prioritizes safety and alignment with human values. We invest heavily in research to ensure our AI remains beneficial.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "We believe in open research and clear communication about AI capabilities and limitations. Trust is built through honesty.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Inclusive Innovation",
    description: "AI should benefit everyone. We design for accessibility, work globally, and ensure our technology is available to diverse communities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Collaborative Progress",
    description: "We partner with researchers, governments, and organizations worldwide to advance responsible AI development together.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2018", event: "MAI Super Intelligence founded with a mission to build safe, beneficial AI" },
  { year: "2020", event: "First large language model released for research preview" },
  { year: "2021", event: "Launched AI safety research initiative with major universities" },
  { year: "2022", event: "Copilot integration reaches 10 million developers" },
  { year: "2023", event: "Multimodal AI capabilities launched across consumer products" },
  { year: "2024", event: "Established responsible AI governance framework" },
  { year: "2025", event: "Global expansion with offices in 15 countries" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About MAI Super Intelligence
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              We&apos;re a team of researchers, engineers, and designers united by a 
              belief that artificial intelligence should be developed thoughtfully, 
              deployed responsibly, and designed to benefit all of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At MAI Super Intelligence, we believe the most transformative technology in human 
                history should be built with the utmost care. Our mission is to develop 
                AI systems that are safe, beneficial, and accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We pursue cutting-edge research while maintaining rigorous safety 
                standards. We deploy products that help billions of people while 
                protecting their privacy and autonomy. We collaborate openly with the 
                research community to advance the field responsibly.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                This is not just our strategy—it&apos;s our responsibility to the future 
                we&apos;re helping to create.
              </p>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Team collaboration" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative pl-12 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className={`absolute left-2 w-5 h-5 rounded-full border-4 ${
                    index === milestones.length - 1 
                      ? "bg-sky-500 border-sky-200" 
                      : "bg-white border-gray-300"
                  }`} />
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm font-semibold text-sky-600">
                      {milestone.year}
                    </span>
                    <p className="mt-1 text-gray-700">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join us in shaping the future
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented individuals who share our commitment 
            to building AI responsibly. Explore opportunities to make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              View open positions
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
