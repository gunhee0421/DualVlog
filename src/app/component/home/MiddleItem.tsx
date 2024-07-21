
const MiddleItem = ({svgIcon, text, color, border, bold, onClick}) => {
    return(
        <div className="flex flex-row py-3" onClick={onClick} style={{color, borderBottom: border}}>
            <div>{svgIcon}</div>
            <p className="text-lg" style={{ fontWeight: bold}}>{text}</p>
        </div>
    )
}
export default MiddleItem;