
import React, { useState } from 'react';

const Authorization = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <form className="form">
                Логин <input className="form__input" type="text" onChange={(e) => {
                    setLogin(e.target.value);
                    console.log(login);
                }} />
                Пароль<input className="form__input" type="text" onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(password);
                }} />
                <div className="form__block">
                    <button className="form__btn">Авторизация</button>

                </div>
            </form>
        </div>
    )
}

export default Authorization;