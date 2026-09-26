import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface SkillCategory {
  title: string;
  badge: string;
  items: string[];
  description: string;
  stat: string;
  colSpan: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    badge: 'LANGUAGES & LIBS',
    items: ['Python', 'Pandas', 'NumPy', 'SQL'],
    description:
      'Developing data processing scripts and analytical workflows in Python using Pandas and NumPy, alongside robust SQL querying for relational database management.',
    stat: 'CORE SCRIPTING',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'DATA SCIENCE',
    badge: 'MODELING & STATS',
    items: ['Feature Engineering', 'Statistics', 'Data Visualization'],
    description:
      'Applying statistical modeling, feature engineering pipelines, and exploratory data visualization to uncover patterns and surface predictive business intelligence.',
    stat: 'DATA TRANSFORMATION',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'ANALYTICS & VISUALIZATION',
    badge: 'BI & REPORTING',
    items: ['Power BI', 'Tableau', 'Excel'],
    description:
      'Crafting interactive enterprise dashboards and visual reports across Power BI and Tableau, complemented by advanced analytical and financial modeling in Excel.',
    stat: 'EXECUTIVE REPORTING',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'POWER BI',
    badge: 'DEEP SPECIALIZATION',
    items: ['Power Query', 'DAX', 'Data Modeling'],
    description:
      'Architecting star-schema data models, authoring complex DAX measures and calculations, and orchestrating automated data transformations through Power Query.',
    stat: 'DASHBOARD ARCHITECTURE',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'DATABASES & CLOUD',
    badge: 'DATA INFRASTRUCTURE',
    items: ['Microsoft SQL Server', 'Google BigQuery', 'Snowflake', 'AWS S3'],
    description:
      'Querying and managing data across Microsoft SQL Server, cloud data warehouses including Snowflake and Google BigQuery, and scalable cloud storage via AWS S3.',
    stat: 'CLOUD WAREHOUSING',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'TOOLS',
    badge: 'VERSION CONTROL',
    items: ['Git', 'GitHub'],
    description:
      'Managing codebase versioning, multi-branch workflows, collaborative code reviews, and structured repository tracking with Git and GitHub.',
    stat: 'DEV COLLABORATION',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative z-20 w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-28 lg:pt-36 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Top subtle section divider line to ensure zero visual overlap */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8C6D4F]/30 to-transparent" />
      </div>

      {/* Ambient Studio Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / CAPABILITIES &amp; TOOLKIT
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ANALYTICS TOOLKIT.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              BUSINESS INTELLIGENCE MATRIX.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6"
        >
          {skillCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-default group flex flex-col justify-between`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Body */}
              <div>
                {/* Card Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                    {block.badge}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all">
                    {block.stat}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {block.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {block.description}
                </p>
              </div>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20 mt-auto">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/60 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;