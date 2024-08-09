import MiddleItem from "../../components/home/MiddleItem";

const MiddleItems = ({index, setIndex}: any) => {
    return(
        <div className="flex flex-row justify-between w-60">
            <MiddleItem svgIcon={<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_12_27)">
                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="currentColor"/>
                </g>
                <defs>
                    <clipPath id="clip0_12_27">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            } text="트렌딩" color={index==1 ? 'black' : "#868E96"} onClick={()=>setIndex(1)}
            border = { index==1 ? '2px solid black' : 'none' } bold = {index==1 ? "bold" : "normal"} />
            <MiddleItem svgIcon={
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12_36)">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#868E96"/>
                        <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#868E96"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_12_36">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            } text={"최신"} color={index==2 ? 'black' : "#868E96"} onClick={()=>setIndex(2)}
                        border = { index==2 ? '2px solid black' : 'none' } bold = {index==2 ? "bold" : "normal"} />
            <MiddleItem svgIcon={
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12_46)">
                        <path d="M6.18 20.0006C7.38398 20.0006 8.36 19.0246 8.36 17.8206C8.36 16.6166 7.38398 15.6406 6.18 15.6406C4.97602 15.6406 4 16.6166 4 17.8206C4 19.0246 4.97602 20.0006 6.18 20.0006Z" fill="#868E96"/>
                        <path d="M4 4.44141V7.27141C11.03 7.27141 16.73 12.9714 16.73 20.0014H19.56C19.56 11.4114 12.59 4.44141 4 4.44141ZM4 10.1014V12.9314C7.9 12.9314 11.07 16.1014 11.07 20.0014H13.9C13.9 14.5314 9.47 10.1014 4 10.1014Z" fill="#868E96"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_12_46">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            } text={"피드"} color={index==3 ? 'black' : "#868E96"} onClick={()=>setIndex(3)}
                        border = { index==3 ? '2px solid black' : 'none' } bold = {index === 3 ? "bold" : "normal"} />
        </div>
    )
}
export default MiddleItems;