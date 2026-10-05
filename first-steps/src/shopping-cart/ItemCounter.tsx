import { useState } from "react";

import './ItemCounter.css'

interface Props {
    name: string;
    quantity?: number;
}

const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity)

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }


    return (
        <section className='item-row'>
            <samp className="item-text"
                style={{
                    color: count === 1 ? 'red' : 'green',
                }}>{name}</samp>


            <button onClick={handleAdd}>+1</button>
            <samp>{count}</samp>
            <button onClick={handleSubtract}>-1</button>
        </section>
    )
}

export default ItemCounter
