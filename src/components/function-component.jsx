import React from 'react';

export function FunctionComponent(props) {
    const Comp = <h1>{props.Message}</h1>
    console.log(Comp);
    return Comp;
}