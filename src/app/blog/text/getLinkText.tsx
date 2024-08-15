import Link from "next/link";
import React from "react";
import { id } from "postcss-selector-parser";
import { randomUUID } from "crypto";

type LinkItem = [number, number];
const getLinkCode = (link: LinkItem, data: JSX.Element[]) => {
    let index = 0;

    return data.map((element, idx) => {
        const isLinke = link.find((item) => item[0] === idx);

        if (isLinke) {
            return (
                <Link key={idx} href={`#code-${isLinke[1]}`}>
                    {element}
                </Link>
            );
        }
        return React.cloneElement(element, { key: idx });
    });
};

export default getLinkCode;
