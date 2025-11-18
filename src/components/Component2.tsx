import { useSelector } from "react-redux";
import Bar from "./Bar";

export default function Component2() {
    var color = ['red', 'green', 'blue']
        const count = useSelector((state: any) => state.counter.value);

    return (
        <>
            <div className="flex flex-rows justify-evenly border-2 border-purple-700">
                {color.map((col) => <Bar color={col} height={count[col]} />)}


            </div>
        </>
    )
}