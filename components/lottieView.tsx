import React from 'react'
import Lottie from 'react-lottie'

interface Props {
  animationData: any
  loopingActive: boolean
}

const LottieView: React.FC<Props> = ({ animationData, loopingActive }) => {
  const defaultOptions = {
    loop: loopingActive,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default LottieView
