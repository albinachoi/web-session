import Carousel from "../components/Carousel";

export default function HomePage() {

    return (
        <div>
            <Carousel/>

            <div className="container1">
                <div className="image-container">
                    <img src="10E47C6A-D1BF-41A5-BB34-4348130351CF.PNG" alt="Image 1"/>
                </div>
                <h1>Почему мы?</h1>
                <div className="image-container">
                    <img src="521A6F31-F7F1-4B96-A0CB-4192A7B459D1.PNG" alt="Image 2"/>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="text-block text-block1 bg-yellow">
                            <h2>Широкий выбор бургеров</h2>
                            <p>Предлагаем разнообразие бургеров, начиная от классических до авторских. У нас есть
                                бургеры для любого вкуса, чтобы удовлетворить вашу кулинарную фантазию.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-block text-block2 bg-red">
                            <h2>Свежие и натуральные ингредиенты</h2>
                            <p>Мы используем только свежие продукты высокого качества, чтобы гарантировать, что каждый
                                бургер приготовлен с использованием натуральных и вкусных ингредиентов.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-block text-block3 bg-green">
                            <h2>Быстрая и удобная доставка</h2>
                            <p>Наслаждайтесь вкусом наших бургеров в уюте своего дома. Наша служба доставки быстрая и
                                надежная, чтобы удовлетворить вашу голодную потребность в любое время.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-block textblock3 bg-green">
                            <h2>Акции и скидки</h2>
                            <p>У нас всегда есть специальные предложения и акции для наших клиентов. Получайте бургеры с
                                выгодой, заказывая у нас.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-block textblock1 bg-red">
                            <h2>Специальные предложения для постоянных клиентов</h2>
                            <p>Мы ценим наших постоянных клиентов и предлагаем им специальные бонусы и скидки.
                                Присоединяйтесь к программе лояльности для дополнительных выгод.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-block textblock3 bg-yellow">
                            <h2>Отзывчивый сервис поддержки</h2>
                            <p>Наша команда поддержки всегда готова помочь вам. Если у вас есть какие-либо вопросы или
                                особые запросы, свяжитесь с нами, и мы с удовольствием поможем.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}