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
    transition: { duration: 0.5, ease: "easeOut" }
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

// This is the main About page component that displays personal information and achievements
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12 md:p-24 bg-[var(--background)] text-[var(--foreground)]">
      <motion.div 
        className="z-10 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Hero Section */}
        <Navbar isHome={false} />

        {/* Add padding to account for fixed header */}
        <div className="mt-[180px] md:mt-[175px]">
          {/* Quick Facts */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12 text-[var(--foreground)]">Quick facts about me</h2>
            <motion.div className="grid gap-6" variants={stagger}>
              <motion.div 
                className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/travel.jpg"
                  alt="Traveling"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.p className="text-base md:text-xl text-[var(--muted)]" variants={fadeIn}>1. I studied Accounting & Finance at Lancaster University, UK, graduating in 2019.</motion.p>
              <motion.p className="text-base md:text-xl text-[var(--muted)]" variants={fadeIn}>2. I&apos;m 27 years old. Born in December, 1997 and I&apos;m a Malaysian Chinese. Currently based in Kuala Lumpur, Malaysia 🇲🇾.</motion.p>
              <motion.p className="text-base md:text-xl text-[var(--muted)]" variants={fadeIn}>3. I work out at least 1 hour every day!</motion.p>
              <motion.p className="text-base md:text-xl text-[var(--muted)]" variants={fadeIn}>4. I dream of being able to run a $1B+ venture builder/venture capital firm some day to enable more game-changing ventures!</motion.p>
              <motion.p className="text-base md:text-xl text-[var(--muted)]" variants={fadeIn}>5. I travel for fun quite frequently. I love exploring and making new memories! Been to 20 countries & speak 4 languages 🌍</motion.p>
            </motion.div>
          </div>

          {/* Future Focus */}
          <motion.div className="mt-24 mb-24" variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">Where my head&apos;s at</h2>
            <motion.p className="text-base md:text-xl text-[var(--muted)] mb-12" variants={fadeIn}>
              I&apos;m learning and educating myself daily on what I believe will shape our future:
            </motion.p>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={stagger}>
              <motion.div 
                className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all rounded-xl"
                variants={fadeIn}
              >
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text">Artificial Intelligence</h3>
                <p className="text-[var(--muted)]">The most transformative technology of our time. AI will augment every aspect of human capability.</p>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 hover:from-orange-500/30 hover:to-yellow-500/30 transition-all rounded-xl"
                variants={fadeIn}
              >
                <div className="text-6xl mb-6">₿</div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-yellow-400 inline-block text-transparent bg-clip-text">Bitcoin</h3>
                <p className="text-[var(--muted)]">The hardest form of money ever created. A revolutionary technology that separates money from state.</p>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all rounded-xl"
                variants={fadeIn}
              >
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 inline-block text-transparent bg-clip-text">Media</h3>
                <p className="text-[var(--muted)]">The power to influence and educate at scale. Creating content that adds value and inspires action.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Interests */}
          <motion.div className="mt-24 mb-24" variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">I prioritise my health & fitness. ALOT!</h2>
            <motion.div className="space-y-8" variants={stagger}>
              <motion.p className="text-base md:text-xl text-[var(--muted)]" variants={fadeIn}>
                My fitness core focus is to get good at boxing. I dream of being able to box like <a href="https://en.wikipedia.org/wiki/Ryan_Garcia" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:underline">Ryan Garcia</a>. Here are my workout pillars that support this goal:
              </motion.p>
              
              {/* Fitness Images */}
              <motion.div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-6" variants={stagger}>
                <motion.div 
                  className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/run.jpg"
                    alt="Running Training"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                    <div>
                      <h3 className="text-sm md:text-xl font-bold text-[var(--foreground)]">Run</h3>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/strength.jpg"
                    alt="Strength Training"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                    <div>
                      <h3 className="text-sm md:text-xl font-bold text-[var(--foreground)]">Strength</h3>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/mobility.jpg"
                    alt="Mobility Training"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                    <div>
                      <h3 className="text-sm md:text-xl font-bold text-[var(--foreground)]">Mobility</h3>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div className="space-y-4 text-base md:text-xl text-[var(--muted)]" variants={stagger}>
                <motion.p variants={fadeIn}>- Run is a base, always gonna need it either way for Boxing and life in general</motion.p>
                <motion.p variants={fadeIn}>- Strength for overall power, punch strength & size</motion.p>
                <motion.p variants={fadeIn}>- Mobility for rotation, range of motion, injury prevention</motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* What Makes Me Feel Alive - Misogi */}
          <motion.div className="mb-24" variants={fadeIn}>
            <motion.div className="space-y-8" variants={stagger}>
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-medium mb-4 text-[var(--foreground)]">My Misogi Goals for 2025</h2>
                <p className="text-base md:text-lg text-[var(--muted)] mb-8 leading-relaxed">
                  There&apos;s an ancient Japanese ritual called a MISOGI. You do one defining thing every year. Something scary, something hard, something you&apos;re proud of. It DEFINES your year.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div 
                    className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/misogi/run.jpg"
                      alt="Running"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                      <div>
                        <h3 className="text-sm md:text-base font-medium text-[var(--foreground)]">🏃‍♂️ Complete 21KM run in 2 hours 30 mins</h3>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/misogi/guitar.jpg"
                      alt="Guitar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                      <div>
                        <h3 className="text-sm md:text-base font-medium text-[var(--foreground)]">🎸 Learn to play 3 full songs on the guitar</h3>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/misogi/surf.jpg"
                      alt="Surfing"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                      <div>
                        <h3 className="text-sm md:text-base font-medium text-[var(--foreground)]">🏄‍♂️ Learn to surf in Bali</h3>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative aspect-square rounded-lg md:rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/misogi/snow.jpg"
                      alt="Snowboarding"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-[var(--card)]/20 flex items-end p-2 md:p-6">
                      <div>
                        <h3 className="text-sm md:text-base font-medium text-[var(--foreground)]">🏂 Learn to snowboard in Japan</h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Success Principles */}
          <motion.div className="mb-24" variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">My mental models that guide me through life</h2>
            <motion.div className="space-y-16" variants={stagger}>
              <motion.div variants={fadeIn}>
                <motion.h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]" variants={fadeIn}>1. Most things in life can be self taught</motion.h3>
                <motion.div className="space-y-4 text-base md:text-xl text-[var(--muted)]" variants={stagger}>
                  <motion.p variants={fadeIn}>2019: Venture Capital caught my attention, so I worked with a VC firm to start a Student VC in university. Got my first job in a VC firm in Malaysia.</motion.p>
                  <motion.p variants={fadeIn}>2020: Soul-searching year. Didn&apos;t want to work as a number cruncher in corporate. Left my first job. Learned to code & develop full stack web apps. Tried several tech startup ideas, no one signed up for it. They all failed.</motion.p>
                  <motion.p variants={fadeIn}>2021: Learned to to teach coding & close clients for software development projects to pay the bills.</motion.p>
                  <motion.p variants={fadeIn}>2022: Launched my 3 month coding bootcamp - Sigma School.</motion.p>
                  <motion.p variants={fadeIn}>2023: Got our first office in Puchong, Malaysia & figured out how to automate sales through digital marketing channels.</motion.p>
                  <motion.p variants={fadeIn}>2024: Learned to implement Entrepreneur Operation System (EOS) for my company, and realised the importance of People & Culture in. Dabbling in content creation now!</motion.p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]" variants={fadeIn}>2. In a world designed for consumers, be a builder/creator.</motion.h3>
                <motion.div className="space-y-4 text-base md:text-xl text-[var(--muted)]" variants={stagger}>
                  <motion.p variants={fadeIn}>Creators take action; Consumers simply observe.</motion.p>
                  <motion.p variants={fadeIn}>Most people are just consuming. Scrolling on Tiktok/social media all day, Netflix, Spotify, etc.</motion.p>
                  <motion.p variants={fadeIn}>Especially in Southeast Asia, digital colonialism is real. American Big Tech companies are just as dominant outside of the US as they are inside of it. And with US markets relatively saturated, they are seeking to colonise emerging markets. They know us better than we know ourselves.</motion.p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]" variants={fadeIn}>3. The future of work is for deep generalists</motion.h3>
                <motion.div className="space-y-4 text-base md:text-xl text-[var(--muted)]" variants={stagger}>
                  <motion.p variants={fadeIn}>A generalist is someone who learns all relevant knowledge and skills out of interest of achieving a goal in their life.</motion.p>
                  <motion.p variants={fadeIn}>I learned all the basic skills needed to go from zero to one. This came naturally for me, even though it was against conventional wisdom at the beginning.</motion.p>
                  <motion.p variants={fadeIn}>I firmly believe in this now and I want to encourage more people to take on this path.</motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div className="mb-24" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Invest in me or work with me</h2>
            <motion.div className="space-y-4 text-xl text-[var(--muted)]" variants={stagger}>
              <motion.p variants={fadeIn}>I have tons of ideas and plans! And I know I can&apos;t do it all alone. Always down to chat if there&apos;s funding or collaboration opportunities!</motion.p>
              <motion.p variants={fadeIn}>
                Reach me on <a href="https://www.linkedin.com/in/dericyeejiyong/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:underline font-medium">LinkedIn</a> or write me an email at{" "}
                <a 
                  href="mailto:deric.yee@gmail.com" 
                  className="text-[var(--foreground)] hover:underline font-medium"
                >
                  deric.yee@gmail.com
                </a>
              </motion.p>
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
                      href="https://www.instagram.com/dericjyyee/" 
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
                    <Link 
                      href="https://x.com/dericjyyee" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                    >
                      X (Twitter)
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
        </div>
      </motion.div>
    </main>
  );
} 