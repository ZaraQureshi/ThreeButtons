import { useSelector } from "react-redux"

export default function Component1() {
    const count = useSelector((state: any) => state.counter.value);
    console.log("total:",(count.red+count.green+count.blue)/3*100)
    const total=count.red+count.green+count.blue;
    const red:number=Math.round((count.red/total)*100) ||0;
    const green:number=Math.round((count.green/total)*100) ||0;
    const blue:number=Math.round((count.blue/total)*100)||0;

    return (
        <>
            <div className="border-2 border-amber-700">
                <p>Score:</p>
                <div className="flex w-full" style={{}}>

                <span className="transition-all duration-500 ease-out" style={{width:red+'%',display:`block`,background:'red'}}>{red?red+'%':""}</span>
                <span className="transition-all duration-500 ease-out" style={{width:green+'%',display:`block`,background:'green'}}>{green?green+'%':""}</span>
                <span className="transition-all duration-500 ease-out" style={{width:blue+'%',display:`block`,background:'blue'}}>{blue?blue+'%':""}</span>
                </div>

                <div className="flex justify-evenly">
                    <span>Red:{count.red/10}</span>
                    <span>Green:{count.green/10}</span>
                    <span>Blue:{count.blue/10}</span>
                </div>

            </div>
        </>
    )
}