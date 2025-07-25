"use client"
import React, { useState } from 'react'

export default function FoodCounter() {
    const [count, setCount] = useState(1)
  return (
    <div className='flex items-center border bg-white rounded overflow-hidden'>
        <button className={`${count > 1 ? 'hidden' : 'flex'} h-6 w-6 items-center justify-center bg-gray-100 cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
        <button type='button' onClick={()=> count > 1 && setCount(count - 1)} className={`${count === 1 ? 'hidden' : 'flex'} h-6 w-6 items-center justify-center bg-gray-100 cursor-pointer`}>-</button>
        <span className='h-6 w-6 flex items-center justify-center'>{count}</span>
        <button type='button' onClick={()=>setCount(count + 1)} className='h-6 w-6 flex items-center justify-center bg-gray-100 cursor-pointer'>+</button>
    </div>
  )
}
