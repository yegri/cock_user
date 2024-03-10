"use client";
import logo_img from "@/assets/images/logo/logo_img.png";
import logo_txt from "@/assets/images/logo/logo_txt.png";
import * as styles from "./main.css";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/assets/images/icon/arrow.png";
import { useState } from "react";

export default function Home() {
  const [hoverLink, setHoverLink] = useState("");

  return (
    <div className={styles.mainWrap}>
      <div className={styles.logos}>
        <Image src={logo_img} alt="이미지 로고" />
        <Image src={logo_txt} alt="텍스트 로고" />
      </div>

      <div className={styles.texts}>
        <p className={styles.mainTxt}>A Chilly Treat</p>

        <div className={styles.mainTxt2}>
          THE <br /> VIBE <br /> FLOWS
        </div>

        <div className={styles.mainTxt3}>
          <Link
            href="/recipe"
            className={styles.a}
            onMouseEnter={() => setHoverLink("recipe")}
            onMouseLeave={() => setHoverLink("")}
          >
            Recipe
            <Image
              src={arrow}
              alt="화살표"
              className={`${
                hoverLink === "recipe" ? styles.arrowShow : styles.arrowNone
              }`}
            />
          </Link>
          <Link
            href="/board"
            className={styles.a}
            onMouseEnter={() => setHoverLink("board")}
            onMouseLeave={() => setHoverLink("")}
          >
            Board
            <Image
              src={arrow}
              alt="화살표"
              className={`${
                hoverLink === "board" ? styles.arrowShow : styles.arrowNone
              }`}
            />
          </Link>
          <Link
            href="/signin"
            className={styles.a}
            onMouseEnter={() => setHoverLink("signIn")}
            onMouseLeave={() => setHoverLink("")}
          >
            SignIn
            <Image
              src={arrow}
              alt="화살표"
              className={`${
                hoverLink === "signIn" ? styles.arrowShow : styles.arrowNone
              }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
