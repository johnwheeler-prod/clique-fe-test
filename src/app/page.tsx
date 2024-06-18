"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

import clsx from "clsx";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SiteNav from "./components/site-nav";
import SitePreNav from "./components/site-pre-nav";
import SiteFooter from "./components/site-footer";

//TODO: media responsiveness checks down to 240px width screens
//TODO: consult design on accessibility fix for minimum contrast for orange buttons with white text
//TODO: hover states for all links, buttons, cards, as defined by the figma prototype and designer comments

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
  //TODO: research gsap and targeting an element's background image (re: h1 emphasis tag with night sky background image) for parallax scroll effect
  //TODO: implement scroll effects for hero section as outlined in figma prototype
  //The scroll animation functionality of this section may need to be built utilizing an h1 tag and an h2 tag, which
  //could have accessibility and SEO implications.
  return (
    <section className={clsx("section", styles.hero)} id="top">
      <div className={styles.container}>
        <h1>
          <em id="em">Dream Something.</em>
          <span>Build Something.</span>
        </h1>
      </div>
    </section>
  );
};

const News = () => {
  // use scrollTrigger to raise new section into view when it scrolls into view
  // breakdown timeline so that as the section enters the viewport, other effects
  // can happen like text rising in each news well
  //TODO: remove toggleActions and replace with start, end, and scrub
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    //set  gsap defaults for easing and duration
    gsap.defaults({
      ease: "power2.out",
      duration: 1.5,
    });

    //animate full news section up and in
    gsap.from("#news", {
      scrollTrigger: {
        trigger: "#news",
        toggleActions: "restart pause resume pause",
      },
      y: "+=300",
    });
    //start the news grid from marginally lower than the upcoming section so that it reveals the
    //upcoming section as you continue scrolling
    gsap.from("#news-grid", {
      scrollTrigger: {
        trigger: "#news",
        toggleActions: "restart pause resume pause",
      },
      y: "+=100",
    });
    gsap.from(".arrow-button", {
      scrollTrigger: {
        trigger: "#news",
        toggleActions: "restart pause resume pause",
      },
      x: "+=150",
    });
    gsap.from(".card-overline", {
      scrollTrigger: {
        trigger: "#news",
        toggleActions: "restart pause resume pause",
      },
      y: "+=75",
      ease: "power3.out",
      delay: 0.35,
    });
    gsap.from(".card-heading", {
      scrollTrigger: {
        trigger: "#news",
        toggleActions: "restart pause resume pause",
      },
      y: "+=75",
      delay: 0.6,
      ease: "power3.out",
      duration: 1,
    });
  });

  //TODO: make news cards the Link element instead of just the arrow
  //TODO: add image zoom on hover with CSS

  return (
    <section className={clsx("section", styles.news)} id="news">
      <div className={styles.container}>
        <div className={styles.newsGrid} id="news-grid">
          <div className={styles.newsGridColumn}>
            <article className={styles.newsGridColumnCard}>
              <Image
                src="/assets/news/grid-card-large.jpg"
                fill
                alt="Hiker with headlamp viewing a vibrant night sky atop a rock formation in a place that looks like a national park"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.newsGridColumnCardContent}>
                <p className={clsx("card-overline", styles.overline)}>News</p>
                <div className={styles.newsGridColumnCardContentFlex}>
                  <h2 className="card-heading">
                    Dui egestas mauris urna eget. In cursus volutpat at massa
                    tristique.
                  </h2>
                  <Link
                    className={clsx("arrow-button", styles.arrowButton)}
                    href="/"
                    aria-label="arrow button for large news card"
                  >
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
                <p className={clsx("card-overline", styles.overline)}>News</p>
                <div className={styles.newsGridColumnCardSmallContentFlex}>
                  <h2 className="card-heading">
                    Eget varius rhoncus sodales tellus. Molestie eu ac feugia.
                  </h2>
                  <Link
                    className={clsx("arrow-button", styles.arrowButton)}
                    href="/"
                    aria-label="arrow button for small top news card"
                  >
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
                <p className={clsx("card-overline", styles.overline)}>News</p>
                <div className={styles.newsGridColumnCardSmallContentFlex}>
                  <h2 className="card-heading">
                    Aliquam tellus nisi pellentesque turpis eget accumsan dui
                  </h2>
                  <Link
                    className={clsx("arrow-button", styles.arrowButton)}
                    href="/"
                    aria-label="arrow button for small bottom news card"
                  >
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
  //TODO: add vertical bars to separate upcoming grid section, or consider a flex layout instead of a grid with svg vertical bars

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
  // use scrollTrigger to raise images in cluster one by one as the section scrolls into view
  // animate a rise effect on the copy content on the right side of the page
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    //set  gsap defaults for easing and duration
    gsap.defaults({
      ease: "power2.out",
      duration: 1.5,
    });

    //animate the three clustered images up and in when the about flex section scrolls into view
    gsap.from(".image-1", {
      scrollTrigger: {
        trigger: ".about-flex",
        start: "top 60%",
        end: "+=300",
        scrub: 0.75,
      },
      y: "+=250",
    });
    gsap.from(".image-2", {
      scrollTrigger: {
        trigger: ".about-flex",
        start: "top 33%",
        end: "+=325",
        scrub: 0.75,
      },
      y: "+=225",
    });
    gsap.from(".image-3", {
      scrollTrigger: {
        trigger: ".about-flex",
        start: "top 35%",
        end: "+=350",
        scrub: 0.75,
      },
      y: "+=200",
    });
    gsap.from(".about-flex-content", {
      scrollTrigger: {
        trigger: ".about-flex",
        start: "top 40%",
        end: "+=300",
        scrub: 0.75,
      },
      y: "+=250",
    });
  });

  return (
    <section className={clsx("section", styles.about)} id="about">
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <p className={styles.overlineDark}>About Us</p>
          <h2>
            Lorem enim sed dignissim arcu leo mauris fermentum arcu sed. Vitae
            senectus.
          </h2>
        </div>
        <div className={clsx("about-flex", styles.aboutFlex)}>
          <div className={styles.aboutFlexCluster}>
            <div className={clsx("image-1", styles.aboutFlexClusterContainer1)}>
              <Image
                src="/assets/about/arch.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Hiker outlined by a red sandstone arch"
              />
            </div>
            <div className={clsx("image-2", styles.aboutFlexClusterContainer2)}>
              <Image
                src="/assets/about/mountain-lake.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Photo of a mountain on the horizon beyond a lake at night with a vibrant array of stars"
              />
            </div>
            <div className={clsx("image-3", styles.aboutFlexClusterContainer3)}>
              <Image
                src="/assets/about/vibrant-sunset.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Coastal sunset photo with cotton candy colored clouds and very tame waves on the shore"
              />
            </div>
          </div>
          <div className={clsx("about-flex-content", styles.aboutFlexContent)}>
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
            {/* TODO: fix this button so that it only takes up its required width */}
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

  // use scrollTrigger to raise new section into view when it scrolls into view
  // breakdown timeline so that as the section enters the viewport, other effects
  // can happen like text rising in each news well
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    //set  gsap defaults for easing and duration
    gsap.defaults({
      ease: "power2.out",
      duration: 1.5,
    });

    //animate the three clustered images up and in when the about flex section scrolls into view
    gsap.from(".overline", {
      scrollTrigger: {
        trigger: ".form",
        start: "top 35%",
        end: "+=150",
        scrub: 1.25,
      },
      y: "+=100",
      opacity: 0.8,
    });
    gsap.from(".form-heading", {
      scrollTrigger: {
        trigger: ".form",
        start: "top 33%",
        end: "+=150",
        scrub: 1.25,
      },
      y: "+=125",
      opacity: 0.8,
    });
    gsap.from(".form-paragraph", {
      scrollTrigger: {
        trigger: ".form",
        start: "top 30%",
        end: "+=150",
        scrub: 1.25,
      },
      y: "+=150",
      opacity: 0.8,
    });
  });
  return (
    <section className={clsx("section form", styles.form)}>
      <div className={styles.container}>
        <div className={styles.formWell}>
          <div className={styles.formWellHeader}>
            <p className={clsx("overline", styles.overlineDark)}>
              Form Field CallOUT IPSUM
            </p>
            <h2 className="form-heading">A simple headline facu consecteur</h2>
            <p className="form-paragraph">
              Nisi a id sit pulvinar non. Quis tristique et sem cras morbi
              lacus. Magna faucibus ultrices sed consectetur risus et amet.{" "}
            </p>
          </div>
          {/* TODO: tons and tons of form styling */}
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
