import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
 //import './styles.css'

 const elemArr = [
    {
        id: 0,
        author: "",
        text: ""
    },
 ];

 export default function FunctionComponent() {
    const [arr, setValue] = useState([]);
    const [inpText, setText] = useState('');
    const [lastIndex, setIndex] = useState(0);

    const result = arr.map(arr => {
        return <p key={arr.id}>
            <span>{arr.author}</span>, 
            <span>  {arr.text}</span>
        </p>;
    });

    function newElem(locAuthor, locText) {
        const elem = {
            id: lastIndex,
            author: locAuthor,
            text: locText
        };
        setValue([...arr, elem]);
    };

    function pressButton () {
        newElem("Пользователь", inpText);
        setIndex(arr.length + 1);
    };  

    React.useEffect(() => {
        setTimeout(() => {
            newElem("Система", 'Снова здорова!');
        }, 1500);

    }, [lastIndex]);
            
    const handleChange = (e) => {
        setText(e.target.value);
        inpText.focus();
    }

    return <div>
        <Button className="btn" variant="contained" color="primary" onClick={pressButton}>Add</Button>
        <input value={inpText} autoFocus={true} onChange={handleChange} />      
        {result}
	</div>;

}


