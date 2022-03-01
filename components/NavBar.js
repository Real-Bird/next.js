import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

export default function NvaBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        {/* <a className={styles.nav}>Home</a> */}
        {/* <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a> */}
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>

      <Link href="/about">
        {/* <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>About</a> */}
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: tomato;
        }
        .active {
          color: gold;
        }
      `}</style>
    </nav>
  );
}
