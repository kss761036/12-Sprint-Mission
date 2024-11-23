import './ProductItem.css';
import default_Img from "./../assets/item.png";
import wishImg from "./../assets/icon_wish.svg";

const ProductItem = ({item}) => {
    const {images, name, price, favoriteCount} = item;
    return(
        <div className="product_item">
            <div className="thum">
                <a href="">
                    <img src={images && images[0] ? images[0] : default_Img} alt={name} onError={(e) => e.target.src = default_Img}/>
                </a>
            </div>
            <div className="content">
                <div className="title">
                    <a href="">{name}</a>
                </div>
                <div className="price">{price.toLocaleString('ko-KR')}원</div>
                <div className="wish">
                    <div className="icon">
                        <img src={wishImg} alt="찜하기" />
                    </div>
                    <div className="num">{favoriteCount}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
