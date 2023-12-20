import styles from './OrderPage.module.scss'
import {useSelector} from "react-redux";
import {useState} from "react";

export default function OrderPage() {
    const [form, setForm] = useState({burgers: [], drinks: [], others: []})

    const productsData = useSelector(state => state.products)

    const handleForm = (key, item) => {
        if(!form[key].includes(item)) setForm({...form, [key]: [...form[key], item]})
        else setForm({...form, [key]: form[key].filter(x => x.id !== item.id)})
    }

    return (
        <div className={styles.wrapper}>
            <div>
                {productsData.burgers.map(item =>
                    <div key={item.id}
                         style={ {border: form.burgers.includes(item) && '2px solid #000'} }
                         onClick={() => handleForm('burgers', item)}
                    >
                        <img src={item.img} alt=""/>
                    </div>
                )}
            </div>
            <div>
                {productsData.drinks.map(item =>
                    <div key={item.id}
                         style={ {border: form.drinks.includes(item) && '2px solid #000'} }
                         onClick={() => handleForm('drinks', item)}
                    >
                        <img src={item.img} alt=""/>
                    </div>
                )}
            </div>
            <div>
                {productsData.others.map(item =>
                    <div key={item.id}
                         style={ {border: form.others.includes(item) && '2px solid #000'} }
                         onClick={() => handleForm('others', item)}
                    >
                        <img src={item.img} alt=""/>
                    </div>
                )}
            </div>
            <div>
                {form.burgers.map((item, i) => <p key={i}>- {item.name}</p>)}
                {form.drinks.map((item, i) => <p key={i}>- {item.name}</p>)}
                {form.others.map((item, i) => <p key={i}>- {item.name}</p>)}
                <h5>Итого: {form.burgers.length + form.drinks.length + form.others.length}</h5>
                <button>Заказать</button>
            </div>
        </div>
    )
}