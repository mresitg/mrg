import { Mail, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative z-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 opacity-0 animate-slide-up">
          contact<span className="text-cyan-400">_</span>
        </h2>

        <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl opacity-0 animate-slide-up animate-delay-100">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4 group">
              <Twitter className="text-cyan-400 flex-shrink-0" size={24} />
              <div className="min-w-0">
                <p className="text-gray-400 text-xs md:text-sm">twitter</p>
                <a
                  href="https://twitter.com/mresitcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm md:text-lg break-all"
                >
                  @mresitcom
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <Linkedin className="text-cyan-400 flex-shrink-0" size={24} />
              <div className="min-w-0">
                <p className="text-gray-400 text-xs md:text-sm">linkedin</p>
                <a
                  href="https://linkedin.com/in/mehmetresitgul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm md:text-lg break-all"
                >
                  mehmetresitgul
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <Mail className="text-cyan-400 flex-shrink-0" size={24} />
              <div className="min-w-0">
                <p className="text-gray-400 text-xs md:text-sm">email</p>
                <a
                  href="mailto:mehmetresitgul@outlook.com.tr"
                  className="text-cyan-400 hover:underline text-sm md:text-lg break-all"
                >
                  mehmetresitgul@outlook.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
