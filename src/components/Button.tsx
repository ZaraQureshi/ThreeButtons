import { useDispatch } from "react-redux";
import { incrementbyColor } from "../features/counter/counterSlice";
import { useState } from "react";

export default function Button({ color }: { color: string }) {

    let [height,setHeight]=useState(0);

    function dynamicColor(color: string) {
        if (color == "red") {
            return "border-red-700 ";
        }
        else if (color == "green") {
            return "border-green-700";
        } else {
            return "border-blue-700";
        }
    }
   
    function ClickButton(){
        dispatch(incrementbyColor({ color }))
        
    }

        const dispatch = useDispatch(); // get dispatch function
    console.log("color:", color)
    console.log(dispatch(incrementbyColor({ color })))

    return (
        <>
            <button className={`border ${dynamicColor(color)} `}  onClick={ClickButton}>Button</button>
        </>
    )
}