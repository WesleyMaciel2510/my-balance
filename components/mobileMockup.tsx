import React from 'react'
import Image from 'next/image'

const MobileMockup = () => {
  return (
    <div className="mockup-phone">
      <div className="camera" />
      <div className="display">
        <Image
          alt="Mobile Mockup"
          src={require('../assets/mockup-mobile.png')}
          width={200}
          height={150}
        />
      </div>
    </div>
  )
}

export default MobileMockup
