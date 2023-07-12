import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AiFillGithub, AiFillYoutube, AiFillMail } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import logo1 from '../public/images/logo1.png'
import me from '../public/images/me-min.png'
import shop  from '../public/images/shop.png'

export default function Home() {
  return (
    <main className='bg-white px-10 md:px-40'>
      <section className='min-h-screen' >
        <header className='h-14 border-b mb-20'>
          <nav className='py-3 flex justify-between'>
            <div className='py-2 w-40 h-8  relative  overflow-hidden'>
              <Image src={logo1} objectFit='cover' />
            </div>
            <ul className='flex items-center gap-8'>
              <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
              </li>
              <li>
                <Button>Resume</Button>
              </li>
            </ul>
          </nav>
        </header>

        <div className="home text-center mb-3">
          <h1 className='text-5xl text-blue-950 font-medium py-3'>EclarKhalid</h1>
          <h3 className='text-2xl py-2'>Front-end And Back-end Developer.</h3>
          <p className='text-md leading-8 text-gray-900 max-w-lg mx-auto'>As a frontend and backend developer proficient in <span className=' text-blue-600'>Tailwind CSS</span> and <span className="text-blue-600">JavaScript libraries</span>, I have a versatile skill set that allows me to tackle both the client-side and server-side aspects of web development.</p>
        </div>

        <div className='flex justify-center gap-12 text-3xl text-gray-600 py-3 mb-20'>
          <Link href={'https://github.com/Eclarkhalid?tab=repositories'} target='_blank'><AiFillGithub /></Link>
          <Link href={'https://www.youtube.com/@eclarkhalid/videos'} target='_blank'>
            <AiFillYoutube />
          </Link>
          <Link href={'mailto:eclarkhalid@gmail.com'} target='_blank'><AiFillMail /></Link>
          <Link href={'https://twitter.com/eclarkhalid'} target='_blank'><BsTwitter /></Link>
        </div>
        <div className="text-center">
          <Button variant={'outline'}><a href="tel:+254708118414">Contact Me</a></Button>
        </div>
      </section>

      <section className="services">
        <h1 className='text-2xl font-medium '>ABOUT ME</h1>
        <div className="flex flex-col justify-around lg:flex-row flex-1 md:flex-row">
          <div className="basis-1/2">
            <div className='flex mx-auto bg-gradient-to-t from-blue-300   w-80 h-80  relative mt-20  overflow-hidden rounded'>
              <Image src={me} objectFit='cover' layout='fill' />
            </div>
          </div>

          <div className="aboutme basis-1/2 text-center m-auto shadow-lg p-10">
            <h3 className='text-xl font-medium mb-2'>Who am I?</h3>
            <p className='leading-8'>As a frontend developer,I create visually appealing and responsive user interfaces using <span className="text-blue-600">Tailwind CSS</span>.I efficiently style and layout elements using Tailwind's utility classes. Collaborating closely with designers,I transform their vision into code. With JavaScript libraries like <span className="text-blue-600">React</span> and <span className="text-blue-600">NextJs</span> ,I enhance the frontend with interactive and dynamic features.I handle client-side validation, form submissions, and <span className="text-blue-600">API</span> integrations for seamless frontend-backend communication.</p>
          </div>
        </div>
      </section>

      <section className="portfolio">
      <h1 className='text-2xl font-medium '>Portfolio</h1>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={shop} width={100} height={100} />
        </div>

      </div>
      </section>
    </main>
  )
}
