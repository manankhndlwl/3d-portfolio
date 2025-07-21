'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import Image from 'next/image'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaBriefcase, FaBuilding, FaCode, FaLaptopCode } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'work' | 'project'
  title: string
  company: string
  location: string
  date: string
  imageURL: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Badho Technologies',
    location: 'Remote',
    date: 'Jul 2024 - Present',
    imageURL: '/badho-logo.png',
    description:
      'Building scalable solutions for over 10+ Lakh retailers , distributors and brands across India.',
    achievements: [
      'Built the whole KYC verification feature for the Badho buyer and seller app allowing users to get verified seamlessly',
      'Built the purchase order dispatch feature for the Badho seller app, allowing distributors to have more seamless order acceptance and delivering experience while also allowing them to have more control over their orders',
      'Implemented push notifications for the Badho buyer, seller and sathi app with Firebase cloud messaging service, AWS SQS and Hasura event triggers',
      'Implemented the main payments screen for the Badho seller app, allowing them to have more control over their payments and also allowing them to have more control over their orders',
      'Improved the user experience for Badho buyer app to place the order by showing the different prices as per the quantity and showing various policies for the order',
      'Created the dynamic header component in the Badho buyer app whose ui can be controlled from the backend',
      'Added funtionality to hide/show header and bottom tab bar in badho buyer app as the user scrolls',
      'Check out the live project at https://play.google.com/store/search?q=badho+seller&c=apps',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'Badho Technologies',
    location: 'Remote',
    date: 'Mar 2024 - Jul 2024',
    imageURL: '/badho-logo.png',
    description: 'Developed key features for mobile apps and enhanced user experience.',
    achievements: [
      'Developed an employee master sign-in feature for support users, allowing them to log into ground staff accounts and resolve issues through a master sign-in mode',
      'Developed the "My Sellers" feature for the Badho Buyer app, enhancing user experience by providing information about sellers and nearby sellers',
      'Check out the live project at https://play.google.com/store/search?q=badho+buyer&c=apps',
      'Used React Native, Node.js, Hasura, GraphQL, and PostgreSQL',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 3,
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'Blackhat Code Technology',
    location: 'Remote',
    date: 'Aug 2023 - Nov 2023',
    imageURL: '/blackhat-logo.png',
    description: 'Enhanced e-commerce platform features and built admin dashboard.',
    achievements: [
      'Collaborated with a cross-functional team to enhance the checkout feature on the Dochomoe platform',
      'Developed and implemented an intuitive admin dashboard, revolutionizing product management by enabling seamless addition, deletion, and monitoring of products',
      'Integrated the phonepe payment gateway for the Dochomoe platform, allowing users to pay for their orders seamlessly',
      'Integrated shiprocket shipping API for the Dochomoe platform, allowing users to track their orders and get shipping updates',
      'Utilized Node.js, React.js, Express.js, MongoDB, Next.js, Material UI, Redux toolkit and Git',
      'Check out the live project at https://https://dochomoeo.com/',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-green-500" />,
  },
]

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === 'project' && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt={`${item.title} Architecture`}
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }))

  return (
    <section id="experience" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Professional Experience & Projects
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  )
}

export default Timeline
