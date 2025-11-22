function Experience() {
  return (
    <section className="min-h-screen pt-20 md:pt-32 pb-20 relative z-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 opacity-0 animate-slide-up">
          experience<span className="text-cyan-400">_</span>
        </h2>
        <div className="space-y-6">
          <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/5 transition-all opacity-0 animate-slide-up animate-delay-100">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Takazade</h3>
            <p className="text-cyan-400 mb-4 text-sm md:text-base">Founder & Builder</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I designed and built Turkey's first talent-exchange platform from scratch. No funding, no team. I handled the product, logic, and launch myself. The platform allows users to trade skills the same way they would trade any real resource.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/5 transition-all opacity-0 animate-slide-up animate-delay-200">
            <h3 className="text-xl md:text-2xl font-bold mb-2">AI Automation Projects</h3>
            <p className="text-cyan-400 mb-4 text-sm md:text-base">Independent Developer</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I develop n8n-based automation systems for e-commerce brands. These include order flow automation, customer communication workflows, data processing pipelines, and backend operation tools. Every project focuses on the same goal: reducing manual workload and speeding up daily operations.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/5 transition-all opacity-0 animate-slide-up animate-delay-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Product Development</h3>
            <p className="text-cyan-400 mb-4 text-sm md:text-base">Hands-on, Multi-role Approach</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I take products from idea to live version. I handle design, logic, prototyping, iteration, and deployment myself. My workflow is simple: build fast, test immediately, improve continuously, ship again.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/5 transition-all opacity-0 animate-slide-up animate-delay-400">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Neuroscience Research</h3>
            <p className="text-cyan-400 mb-4 text-sm md:text-base">Independent Researcher</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I study how artificial intelligence affects human decision-making speed and cognitive workflows. My recent work focuses on how AI-assisted tasks change our mental load, attention patterns, and the way the brain handles problem-solving when part of the process is automated.
              I publish early-stage research, explore experimental ideas, and analyze how human reasoning adapts when supported by AI systems. My current interest is the impact of AI-assisted decision-making on prefrontal processing speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;