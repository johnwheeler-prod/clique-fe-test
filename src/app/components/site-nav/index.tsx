import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export default function SiteNav() {
  //TODO: build out nav dropdowns, potentially make each dropdown an individual component and import each
  //so that they can be programatically made responsive for mobile
  //TODO: add hover states for the links to change to orange color on hover, and to button to change to purple-ish bg on hover

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navFlex}>
          <div className={styles.navFlexStart}>
            <Image
              src="/assets/clique-logo-black.png"
              width={120}
              height={52}
              alt="Clique Logo Typeface black"
            />
          </div>
          <div className={styles.navFlexEnd}>
            <Link href="/portfolio" className={styles.navFlexEndLink}>
              Portfolio
            </Link>
            <Link href="/focus" className={styles.navFlexEndLink}>
              Our Focus
            </Link>
            <Link href="/blog" className={styles.navFlexEndLink}>
              The Blog
            </Link>
            <Link href="/partnerships" className={styles.navFlexEndLink}>
              Partnerships
            </Link>
            <Link href="/get-started" className={styles.navFlexEndButton}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
