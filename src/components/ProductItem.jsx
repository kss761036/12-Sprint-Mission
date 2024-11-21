import React, { useState, useEffect } from 'react';
import './ProductItem.css';
import item from "./../assets/item.png";
import wish from "./../assets/icon_wish.svg";

const ProductItem = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
		const fetchData = async() => {
            const res = await fetch('https://panda-market-api.vercel.app/docs/');
                const result = res.json();
                return result;
        }	
        
        fetchData().then(res => setData(res));
    }, []);

    console.log(data);
    
    return(
        <div className="product_item">
            <div className="thum">
                <a href="">
                    <img src={item} alt="아이템 제목" />
                </a>
            </div>
            <div className="content">
                <div className="title">
                    <a href="">아이패드 미니 팝니다.</a>
                </div>
                <div className="price">500,000원</div>
                <div className="wish">
                    <div className="icon">
                        <img src={wish} alt="찜하기" />
                    </div>
                    <div className="num">240</div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
