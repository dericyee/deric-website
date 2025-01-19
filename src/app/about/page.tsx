"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12 md:p-24 bg-[var(--background)] text-[var(--foreground)]">
      <motion.div 
        className="z-10 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Header */}
        <motion.div className="mb-24" variants={fadeIn}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back home
          </Link>
          
          {/* Quick Facts */}
          <h2 className="text-3xl font-medium tracking-tight mb-12 text-white">Quick facts about me</h2>
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
            <motion.p className="text-xl text-gray-400" variants={fadeIn}>1. I studied Accounting & Finance at Lancaster University, UK, graduating in 2019.</motion.p>
            <motion.p className="text-xl text-gray-400" variants={fadeIn}>2. I'm 27 years old. Born in December, 1997 and I'm a Malaysian Chinese. Currently based in Kuala Lumpur, Malaysia 🇲🇾.</motion.p>
            <motion.p className="text-xl text-gray-400" variants={fadeIn}>3. I work out at least 1 hour every day. My workout focus at the moment: Running, Hyrox & Mixed Martial Arts (Boxing, BJJ).</motion.p>
            <motion.p className="text-xl text-gray-400" variants={fadeIn}>4. I dream of being able to run a $1B+ venture builder/venture capital firm some day to enable more game-changing ventures!</motion.p>
            <motion.p className="text-xl text-gray-400" variants={fadeIn}>5. I travel for fun quite frequently. I love exploring and making new memories! Been to 20 countries & speak 4 languages 🌍</motion.p>
          </motion.div>
        </motion.div>

        {/* Interests */}
        <motion.div className="mb-24" variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-white">My Fitness Focus</h2>
          <motion.div className="space-y-8" variants={stagger}>
            <motion.p className="text-xl text-gray-400" variants={fadeIn}>
              My fitness core focus is to get good at boxing. I dream of being able to box like Ryan Garcia. Here are my workout pillars that support this goal:
            </motion.p>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={stagger}>
              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/run.jpg"
                  alt="Running Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Run</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/strength.jpg"
                  alt="Strength Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Strength</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/mobility.jpg"
                  alt="Mobility Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Mobility</h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-4 text-lg text-gray-400" variants={stagger}>
              <motion.p variants={fadeIn}>- Run is a base, always gonna need it either way for Boxing and life in general</motion.p>
              <motion.p variants={fadeIn}>- Strength for overall power, punch strength & size</motion.p>
              <motion.p variants={fadeIn}>- Mobility for rotation, range of motion, injury prevention</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Books */}
        <motion.div className="mb-24" variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-8 text-white">My Top Books of All Time</h2>
          <motion.div className="space-y-12" variants={stagger}>
            {/* Business Books */}
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold mb-6">Business</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/100m-leads.jpg" alt="100M Leads" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/100m-offer.jpg" alt="100M Offer" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/traffic-secrets.jpg" alt="Traffic Secrets" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/copywriting-secrets.jpg" alt="Copywriting Secrets" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/fastlane-millionaire.jpg" alt="Fastlane Millionaire" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Life Books */}
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold mb-6">Life</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/sapiens.jpg" alt="Sapiens" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/atomic-habits.jpg" alt="Atomic Habits" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image src="/books/fastlane-millionaire.jpg" alt="Fastlane Millionaire" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* What Makes Me Feel Alive - Misogi */}
        <motion.div className="mb-24" variants={fadeIn}>
          <motion.div 
            className="relative w-full h-[60vh] rounded-2xl overflow-hidden mb-12"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/misogi-hero.jpg"
              alt="Misogi - The Art of Pushing Boundaries"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Makes Me Feel Alive 🌎</h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                Embracing the Japanese concept of Misogi (禊) - an ancient Shinto purification ritual that evolved into a philosophy of pushing beyond your limits.
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-12" variants={stagger}>
            <motion.div className="space-y-6" variants={fadeIn}>
              <p className="text-xl text-gray-400">
                In modern interpretation, Misogi is about doing something extremely challenging each year that pushes your boundaries. It's not just about the achievement, but about the profound impact these challenges have on your character and perspective.
              </p>
              <p className="text-xl text-gray-400">
                I've adopted this philosophy to create a more meaningful and memorable life. Each challenge becomes a story, a memory, and a testament to personal growth.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold mb-8">My Misogi Goals for 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/misogi-run.jpg"
                    alt="Half Marathon Goal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 flex flex-col justify-end p-6">
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🏃‍♂️</span>
                        <h4 className="text-xl font-bold text-white">Half Marathon Challenge</h4>
                      </div>
                      <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Complete a half marathon (21km) in under 2 hours 30 minutes
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/misogi-guitar.jpg"
                    alt="Guitar Performance Goal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 flex flex-col justify-end p-6">
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🎸</span>
                        <h4 className="text-xl font-bold text-white">Musical Journey</h4>
                      </div>
                      <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn to play the guitar and perform a full song
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/misogi-surf.jpg"
                    alt="Surfing Goal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 flex flex-col justify-end p-6">
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🏄‍♂️</span>
                        <h4 className="text-xl font-bold text-white">Catch the Wave</h4>
                      </div>
                      <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Master surfing and catch my first real wave
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/misogi-snow.jpg"
                    alt="Snowboarding Goal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 flex flex-col justify-end p-6">
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🏂</span>
                        <h4 className="text-xl font-bold text-white">Winter Conquest</h4>
                      </div>
                      <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn to snowboard and conquer a beginner slope
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#1a1a1a] rounded-2xl p-8">
              <blockquote className="text-xl text-gray-300 italic">
                "Life is not about collecting things, but about creating experiences that shape who we are. Each Misogi challenge is a step towards becoming the person I aspire to be."
              </blockquote>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Success Principles */}
        <motion.div className="mb-24" variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-12 text-white">3 Success Principles that brought me to USD80K/month and beyond</h2>
          <motion.div className="space-y-16" variants={stagger}>
            <motion.div variants={fadeIn}>
              <motion.h3 className="text-2xl font-bold mb-6" variants={fadeIn}>1. Most things in life can be self taught</motion.h3>
              <motion.div className="space-y-4 text-lg text-gray-400" variants={stagger}>
                <motion.p variants={fadeIn}>2019: Venture Capital caught my attention, so I worked with a VC firm to start a Student VC in university. Got my first job in a VC firm in Malaysia.</motion.p>
                <motion.p variants={fadeIn}>2020: Soul-searching year. Didn't want to work as a number cruncher in corporate. Left my first job. Learned to code & develop full stack web apps. Tried several tech startup ideas, no one signed up for it. They all failed.</motion.p>
                <motion.p variants={fadeIn}>2021: Learned to to teach coding & close clients for software development projects to pay the bills.</motion.p>
                <motion.p variants={fadeIn}>2022: Launched my 3 month coding bootcamp - Sigma School.</motion.p>
                <motion.p variants={fadeIn}>2023: Got our first office in Puchong, Malaysia & figured out how to automate sales through digital marketing channels.</motion.p>
                <motion.p variants={fadeIn}>2024: Learned to implement Entrepreneur Operation System (EOS) for my company, and realised the importance of People & Culture in. Dabbling in content creation now!</motion.p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <motion.h3 className="text-2xl font-bold mb-6" variants={fadeIn}>2. In a world designed for consumers, be a builder/creator.</motion.h3>
              <motion.div className="space-y-4 text-lg text-gray-400" variants={stagger}>
                <motion.p variants={fadeIn}>Creators take action; Consumers simply observe.</motion.p>
                <motion.p variants={fadeIn}>Most people are just consuming. Scrolling on Tiktok/social media all day, Netflix, Spotify, etc.</motion.p>
                <motion.p variants={fadeIn}>Especially in Southeast Asia, digital colonialism is real. American Big Tech companies are just as dominant outside of the US as they are inside of it. And with US markets relatively saturated, they are seeking to colonise emerging markets. They know us better than we know ourselves.</motion.p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <motion.h3 className="text-2xl font-bold mb-6" variants={fadeIn}>3. The future of work is for deep generalists</motion.h3>
              <motion.div className="space-y-4 text-lg text-gray-400" variants={stagger}>
                <motion.p variants={fadeIn}>A generalist is someone who learns all relevant knowledge and skills out of interest of achieving a goal in their life.</motion.p>
                <motion.p variants={fadeIn}>I learned all the basic skills needed to go from zero to one. This came naturally for me, even though it was against conventional wisdom at the beginning.</motion.p>
                <motion.p variants={fadeIn}>I firmly believe in this now and I want to encourage more people to take on this paths.</motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Media */}
        <motion.div 
          className="mb-24"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">In the media</h2>
          <p className="text-xl text-gray-400 mb-8">Featured in major Malaysian media outlets for my work in tech education and entrepreneurship.</p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[16/9] overflow-hidden rounded-xl"
            >
              <Link 
                href="https://www.theedgemarkets.com/node/652412" 
                target="_blank"
                rel="noopener noreferrer" 
                className="block w-full h-full"
              >
                <Image
                  src="/edge.jpg"
                  alt="The Edge Malaysia Feature"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The Edge Malaysia</h3>
                    <p className="text-sm text-gray-300">Edutech: Coding computers and decoding talents</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[16/9] overflow-hidden rounded-xl"
            >
              <Link 
                href="https://www.bfm.my/podcast/enterprise/open-for-business/get-a-job-or-your-money-back" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/bfm.jpg"
                  alt="BFM 89.9 Interview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">BFM 89.9</h3>
                    <p className="text-sm text-gray-300">Get a Job or Your Money Back</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[16/9] overflow-hidden rounded-xl"
            >
              <Link 
                href="https://www.astroawani.com/videos/notepad-ibrahim-sani-x7ko7m/notepad-ibrahim-sani-transform-life-tech-x8ovuiv" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/astro.jpg"
                  alt="Astro Awani Interview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Astro Awani</h3>
                    <p className="text-sm text-gray-300">Transform Life Through Tech</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[16/9] overflow-hidden rounded-xl"
            >
              <Link 
                href="https://vulcanpost.com/855914/codeo-malaysia-duolingo-for-coding-app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/vulcan.jpg"
                  alt="Vulcan Post Feature"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vulcan Post</h3>
                    <p className="text-sm text-gray-300">The Duolingo for Coding App</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[16/9] overflow-hidden rounded-xl"
            >
              <Link 
                href="https://www.disruptr.co/sigma-school-malaysia-coding-bootcamp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/disruptr.jpg"
                  alt="Disruptr Feature"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Disruptr</h3>
                    <p className="text-sm text-gray-300">Malaysia's First Income Share Agreement Coding Bootcamp</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact */}
        <motion.div className="mb-24" variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-8">Invest in me or work with me</h2>
          <motion.div className="space-y-4 text-xl text-gray-400" variants={stagger}>
            <motion.p variants={fadeIn}>I have tons of ideas and plans! And I know I can't do it all alone. Always down to chat if there's funding or collaboration opportunities!</motion.p>
            <motion.p variants={fadeIn}>Reach me on Linkedin or write me an email at <a href="mailto:deric.yee@gmail.com" className="text-white hover:text-gray-300">deric.yee@gmail.com</a>.</motion.p>
          </motion.div>
        </motion.div>

        {/* Footer with hover animations */}
        <motion.footer 
          className="border-t border-gray-800 pt-12"
          variants={fadeIn}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <h3 className="font-semibold mb-4">Index</h3>
              <motion.div className="space-y-3" variants={stagger}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/thoughts" className="block text-gray-400 hover:text-white transition-colors">
                    Thoughts
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/connect" className="block text-gray-400 hover:text-white transition-colors">
                    Connect
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="font-semibold mb-4">Social</h3>
              <motion.div className="space-y-3" variants={stagger}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://www.youtube.com/@dericjyyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Youtube
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://linkedin.com/in/dericyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://instagram.com/dericyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://tiktok.com/@dericyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    TikTok
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://twitter.com/dericyee" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a 
                    href="mailto:deric.yee@gmail.com" 
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="font-semibold mb-4">Ventures</h3>
              <motion.div className="space-y-3" variants={stagger}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://sigmaschool.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Sigma School
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://sigmastudios.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Sigma Studios
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://codeo.ai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Codeo
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link 
                    href="https://tryjobier.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Jobier
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-800 py-8 text-center text-sm text-gray-400"
            variants={fadeIn}
          >
            © {new Date().getFullYear()} Deric Yee
          </motion.div>
        </motion.footer>
      </motion.div>
    </main>
  );
} 