export const formatDate = (date: string) => {
    const newdate = new Date(date);

    const year = newdate.getFullYear();
    const month = newdate.getMonth() + 1; // 월 추출 (0이 1월을 나타내므로 +1)
    const day = newdate.getDate(); // 일 추출

    return `${year}년 ${month}월 ${day}일`;
};
