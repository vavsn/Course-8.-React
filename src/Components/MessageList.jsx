import React, { useState } from 'react';

export default function MessageListComponent(props) {
    const [arr, setValue] = useState(props);

    const result = arr.map(arr => {
        return <p key={arr.id}>
            <span>{arr.author}</span>,
            <span>{arr.text}</span>
        </p>;
    });


}