import {useDispatch, useSelector} from "react-redux";
import {closeModal, setModal} from "../store/modalSlice";

export default function Modal() {
    const modal = useSelector(state => state.modal)

    const dispatch = useDispatch()

    const modalBody = () => {
        switch(modal.status) {
            case 'auth': return (
                <div className='auth_block'>
                    <h3>Авторизация</h3>
                    <div>
                        <h6>Почта</h6>
                        <input type="email"/>
                    </div>
                    <div>
                        <h6>Пароль</h6>
                        <input type="password"/>
                    </div>
                    <button>Войти</button>
                    <div>
                        <p>Еще нет аккаунта?</p>
                        <p onClick={() => dispatch(setModal('register'))}>Зарегистрироваться</p>
                    </div>
                </div>
            )
            case 'register': return (
                <div className='auth_block'>
                    <h3>Регистрация</h3>
                    <div>
                        <h6>Имя</h6>
                        <input type="text"/>
                    </div>
                    <div>
                        <h6>Фамилия</h6>
                        <input type="text"/>
                    </div>
                    <div>
                        <h6>Почта</h6>
                        <input type="email"/>
                    </div>
                    <div>                        <h6>Пароль</h6>
                        <input type="password"/>
                    </div>
                    <button>Войти</button>
                    <div>
                        <p>Уже есть аккаунт?</p>
                        <p onClick={() => dispatch(setModal('auth'))}>Авторизоваться</p>
                    </div>
                </div>
            )
            default: return null
        }
    }

    return (
        <>
            <div
                className='modal_bg'
                style={ {opacity: modal.status === 'closed' && '0', pointerEvents: modal.status === 'closed' && 'none'} }
                onClick={() => dispatch(closeModal())}
            />
            <div>
                {modalBody()}
            </div>
        </>
    )
}