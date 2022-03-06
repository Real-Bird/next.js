import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";
import film from "../public/film.png";
export default function NvaBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Image className="img" src={film} width={400} height={200} alt="film" />
        <div>
          <Link href="/">
            {/* <a className={styles.nav}>Home</a> */}
            {/* <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a> */}
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>

          <Link href="/about">
            {/* <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>About</a> */}
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        .img {
          position: absolute;
          z-index: -1;
          max-width: 400px;
          margin-bottom: 10px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          position: relative;
          display: flex;
          gap: 10px;
          flex-direction: column;
          flex-wrap: wrap;
        }

        nav div div {
          display: flex;
          gap: 10px;
          flex-direction: row;
          justify-content: center;
          transform: translateY(-125px);
        }
      `}</style>
    </nav>
  );
}
