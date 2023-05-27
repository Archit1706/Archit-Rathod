import Image from 'next/image'
import Head from 'next/head'

import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AnimationWrapper from '../components/AnimationWrapper'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Archit Rathod | Portfolio</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="title" content="Archit Rathod | Portfolio" />
        <meta name="description" content="Portfolio Website of Archit Rathod" />
        <meta name="role" content="full stack developer" />

        <meta name="keywords" content="Archit Rathod, Archit, Rathod, architrathod, architrathod.in, architrathod.com, architrathod.me, architrathod.github.io, architrathod.netlify.app, architrathod.vercel.app, architrathod.herokuapp.com, architrathod.000webhostapp.com, architrathod.pythonanywhere.com, architrathod.web.app, architrathod.web.az" />

        <meta name="author" content="Archit Rathod" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Create something new Everyday!" />
        <meta property="og:description" content="Fullstack Web Developer, MERN Stack, Next.js, Proficient in Python and C++" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://architrathod.codes/" />
        <meta property="og:image" content="https://architrathod.codes/archit_rathod_photo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Archit Rathod" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_IN" />

        <meta name="twitter:title" content="Archit Rathod | Portfolio" />
        <meta name="twitter:description" content="A Full Stack Web Developer looking for opportunities to work and grow with new people!" />
        <meta name="twitter:image" content="https://twitter.com/ArchitRathod_17/photo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ArchitRathod_17" />
        <meta name="twitter:creator" content="@ArchitRathod_17" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimationWrapper>
        <Main />
      </AnimationWrapper>
      <AnimationWrapper>
        <About />
      </AnimationWrapper>
      <AnimationWrapper>
        <Skills />
      </AnimationWrapper>
      <AnimationWrapper>
        <Projects />
      </AnimationWrapper>
      <AnimationWrapper>
        <Contact />
      </AnimationWrapper>

    </div>
  )
}
