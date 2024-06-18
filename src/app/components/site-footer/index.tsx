import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

// TODO: tidy up all styling in footer to ensure pixel perfect match to design,
// be sure to focus on font weights and spacing.

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerFlex}>
          <Image
            src="/assets/clique-logo-white.png"
            width={120}
            height={52}
            alt="Clique Logo White"
          />
          <div className={styles.footerFlexEnd}>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/focus">Our Focus</Link>
            <Link href="/blog">The Blog</Link>
            <Link href="/partnerships">Partnerships</Link>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/get-started" className={styles.footerFlexEndButton}>
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/contact">Disclaimer</Link>
          <Link href="/contact">Report an Accessibility Issue</Link>
          <div className={styles.footerBlockFlex}>
            <p>Built by&nbsp;</p>
            <Link href="/contact">Clique Studios</Link>
          </div>
        </div>
        <div className={styles.footerFlex}>
          <div className={styles.footerFlexStart}>
            <p>
              123 East Neat St <br /> Chicago, IL 60605
            </p>
            <div>
              <p>Chicago</p>
              <a href="tel:312-123-4567">(312) 123 - 4567</a>
            </div>
          </div>
          <div className={styles.footerFlexEnd}>
            <p>Follow Us</p>
            <Link href="https://meta.com">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5019 25.0542V38.1115H21.0995V25.0547H18.4004V20.5551H21.0995V17.8536C21.0995 14.1828 22.6235 12 26.9536 12H30.5585V16.5001H28.3052C26.6196 16.5001 26.5081 17.1289 26.5081 18.3025L26.5019 20.5546H30.584L30.1063 25.0542H26.5019Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link href="https://x.com">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM24.1931 20.8946L24.1389 19.9863C23.9764 17.6321 25.4034 15.4819 27.6614 14.6477C28.4923 14.3511 29.9013 14.314 30.8226 14.5735C31.1838 14.6848 31.8703 15.0555 32.358 15.3892L33.2431 16.0009L34.2186 15.6858C34.7605 15.5189 35.483 15.2409 35.8082 15.0555C36.1153 14.8887 36.3862 14.796 36.3862 14.8516C36.3862 15.1667 35.7179 16.2419 35.1579 16.8351C34.3992 17.6692 34.616 17.7434 36.1514 17.1873C37.0727 16.8721 37.0907 16.8721 36.9101 17.2243C36.8017 17.4097 36.2417 18.0585 35.6456 18.6517C34.634 19.6712 34.5798 19.7824 34.5798 20.6351C34.5798 21.9512 33.9657 24.6947 33.3515 26.1962C32.2135 29.0138 29.7749 31.9241 27.3362 33.3885C23.9041 35.4461 19.3339 35.9652 15.4863 34.7603C14.2038 34.3524 12 33.3144 12 33.129C12 33.0734 12.6684 32.9992 13.4812 32.9807C15.1792 32.9436 16.8772 32.4617 18.3224 31.609L19.2978 31.0158L18.1778 30.6265C16.5882 30.0704 15.1612 28.7914 14.7999 27.5865C14.6915 27.1972 14.7276 27.1787 15.7392 27.1787L16.7869 27.1601L15.9018 26.7338C14.8541 26.1962 13.8967 25.2879 13.427 24.361C13.0838 23.6937 12.6503 22.0069 12.7767 21.8771C12.8129 21.8215 13.1922 21.9327 13.6257 22.081C14.8722 22.5444 15.0347 22.4332 14.3122 21.6547C12.9574 20.2458 12.5419 18.1512 13.1922 16.1677L13.4993 15.278L14.6915 16.4828C17.1301 18.9112 20.0023 20.3571 23.2899 20.7834L24.1931 20.8946Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
