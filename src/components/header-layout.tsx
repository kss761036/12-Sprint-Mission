import Link from "next/link";
import styles from "@/styles/HeaderLayout.module.css";

export default function HeaderLayout() {
  return (
    <header className={styles.header}>
      <div className="inner">
        <div className={styles.logo}>
          <a href="/">
            <img src="/assets/img/logo.svg" alt="판다마켓 로고" />
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
      </div>
    </header>
  );
}
