import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';
import karthikWalk1 from '../assets/karthik_walk_1.jpg';
import karthikWalk2 from '../assets/karthik_walk_2.jpg';
import karthikHeroFolded from '../assets/karthik_hero_folded.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [walkPhase, setWalkPhase] = useState<'walk1' | 'walk2' | 'folded'>('walk1');

  // Realistic Cinematic Gait & Stride Timing Loop matching Reference Video
  useEffect(() => {
    let timer1: number;
    let timer2: number;
    let timer3: number;
    let loopTimer: number;

    const runWalkCycle = () => {
      // Step 1: Starts forward stride
      setWalkPhase('walk1');

      // Step 2: Next foot forward stride at 1.2s
      timer1 = window.setTimeout(() => {
        setWalkPhase('walk2');
      }, 1200);

      // Step 3: Second stride alternation at 2.4s
      timer2 = window.setTimeout(() => {
        setWalkPhase('walk1');
      }, 2400);

      // Step 4: Completes walk, halts into confident folded-hands stance at 3.6s
      timer3 = window.setTimeout(() => {
        setWalkPhase('folded');
      }, 3600);
    };

    runWalkCycle();
    // Continuous 8.5s complete cinematic loop
    loopTimer = window.setInterval(runWalkCycle, 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(loopTimer);
    };
  }, []);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-default md:cursor-none"
    >
      {/* ================= 1. MINIMAL CUSTOM CURSOR (DESKTOP) ================= */}
      {!isTouchDevice && cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.12)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. KARTHIK'S CINEMATIC WALKING & EXECUTIVE VISUAL LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        
        {/* Dynamic Forward Dolly-In & Rhythmic Walking Gait Container */}
        <motion.div
          animate={
            walkPhase === 'folded'
              ? {
                  scale: [1.1, 1.115, 1.1],
                  y: [0, -4, 0],
                  x: 0,
                }
              : {
                  scale: [0.92, 1.0, 1.08],
                  y: [24, 8, 20, 4, 0],
                  x: [-6, 6, -4, 4, 0],
                }
          }
          transition={
            walkPhase === 'folded'
              ? {
                  scale: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
                  x: { duration: 0.8, ease: 'easeOut' },
                }
              : {
                  scale: { duration: 3.6, ease: [0.25, 1, 0.5, 1] },
                  y: { duration: 3.6, ease: 'easeInOut' },
                  x: { duration: 3.6, ease: 'easeInOut' },
                }
          }
          className="relative h-screen w-full flex items-center justify-end pr-0 sm:pr-4 md:pr-10 lg:pr-16 xl:pr-24 origin-bottom-right"
        >
          {/* Top Dramatic Golden Spotlight Cone tracking gait */}
          <motion.div 
            animate={{
              opacity: walkPhase === 'folded' ? [0.85, 1, 0.85] : 0.75,
              scale: walkPhase === 'folded' ? [1, 1.05, 1] : 0.95,
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-16 right-[15%] md:right-[22%] w-[40rem] h-[40rem] bg-gradient-to-b from-[#F7E7C4]/30 via-[#D4AF37]/12 to-transparent rounded-full blur-[115px] pointer-events-none" 
          />

          {/* Warm Ambient Backlight Halo */}
          <div className="absolute top-1/4 right-[12%] md:right-[18%] w-[26rem] h-[26rem] bg-[#D4AF37]/20 rounded-full blur-[95px] pointer-events-none" />

          {/* Multi-Frame Walking & Folded-Hands Canvas Container */}
          <div className="relative h-[90vh] md:h-[94vh] lg:h-[98vh] flex items-center justify-center">
            
            {/* Frame 1: Left Stride Forward */}
            <motion.img
              src={karthikWalk1}
              alt="Karthik T Walking Step 1"
              animate={{
                opacity: walkPhase === 'walk1' ? 1 : 0,
                scale: walkPhase === 'walk1' ? 1 : 0.98,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-auto max-w-none object-contain filter contrast-[1.04] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />

            {/* Frame 2: Right Stride Forward */}
            <motion.img
              src={karthikWalk2}
              alt="Karthik T Walking Step 2"
              animate={{
                opacity: walkPhase === 'walk2' ? 1 : 0,
                scale: walkPhase === 'walk2' ? 1 : 0.98,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-auto max-w-none object-contain filter contrast-[1.04] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />

            {/* Frame 3: Poised Confident Folded-Hands Stance */}
            <motion.img
              src={karthikHeroFolded}
              alt="Karthik T Executive Stance"
              animate={{
                opacity: walkPhase === 'folded' ? 1 : 0,
                scale: walkPhase === 'folded' ? 1 : 1.02,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-full w-auto max-w-none object-contain filter contrast-[1.05] brightness-[1.0] drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            />
          </div>
        </motion.div>

        {/* Ambient Gold Floating Dust Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -80, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[1px] shadow-[0_0_8px_#D4AF37]"
          />
          <motion.div
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#F3DBB3] rounded-full blur-[1px] shadow-[0_0_10px_#D4AF37]"
          />
        </div>

        {/* Seamless Soft Left Edge & Vertical Blend */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/92 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10 hidden sm:flex">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Cinematic Emblem"
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)] opacity-85"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#home"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:text-[#D4AF37] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            KARTHIK T.
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hidden sm:flex group items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>GET IN TOUCH</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-[#D4AF37]">
                ↗
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 border border-[#8C6D4F]/50 bg-[#120F0C]/80 text-[#EAD8C7] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <span className={`block w-4 h-[1.5px] bg-[#D4AF37] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : '-translate-y-1'}`} />
              <span className={`block w-4 h-[1.5px] bg-[#D4AF37] transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-1'}`} />
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-20 left-6 right-6 z-40 bg-[#0E0C0A]/95 border border-[#8C6D4F]/50 backdrop-blur-2xl p-6 pointer-events-auto rounded-sm shadow-2xl"
            >
              <div className="flex flex-col space-y-4 text-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs tracking-[0.25em] uppercase text-[#EAD8C7] hover:text-[#D4AF37] py-2 border-b border-[#8C6D4F]/20 font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.25em] uppercase border border-[#8C6D4F] text-[#F3DBB3] py-2.5 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DOWNLOAD RESUME (PDF) ↓
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-1 text-xs tracking-[0.25em] uppercase bg-[#D4AF37] text-black font-semibold py-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  GET IN TOUCH ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Identity Capsule */}
            <motion.div variants={fadeUpVariants} className="flex items-center space-x-3 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
              <span 
                className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]"
              >
                KARTHIK T // B.TECH AI &amp; ML
              </span>
              <span className="text-[#8C6D4F]/60">•</span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#9E8E80]">
                BENGALURU
              </span>
            </motion.div>

            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-4 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: TURNING DATA */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  TURNING DATA
                </span>

                {/* Line 2: INTO */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  INTO
                </span>

                {/* Line 3: INSIGHT. */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  INSIGHT.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies - Immediate Communication */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <div
                className="inline-flex flex-wrap items-center gap-1.5 text-[10.5px] sm:text-[11.5px] md:text-xs font-normal tracking-[0.24em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="text-[#F3DBB3] font-medium">DATA ANALYTICS</span>
                <span className="text-[#8C6D4F] mx-1">•</span>
                <span className="text-[#F3DBB3] font-medium">POWER BI</span>
                <span className="text-[#8C6D4F] mx-1">•</span>
                <span className="text-[#F3DBB3] font-medium">SQL</span>
                <span className="text-[#8C6D4F] mx-1">•</span>
                <span className="text-[#F3DBB3] font-medium">PYTHON</span>
              </div>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                B.Tech AI &amp; ML student at REVA University with a dedicated focus on Data Analytics &amp; Business Intelligence.
                <br />
                Transforming raw multi-source datasets into dynamic dashboards, executive metrics, and actionable decisions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row flex-wrap items-center gap-3 sm:gap-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-[#D4AF37]">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume PDF */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#D5CBC0] hover:text-[#F3DBB3] text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 bg-[#120F0C]/40 backdrop-blur-sm"
              >
                <span>RESUME PDF</span>
                <span className="text-xs text-[#D4AF37]">↓</span>
              </motion.a>

              {/* View GitHub Button */}
              <motion.a
                href="https://github.com/karthikkarthi18012008-star"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-4 sm:px-5 py-3.5 border border-[#8C6D4F]/30 hover:border-[#8C6D4F] text-[#9E8E80] hover:text-[#EAD8C7] text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300"
              >
                <span>GITHUB</span>
                <span className="text-xs">↗</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-16 xl:pr-24 mr-2 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-2xl text-[#C99E5D] leading-none font-serif mb-2">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>DATA REVEALS THE TRUTH.</p>
              <p>INSIGHT CREATES THE ADVANTAGE.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.5rem] text-[#D8AB64] font-normal leading-none -ml-0.5"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Karthik
            </div>

            <div className="mt-4 pt-3 border-t border-[#8C6D4F]/30 text-[9px] font-mono tracking-widest text-[#9E8E80] uppercase">
              B.Tech AI &amp; ML // REVA 2029
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Status Indicators */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-[#8C6D4F]/20 text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] pointer-events-auto">
          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#C4B29E]">AVAILABLE FOR DATA ANALYTICS INTERNSHIP</span>
          </div>
          <div className="flex items-center space-x-6 text-[#9E8E80]">
            <span>POWER BI</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>BIGQUERY</span>
            <span>•</span>
            <span>PYTHON</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;