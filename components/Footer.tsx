import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Footer = () => {
  const { locale } = useRouter();
  return (
    <footer className={styles.footer}>
      {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
      douscriptist &copy;
      {/* </a> */}
      <span style={{ position: "absolute", right: 10 }}>{new Date().toLocaleString(locale)}</span>
    </footer>
  );
};

export default Footer;
