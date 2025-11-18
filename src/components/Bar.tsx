export default function Bar({color,height}:{color:string,height:any}){
     function dynamicColor(color: string) {
        if (color == "red") {
            return "bg-red-700 ";
        }
        else if (color == "green") {
            return "bg-green-700";
        } else {
            return "bg-blue-700";
        }
    }
    console.log(height,color)
 return (
        <>

            <div className={`${dynamicColor(color)}`} style={{ height: `${height/10}px` }}>Bar</div>
        </>
    )
}