'use client'

import { useState } from 'react'
import { ChevronDownIcon, Menu } from 'lucide-react'
import Image from 'next/image'
import { WhoIsThisFor } from './who-is-this-for'
import AnimatedAdoptionLifecycleChart from './AnimatedAdoptionLifecycleChart'
import { CurriculumSectionComponent } from './curriculum-section'
import { TypeAnimation } from 'react-type-animation'  // Add this import

export function LandingPageComponent() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const questions = [
    "What is Generative AI and how is it used?",
    "What will I learn in this Generative AI course?",
    "Who is the ideal candidate for this course?",
    "What type of projects will I work on during the course?",
    "Will I receive a certificate upon completing the course?",
    "How does this course prepare me for the AI industry job market?",
    "How long does the course last?"
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"  // Changed from "/my-app/public/logo.png" to "/logo.png"
              alt="Devtern Logo"
              width={150}  // Adjust this value based on your logo's dimensions
              height={50}  // Adjust this value based on your logo's dimensions
              className="mr-2"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600">Overview</a>
            <a href="#" className="hover:text-blue-600">Mentors</a>
            <a href="#" className="hover:text-blue-600">Curriculum</a>
            <a href="#" className="hover:text-blue-600">FAQs</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Enroll Now
            </button>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li><a href="#" className="block py-2 hover:text-blue-600">Overview</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Mentors</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Curriculum</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">FAQs</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Contact Us</a></li>
              <li>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                  Enroll Now
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold mb-8">
              GenAi-Powered{' '}
              <span className="text-blue-600">
                <TypeAnimation
                  sequence={[
                    'Full Stack Web Development',
                    1000,
                    'AI-Driven Web Solutions',
                    1000,
                    'Next-Gen Web Applications',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <div className="font-mono text-lg mb-8 space-y-2">
              <p>{'>'} Are you dreaming of creating your own web applications but don't know how to code?</p>
              <p>{'>'} No experience in frontend or backend development?</p>
              <p>{'>'} Feeling stuck on how to turn ideas into real-world projects?</p>
            </div>
            <p className="text-xl font-mono mb-8 text-blue-600">
              &gt; Next Cohort Starts 4th October
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4">
              Enroll Now
            </button>
            <div>
              <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
                Join Free Masterclass
              </button>
            </div>
            <p className="mt-4 text-gray-600 font-mono">
              Webinar Date - 29th September, Sunday
            </p>
          </div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-blue-100 opacity-50 transform -skew-y-6"></div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Be a pioneer. Build the future.</h2>
            <AnimatedAdoptionLifecycleChart />
            <div className="flex flex-wrap justify-between items-center mt-12">
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Transformative Technology</h3>
                  <p>Generative AI is at the forefront of the next technological revolution, reshaping industries from healthcare to entertainment.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">High Demand Skills</h3>
                  <p>As AI continues to advance, the demand for skilled professionals in this field is skyrocketing.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Future-Proof Career</h3>
                  <p>Gain skills that are not just in demand today but will be essential in the technologically advanced future.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <WhoIsThisFor />
          </div>
        </section>

        <CurriculumSectionComponent />

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">You'll have questions!</h2>
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span>{question}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform ${
                        activeQuestion === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeQuestion === index && (
                    <div className="p-4 border-t">
                      <p>This is a placeholder answer for the question. Replace this with the actual answer.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-4">Be a part of a new era in programming.</p>
          <p className="text-2xl font-bold mb-8">Be a 100x Engineer!</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Enroll Now
          </button>
        </div>
      </footer>
    </div>
  )
}