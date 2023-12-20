import {useSelector} from "react-redux";
import ProductCard from "../components/ProductCard";

export default function OthersPage() {
    const othersData = useSelector(state => state.products.others)

    return (
        <>
            <br/><br/><br/>
            <div className="container mt-5">
                <div className="row">
                    {othersData.map(item => <ProductCard key={item.id} {...item}/>)}
                </div>
            </div>
        </>
    )
}