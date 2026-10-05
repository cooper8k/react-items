import ItemCounter from "../shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'nintendo switch 2', quantity: 1 },
    { productName: 'pro controller', quantity: 2 },
    { productName: 'super smash', quantity: 3 }
];

export function FirstStepsApp() {
    return (
        <>
            {/* <h1>carrito de compra</h1>
            <ItemCounter name='nintendo switch 2' quantity={1} />
            <ItemCounter name='pro controller' quantity={2} />
            <ItemCounter name='super smash' quantity={3} />*/}

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
        </>
    )

}