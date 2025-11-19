import { useSelector } from "react-redux"

export default function Component1() {
    const count = useSelector((state: any) => state.counter.value);
    console.log("total:",(count.red+count.green+count.blue)/3*100)
    const total=count.red+count.green+count.blue;

    return (
        <>
            <div className="border-2 border-amber-700">
                <p>Score:</p>
                <div className="flex w-full" style={{}}>

                <span className="transition-all duration-500 ease-out" style={{width:(count.red/total)*100+'%',display:`block`,background:'red'}}>{count.red/10+'%'}</span>
                <span className="transition-all duration-500 ease-out" style={{width:(count.green/total)*100+'%',display:`block`,background:'green'}}>{count.green/10+'%'}</span>
                <span className="transition-all duration-500 ease-out" style={{width:(count.blue/total)*100+'%',display:`block`,background:'blue'}}>{count.blue/10+'%'}</span>
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