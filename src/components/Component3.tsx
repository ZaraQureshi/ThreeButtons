import Button from "./Button";

export default function Component3() {
    var color = ['red', 'green', 'blue']
    return (
        <>
            <div className="flex flex-rows justify-evenly border-2 border-pink-700">
                {color.map((col)=>(<Button color={col} />))}


            </div>
        </>
    )
}