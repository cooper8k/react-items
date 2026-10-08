import type { CSSProperties } from "react";

const firstName = 'Angel';
const lastName = 'Prado';
const favoriteGame = ['halo', 'fifa', 'cod'];
const address = {
    zipCode: 'ABC-123',
    country: 'Chile'
}

const isActive = true;

const myStyles: CSSProperties = {

    backgroundColor: 'red',
    color: 'white',
    borderRadius: 20,
    padding: 10,
    marginTop: 30

}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGame.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p
                style={myStyles}
            >{JSON.stringify(address)}</p>
        </>
    );

};
export default MyAwesomeApp;