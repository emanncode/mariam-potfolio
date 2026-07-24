import {
  SiPython,
  SiPostgresql,
  SiGooglesheets,
  SiPowers,
  SiGooglebigquery
} from "react-icons/si";
import {
  FaFileExcel,
  FaFileCode,
  FaChartPie
} from "react-icons/fa6";
import ScrollReveal from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerReveal';
import { motion } from 'framer-motion';

const GROUPS = [
  {
    title: 'Programming\nLanguages',
    items: [
      { name: 'SQL', icon: <SiPostgresql /> },
      { name: 'Python', icon: <SiPython /> },
    ]
  },
  {
    title: 'Data Analytics\nTools',
    items: [
      { name: 'Microsoft Excel', icon: <FaFileExcel /> },
      { name: 'Google Sheets', icon: <SiGooglesheets /> },
      { name: 'Google BigQuery', icon: <SiGooglebigquery /> },
      { name: 'Visual Code Studio', icon: <FaFileCode /> },
    ]
  },
  {
    title: 'Data Visualization\nTools',
    items: [
      { name: 'Tableau', icon: <FaChartPie /> },
      { name: 'Power BI', icon: <SiPowers /> },
    ]
  },
];

const METHODS = [
  'Data Cleaning',
  'Data Transformation',
  'Descriptive Analytics',
  'Exploratory Data Analysis (EDA)',
  'Data Visualization',
  'Trend Analysis',
  'Comparative Analysis',
  'Customer Segmentation Analysis',
  'Inventory Analysis',
  'KPI Analysis',
  'Pivot Table Analysis',
  'Lookup Analysis (VLOOKUP & XLOOKUP)',
  'Dashboard Reporting',
  'Business Performance Analysis',
  'Basic Data Aggregation and Summarization',
  'Data Validation and Quality Checks',
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative mt-16 md:mt-32 mx-6 md:mx-0"
      aria-labelledby="skills-heading"
    >
      <ScrollReveal direction="left" distance={40}>
        {/* Decorative Grid Detail (Marginalia) - Matching AboutSection */}
        <div
          className="hidden xl:flex absolute -left-20 top-24 transform -rotate-90 origin-bottom-left items-center gap-4 text-xs font-bold tracking-[0.4em] text-faint uppercase"
          style={{ letterSpacing: '0.6em' }}
        >
          <span className="w-12 h-px bg-faint" />
          <span>Technical Stack / 02</span>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        {/* Section Divider with custom dashed style */}
        <div className="divider-dashed mb-12" />

        {/* Eyebrow Label - Matching AboutSection */}
        <p className="text-eyebrow mb-4">Technical Proficiency</p>

        {/* Section Heading - Matching AboutSection */}
        <h2
          className="mb-16 md:mb-24"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: 'var(--primary)',
          }}
        >
          Tools of the{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--highlight)' }}>Trade</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative">
        {/* Background Gradient Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent pointer-events-none -m-8 rounded-[3rem]" 
        />

        {GROUPS.map((group, idx) => (
          <StaggerContainer key={idx} className="flex flex-col gap-10 lg:px-10 first:pl-0 last:pr-0 lg:not-last:border-r border-white/5">
            <StaggerItem direction="down" distance={10}>
              <h3 className="text-xl md:text-2xl font-bold leading-tight text-highlight whitespace-pre-line tracking-tight font-display">
                {group.title}
              </h3>
            </StaggerItem>

            <div className="flex flex-col gap-8">
              {group.items.map((skill, i) => (
                <StaggerItem key={i} direction="up" distance={20}>
                  <div className="flex items-center gap-5 group cursor-default">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-highlight-dim bg-surface flex items-center justify-center text-highlight text-xl md:text-2xl transition-all duration-500 group-hover:bg-highlight group-hover:text-primary"
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-semibold text-sm md:text-base text-primary/80 group-hover:text-primary transition-colors duration-300 font-body tracking-wider uppercase">
                      {skill.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        ))}

        {/* Methods Column */}
        <StaggerContainer className="flex flex-col gap-10 lg:px-10 border-white/5">
          <StaggerItem direction="down" distance={10}>
            <h3 className="text-xl md:text-2xl font-bold leading-tight text-highlight whitespace-pre-line tracking-tight font-display">
              Data Analytics {'\n'} Methods
            </h3>
          </StaggerItem>
          
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {METHODS.map((method, i) => (
              <StaggerItem key={i} direction="right" distance={10}>
                <li className="flex items-start gap-4 text-sm md:text-base text-muted font-medium font-body leading-tight group hover:text-primary transition-colors duration-300 cursor-default">
                  <span className="text-highlight mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">•</span>
                  <span className="tracking-wide">{method}</span>
                </li>
              </StaggerItem>
            ))}
          </ul>
        </StaggerContainer>
      </div>
    </section>
  );
}