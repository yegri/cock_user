import logo_img from "@/assets/images/logo/logo_img.png";
import logo_txt from "@/assets/images/logo/logo_txt.png";
import person from "@/assets/images/icon/person.png";
import Image from "next/image";
import * as styles from "./index.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.root}>
      <div></div>

      <Link className={styles.logos} href="/">
        <span>
          <Image className={styles.logoImg} src={logo_img} alt="로고 이미지" />
        </span>
        <span>
          <Image className={styles.logoTxt} src={logo_txt} alt="로고 텍스트" />
        </span>
      </Link>

      <Link href="/sign/in">
        <Image className={styles.person} src={person} alt="사람" />
      </Link>
    </div>
  );
};

export default Header;
