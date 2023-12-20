export default function ProductCard({img, name, description, bgColor, styles}) {
    return (
        <div className="col-md-4">
            <div className='product_card' style={ {backgroundColor: bgColor, ...styles} }>
                <img src={img} alt=""/>
                <h2>{name}</h2>
                <p>{description}</p>
                <a className="toorder" href="/order">Заказать</a>
            </div>
        </div>
    )
}