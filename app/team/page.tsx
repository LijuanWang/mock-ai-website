import Link from "next/link";
import { teamMembers, featuredTeam } from "@/data/team";

// Group team members by discipline
const disciplines = ["Research", "Engineering", "Product", "Design"];

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Team meeting" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our Team
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              A global network of builders, researchers, and visionaries working 
              together to shape the future of AI. United by curiosity, driven by 
              responsibility, and committed to making technology that benefits everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Team Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <span className="text-purple-200 text-sm font-medium uppercase tracking-wider">
                  Featured
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                  {featuredTeam.name}
                </h2>
                <p className="mt-4 text-lg text-purple-100">
                  {featuredTeam.description}
                </p>
                <Link
                  href={featuredTeam.link}
                  className="inline-flex items-center mt-6 px-5 py-2.5 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors w-fit"
                >
                  {featuredTeam.cta}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Decorative illustration */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-xl bg-white/20 ${
                        i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid by Discipline */}
      {disciplines.map((discipline) => {
        const members = teamMembers.filter((m) => m.discipline === discipline);
        if (members.length === 0) return null;

        return (
          <section key={discipline} className="bg-gray-50 py-12 lg:py-16 border-t border-gray-200 first:border-t-0">
            <div className="max-w-content mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {discipline}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Join CTA */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to join our team?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented individuals who share our passion 
            for building AI responsibly. Explore our open positions and find your 
            place in shaping the future.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors"
          >
            View open positions
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    discipline: string;
    snippet: string;
    portrait: string;
  };
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  // Generate a consistent hash for image selection
  const hash = member.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 animate-fade-in-up">
      {/* Portrait */}
      <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
        <img 
          src={member.portrait} 
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-white text-lg">{member.name}</h3>
          <p className="text-white/80 text-sm font-medium">{member.role}</p>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-sm text-gray-500 leading-relaxed">
          {member.snippet}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
           {/* Social placeholders */}
           <div className="w-5 h-5 rounded-full bg-gray-200"></div>
           <div className="w-5 h-5 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
