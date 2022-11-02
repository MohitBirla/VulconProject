import React from 'react'
import MyAssets from './MyAssets'
import MyFunds from './MyFunds'
import Sidenav from './Sidenav'

export default function Dashboard() {
  return (
    <div className='row main_dashboard'>
        <div className='col-3 text-white'>
            <Sidenav/>
        </div>
        <div className='col-8 text-white'>
            <MyFunds/>
            <MyAssets/>
        </div>
    </div>
  )
}
