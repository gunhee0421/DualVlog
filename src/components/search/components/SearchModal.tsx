import React, { FC, useState, useEffect } from "react";

export const SearchModal: React.FC<{
    close: boolean;
    onClose: () => void;
}> = ({ close, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 0);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex justify-center transition-opacity duration-2000 ease-in-out font-pretendard ${
                visible ? "opacity-100 bg-gray-400 bg-opacity-50" : "opacity-0"
            }`}
            onClick={handleClose}
        >
            <div
                className={`bg-white p-6 rounded-lg h-fit shadow-lg my-12 w-[30%] transform transition-transform duration-2000 ease-in-out ${
                    visible ? "translate-y-0" : "-translate-y-10"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    type="text"
                    placeholder="포스트 검색..."
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </div>
    );
};
