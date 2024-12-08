import productImg from "./../assets/item.png";
import wishIcon from "./../assets/icon_wish.svg";
import profileIcon from "./../assets/icon_profile.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailTop = ({ id }) => {
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return null;
  }

  const dateString = product.createdAt;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}.${month}.${day}`;

  return (
    <div className="product_detail_item">
      <div className="thum">
        <img src={product.images && product.images[0] ? product.images[0] : productImg} alt={product.name} onError={(e) => (e.target.src = productImg)} />
      </div>
      <div className="content">
        <div className="tit">{product.name}</div>
        <div className="price">{product.price.toLocaleString("ko-KR")}원</div>
        <div className="info">
          <p>상품 소개</p>
          <div className="desc">{product.description}</div>
        </div>
        <div className="info">
          <p>상품 태그</p>
          <ul className="tag">
            {product.tags.map((el) => (
              <li key={el}>#{el}</li>
            ))}
          </ul>
        </div>
        <div className="profile_box">
          <div className="name_area">
            <div className="profile">
              <img src={profileIcon} alt="" />
            </div>
            <div className="name">
              <p>{product.ownerNickname}</p>
              <div className="date">{formattedDate}</div>
            </div>
          </div>
          <button className="btn_reset wish_area">
            <div className="icon">
              <img src={wishIcon} alt="" />
            </div>
            <div className="numb">{product.favoriteCount}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailTop;
