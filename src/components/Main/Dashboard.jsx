import React from 'react'
import MyAssets from './MyAssets'
import MyFunds from './MyFunds'
import Sidenav from './Sidenav'
import Avatar from "@mui/material/Avatar";


export default function Dashboard() {
const [showdata , setShowdata] = React.useState("MYFUNDS")

  const linkBtn = (e)=>{
    setShowdata(e)
  }
  return (
    <div className='row pt-3 ps-4 px-4 main_dashboard'>
        <div className='side_bar_div col-lg-3 col-md-3 col-12 text-white'>
        <div className="blur_color border border-light rounded-5">
      <div>
        <center className="p-4">
          <Avatar
            alt="Remy Sharp"
            src="/images/slide-1.webp"
            sx={{ width: "70%", height: "70%" }}
          />
          <h4 className="mt-3 fw-bold">codypanda</h4>
          <p className="mt-2 text-light">
            userID : <span>00000</span>
          </p>
        </center>
        <hr />
        <div>
            
        </div>
        <div className="px-4 mt">

          <div onClick={()=>linkBtn("MYFUNDS")}  className="row pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2 ">My Funds</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
         
          <div onClick={()=>linkBtn("MYASSETS")}    className="row mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">My Assets</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>

  
          <div className="row mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">Other</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
            
          <div   className="row mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">Other</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
            
          <div   className="row mb-3 mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">Other</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className='px-5 pt-2 col-lg-9 col-md-9 col-12 text-white'>
        
           {showdata === "MYFUNDS"?<MyFunds/>:""}
           {showdata === "MYASSETS"?<MyAssets/>:""}
               
        </div>
    </div>
  )
}
