import React from 'react'
import MyAssets from './MyAssets'
import MyFunds from './MyFunds'
import Sidenav from './Sidenav'

export default function Dashboard() {
  return (
    <div className='row pt-3 ps-4 px-4 main_dashboard'>
        <div className='side_bar_div col-lg-3 col-md-3 col-12 text-white'>
            <Sidenav/>
        </div>
        <div className='p-5 col-lg-9 col-md-9 col-12 text-white'>
            <MyFunds/>
            <MyAssets/>
        </div>
    </div>
  )
}
