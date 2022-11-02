import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Sidenav() {
  return (
    <div className=" blur_color rounded-5">
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
          <div  className="row pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2 ">My Funds</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
         
          <div  className="row mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">My Assets</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>

  
          <div  className="row mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">Other</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
            
          <div  className="row mt-1 pt-0 side-nav-link">
            <div className="col-9 text-start m-0">
                <h5 className="m-0 pt-2">Other</h5>
            </div>
            <div className="col-3 text-end m-0">
            <p  className="m-0 pt-2">→</p>
            </div>
          <hr  className="mt-3 mb-0"/>
          </div>
            
          <div  className="row mb-3 mt-1 pt-0 side-nav-link">
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
  );
}
