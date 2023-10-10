import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}


const basketSlice = createSlice( {
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: ( state, action ) => {
            // console.log( "state", state );
            state.items = [ ...state.items, action.payload ]
        },
        //logic of adding items to basket in the global state
        removeItemFromBasket: ( state, action ) => {

            const newstate = state.items;
            const index = state.items.findIndex( ( item ) => action.payload === item.id );
            newstate.splice( index, 1 )

            state.items = newstate

        },

        //logic of removing items to basket in the global state
    },
},
)
export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions

export default basketSlice.reducer