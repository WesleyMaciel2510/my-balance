import {
  faChartPie,
  faCircleQuestion,
  faChartSimple,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const InfoText = () => {
  return (
    <div
      style={{
        maxWidth: '166vh',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 18,
      }}
    >
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-primary text-white"
      >
        <div className="collapse-title text-xl font-medium flex items-center">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{
              color: 'white',
              width: 30,
              height: 30,
              paddingRight: 20,
            }}
          />
          What &apos;My Balance&apos; can do for You?
        </div>

        <div className="collapse-content items-center">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faChartPie}
              style={{
                color: 'white',
                width: 30,
                height: 30,
                paddingRight: 20,
              }}
            />
            Use &apos;Analytics&apos; to Track the performance of your accounts.
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{
                color: 'white',
                width: 30,
                height: 30,
                paddingRight: 20,
              }}
            />
            In &apos;My Investments&apos; you can see how your Holdings goes
            along the time.
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              style={{
                color: 'white',
                width: 30,
                height: 30,
                paddingRight: 20,
              }}
            />
            And in &apos;My Accounts&apos; it is easy to transfer amounts and
            add accounts.
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoText
