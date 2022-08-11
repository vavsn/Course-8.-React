import React, { useState } from 'react';
 //import './styles.css'

 const elemArr = [
    {
        id: 1,
        author: "22",
        text: "33"
    },
 ];

 export default function App() {
    const [arr, setValue] = useState(elemArr);
    const [inpText, setText] = useState('');

    const result = arr.map(arr => {
        return <p key={arr.id}>
            <span>{arr.author}</span>,
            <span>{arr.text}</span>
        </p>;
    });

    function pressButton () {
        const newElem = {
            id: arr.length + 1,
            author: "Пользователь",
            text: inpText
        };
        setValue([...arr, newElem]);
    };  

    React.useEffect(() => {

        setTimeout(() => {
            console.log('Подождем мою маму? Подождём, твою мать!')
            alert('Добавлен элемент массива');
        }, 1500);
        }, [arr]);
            
    const handleChange = (e) => {
        setText(e.target.value);
      }

    return <div>
        <button className="btn" onClick={pressButton}>Add</button>
        <input value={inpText} onChange={handleChange} />
        {result}
	</div>;

}
