import Image from "next/image";
import loading_img from "@/assets/images/cocktails/loading_cock.png";
import * as styles from "./index.css";

const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <Image
        src={loading_img}
        alt="로딩 이미지"
        className={styles.loadingImg}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
