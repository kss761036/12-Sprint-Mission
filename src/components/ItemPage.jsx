import SubTitle from './SubTitle.jsx';
import BsetProduct from './BsetProduct.jsx';

const ItemPage = () => {
    return(
        <>
            <h2 className="tit_box">
                <SubTitle name="베스트 상품"/>
            </h2>
            <BsetProduct />
        </>
    )
}

export default ItemPage;
