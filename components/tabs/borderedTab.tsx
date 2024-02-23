import React, { ReactNode, useState } from 'react'
import './styles.css'

interface BorderedTabProps {
  labelTab1: string
  labelTab2: string
  labelTab3: string
  labelTab4?: string

  content1: ReactNode
  content2: ReactNode
  content3: ReactNode
  content4?: ReactNode
}

const BorderedTab: React.FC<BorderedTabProps> = ({
  labelTab1,
  labelTab2,
  labelTab3,
  labelTab4,
  content1,
  content2,
  content3,
  content4,
}) => {
  const [selectedTab, setSelectedTab] = useState('tab1')

  const handleTabChange = (event: {
    target: { id: React.SetStateAction<string> }
  }) => {
    setSelectedTab(event.target.id)
  }

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        id="tab1"
        aria-label={labelTab1}
        checked={selectedTab === 'tab1'}
        onChange={handleTabChange}
        style={{ paddingLeft: 30, paddingRight: 30 }}
      />
      <div
        role="tabpanel"
        className="tab-content p-10 bg-tab"
        style={{
          display: selectedTab === 'tab1' ? 'flex' : 'none',
          width: '175vh',
        }}
      >
        {content1}
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        id="tab2"
        aria-label={labelTab2}
        checked={selectedTab === 'tab2'}
        onChange={handleTabChange}
        style={{ paddingLeft: 30, paddingRight: 30 }}
      />
      <div
        role="tabpanel"
        className="tab-content p-10 bg-tab"
        style={{
          display: selectedTab === 'tab2' ? 'flex' : 'none',
        }}
      >
        {content2}
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        id="tab3"
        aria-label={labelTab3}
        checked={selectedTab === 'tab3'}
        onChange={handleTabChange}
        style={{ paddingLeft: 30, paddingRight: 30 }}
      />
      <div
        role="tabpanel"
        className="tab-content p-10 bg-tab"
        style={{
          display: selectedTab === 'tab3' ? 'flex' : 'none',
          alignContent: 'space-between',
        }}
      >
        {content3}
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab input-tab"
        id="tab4"
        aria-label={labelTab4}
        checked={selectedTab === 'tab4'}
        onChange={handleTabChange}
      />
      <div
        role="tabpanel"
        className="tab-content p-10 bg-tab"
        style={{
          display: selectedTab === 'tab4' ? 'flex' : 'none',
          width: '175vh',
        }}
      >
        {content4}
      </div>
    </div>
  )
}

export default BorderedTab
