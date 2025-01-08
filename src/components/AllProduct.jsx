import { useMediaQuery } from "react-responsive";
import getProduct from "./api.jsx";
import Paging from "./Paging.jsx";
import ProductItem from "./ProductItem.jsx";
import { useRef, useState, useEffect } from "react";
import SubTitle from "./SubTitle.jsx";
import "./AllProduct.css";
import selectIcon from "./../assets/icon_select.svg";
import { Link } from "react-router-dom";
import useOutSideClick from "../hooks/useOutSideClick";

const AllProduct = ({ col }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [orderName, setOrderName] = useState("최신순");
  const [pageSize, setPageSize] = useState(isMobile ? 4 : isTablet ? 6 : 10);
  // 페이지네이션 관련 상태 추가
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [totalItems, setTotalItems] = useState(0); // 전체 아이템 수

  useEffect(() => {
    setPageSize(isMobile ? 4 : isTablet ? 6 : 10);
    setCurrentPage(1);
  }, [isMobile, isTablet]);

  const handleLoad = async (orderQuery, pageSizeQuery, keywordQuery, pageQuery) => {
    const { list, totalCount } = await getProduct({ order: orderQuery, pageSize: pageSizeQuery, keyword: keywordQuery, page: pageQuery });
    setItems(list);
    setTotalItems(totalCount);
  };

  useEffect(() => {
    handleLoad(order, pageSize, keyword, currentPage);
  }, [order, pageSize, keyword, currentPage]);

  const handleOrderChange = (newOrder, newOrderName) => {
    setOrder(newOrder);
    setOrderName(newOrderName);
    setCurrentPage(1);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setCurrentPage(1);
  };

  const selectRef = useRef(null);
  useOutSideClick(selectRef, () => selectRef.current.classList.remove("active"));

  const handleSelect = (e) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle("active");
  };

  return (
    <>
      <h2 className="tit_box">
        <SubTitle name="전체 상품" />
        <div className="product_search">
          <input className="inp_reset" type="text" placeholder="검색할 상품을 입력해주세요" onChange={handleKeywordChange} />
        </div>
        <div className="product_add_btn">
          <Link to="/additem" className="btn_blue">
            상품 등록하기
          </Link>
        </div>
        <div className="product_sort">
          <div className="select_common" onClick={handleSelect} ref={selectRef} data-menu="button">
            <p>{isMobile ? <img src={selectIcon} alt="상품정렬" /> : orderName}</p>
            <div className="select_list">
              <ul>
                <li onClick={() => handleOrderChange("recent", "최신순")}>최신순</li>
                <li onClick={() => handleOrderChange("favorite", "좋아요순")}>좋아요순</li>
              </ul>
            </div>
          </div>
        </div>
      </h2>
      <div className="product_list_box">
        <ul className={`product_list col${col}`}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ProductItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Paging totalItems={totalItems} itemsPerPage={pageSize} currentPage={currentPage} onPageChange={(page) => setCurrentPage(page)} />
    </>
  );
};

export default AllProduct;
