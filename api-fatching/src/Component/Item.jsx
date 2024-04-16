import React from 'react'

function Item(props) {
  return (
    <div className='p-10'>
        <div className='w-[350px] h-[520px] bg-slate-500 p-4 rounded-md'>
            <img className='w-full h-[70%] object-cover object-center rounded-md' src={props.image}/>
            <h1 className='text-white text-lg py-2'>{props.title}</h1>
            <div className='flex items-center justify-start gap-10 capitalize text-white'>
                <p>{props.price}</p>
                <p>{props.category}</p>
            </div>
            <div className='flex items-center justify-start gap-8'>
            <p className='text-white capitalize pt-2'>{props.rating}</p>
            <p className='text-white capitalize pt-2'>{props.count}</p>
            </div>
        </div>
    </div>
  )
}

export default Item