import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

import SiteNav from "./components/site-nav";
import SitePreNav from "./components/site-pre-nav";
import SiteFooter from "./components/site-footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <SitePreNav />
      <SiteNav />
      <div className={styles.mainGradientBG}></div>
      <Hero />
      <News />
      <About />
      <Form />
      <SiteFooter />
    </main>
  );
}

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <h1>
          <em id="em">Dream Something.</em>
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
      <div className={styles.container}>
        <div className={styles.newsGrid}>
          <div className={styles.newsGridColumn}>
            <article className={styles.newsGridColumnCard}>
              <Image
                src="/assets/news/grid-card-large.jpg"
                fill
                alt="Hiker with headlamp viewing a vibrant night sky atop a rock formation in a place that looks like a national park"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.newsGridColumnCardContent}>
                <p className={styles.overline}>News</p>
                <div className={styles.newsGridColumnCardContentFlex}>
                  <h2>
                    Dui egestas mauris urna eget. In cursus volutpat at massa
                    tristique.
                  </h2>
                  <Link className={styles.arrowButton} href="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.00037 12H19.0004"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 4.99982L19 11.9998L12 18.9998"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <div className={styles.newsGridColumnFlex}>
            <article className={styles.newsGridColumnCardSmall}>
              <Image
                src="/assets/news/grid-card-small-top.jpg"
                fill
                alt="Hiker with headlamp viewing a vibrant night sky atop a rock formation in a place that looks like a national park"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.newsGridColumnCardSmallContent}>
                <p className={styles.overline}>News</p>
                <div className={styles.newsGridColumnCardSmallContentFlex}>
                  <h2>
                    Eget varius rhoncus sodales tellus. Molestie eu ac feugia.
                  </h2>
                  <Link className={styles.arrowButton} href="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.00037 12H19.0004"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 4.99982L19 11.9998L12 18.9998"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <article className={styles.newsGridColumnCardSmall}>
              <Image
                src="/assets/news/grid-card-small-bottom.jpg"
                fill
                alt="Hiker with headlamp viewing a vibrant night sky atop a rock formation in a place that looks like a national park"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.newsGridColumnCardSmallContent}>
                <p className={styles.overline}>News</p>
                <div className={styles.newsGridColumnCardSmallContentFlex}>
                  <h2>
                    Aliquam tellus nisi pellentesque turpis eget accumsan dui
                  </h2>
                  <Link className={styles.arrowButton} href="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.00037 12H19.0004"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 4.99982L19 11.9998L12 18.9998"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
        <Upcoming />
      </div>
    </section>
  );
};

const Upcoming = () => {
  return (
    <div className={styles.upcoming}>
      <h2 className={styles.overlineDark}>Upcoming events</h2>
      <div className={styles.upcomingGrid}>
        <article className={styles.upcomingGridColumn}>
          <h3>Arcu euismod cum leo quis. Et adipiscing amet accumsan in.</h3>
          <p>June 11 | 10:00 AM - 11:30 AM</p>
        </article>
        <article className={styles.upcomingGridColumn}>
          <h3>Arcu euismod cum leo quis. Et adipiscing amet accumsan in.</h3>
          <p>June 11 | 10:00 AM - 11:30 AM</p>
        </article>
        <article className={styles.upcomingGridColumn}>
          <h3>Arcu euismod cum leo quis. Et adipiscing amet accumsan in.</h3>
          <p>June 11 | 10:00 AM - 11:30 AM</p>
        </article>
        <div className={styles.upcomingGridColumn}>
          <Link className={styles.upcomingButton} href="/news">
            View All News & Events
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00037 12.5H19.0004"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.49982L19 12.4998L12 19.4998"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <p className={styles.overlineDark}>About Us</p>
          <h2>
            Lorem enim sed dignissim arcu leo mauris fermentum arcu sed. Vitae
            senectus.
          </h2>
        </div>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutFlexCluster}>
            <div className={styles.aboutFlexClusterContainer1}>
              <Image
                src="/assets/about/arch.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Hiker outlined by a red sandstone arch"
              />
            </div>
            <div className={styles.aboutFlexClusterContainer2}>
              <Image
                src="/assets/about/mountain-lake.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Photo of a mountain on the horizon beyond a lake at night with a vibrant array of stars"
              />
            </div>
            <div className={styles.aboutFlexClusterContainer3}>
              <Image
                src="/assets/about/vibrant-sunset.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Coastal sunset photo with cotton candy colored clouds and very tame waves on the shore"
              />
            </div>
          </div>
          <div className={styles.aboutFlexContent}>
            <h3>Mi tellus magna at</h3>
            <p className={styles.paragraphLg}>
              Aliquet eget purus eu nisl et eleifend. Arcu mi nulla odio.
            </p>
            <p className={styles.paragraphMd}>
              Tristique et enim quisque gravida non parturient nunc a pharetra.
              Est rhoncus porta faucibus sit nunc diam. Accumsan proin praesent
              faucibus fermentum ipsum vulputate commodo viverra. Dui eget
              aliquam mauris consectetur.
            </p>
            <article className={styles.aboutFlexContentWell}>
              <p className={styles.pXL}>75+</p>
              <div>
                <p className={styles.overlineSm}>Large Statistic IPSUM</p>
                <p className={styles.pItalic}>
                  Nisi a id sit pulvinar non. Quis tristique et sem cras morbi
                  lacus. Magna faucibus ultric.
                </p>
              </div>
            </article>
            <Link href="/specialty" className={styles.aboutFlexContentButton}>
              Our Specialty Areas
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00037 12H19.0004"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 4.99982L19 11.9998L12 18.9998"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Form = () => {
  // TODO: replace this filler form with a react hubspot form for ease of use,
  // functionality, and ability to hand off to a client and have them collect,
  // process, and analyze their own data.
  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <div className={styles.formWell}>
          <div className={styles.formWellHeader}>
            <p className={styles.overlineDark}>Form Field CallOUT IPSUM</p>
            <h2>A simple headline facu consecteur</h2>
            <p>
              Nisi a id sit pulvinar non. Quis tristique et sem cras morbi
              lacus. Magna faucibus ultrices sed consectetur risus et amet.{" "}
            </p>
          </div>
          <form action="" className={styles.formWellForm}>
            <div className={styles.formWellFormFlex}>
              <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" />
              </div>
              <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>
            <div className={styles.formWellFormFlex}>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="emailConfirm">Confirm Email Address</label>
                <input type="email" id="emailConfirm" name="emailConfirm" />
              </div>
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" id="phone" name="phone" />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
            <div>
              <label htmlFor="audience">Audience Group</label>
              <select id="audience">
                <option value="">Select</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Message (Paragraph of text)</label>
              <textarea name="message" id="message"></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
