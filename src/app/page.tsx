"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          {/* Newsletter Section */}
          <motion.div variants={fadeIn} className="mb-8">
            <div className="w-full p-3 bg-card/30 rounded-lg border border-[var(--border)]">
              <div className="flex flex-col space-y-1 mb-2">
                <h3 className="text-xs font-medium">Breaking The Mold with Deric Yee - A builder&apos;s journey through EdTech, HRTech, and AI.</h3>
                <p className="text-[11px] text-[var(--muted)]">
                  Weekly newsletters of no fluff, just real insights, hard lessons, and cool ideas from the trenches of startup life.
                </p>
              </div>
              <iframe 
                src="https://embeds.beehiiv.com/7443a282-a394-4c90-9de0-16c4e65590d3?slim=true&palette=purple" 
                data-test-id="beehiiv-embed" 
                height="52" 
                frameBorder="0" 
                scrolling="no" 
                style={{
                  margin: 0,
                  borderRadius: '0px !important',
                  backgroundColor: 'transparent',
                  width: '100%'
                }}
              />
            </div>
          </motion.div>

          {/* Current Ventures */}
          <motion.div variants={fadeIn}>
            <div className="text-center mx-auto mb-16">
              <h2 className="text-[2.8rem] leading-[1.4] md:text-[3.6rem] font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 via-red-500 via-yellow-500 to-green-400 text-transparent bg-clip-text animate-gradient flex items-center justify-center gap-4">
                Building the future of
                <br />
                
                education and work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="https://sigmaschool.co" target="_blank" rel="noopener noreferrer" className="group relative p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="absolute top-4 right-4 text-[var(--muted)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <Link href="https://sigmaschool.co" target="_blank" rel="noopener noreferrer" className="text-lg tracking-tight hover:text-[var(--muted)] transition-colors border-b border-[var(--muted)]/30 group-hover:border-[var(--muted)] pb-0.5">Sigma School</Link>
                    <span className="text-2xl">👩🏻‍💻</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">Tech</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">Skills</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">Courses</span>

                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>3 month bootcamp. Get a job. Or it's 100% free.</p>
                      <ul className="list-none space-y-2 mt-4">
                        <li>💻 Full stack web dev + AI</li>
                        <li>📊 Data analytics + AI</li>
                        <li>🤖 AI coding, AI agents + automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://codeo.ai" target="_blank" rel="noopener noreferrer" className="group relative p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="absolute top-4 right-4 text-[var(--muted)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <Link href="https://codeo.ai" target="_blank" rel="noopener noreferrer" className="text-lg tracking-tight hover:text-[var(--muted)] transition-colors border-b border-[var(--muted)]/30 group-hover:border-[var(--muted)] pb-0.5">Codeo</Link>
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">Mobile App</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">Learning</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">SaaS</span>
                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>Learn to code for free on your phone!</p>
                      <p>All it takes is 10 minutes a day.</p>
                      <p>Available on iOS & Android.</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://tryjobier.com" target="_blank" rel="noopener noreferrer" className="group relative p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="absolute top-4 right-4 text-[var(--muted)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <Link href="https://tryjobier.com" target="_blank" rel="noopener noreferrer" className="text-lg tracking-tight hover:text-[var(--muted)] transition-colors border-b border-[var(--muted)]/30 group-hover:border-[var(--muted)] pb-0.5">Jobier</Link>
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400">Jobs</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400">AI</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400">SaaS</span>

                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>Your Personal Job AI Agent.</p>
                      <p>Auto find & apply to the best jobs in the world, even while you sleep.</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://northstackai.com" target="_blank" rel="noopener noreferrer" className="group relative p-6 bg-card hover:bg-card/80 rounded-lg transition-colors">
                <div className="absolute top-4 right-4 text-[var(--muted)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <Link href="https://northstackai.com" target="_blank" rel="noopener noreferrer" className="text-lg tracking-tight hover:text-[var(--muted)] transition-colors border-b border-[var(--muted)]/30 group-hover:border-[var(--muted)] pb-0.5">NorthStack</Link>
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400">AI</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400">Automation</span>
                      <span className="inline-flex text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400">Consultancy</span>

                    </div>
                    <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] font-light">
                      <p>Full Stack Web Development, AI & Process Automation Agency.</p>
                      <p>Helping businesses harness AI to optimize operations.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Media */}
          <motion.div className="mt-24 mb-24" variants={fadeIn}>
            <h2 className="text-2xl font-medium mb-8">In the media</h2>
            <p className="text-xl text-[var(--muted)] mb-8">Featured in media outlets for my work in tech education and entrepreneurship.</p>
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
                      <p className="text-sm text-white/90">Rethinking Tech Education To Meet Industry Needs</p>
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

              <Link 
                href="https://vulcanpost.com/881129/sigma-school-malaysia-coding-bootcamp-academy/?noamp=mobile#google_vignette" 
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src="/vulcan-sigma.png"
                    alt="Sigma School Vulcan Post Feature"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-white">Vulcan Post</h3>
                      <p className="text-sm text-white/90">Learn tech in 3 months. Get a job, or 100% free.</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                href="https://studyinternational.com/news/land-a-tech-job-with-no-experience/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src="/study-international.png"
                    alt="Sigma School Study International Feature"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-white">Study International</h3>
                      <p className="text-sm text-white/90">You don’t need a degree to succeed in tech.</p>
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
              href="https://www.youtube.com/@dericyjy"
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
                <p className="text-gray-400">Did whatever I could to survive - taught uni students how to code, hired for freelancing projects, built full stack projects for a cheap price to build my portfolio & experience</p>
              </motion.div>

              <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
                <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
                <div className="text-sm text-[var(--muted)] mb-1">2021</div>
                <h3 className="font-semibold mb-1">First (few) tech startups</h3>
                <p className="text-gray-400">Got too excited once I could ship products. Burned $150k+. All failed. Learned a ton tho</p>
              </motion.div>

              <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
                <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
                <div className="text-sm text-[var(--muted)] mb-1">2022</div>
                <h3 className="font-semibold mb-1">Launched Sigma School</h3>
                <p className="text-gray-400">Split with my previous business partner. Did my own thing. Launched Sigma School with only 1 community-based course on full stack web development. Did my first $100k online, fully automated by digital marketing funnels, without needing me to speak to anyone. Really game changer & turning point in my life</p>
              </motion.div>

              <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
                <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
                <div className="text-sm text-[var(--muted)] mb-1">2023</div>
                <h3 className="font-semibold mb-1">Pivoted to bootcamp model</h3>
                <p className="text-gray-400">Pivoted to the coding bootcamp model. With a brand new pitch. 3 month bootcamp. Get a job, or it&apos;s 100% free. Got an office, led a team of 15, Worked on tech consulting & software projects for cash flow.</p>
              </motion.div>

              <motion.div className="relative pl-8 border-l border-[var(--border)]" variants={fadeIn}>
                <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
                <div className="text-sm text-[var(--muted)] mb-1">2024</div>
                <h3 className="font-semibold mb-1">Business stabilization</h3>
                <p className="text-gray-400">Stabilise the business model. Focused on people, product, & process so the company could run on its own without my active involvement. Didn&apos;t really achieve it. But much closer to it. Hit my first USD80k/month. Launched Codeo.ai with my brother - The mobile app to self learn coding.</p>
              </motion.div>

              <motion.div variants={fadeIn}>
                <div className="relative pl-8 border-l border-[var(--border)]">
                  <div className="absolute w-3 h-3 bg-[var(--border)] rounded-full -left-[6.5px]"></div>
                  <div className="text-sm text-[var(--muted)] mb-1">2025</div>
                  <h3 className="font-semibold mb-1">Future focus</h3>
                  <p className="text-gray-400">Exploring the future of education and work. Launching 3 new courses - Full stack web dev with AI, data analytics with AI, digital marketing with AI. Finding more partners. Going deep into AI, Web3 & media this year.</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="mt-8" variants={fadeIn}>
              <Link href="/about" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4">
                Read the extended and updated version here →
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
