import {useSelector} from "react-redux";
import ProductCard from "../components/ProductCard";

export default function MenuPage() {
    const burgersData = useSelector(state => state.products.burgers)

    return (
        <>
            <br/><br/><br/>
            <div className="container mt-5">
                <div className="row">
                    {burgersData.map(item => <ProductCard key={item.id} {...item}/>)}
                </div>
            </div>
        </>
    )
}