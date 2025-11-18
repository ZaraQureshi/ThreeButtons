export default function Button({color}:{color:string}) {
    return (
        <>
            <div className={`border border-${color}-700`}>Button</div>
        </>
    )
}