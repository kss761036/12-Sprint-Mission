import Link from "next/link";
import styles from "./header-layout.module.css";
import { useMediaQuery } from "react-responsive";

export default function HeaderLayout() {
  const isMo = useMediaQuery({ query: "(max-width: 744px)" });
  return (
    <header className={styles.header}>
      <div className="inner">
        <div className={styles.logo}>
          <a href="/">
            {isMo ? (
              <img src="/assets/img/logo_text.svg" alt="판다마켓 로고" />
            ) : (
              <img src="/assets/img/logo.svg" alt="판다마켓 로고" />
            )}
          </a>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/boards">자유게시판</Link>
          </li>
          <li>
            <Link href="">중고마켓</Link>
          </li>
        </ul>
        <Link className={styles.my} href="">
          <img src="/assets/img/icon_my.svg" alt="마이페이지" />
        </Link>
      </div>
    </header>
  );
}
