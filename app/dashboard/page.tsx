'use client'
import NavBar from '../../components/bars/navbar'
import LeftBar from '../../components/bars/leftbar'

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* LEFT  */}
      <div
        style={{
          backgroundColor: '#337ab7',
          minHeight: '100vh',
          boxShadow: '0px 0apx 7px 1px rgba(0,0,0,0.75)',
        }}
      >
        <LeftBar />
      </div>
      {/* RIGHT */}
      <div
        className="bg-color"
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
      </div>
    </div>
  )
}

export default DashboardPage
