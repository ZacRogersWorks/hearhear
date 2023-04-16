import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hear Hear</title>
        <meta
          name="description"
          content="Lancaster, PA based recording, mixing, and production by Levi Schlosser"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Hear Hear" />
        {/* <meta property="og:url" content={`https://major-vibes.com`} /> */}
        <meta property="og:image" content="/images/og_img.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Lancaster, PA based recording, mixing, and production by Levi Schlosser."
        />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
