const MiddleItem = ({ svgIcon, text, color, border, bold, onClick }: any) => {
  return (
    <div
      className="flex flex-row py-3 cursor-pointer"
      onClick={onClick}
      style={{ color, borderBottom: border }}
    >
      <div className="flex">{svgIcon}</div>
      <p className="flex text-lg whitespace-nowrap font-semibold tracking-tighter">
        {text}
      </p>
    </div>
  )
}
export default MiddleItem
