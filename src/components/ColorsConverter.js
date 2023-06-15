import { useState, useEffect } from 'react';
import HexToRgb from './HexToRgb';

function ColorsConverter() {
    const [form, setForm] = useState({ "colorInHex": "", "colorInRgb": "rgb(52,73,94)" });

    useEffect(() => {
        form.colorInRgb === 'Ошибка!' ?
        document.body.style.backgroundColor = 'red' :
        document.body.style.backgroundColor = form.colorInRgb;
    });

    const handleChangeInput = (e) => {
        /^#[\da-fA-F]{6}$/.test(e.target.value) ?
            setForm({ 'colorInHex': e.target.value, 'colorInRgb': `RGB( ${HexToRgb(e.target.value)} )` }) :
            setForm({ 'colorInHex': e.target.value, 'colorInRgb': 'Ошибка!' });
    };

    return (
        <div>
            <form>
                <input
                    className='color-in-hex'
                    onChange={handleChangeInput}
                    placeholder='#34495e'></input>
                <div className='color-in-rgb'>{form.colorInRgb}</div>
            </form>
        </div>
    )
}

export default ColorsConverter;