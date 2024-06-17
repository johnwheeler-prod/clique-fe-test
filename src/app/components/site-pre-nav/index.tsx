import styles from "./index.module.scss";
import Link from "next/link";

export default function SitePreNav() {
  return (
    <nav className={styles.prenav} id="prenav">
      <div className={styles.container}>
        <div className={styles.prenavFlex}>
          <div className={styles.prenavFlexEnd}>
            <Link href="/about" className={styles.prenavFlexEndLink}>
              About Us
            </Link>
            <Link href="/careers" className={styles.prenavFlexEndLink}>
              Our Focus
            </Link>
            <Link href="/contact" className={styles.prenavFlexEndLink}>
              The Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
