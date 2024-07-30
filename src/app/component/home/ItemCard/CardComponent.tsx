import Image from "next/image";
import {rgba} from "color2k";
const CardComponent = ({ props }) => {
    return(
        <div className="flex flex-col shadow-md mx-1 w-fit" style={{width: "330px", height: "360px", marginBottom: "20px"}}>
            <div className="relative w-full h-full">
                <Image src={props.img} alt={"error"} layout="fill" />
            </div>
            <div className="flex flex-col p-3 h-full justify-between">
                <div>
                    <h1 className="text-base font-black text-black">{props.title}</h1>
                    <p className="text-sm" style={{color: 'rgb(73,80,87'}}>{props.content}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-xs" style={{color: 'rgb(134, 142, 150)'}}>{formatDate(props.date)}</p>
                    <p className="text-xs" style={{color: 'rgb(134, 142, 150)'}}>{props.comment > 0 ? `${props.comment}개의 댓글` : null}</p>
                </div>
            </div>
            <div className="p-3 flex flex-row justify-between items-center" style={{borderTop: '1px solid #F1F3F5'}} >
                <div className="flex flex-row">
                    <Image src={props.logo} alt={"error"} width={22} height={20} style={{marginRight: "10px"}} />
                    <p className="text-sm" style={{color: 'rgb(134, 142, 150)'}}>by&nbsp;<span className="font-black text-black">{props.name}</span></p>
                </div>
                <div className="flex flex-row items-center justify-between w-10">
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7_4876)">
                            <path d="M9.33398 1.48047L6.33398 3.48047L3.33398 1.48047L0.333984 3.98047V7.48047L6.33398 12.4805L12.334 7.48047V3.98047L9.33398 1.48047Z" fill="#212529"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_7_4876">
                                <rect width="12" height="12" fill="white" transform="translate(0.333984 0.980469)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="text-sm">{props.like}</p>
                </div>
            </div>
        </div>
    )
}
const formatDate = (date) => {
    const cDate = new Date(date);
    const year = cDate.getFullYear();
    const month = cDate.getMonth() + 1;
    const day = cDate.getDate();

    return `${year}년 ${month}월 ${day}일`;
}
export default CardComponent;