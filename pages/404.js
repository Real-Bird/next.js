import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Page404 from "../public/404.png";

export default function NotFound() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setHour(String(date.getHours()).padStart(2, "0"));
      setMinute(String(date.getMinutes()).padStart(2, "0"));
      setSecond(String(date.getSeconds()).padStart(2, "0"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container">
        <Image className="img" src={Page404} />
        <Link href="/">
          <a className="back">Go back</a>
        </Link>
        <div className="hour">{hour}</div>
        <div className="min">{minute}</div>
        <div className="sec">{second}</div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
        }
        .back,
        .img,
        .hour,
        .min,
        .sec {
          position: absolute;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
          font-weight: 700;
        }
        .img {
          z-index: -1;
        }
        .back {
          max-width: 300px;
          min-width: 80px;
          transform: translate(-254px, 32px);
        }
        .hour {
          transform: translate(165px, -125px);
          font-size: 30px;
        }
        .min {
          transform: translate(235px, -125px);
          font-size: 30px;
        }
        .sec {
          transform: translate(307px, -125px);
          font-size: 30px;
        }
      `}</style>
    </>
  );
}
