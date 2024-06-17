import Image from "next/image";
import styles from "./page.module.scss";

import SiteNav from "./components/site-nav";
import SitePreNav from "./components/site-pre-nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <SitePreNav />
      <SiteNav />
      <div className={styles.mainGradientBG}></div>
      <Hero />
      <News />
    </main>
  );
}

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <h1>
          <em>Dream Something.</em>
          <span>Build Something.</span>
        </h1>
      </div>
    </section>
  );
};

// TODO: add Campton font for overline text in news cards
const News = () => {
  return (
    <section className={styles.news} id="news">
      <div className={styles.contianer}>
        <div className={styles.newsGrid}>
          <div className={styles.newsGridColumn}>
            <article className={styles.newsGridColumnCard}>
              <Image
                src="/assets/news/grid-card-large.jpg"
                layout="fill"
                alt="Hiker with headlamp viewing a vibrant night sky atop a rock formation in a place that looks like a national park"
              />
              <div className={styles.newsGridColumnCardContent}>
                <p className={styles.overline}>News</p>
                <div className={styles.newsGridColumnCardContentFlex}>
                  <h2>
                    Dui egestas mauris urna eget. In cursus volutpat at massa
                    tristique.
                  </h2>
                  <a href="/"></a>
                </div>
              </div>
            </article>
          </div>
          <div className={styles.newsGridColumn}></div>
        </div>
        <h2></h2>
      </div>
    </section>
  );
};
