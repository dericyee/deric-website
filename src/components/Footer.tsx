import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer className="border-t border-[var(--border)] pt-12" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
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
                href="https://www.youtube.com/@dericyjy" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
              >
                YouTube
              </Link>
              <Link 
                href="https://www.linkedin.com/in/dericyjy/" 
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
                href="https://www.tiktok.com/@dericyjy" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
              >
                TikTok
              </Link>
              <Link
                href="https://dericyee.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
              >
                Medium
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
  );
};

export default Footer; 