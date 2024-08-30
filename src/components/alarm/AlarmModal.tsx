import { useAlarmInfoQuery } from "@/api/services/alarm/query"
import React, { useState, useEffect } from "react"
import { AlarmItem } from "./AlarmItem"

export const AlarmModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [visible, setVisible] = useState(false)

  const { data } = useAlarmInfoQuery()

  useEffect(() => {
    setTimeout(() => setVisible(true), 0)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-2000 ease-in-out font-pretendard ${
        visible ? "opacity-100 bg-gray-400 bg-opacity-50" : "opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-6 h-full shadow-lg w-[25%] transform transition-transform duration-2000 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-10"
        }`}
      >
        {data?.result &&
          data?.result.map((item, idx) => <AlarmItem key={idx} props={item} />)}
      </div>
    </div>
  )
}
