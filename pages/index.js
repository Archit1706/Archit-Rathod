import Image from 'next/image'
import Head from 'next/head'

import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Archit Rathod | Portfolio</title>
        <meta name="title" content="Archit Rathod | Portfolio" />
        <meta name="description" content="Portfolio Website of Archit Rathod" />
        <meta name="role" content="full stack developer" />

        <meta name="keywords" content="Archit Rathod, Archit, Rathod, architrathod, architrathod.in, architrathod.com, architrathod.me, architrathod.github.io, architrathod.netlify.app, architrathod.vercel.app, architrathod.herokuapp.com, architrathod.000webhostapp.com, architrathod.pythonanywhere.com, architrathod.web.app, architrathod.web.az" />

        <meta name="author" content="Archit Rathod" />
        <meta property="og:title" content="Archit Rathod | Portfolio" />
        <meta property="og:description" content="Portfolio Website of Archit Rathod" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/56166813?v=4" />
        <meta property="og:url" content="https://architrathod.codes/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Archit Rathod | Portfolio" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_IN" />

        <meta name="twitter:title" content="Archit Rathod | Portfolio" />
        <meta name="twitter:description" content="Portfolio Website of Archit Rathod" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/75872913?v=4" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ArchitRathod_17" />
        <meta name="twitter:creator" content="@ArchitRathod_17" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Main />

      <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  )
}
