import Bar from "./Bar";

export default function Component2() {
    var color = ['red', 'green', 'blue']
    return (
        <>
            <div className="flex flex-rows justify-evenly border-2 border-purple-700">
                {color.map((col) => <Bar color={col} />)}


            </div>
        </>
    )
}