import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Upcoming from '../components/Upcoming';
import Ended from '../components/Ended';
import Footer from '../components/Footer';



export default function Home() {
  return (
    
    <div>
      <Head>
        <meta name="google-site-verification" content="5fYyGN4n44zr_ZstKM0wBqvZAQm-proX119wFMMiBeA" />
        <title>Anoderb Validator</title>
        <meta name="description" content="CRYPTO ENTHUSIASTS AND NODE OPRATORS" />
        <link rel="icon" href="/public/favicon/favicon.ico" />
      </Head>
    <Main />
    <Upcoming />
    <Projects />
    <Ended />
    <About />
    <Contact />
    <Footer />
    </div>
  )
}
