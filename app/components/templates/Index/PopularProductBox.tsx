import Image from 'next/image'
import React from 'react'

interface popularProductBoxPropsType {
    title: string
    img: string
}

function PopularProductBox(props: popularProductBoxPropsType) {
    const {img , title} = props
  return (
    <div className='popular-product__box'>
       <Image width={1000} height={1000} src={img} alt={title} className='popular-product__box-img'/>
       <h4 className='popular-product__box-title'>{title}</h4>
    </div>
  )
}

export default PopularProductBox
