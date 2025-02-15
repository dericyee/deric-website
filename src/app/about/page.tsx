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
          {/* Newsletter Section */}
          <motion.div variants={fadeIn} className="mb-8">
            <div className="w-full p-3 bg-card/30 rounded-lg border border-[var(--border)]">
              <div className="flex flex-col space-y-1 mb-2">
                <h3 className="text-xs font-medium">Breaking The Mold with Deric Yee - A builder&apos;s journey through tech, AI, and Web3.</h3>
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

          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-sm md:text-base text-[var(--muted)] mb-8 italic">
              This page is a little self indulgent, it&apos;s all about me. Hopefully you&apos;ll find it interesting though 🙂.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Quick facts about me</h2>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[var(--muted)]">
                <li>📈 I studied Accounting & Finance at Lancaster University, UK, graduated in 2019.</li>
                <li>👨‍💻 I&apos;m turning 28 this year. Born in December, 1997. Currently based in Kuala Lumpur, Malaysia.</li>
                <li>💰 I dream of being able to run a $1B+ venture builder/venture capital firm some day to enable more game-changing ventures!</li>
                <li>🌍 I travel quite frequently. I love exploring and making new memories! Been to 20 countries & speak 4 languages</li>
                <li>🩻 I think radical life extension is possible, and maintain a rigorous diet and exercise routine to maximize the probability of achieving it.</li>
                <li>📐 My Myers Briggs personality type is ENFJ-A.</li>
                <li>🙏 I&apos;m agnostic—I believe the existence of God is, by definition, inherently unknowable. Any supposed evidence of God could just as easily be seen as proof that humanity has yet to fully understand a scientific process.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Biography</h2>
              <p className="text-sm md:text-base text-[var(--muted)] mb-8">
                Hi—this is a brief biography of myself. A snapshot of my journey, my beliefs, and the lessons I&apos;ve picked up along the way. Written in February 2025.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Who am I?</h3>
              <p className="text-sm md:text-base text-[var(--muted)] mb-4">From a bird&apos;s eye view, I am:</p>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[var(--muted)] mb-8">
                <li>A builder: I don&apos;t just consume ideas—I execute on them fast. Whether it&apos;s launching startups, iterating on product ideas, or optimizing systems, my instinct is to create and refine.</li>
                <li>A T-shaped generalist: I believe skill stacking is the ultimate leverage. I pick up technical, business, and operational skills, not just to know them but to apply them in real-world scenarios.</li>
                <li>A tech optimist: I believe technological progress is the key to solving many of our biggest challenges—from environmental sustainability to social and political divides. By building on the innovations of the past, we can create a better future.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">My early life</h3>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>I grew up in Malaysia, caught between two contrasting realities: the traditional path of job security and stability, and the rapidly emerging world of tech, business, and global opportunities.</p>
                <p>My parents were part of Malaysia&apos;s first generation of university graduates, navigating the country&apos;s economic transition. They weren&apos;t rich by any means—money was tight, and they worked extremely hard, staying loyal to their companies.</p>
                <p>But no matter how difficult things got, they always prioritized my education, doing their best with the knowledge and resources they had.</p>
                <p>The education system that worked for their generation, however, wasn&apos;t necessarily the best for mine. I started to see gaps—outdated methods, rigid structures, and a lack of real-world application.</p>
                <p>Over time, their hard work paid off. We moved into a comfortable home, firmly placing us in the upper middle class.</p>
                <p>Money stopped being a pressing concern, but the values of hard work, adaptability, and resourcefulness stuck with me for life.</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">School</h3>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>I spent my early years in a traditional Asian education system, heavily focused on rote memorization.</p>
                <p>From a young age, I learned how to game the system—doing just enough to secure top grades while reserving my real energy for things that actually interested me.</p>
                <p>I was a straight-A student in almost everything—except Mandarin Chinese, which was notoriously difficult (for me at leasat).</p>
                <p>My family prioritized education above all else.</p>
                <p>We skipped sports, extracurricular activities, and even family dinners just to create more time for studying.</p>
                <p>While this discipline helped me academically, it also made my childhood somewhat isolating.</p>
                <p>Fictional books became my escape. I read voraciously, which strengthened my language skills but kept me socially withdrawn.</p>
                <p>Ultimately, I found that real education didn&apos;t come from textbooks. The best way to learn was to dive into real-world problems and force myself to solve them. This mindset would later define my approach to business and tech.</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">My First Taste of Making Money Myself</h3>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>While most college students were focused on coursework, I was busy flipping graphical calculators. This wasn&apos;t just a side hustle—it was my first real experience understanding money, supply and demand, and the fundamentals of business.</p>
                <p>In pre-university and college programs, graphical calculators were a necessity, but a new one cost around RM800—far too expensive for most students. That&apos;s when I saw the opportunity. The second-hand market was thriving, and I realized that if I could source these calculators at a lower price and resell them, there was money to be made.</p>
                <p>At first, I started small—flipping a few units here and there. But as demand grew, I scaled up. I identified the major universities in Malaysia where these calculators were in high demand and began buying up stock strategically. Eventually, anyone who wanted a second-hand calculator in those universities had to go through me.</p>
                <p>The problem was that the market was filled with low-quality, faulty, or even counterfeit calculators. Because most transactions were peer-to-peer, buying from shady sellers was risky—some friends even got scammed. That&apos;s where I came in. By curating a reliable supply of good-condition calculators, I built trust with buyers and became the go-to source.</p>
                <p>To manage the cash flow needed to buy up stock, I partnered with a friend. Together, we ran a lean but effective operation.</p>
                <p>For about a year, this side hustle made me around $1,000 per month—significantly more than the average full-time salary in Malaysia at the time. More than the money, though, the experience opened my eyes to the basics of business:</p>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[var(--muted)] mb-8">
                <li>Profit & Loss: Understanding margins, pricing, and reinvesting profits.</li>
                <li>Supply & Demand: Buying at the right time and controlling availability.</li>
                <li>Lead Generation: Finding customers through word of mouth, forums, and social circles.</li>
              </ul>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>This experience was life-changing. I wasn&apos;t just earning money—I was proving to myself that I could create value, solve a problem, and turn that into income. In hindsight, it was a small venture, but in the context of where I was at the time, it was massive.</p>
                <p>Eventually, I had to shut it down. The risk of holding too much stock was growing—if the syllabus changed and calculators were no longer required, I&apos;d be stuck with useless inventory. Plus, I was about to leave for the UK to continue my studies.</p>
                <p>Still, this was my first real step into entrepreneurship, and it shaped the way I approached money and business forever.</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Early Adulthood & University</h3>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>When I entered university, I had no real direction. First, I wanted to do Biotechnology. Then Medicine. Then Dentistry. Finally, after countless conversations with family and friends about what was &quot;safer,&quot; I landed on Accounting and Finance. All of these shifts happened within a few months. At 18, I felt like I had to decide my entire future within three months—otherwise, I&apos;d be &quot;falling behind.&quot;</p>
                <p>The irony? I had no clue how accounting worked. I&apos;d been a science student my whole life. In hindsight, my choices weren&apos;t truly mine. They were echoes of the expectations and advice planted in me by the people around me.</p>
                <p>Once in the UK, I did what I thought was expected—studied hard. Too hard. I regret not taking more time to explore, experiment, and develop other aspects of my life. But even with that, my years abroad were easily some of the best. Not because of the education, but because of the cultural exposure, the people I met, the opportunities I stumbled upon, and the shift in mindset.</p>
                <p>I got involved. Joined clubs. Competed in business competitions. Represented my university. Spearheaded our student venture capital fund. Even got invited as a judge for our annual Startup Weekend event, awarding grants to winning ideas. That&apos;s when I got my first taste of the startup world.</p>
                <p>At the time, I was running the Student VC firm with a British venture capital group, aiming to bring more funding to Northern England startups—because almost everything was concentrated in London. I saw founders passionately pitching, building, brainstorming, and iterating through failure. Over time, the startup-founder bug bit me too.</p>
                <p>A few months later, I graduated and moved back to Malaysia to work in a venture capital firm. But sitting on the sidelines, doing market research, due diligence, and crunching numbers all day? It wasn&apos;t for me. I wanted to be in the action.</p>
                <p>The problem? I had no money. No business skills. No marketing skills. Nothing.</p>
                <p>But this was the bridge. The shift. The moment I went from thinking I had to follow the accounting/finance path to realizing I could build something of my own.</p>
                <p>I had done three corporate internships—finance at a big conglomerate, auditing at a Big 4 firm, and venture capital at a corporate fund in Malaysia.</p>
                <p>I pretty much hated all of it.</p>
                <p>I wasn&apos;t built for corporate. I wanted control over my time, my impact, and my learning speed. That&apos;s what led me to entrepreneurship.</p>
                <p>One key realization: the internet changes everything. If you know what you&apos;re doing, you can build and scale businesses with minimal capital. That changed my entire trajectory.</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">The Self-Learning Journey Begins</h3>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>The decision was simple.</p>
                <p>I wanted to build startups. I was inspired by people like Steve Jobs, who built the iPhone, and SaaS founders who created something once and scaled it to millions—all while generating stable, recurring revenue. During my VC days I met an indie hacker who was making $20,000-ish per month, just him, his code, and a small team of admins.</p>
                <p>It was a dream.</p>
                <p>Worst case? If my startup failed, I could always get a job.</p>
                <p>Tech paid well. Tech allowed for remote work.</p>
                <p>And back then, I was dating someone abroad. I had no clue how to get a job in her country through the conventional path, but I knew tech could give me the flexibility to work from anywhere.</p>
              </div>

              <h4 className="text-lg font-bold mb-4 text-[var(--foreground)]">3 things led me to me self-learning to code</h4>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[var(--muted)] mb-8">
                <li>Tech is the common denominator for all tech startups. I want to build a tech startup. So if I learned how to build software, it won&apos;t go wrong.</li>
                <li>9/10 of the top 10 biggest companies in S&P500 are tech companies. So I probably am on the right path. Think Facebook, Apple, Google, Microsoft, Nvidia, Amazon and so on.</li>
                <li>I saw how desperate founders recruit tech talents. I know how bad the talent market is for software developers. Saw first hand in most of the startup networking events I organised or attended during my VC days, it&apos;s usually as bad as every 1 techie to 7 non-tech founders. The non-tech founders were always pitching to the techie.</li>
              </ul>
              <p className="text-sm md:text-base text-[var(--muted)] mb-8">Worst case scenario, I have my bets hedged. If it all crash and burns, I&apos;ll just get use my tech skills somewhere and get a job somewhere.</p>

              <p className="text-sm md:text-base text-[var(--muted)] mb-4">So, I went all in.</p>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>I started learning the moment I landed my first job in VC. Whenever there was downtime, I was coding. After work, I was coding. During travels, I was coding. I skipped all social activities, hobbies, exercises whatsoever. I only had 1 goal. And I frequented these materials the most:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CS50</li>
                  <li>FreeCodeCamp</li>
                  <li>YouTube tutorials</li>
                </ul>
                <p>They were great starting points. But after six months, I was still stuck in tutorial hell.</p>
                <p>I felt like I was making progress, but there was one problem—I couldn&apos;t build anything from scratch.</p>
                <p>I could code along and copy all day, but when it came to writing something on my own? Blank.</p>
              </div>

              <h4 className="text-lg font-bold mb-4 text-[var(--foreground)]">Said F**K It & Took A Leap Of Faith. Scariest period of my life.</h4>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>So that&apos;s what I did. It was probably the most demoralising point in my life. Learning through online tutorials, building projects on my own, locked myself in my room and just did coding-related stuff from 8AM to 8PM every day for at least 6 months.</p>
                <p>Throughout the 6 months, I gave up a few times to dabble in different things relevant to the tech industry like UI/UX, Project Management, Data Analytics, or just rotating among different tutorials for different programming languages as soon as it gets tough.</p>
                <p>I was kinda going nowhere. Still couldn&apos;t really build anything from scratch on my own.</p>
                <p>Fast forward a few months, at the brink of giving up, I decided to tell myself - no more coding along, no more looking at solutions, no more watching videos.</p>
              </div>

              <h4 className="text-lg font-bold mb-4 text-[var(--foreground)]">It&apos;s do or die. And it boiled down to these 3 things.</h4>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-[var(--muted)] mb-8">
                <li>Choose a tech stack and stick to it. I went with the Javascript stack. VueJS, TailwindCSS, Expressjs, Firebase.</li>
                <li>Choose a project. Back then, a Korean drama called &quot;Start Up&quot; was famous for building this app called NoonGil in a Korean Accelerator. It helped blind people see using Object Detection AI. I chose this.</li>
                <li>Figure it out. No matter what. No excuses.</li>
              </ol>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
                <p>Interestingly enough, I got it done in a few weeks (without building my own ML models, of course.</p>
                <p>I plugged into some open source models API and got it to work. Almost an exact clone of it).</p>
                <p>From then on, I realised there&apos;s no &quot;secret&quot; to learning to code. You really just gotta grind through it.</p>
                <p>Just like learning to swim, you learn to swim only by swimming. It&apos;s the same for coding.</p>
                <p>You learn to code by coding. 1000 hours of watching tutorials will not help you learn to code.</p>
              </div>

              <h4 className="text-lg font-bold mb-4 text-[var(--foreground)]">Stacking Small Wins For Confidence Points</h4>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)] mb-8">
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

              <h4 className="text-lg font-bold mb-4 text-[var(--foreground)]">This was a pivotal moment in my life because:</h4>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-[var(--muted)] mb-8">
                <li>I proved that I could do it fully on my own. I gained confidence.</li>
                <li>People were willing to pay me for my skills. I gained more confidence.</li>
                <li>There&apos;s a big gap in the market. I knew I had to do something about this.</li>
              </ol>
              <p className="text-sm md:text-base text-[var(--muted)] mb-8">Which led me to work on a series of iterations in the coding education scene (story for another day!), that led to what became Sigma School in 2022, where we help train anyone to learn coding in 3 months, and get a job after they graduate, or we give them 100% of their money back.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Sigma School</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>After immersing myself in the world of startups and self-learning, I realized that many aspiring tech enthusiasts faced similar challenges—loneliness in their learning journey, difficulty in maintaining motivation, and a lack of structured guidance.</p>
                <p>Inspired by coding bootcamps like Lambda School in the U.S., which offers a model where students paid only when they secured a job, I envisioned creating a community that addressed these issues.</p>
                <p>However, due to legal constraints in Malaysia, the excessive fees that we need to charge to make this happen, and other challenges, implementing an income share agreement model proved unfeasible.</p>
                <p>Determined to align our success with that of our students, we reimagined the model.</p>
                <p>3-month bootcamp, secure a tech job after graduation, or receive a full refund.</p>
                <p>This approach ensured both parties had a vested interest in the outcome and provided the necessary cash flow to sustain operations.</p>
                <p>In 2022, we pre-launched this concept with a modest RM3,000 investment in advertising.</p>
                <p>The response was overwhelming—we generated RM30,000 in the first month, even before the product was fully developed.</p>
                <p>This validation confirmed we were addressing a significant need.</p>
                <p>Today, Sigma School has established partnerships with over 50 hiring companies across Singapore, Malaysia, and Australia.</p>
                <p>We have celebrated over 100 success stories, with our graduates securing positions in startups, corporations, and various industries.</p>
                <p>Our students come from diverse backgrounds: a doctor from the UK seeking a career pivot, gig workers transforming their professional paths, and individuals landing jobs just 1.5 months into their studies with us. And many more!</p>
              </div>

              {/* Press Features Grid */}
              <div className="mt-8 mb-8">
                <p className="text-sm md:text-base text-[var(--muted)] mb-4">Featured on press multiple times:</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-[var(--card)]">
                    <Image
                      src="/astro.jpg"
                      alt="Astro"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-[var(--card)]">
                    <Image
                      src="/bfm.jpg"
                      alt="BFM"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-[var(--card)]">
                    <Image
                      src="/vulcan.jpg"
                      alt="Vulcanpost"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-[var(--card)]">
                    <Image
                      src="/edge.jpg"
                      alt="The Edge"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>This venture holds profound meaning for me. We&apos;re expanding our curriculum to include courses in data analytics, AI agents, and digital marketing.</p>
                <p>Collaborating with companies, we&apos;re launching scholarship programs to train individuals in need.</p>
                <p>Pretty much everything I learned about business, I learned throughout my time with Sigma School.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Codeo.ai</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>After immersing myself in the world of coding education through Sigma School, I recognized a recurring challenge: many aspiring coders struggled to find accessible and engaging learning resources.</p>
                <p>Reflecting on my own journey, I recalled the effectiveness of language learning apps during my daily commutes to work.</p>
                <p>This inspired me to create a similar experience for coding.</p>
                <p>In 2023, with the support of a RM100,000 grant from Cradle Fund's CIP Spark programme, I co-founded Codeo.ai with my brother.</p>
                <p>Our vision was to develop a mobile app that made coding education fun and accessible through bite-sized lessons, gamification, and AI assistance.</p>
                <p>We aimed to empower individuals to learn coding with just five minutes a day.</p>
                <p>The development process was both challenging and rewarding. We focused on creating interactive exercises, real-world projects, and features like learning streaks and goal setting to keep users motivated.</p>
                <p>Our efforts were recognized when Vulcan Post featured Codeo.ai, highlighting its potential to democratize coding education.</p>
                <p>Although my brother eventually departed to pursue his career, I continued to refine and promote Codeo.ai.</p>
                <p>Today we still get like 10 new sign-ups each week. And I've integrated it as a supplementary tool for Sigma School students, enhancing their learning experience.</p>
                <p>I remain passionate about the concept of micro, bite-sized learning enhanced by AI and gamification.</p>
                <p>For anyone interested in collaborating or learning more, please feel free to reach out!</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Sigma Studios - Full Stack Web Development & Automation Agency</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>After founding Sigma Studios, we achieved significant milestones, including securing clients with revenues reaching seven figures. I also took on roles as a fractional CTO, participating in board meetings, shaping strategy, and managing tech teams with allocated budgets. Despite these accomplishments, I found that traditional software development and client engagements no longer ignited my passion.</p>
                <p>Recognizing the transformative potential of artificial intelligence, I decided to pivot Sigma Studios towards AI consultancy. I assembled a team of skilled contractors, and together, we've experienced modest yet promising growth. The interest from fellow entrepreneurs seeking to automate workflows and processes has been substantial, reaffirming my belief in this direction.</p>
                <p>Currently, my focus is on harnessing AI to drive innovation and efficiency for our clients. The enthusiasm and confidence I have in this path are unwavering, as I am convinced that AI holds the key to the future of business optimization.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">My First AI Agent Startup – Jobier</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>After mentoring hundreds of students at Sigma School, I saw a recurring pain point—getting a job was way harder than it needed to be. The process was broken. Students were spending months applying manually, struggling with rejections, and wasting time on repetitive tasks instead of focusing on actual skill-building.</p>
                <p>That's why I built Jobier—my first AI agent startup.</p>
                <p>Jobier automates the job search process, helping candidates apply to the right jobs, optimize their resumes, and even prep for interviews—all without the usual stress. It's not just another job board; it's an AI-powered job-hunting assistant designed to help people land jobs faster.</p>
                <p>This startup wasn't just about solving a problem—it was personal. I wanted to build something that truly levels the playing field, making job hunting easier, smarter, and more efficient for everyone.</p>
                <p>In early 2025, I co-founded Jobier with my general partner, Adrian. Our mission was to revolutionize the job search process by leveraging artificial intelligence to automate and personalize every aspect of it. We envisioned a platform where all the jobs in the world are aggregated in one place, and users are matched to positions that align with their skills, interests, and salary expectations.</p>
                <p>As we move forward, we're excited about the potential of Jobier to transform the job market. Our goal is to continuously enhance the platform, integrating more advanced AI capabilities and expanding our reach to help job seekers worldwide. The journey has just begun, and we're committed to making Jobier the go-to solution for anyone looking to navigate their career path with ease and efficiency.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">My Goals & Where I&apos;m Headed</h2>
              <div className="space-y-4 text-sm md:text-base text-[var(--muted)]">
                <p>For a long time, I&apos;ve felt like I was moving without a clear direction. That&apos;s something I&apos;m actively working to change. One thing I do know for certain—I want to make a massive impact. Whether that&apos;s driven by a need to leave a legacy or simply the natural urge to accumulate resources, I&apos;m not entirely sure. But I believe many people feel the same way, even if they don&apos;t say it out loud. Acknowledging these ambitions seems like the first step to fulfilling them.</p>

                <h3 className="text-xl font-bold mb-4 mt-8 text-[var(--foreground)]">Why Technology?</h3>
                <p>There are countless ways to create impact, but technology is the most obvious path. You don&apos;t need to be a genius to see how transformative innovations like GPT-4 or Sora are.</p>
                <p>I&apos;m not drawn to academia or research, so I probably won&apos;t contribute on a theoretical level. But I enjoy entrepreneurship and I&apos;m good at it. So, I see myself either starting or joining a company that fundamentally changes how an important part of our world operates. What that will be? I don&apos;t know yet.</p>

                <h3 className="text-xl font-bold mb-4 mt-8 text-[var(--foreground)]">The Next Few Years</h3>
                <p>Money is a key factor in the short term. I&apos;ve set a goal of reaching $1M in annual profit—about 4x my highest earnings so far. At that level, either continuing the company or selling a company would allow me financial freedom while supporting my family and close friends.</p>

    
              </div>
            </section>

            {/* Future Focus */}
            <motion.div className="mt-24 mb-24" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">Where my head&apos;s at now</h2>
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

            
            {/* Beliefs & Guiding Principles */}
            <motion.div className="mb-24" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">Beliefs & Guiding Principles</h2>
              <motion.div className="space-y-8" variants={stagger}>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={stagger}>
                  <motion.div 
                    className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl"
                    variants={fadeIn}
                  >
                    <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Execution &gt; Ideas</h3>
                    <p className="text-sm md:text-base text-[var(--muted)]">
                      Ideas are worthless without action. I focus on building, testing, and iterating quickly.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl"
                    variants={fadeIn}
                  >
                    <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Leverage is Everything</h3>
                    <p className="text-sm md:text-base text-[var(--muted)]">
                      Whether it's through technology, people, or systems, I always look for ways to maximize impact with minimal effort.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl"
                    variants={fadeIn}
                  >
                    <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Learning Comes From Doing</h3>
                    <p className="text-sm md:text-base text-[var(--muted)]">
                      The best way to learn is by building. I believe in the "learn by shipping" approach.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl"
                    variants={fadeIn}
                  >
                    <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">Autonomy Matters</h3>
                    <p className="text-sm md:text-base text-[var(--muted)]">
                      I value freedom and control over my time, which is why I build businesses that don't trap me in a job-like structure.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* What's Next */}
            <motion.div className="mb-24" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">What's Next?</h2>
              <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
                <motion.p variants={fadeIn}>
                  I have no plans to slow down. My goal is to keep building, learning, and pushing boundaries. Whether it's scaling my current businesses, launching new ventures, or mentoring the next generation of builders, I see this as just the beginning.
                </motion.p>
                <motion.p variants={fadeIn}>
                  If you're working on something interesting, let's connect. I'm always open to new ideas and collaborations.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Contact */}
            <motion.div className="mb-24" variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Invest in me or work with me</h2>
              <motion.div className="space-y-4 text-sm md:text-base text-[var(--muted)]" variants={stagger}>
                <motion.p variants={fadeIn}>I have tons of ideas and plans! And I know I can&apos;t do it all alone. Always down to chat if there&apos;s funding or collaboration opportunities!</motion.p>
                <motion.p variants={fadeIn}>
                  Reach me on <a href="https://www.linkedin.com/in/dericyjy/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:underline font-medium">LinkedIn</a> or write me an email at{" "}
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
            <Footer />
          </div>
        </div>
      </motion.div>
    </main>
  );
}