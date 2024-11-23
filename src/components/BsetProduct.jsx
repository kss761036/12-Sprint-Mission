import { useMediaQuery } from "react-responsive";
import getProduct from './api.jsx';
import ProductItem from './ProductItem.jsx';
import { useState, useEffect } from 'react';
import SubTitle from './SubTitle.jsx';

const BsetProduct = ({col}) => {

    const isTablet = useMediaQuery({
        query: "(max-width: 1200px)",
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('favorite');
    const [pageSize, setPageSize] = useState(isMobile ? 1 : isTablet ? 2 : 4);

    useEffect(() => {
        setPageSize(isMobile ? 1 : isTablet ? 2 : 4);
    }, [isMobile, isTablet]);

    const handleLoad = async (orderQuery, pageSizeQuery) => {
        const { list } = await getProduct({order: orderQuery, pageSize: pageSizeQuery});
        setItems(list);
    };

    useEffect(() => {
        handleLoad(order, pageSize);
    }, [order, pageSize]);

    return(
        <>
            <h2 className="tit_box">
                <SubTitle name="베스트 상품"/>
            </h2>
            <div className="proudct_list_box">
                <ul className={`product_list col${col}`}>
                    {items.map((item) => {
                        return (
                            <li key={item.id}>
                                <ProductItem item={item}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default BsetProduct;
