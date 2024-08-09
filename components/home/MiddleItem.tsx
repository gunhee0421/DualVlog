
const MiddleItem = ({svgIcon, text, color, border, bold, onClick}:any) => {
    return(
        <div className="flex flex-row py-3" onClick={onClick} style={{color, borderBottom: border}}>
            <div className="flex">{svgIcon}</div>
            <p className="flex text-lg whitespace-nowrap" style={{ fontWeight: bold}}>{text}</p>
        </div>
    )
}
export default MiddleItem;