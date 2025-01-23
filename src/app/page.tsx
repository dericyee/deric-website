"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12 md:p-24 bg-[var(--background)] text-[var(--foreground)]">
      <motion.div 
        className="z-10 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Fixed Header */}
        <Navbar isHome={true} />

        {/* Add padding to account for fixed header */}
        <div className="mt-[180px] md:mt-[175px]">
          {/* Current Ventures */}
          <motion.div variants={fadeIn}>
            <div className="text-center mx-auto mb-16">
              <h2 className="text-[2.8rem] leading-[1.4] md:text-[3.6rem] font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 via-red-500 via-yellow-500 to-green-400 text-transparent bg-clip-text animate-gradient flex items-center justify-center gap-4">
                Building the future of
                <br />
                
                education and work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="https://sigmaschool.co" target="_blank" rel="noopener noreferrer" className="group p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-lg tracking-tight">Sigma School</h2>
                    <span className="text-2xl">👩🏻‍💻</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">Tech</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">Education</span>
                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>The future of education.</p>
                      <p>Learn new tech skills in 3 months.</p>
                      <p>Job or 100% free.</p>
                      <ul className="list-none space-y-2 mt-4">
                        <li>💻 Full stack web dev + AI</li>
                        <li>📊 Data analytics + AI</li>
                        <li>🚀 Digital marketing + AI</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://codeo.ai" target="_blank" rel="noopener noreferrer" className="group p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-lg tracking-tight">Codeo.ai</h2>
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">AI</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">Learning</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">Mobile</span>
                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>Mobile app to help users self-learn coding.</p>
                      <p>Duolingo for coders!</p>
                      <p>Available on iOS & Android.</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://tryjobier.com" target="_blank" rel="noopener noreferrer" className="group p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-lg tracking-tight">tryJobier.com</h2>
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400">Jobs</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400">AI</span>
                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>Your Personal AI Job Assistant.</p>
                      <p>Upload your CV, set preferences, and get 100+ tailored job applications daily, even while you sleep.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Media */}
        <motion.div className="mt-24 mb-24" variants={fadeIn}>
          <h2 className="text-2xl font-medium mb-8">In the media</h2>
          <p className="text-xl text-[var(--muted)] mb-8">Featured in major Malaysian media outlets for my work in tech education and entrepreneurship.</p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
          >
            <Link 
              href="https://www.theedgemarkets.com/node/652412" 
              target="_blank"
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/edge.jpg"
                  alt="The Edge Malaysia Feature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">The Edge Malaysia</h3>
                    <p className="text-sm text-white/90">Edutech: Coding computers and decoding talents</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link 
              href="https://www.disruptr.co/sigma-school-malaysia-coding-bootcamp/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/disruptr.jpg"
                  alt="Disruptr Feature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">Disruptr</h3>
                    <p className="text-sm text-white/90">Malaysia's First Income Share Agreement Coding Bootcamp</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link 
              href="https://www.bfm.my/podcast/enterprise/open-for-business/get-a-job-or-your-money-back" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/bfm.jpg"
                  alt="BFM 89.9 Interview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">BFM 89.9</h3>
                    <p className="text-sm text-white/90">Get a Job or Your Money Back</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link 
              href="https://www.astroawani.com/videos/notepad-ibrahim-sani-x7ko7m/notepad-ibrahim-sani-transform-life-tech-x8ovuiv" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/astro.jpg"
                  alt="Astro Awani Interview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">Astro Awani</h3>
                    <p className="text-sm text-white/90">Transform Life Through Tech</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link 
              href="https://vulcanpost.com/855914/codeo-malaysia-duolingo-for-coding-app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/vulcan.jpg"
                  alt="Vulcan Post Feature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">Vulcan Post</h3>
                    <p className="text-sm text-white/90">The Duolingo for Coding App</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* YouTube */}
        <motion.div className="mb-16" variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">YouTube Channel</h2>
          <Link 
            href="https://www.youtube.com/@dericjyyee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[var(--border)] rounded-lg hover:bg-[var(--card)] hover:opacity-80 transition-colors block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">🎥 My Youtube Channel</h3>
                <p className="text-gray-400">I make videos documenting my learnings in tech, AI & startups!</p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Timeline */}
        <motion.div className="mb-16" variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">Timeline</h2>
          <motion.div 
            className="space-y-8"
            variants={stagger}
          >
            <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
              <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
              <div className="text-sm text-[var(--muted)] mb-1">2016</div>
              <h3 className="font-semibold mb-1">First self-made dollar</h3>
              <p className="text-gray-400">Sold used graphical calculators to college students. Profitable but couldn't scale</p>
            </motion.div>

            <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
              <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
              <div className="text-sm text-[var(--muted)] mb-1">2018</div>
              <h3 className="font-semibold mb-1">First exposure to startups</h3>
              <p className="text-gray-400">Founding team of a Student VC firm in my uni. Got super passionate</p>
            </motion.div>

            <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
              <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
              <div className="text-sm text-[var(--muted)] mb-1">2019</div>
              <h3 className="font-semibold mb-1">First line of code</h3>
              <p className="text-gray-400">Wanted to be a builder instead of a financier. Left my job to learn code</p>
            </motion.div>

            <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
              <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
              <div className="text-sm text-[var(--muted)] mb-1">2020</div>
              <h3 className="font-semibold mb-1">First dollar in tech</h3>
              <p className="text-gray-400">Did whatever I could to survive - taught code, hired for freelancing projects</p>
            </motion.div>

            <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
              <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
              <div className="text-sm text-[var(--muted)] mb-1">2021</div>
              <h3 className="font-semibold mb-1">First (few) tech startups</h3>
              <p className="text-gray-400">Got too excited once I could ship products. All failed. Learned a ton</p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="relative pl-8 border-l border-[var(--border)]">
                <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
                <div className="text-sm text-[var(--muted)] mb-1">2022 - present</div>
                <h3 className="font-semibold mb-1">Since then</h3>
                <p className="text-gray-400">$600k/yr - tech consulting & projects, education & recruitment. Exploring the future of education and work, with AI. Deep into working with AI.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer className="border-t border-[var(--border)] pt-12" variants={fadeIn}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex-1">
              <div className="text-sm text-[var(--muted)]">© {new Date().getFullYear()} Deric Yee</div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <h3 className="text-sm font-medium mb-4">Navigation</h3>
                <div className="space-y-3">
                  <Link href="/" className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm">
                    Home
                  </Link>
                  <Link href="/about" className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm">
                    About
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Social</h3>
                <div className="space-y-3">
                  <Link 
                    href="https://www.youtube.com/@dericjyyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    YouTube
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/dericyeejiyong/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    LinkedIn
                  </Link>
                  <Link 
                    href="https://www.instagram.com/dericyjy/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    Instagram
                  </Link>
                  <Link 
                    href="https://www.tiktok.com/@dericjyyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    TikTok
                  </Link>
                  <a 
                    href="mailto:deric.yee@gmail.com" 
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Ventures</h3>
                <div className="space-y-3">
                  <Link 
                    href="https://sigmaschool.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    Sigma School
                  </Link>
                  <Link 
                    href="https://sigmastudios.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    Sigma Studios
                  </Link>
                  <Link 
                    href="https://codeo.ai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    Codeo
                  </Link>
                  <Link 
                    href="https://tryjobier.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                  >
                    Jobier
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  );
}
