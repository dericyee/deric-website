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
          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-sm md:text-base text-[var(--muted)] mb-8 italic">
              This page is a little self indulgent, it&apos;s all about me. Hopefully you&apos;ll find it interesting though 🙂.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Quick facts about me</h2>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[var(--muted)]">
                <li>I studied Accounting & Finance at Lancaster University, UK, graduating in 2019.</li>
                <li>I&apos;m 27 years old. Born in December, 1997 and I&apos;m a Malaysian Chinese. Currently based in Kuala Lumpur 🇲🇾.</li>
                <li>I work out at least 1 hour every day. My workout focus at the moment: Running, Hyrox & Mixed Martial Arts (Boxing, BJJ).</li>
                <li>I dream of being able to run a $1B+ venture builder/venture capital firm some day to enable more game-changing ventures!</li>
                <li>I travel for fun quite frequently. I love exploring and making new memories! Been to 20 countries & speak 4 languages 🌍</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Timeline</h2>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[var(--muted)]">
                <li>2019: left my job in vc to self learn code</li>
                <li>2020: build software projects & many failed tech ideas</li>
                <li>2022 - now: grew my tech business to $80k/m</li>
                <li>next: building hrtech & edtech ai saas</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">In 2019</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>My journey started back in 2019 when I was still a student in Lancaster University, UK. I was studying Finance and Venture Capital caught my interest.</p>
                <p>Back then, I started running Student VC firm with a British VC enable more funding to Northern England startups as almost all startup funding were disproportionately concentrated in London.</p>
                <p>This is when I first got the startup-bug.</p>
                <p>Seeing founders passionately pitching their ideas, building their tech startup, brainstorming new ideas and iterating through pitfalls.</p>
                <p>Over time, I caught the startup-founder bug too.</p>
                <p>Fast forward a few months, I graduated and moved back to Malaysia to work in my first job in a Venture Capital firm.</p>
                <p>The startup founder bug grew bigger and I really didn&apos;t see myself doing market research reports, due diligence & crunching numbers all day.</p>
                <p>I wanted to be a part of the action.</p>
                <p>I had no money, no business skills, no marketing skills, nothing.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">But for me, 3 things led me to choose coding as a technical skills:</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-[var(--muted)]">
                <li>Tech is the common denominator for all tech startups. I want to build a tech startup. So if I learned how to build software, it won&apos;t go wrong.</li>
                <li>9/10 of the top 10 biggest companies in S&P500 are tech companies. So I probably am on the right path. Think Facebook, Apple, Google, Microsoft, Nvidia, Amazon and so on.</li>
                <li>I saw how desperate founders recruit tech talents. I know how bad the talent market is for software developers. Saw first hand in most of the startup networking events I organised or attended during my VC days, it&apos;s usually as bad as every 1 techie to 7 non-tech founders. The non-tech founders were always pitching to the techie.</li>
              </ol>
              <p className="mt-4 text-sm md:text-base text-[var(--muted)]">Worst case scenario, I have my bets hedged. If it all crash and burns, I&apos;ll just get use my tech skills somewhere and get a job somewhere.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Said F**K It & Took A Leap Of Faith. Scariest period of my life.</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>So that&apos;s what I did. It was probably the most demoralising point in my life. Learning through online tutorials, building projects on my own, locked myself in my room and just did coding-related stuff from 8AM to 8PM every day for at least 6 months.</p>
                <p>Throughout the 6 months, I gave up a few times to dabble in different things relevant to the tech industry like UI/UX, Project Management, Data Analytics, or just rotating among different tutorials for different programming languages as soon as it gets tough.</p>
                <p>I was kinda going nowhere. Still couldn&apos;t really build anything from scratch on my own.</p>
                <p>Fast forward a few months, at the brink of giving up, I decided to tell myself - no more coding along, no more looking at solutions, no more watching videos.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">It&apos;s do or die. And it boiled down to these 3 things.</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-[var(--muted)]">
                <li>Choose a tech stack and stick to it. I went with the Javascript stack. VueJS, TailwindCSS, Expressjs, Firebase.</li>
                <li>Choose a project. Back then, a Korean drama called "Start Up" was famous for building this app called NoonGil in a Korean Accelerator. It helped blind people see using Object Detection AI. I chose this.</li>
                <li>Figure it out. No matter what. No excuses.</li>
              </ol>
              <div className="mt-4 space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>Interestingly enough, I got it done in a few weeks (without building my own ML models, of course.</p>
                <p>I plugged into some open source models API and got it to work. Almost an exact clone of it).</p>
                <p>From then on, I realised there&apos;s no "secret" to learning to code. You really just gotta grind through it.</p>
                <p>Just like learning to swim, you learn to swim only by swimming. It&apos;s the same for coding.</p>
                <p>You learn to code by coding. 1000 hours of watching tutorials will not help you learn to code.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Stacking Small Wins For Confidence Points</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>Fast forward after that, I started leaving my home a little more, starting talking what I&apos;ve been locking myself at home for so long for, and people around me started knowing that I was doing some coding stuff at home.</p>
                <p>I had Computer Science and IT graduate friends who reached out to me to help them with their technical interview, so I thought to myself - Why not? It&apos;s about time for me to apply too so let&apos;s try it out.</p>
                <p>I could solve all the algorithm scripting, frontend and backend challenges with ease for this entry level role.</p>
                <p>They started paying me RM100/hour to teach them.</p>
                <p>Fast forward a little more, I closed projects from people around me worth RM10,000, RM40,000, RM100,000 then RM200,000, all in a matter of 6 months.</p>
                <p>I struggled to hire developers to help me out because most of the people I interviewed couldn&apos;t really code.</p>
                <p>For context - I interviewed around 100+ computer science graduates.</p>
                <p>The only guy I managed to hire, had fundamental coding concepts down, but took around 6 months to learn specific frameworks and tools like VueJS, TailwindCSS, Hasura (Speeds up backend development by 200%) etc.</p>
                <p>By the time he got productive on the job, a foreign firm offered him a remote job for around USD4,000/month.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">This was a pivotal moment in my life because:</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-[var(--muted)]">
                <li>I proved that I could do it fully on my own. I gained confidence.</li>
                <li>People were willing to pay me for my skills. I gained more confidence.</li>
                <li>There&apos;s a big gap in the market. I knew I had to do something about this.</li>
              </ol>
              <p className="mt-4 text-sm md:text-base text-[var(--muted)]">Which led me to work on a series of iterations in the coding education scene (story for another day!), that led to what became Sigma School in 2022, where we help train anyone to learn coding in 3 months, and get a job after they graduate, or we give them 100% of their money back.</p>
            </section>
          </div>

          {/* Future Focus */}
          <motion.div className="mt-24 mb-24" variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">Where my head&apos;s at</h2>
            <motion.p className="text-sm md:text-base text-[var(--muted)] mb-12" variants={fadeIn}>
              I&apos;m learning and educating myself daily on what I believe will shape our future:
            </motion.p>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={stagger}>
              <motion.div 
                className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all rounded-xl"
                variants={fadeIn}
              >
                <div className="text-6xl mb-6">🤖</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text">Artificial Intelligence</h3>
                  <div className="space-y-2 text-sm md:text-base text-[var(--muted)]">
                    <p>The most transformative technology of our time.</p>
                    <p>AI will augment every aspect of human capability.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 hover:from-orange-500/30 hover:to-yellow-500/30 transition-all rounded-xl"
                variants={fadeIn}
              >
                <div className="text-6xl mb-6">₿</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 inline-block text-transparent bg-clip-text">Bitcoin</h3>
                  <div className="space-y-2 text-sm md:text-base text-[var(--muted)]">
                    <p>The hardest form of money ever created.</p>
                    <p>A revolutionary technology that separates money from state.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all rounded-xl"
                variants={fadeIn}
              >
                <div className="text-6xl mb-6">📱</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 inline-block text-transparent bg-clip-text">Media</h3>
                  <div className="space-y-2 text-sm md:text-base text-[var(--muted)]">
                    <p>The power to influence and educate at scale.</p>
                    <p>Creating content that adds value and inspires action.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Interests */}
          <motion.div className="mt-24 mb-24" variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">I prioritise my health & fitness. ALOT!</h2>
            <motion.div className="space-y-8" variants={stagger}>
              <motion.p className="text-sm md:text-base text-[var(--muted)]" variants={fadeIn}>
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

              <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
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
                <p className="text-sm md:text-base text-[var(--muted)] mb-8 leading-relaxed">
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
                <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
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
                <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
                  <motion.p variants={fadeIn}>Creators take action; Consumers simply observe.</motion.p>
                  <motion.p variants={fadeIn}>Most people are just consuming. Scrolling on Tiktok/social media all day, Netflix, Spotify, etc.</motion.p>
                  <motion.p variants={fadeIn}>Especially in Southeast Asia, digital colonialism is real. American Big Tech companies are just as dominant outside of the US as they are inside of it. And with US markets relatively saturated, they are seeking to colonise emerging markets. They know us better than we know ourselves.</motion.p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]" variants={fadeIn}>3. The future of work is for deep generalists</motion.h3>
                <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
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
            <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
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
                  <h3 className="text-sm font-medium mb-4 text-center">Navigation</h3>
                  <div className="flex justify-center">
                    <Link 
                      href="/"
                      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      Home
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
        </div>
      </motion.div>
    </main>
  );
} 