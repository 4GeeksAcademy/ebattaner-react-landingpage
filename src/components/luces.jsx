export const Luz = ({color, setColorActivo, colorActivo}) => {
        const selected = color === colorActivo;
        return (
            <><div className="p-2 luz" style={{background:color, height:"100px", width: "100px", borderRadius: "50px", border: selected ? "solid 4px":"none"}} onClick={()=>{setColorActivo(color)}}></div></>)
    }
