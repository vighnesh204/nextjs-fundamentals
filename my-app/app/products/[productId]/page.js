'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
  return (
    <div>
        <h1>{params.productId} page</h1>
        <p>Product ID: {params.productId}</p>
    </div>
  )
}

export default page