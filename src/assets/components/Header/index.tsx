"use client";
import logo_img from "@/assets/images/logo/logo_img.png";
import logo_txt from "@/assets/images/logo/logo_txt.png";
import person from "@/assets/images/icon/person.png";
import person_fill from "@/assets/images/icon/person_fill.png";
import Image from "next/image";
import * as styles from "./index.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserModal from "../Modals/UserModal";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(session);

  const pathname = usePathname();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(false);
  }, [pathname]);

  return (
    <div className={pathname === "/" ? `${styles.none}` : styles.root}>
      <div></div>

      <Link className={styles.logos} href="/">
        <span>
          <Image className={styles.logoImg} src={logo_img} alt="로고 이미지" />
        </span>
        <span>
          <Image className={styles.logoTxt} src={logo_txt} alt="로고 텍스트" />
        </span>
      </Link>

      {user ? (
        <div className={styles.personWrap}>
          <div>
            <Image
              className={styles.person_fill}
              src={person_fill}
              alt="사람"
              onClick={() => {
                setModal(!modal);
              }}
            />
          </div>
          {modal && (
            <div className={styles.modalBox}>
              <UserModal userName={user?.name} />
            </div>
          )}
        </div>
      ) : (
        <Link href="/signin">
          <Image className={styles.person} src={person} alt="사람" />
        </Link>
      )}
    </div>
  );
};

export default Header;
