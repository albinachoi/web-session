import {useSelector} from "react-redux";
import ProductCard from "../components/ProductCard";

export default function DrinksPage() {
    const drinksData = useSelector(state => state.products.drinks)

    return (
        <>
            <br/><br/><br/>
            <div className="container mt-5">
                <div className="row">
                    {drinksData.map(item => <ProductCard key={item.id} {...item} styles={ {height: '350px'} }/>)}
                </div>
            </div>
        </>
    )
}