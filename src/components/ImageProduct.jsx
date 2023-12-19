import React from 'react'

const ImageProduct = ({ images }) => {
  const { large, small } = images
  
  return (
    <div className="flex-1 container">
      <div className="grid grid-cols-1 gap-7">
        <div>
          <img src={large} alt="Large Image" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {small.map((smallImage, index) => (
            <img key={index} src={smallImage} alt={`Small Image ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
  
export default ImageProduct
