import { useSelector } from "react-redux"

export default function Component1() {
    const count = useSelector((state: any) => state.counter.value);
    console.log(count.red+count.green+count.blue)

    return (
        <>
            <div className="border-2 border-amber-700">
                <p>Score:</p>
                <div className="flex">

                <span style={{width:count.red/10+'%',display:`block`,background:'red'}}>x</span>
                <span style={{width:count.green/10+'%',display:`block`,background:'green'}}>x</span>
                <span style={{width:count.blue/10+'%',display:`block`,background:'blue'}}>x</span>
                </div>

                <div className="flex justify-evenly">
                    <span>Red:{count.red}</span>
                    <span>Green:{count.green}</span>
                    <span>Blue:{count.blue}</span>
                </div>

            </div>
        </>
    )
}