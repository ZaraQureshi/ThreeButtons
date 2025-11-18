import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        "value": {
            "red": 0,
            "green": 0,
            "blue": 0
        }

    },
    reducers: {
        incrementbyColor(state, action) {
            console.log(action.payload.color)
            if (action.payload.color==="red") {

                state.value.red += 10
                console.log("red triggered")
            }
            else if(action.payload.color==="green"){

                state.value.green += 10
                console.log("green triggered")
            }

            else if (action.payload.color==="blue"){

                state.value.blue += 10
                console.log("blue triggered")
            } 
                
            


        }

    }
})

export const { incrementbyColor } = counterSlice.actions;
export default counterSlice.reducer;