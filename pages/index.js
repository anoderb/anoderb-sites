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
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
