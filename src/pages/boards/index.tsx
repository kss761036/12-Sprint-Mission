import fetchBoardList from "@/lib/fetch-board-list";
import styles from "./board.module.css";
import BoardBestList from "@/components/board-best-list";
import BoardList from "@/components/board-list";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Article } from "../../../types";

export default function Page() {
  const [sortState, setSortState] = useState(false);
  const [order, setOrder] = useState("recent");
  const [list, setList] = useState<Article[]>([]);
  const [commonList, setCommonList] = useState<Article[]>([]);

  const onSortToggle = () => {
    setSortState(!sortState);
  };

  const fetchData = async () => {
    try {
      const bestResponse = await fetchBoardList(1, 3, "like");
      const commonResponse = await fetchBoardList(1, 10, order);

      setList(bestResponse);
      setCommonList(commonResponse);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [order]);

  const sortChange = (state: string) => {
    if (state !== order) {
      setOrder(state);
    }
    setSortState(false);
  };

  return (
    <>
      <div className="common_title">베스트 게시글</div>
      <ul className={styles.board_best}>
        {list.length === 0 ? (
          <p></p>
        ) : (
          list.map((el) => <BoardBestList key={el.id} {...el} />)
        )}
      </ul>
      <div className={styles.boart_common_wrap}>
        <div className={styles.boart_common_title}>
          <div className="common_title">게시글</div>
          <Link className="btn" href="">
            글쓰기
          </Link>
        </div>

        <div className={styles.board_common_sort}>
          <div className={styles.sch_box}>
            <img src="/assets/img/icon_search.svg" alt="검색" />
            <input type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <div className={styles.select_box} onClick={onSortToggle}>
            <p>{order === "recent" ? "최신순" : "좋아요순"}</p>
            {sortState && (
              <ul>
                <li
                  onClick={() => {
                    sortChange("recent");
                  }}>
                  최신순
                </li>
                <li
                  onClick={() => {
                    sortChange("like");
                  }}>
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </div>

        <ul className={styles.board_common}>
          {commonList.length === 0 ? (
            <p></p>
          ) : (
            commonList.map((el) => <BoardList key={el.id} {...el} />)
          )}
        </ul>
      </div>
    </>
  );
}
