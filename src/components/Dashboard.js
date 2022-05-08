import React from 'react'
import Sidebar from './Sidebar'
import Table from './Table'

export default function Dashboard() {
  return (
      <>
        <div className="container-fluid" style={{backgroundColor: "white", height: "100vh"}}>
        <Sidebar/>
        <div className="container" style={{marginLeft: "240px"}}>
            <Table/>
        </div>
        </div>
      </>
    
  )
}
