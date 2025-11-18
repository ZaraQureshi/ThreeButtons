export default function Bar({color}:{color:string}){
 return (
        <>

            <div className={`bg-${color}-700`}>Bar</div>
        </>
    )
}