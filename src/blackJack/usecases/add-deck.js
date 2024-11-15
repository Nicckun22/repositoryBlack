
import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCarta Ejemplo:  ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales Ejemplo:  ['A','J','Q','K'];
 * @returns {array} Retorna un nuevo deck de cartas
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatorio como un string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un string');

     let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
