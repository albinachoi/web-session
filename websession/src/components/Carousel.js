import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Tooltip} from "bootstrap";

export default function Carousel() {
    const burgersData = useSelector(state => state.products.burgers)

    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
    });

    return (
        <section id="slaydesanud">
            <div className="slaydesan-udentasuv">
                <div className="kartinka-slaydera">
                    {burgersData.map(item =>
                        <figure
                            key={item.id}
                            className="shadow"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title={item.description}
                        >
                            <img src={item.img} alt=''/>
                        </figure>
                    )}
                </div>
            </div>
        </section>
    )
}