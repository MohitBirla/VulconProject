import React, { useEffect } from 'react'
import MyAssets from './MyAssets'
import MyFunds from './MyFunds'
import Avatar from "@mui/material/Avatar";
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const [showdata, setShowdata] = React.useState("MYFUNDS")
  const { connectWithEmail, address, connect } = useAuthContext()
  const navigate = useNavigate();
  const linkBtn = (e) => {
    setShowdata(e)
  }
  useEffect(() => {
    console.log(address)
    if (!address) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [address]);
  return (
    <div className='row pt-3 ps-4 px-4 main_dashboard'>
      <div className='side_bar_div col-lg-3 col-md-3 col-12'>
        <div className="blur_color side_main rounded-5">
          <div>
            <center className="pt-4 pb-4">
              <Avatar
                alt="Remy Sharp"
                src="/images/slide-1.webp"
                sx={{ width: "70%", height: "70%" }}
              />
              <h4 className="mt-3 fw-bold" style={{color:"#F94C66"}}>codypanda</h4>
              <p className="mt-2" style={{color:"#F8ED86",fontSize:'110%'}}>
                userID : <span  style={{color:"#ffff"}}>00000</span>
              </p>
            </center>
            <div className=" nav nav-pills tabs_events1 d-inline" id="pills-tab">
              <div onClick={() => linkBtn("MYFUNDS")} className="d-block pt-0 m-0 side-nav-link nav-link active"
                data-bs-toggle="pill"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <h5 className="m-0 pt-2 ">My Funds</h5>
              </div>

              <div onClick={() => linkBtn("MYASSETS")} className="mt-1 pt-0 side-nav-link nav-link"
                data-bs-toggle="pill"
                aria-controls="pills-home"
                aria-selected="false"
              >
                <h5 className="m-0 pt-2">My Assets</h5>
              </div>

              <div className="mt-1 pt-0 side-nav-link nav-link"
                data-bs-toggle="pill"
                aria-controls="pills-home"
                aria-selected="false"
              >
                <h5 className="m-0 pt-2">Other</h5>
              </div>

              <div className="mt-1 pt-0 side-nav-link nav-link"
                data-bs-toggle="pill"
                aria-controls="pills-home"
                aria-selected="false"
              >
                <h5 className="m-0 pt-2">Other</h5>
              </div>

              <div className="mt-1 pt-0 side-nav-link nav-link"
                data-bs-toggle="pill"
                aria-controls="pills-home"
                aria-selected="false"
              >
                <h5 className="m-0 pt-2">Other</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-lg-5 pt-2 col-lg-9 col-md-9 col-12 text-white'>
        {showdata === "MYFUNDS" ? <MyFunds /> : ""}
        {showdata === "MYASSETS" ? <MyAssets /> : ""}
      </div>
    </div>
  )
}
