import { useEffect, useRef } from "react"
import React, { useState } from "react"
import "../../../app/style/globals.css"

interface FooterViewProps {
  onQuit: () => void
  onSave: () => void
  onLink: () => void
}

const FooterView: React.FC<FooterViewProps> = ({ onQuit, onSave, onLink }) => {
  return (
    <div className="elkoqa">
      <div className="GtSRu">
        <button className="sc-evcjhq gJEhHm">
          <span onClick={onQuit}>나가기</span>
        </button>
        <div className="exzoUl">
          <button
            onClick={onLink}
            color="transparent"
            className="sc-jrQzAO icODNG sc-gIDmLj cAMIzw"
          >
            연결
          </button>
          <button
            onClick={onSave}
            color="teal"
            className="sc-jrQzAO jYsOEX sc-gIDmLj cAMIzw"
          >
            출간하기
          </button>
        </div>
      </div>
    </div>
  )
}
export default FooterView
