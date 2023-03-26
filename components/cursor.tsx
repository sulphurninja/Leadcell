import React, { MutableRefObject, useEffect, useRef, useState } from "react";


export default function CustomCursor() {
    const cursorRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    useEffect(() => {
    if (cursorRef.current == null || cursorRef == null)
         return;
    document.addEventListener('mousemove', e => {
         if (cursorRef.current == null)
              return;
         cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
    })
    document.addEventListener('click', () => {
    if (cursorRef.current == null)
         return;
    cursorRef.current.classList.add("expand");
    setTimeout(() => {
         if (cursorRef.current == null)
              return;
         cursorRef.current.classList.remove("expand");
    }, 200)
    })
    }, [])
    return (
    <div className='cursor' ref={cursorRef}>
    </div>
    )
    }