import React from 'react'

export default function MyFunds() {
  return (
  <div className='top_main'>
 <div className='main p-0'>
      <div className='text-white'>
        <h1 style={{ fontSize: '60px', fontWeight: 'bold' }} >My Funds</h1>
      </div>
      <div className="events_list_tablist gallery_list mt-4">
        <ul
          className="nav nav-pills  tabs_events gallery_image_list"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              MANAGE FUNDS
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              MY WALLETS
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-wp-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-wp"
              type="button"
              role="tab"
              aria-controls="pills-wp"
              aria-selected="false"
            >
              NFT TRANSFER HISTORY
            </button>
          </li>

        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div

            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="gallery_main_container ">
              <div>
                <div className='row mt-5'>
                  <div className='col-12 col-md-12 col-lg-6'>
                    <div class="card">

                      <div class="card-body blur_color card-main text-white">
                        <h5 style={{ fontSize: '25px', fontWeight: 'bold' }} class="card-title">PYR Main <span className='wallet'>Wallet</span> </h5>
                        <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>
                        <div className='d-flex align-items-center pt-4'>
                          <p style={{ color: '#989FAE' }} class=" text-p card-text mt-2">Total Main Wallet Balance</p>
                          <h3 style={{ fontSize: '30px', fontWeight: 'bold' }} className='ms-3 '><span>0 </span>PVR</h3>
                        </div>
                        <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>

                        <div class="d-md-flex d-xxl-block d-fhd-flex mt-3">
                          <div style={{ color: '#989FAE' }} class="me-5 mb-2 mb-md-0 mb-xxl-2 mb-fhd-0">
                            Transfer to
                            <h5 style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }} class="mb-0 mt-2 white-space-nowrap">Market Wallet</h5>
                          </div>
                          <form class="row flex-grow-1 gx-1">
                            <div class="col-sm position-relative mb-2 mb-sm-0">
                              <input type="number" id="FromMainPYR" min="1" class="form-control shadow-none h-pxl-48 rounded-1" placeholder="Enter Amount of PYR" />
                              <h6 id="MainMax" type="button" class="p-0 OrangeText shadow-none  bg-transparent border-0 position-absolute end-0 top-0  mt-3 F-size-20 bottom-0 me-3  "> Max </h6>
                            </div>
                            <div class="col-auto">
                              <button type="button" id="ConvertMainToMarket" class="BtnBorder py-2 px-2 bg-transparent border-0" >Transfer</button>
                            </div>

                          </form>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-12 col-lg-6'>
                    <div class="card">

                      <div class="card-body card-main blur_color text-white">
                        <h5 style={{ fontSize: '25px', fontWeight: 'bold' }} class="card-title">PYR Market  <span className='wallet'>Wallet</span> </h5>
                        <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>
                        <div className='d-flex align-items-center pt-4'>
                          <p style={{ color: '#989FAE' }} class="card-text mt-2">Total Main Wallet Balance</p>
                          <h3 style={{ fontSize: '30px', fontWeight: 'bold' }} className='ms-3 '><span>0 </span>PVR</h3>
                        </div>
                        <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>

                        <div class="d-md-flex d-xxl-block d-fhd-flex mt-3">
                          <div style={{ color: '#989FAE' }} class="me-5 mb-2 mb-md-0 mb-xxl-2 mb-fhd-0">
                            Transfer to
                            <h5 style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }} class="mb-0 mt-2 white-space-nowrap">Main Wallet</h5>
                          </div>
                          <form class="row flex-grow-1 gx-1" method="POST" data-ajax="true" data-ajax-complete="MarketToMainComplete" data-ajax-begin="PrependLoader('#MarketSwap');" action="/MyWallet/SwapAmountFTP" novalidate="novalidate">
                            <div class="col-sm mb-2 mb-sm-0 position-relative">
                              <input type="number" class="form-control shadow-none h-pxl-48 rounded-1" name="Payment.Amount" id="FromMarketPYR" placeholder="Amount of PYR" />
                              <h6 id="MarketMax" type="button" class="p-0 OrangeText shadow-none  bg-transparent border-0 position-absolute end-0 top-0  mt-3 F-size-20 bottom-0 me-3  "> Max </h6>
                            </div>
                            <div class="col-sm mb-2 mb-sm-0">
                              <input type="number" class="form-control shadow-none h-pxl-48 rounded-1" name="Payment.TwoFactorCode" placeholder="Enter 2FA" />
                            </div>
                            <div class="col-auto">
                              <button type="submit" class="BtnBorder py-2 px-2 bg-transparent border-0">Transfer</button>
                            </div>
                            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8H0zIEi75tdLgpZKnIE1C2CLSQ5GzOplx2INYKAsQH-a3G4_jJ-6Cvw1LyryKtIjwKZz-zfvrYr9mlOI5ZeYpvR4hVzfbuwpX5k2cewLyRYHh3L2LnpknzxKLE3f_rS-NAHCzSgp3vlHGAzD2jRhZUY" /></form>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div
            
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="gallery_main_container justify-content-center d-flex flex-wrap">
                <h1 className='text-white'>MY WALLETS</h1>
              </div>
            </div>
          </div>
          <div
           
            className="tab-pane fade"
            id="pills-wp"
            role="tabpanel"
            aria-labelledby="pills-wp-tab"
          >
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                <h1 className='text-white'>NFT TRANSFER HISTORY</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='table_head'>
        <div className='row mt-5'>
          <div className='col-4'>
            <h5 style={{ fontSize: '25px', fontWeight: 'bold' }} class="card-title">Swapping <span className='wallet'>History</span> </h5>

          </div>
          <div className='col-8'>
            <input type="text" class="form-control shadow-none h-pxl-48 rounded-1 w-75" name="Payment.TwoFactorCode" placeholder="Search" />

          </div>
        </div>
        <div className='table-container'>
          <table class="table table-dark table-sm mt-4">
            <thead>
              <tr>
                <th scope="col text-p">Id</th>
                <th scope="col text-p">Type</th>
                <th scope="col text-p">From Address</th>
                <th scope="col text-p">To Address</th>
                <th scope="col text-p">Transaction Id</th>

              </tr>
              
            </thead>
            
            <tbody className=''>
              <tr>
                <th scope="row">212275</th>
                <td style={{width:'6%'}}>Pvr Main Wallet to Market Wallet Pvr</td>
                <td style={{width:'15%'}}></td>
                <td>0x994986464564...</td>
                <td>0x994986464564545894856148498479454615646464546464468429</td>

              </tr>
              <tr>
                <th scope="row">212276</th>
                <td style={{width:'6%'}}>Pvr Main Wallet to Market Wallet Pvr</td>

                <td ></td>
                <td>0x994986464564...</td>
                <td>0x994986464564545894856148498479454615646464546464468429</td>

              </tr>
              <tr>
                <th scope="row">212277</th>
                <td style={{width:'6%'}}>Pvr Main Wallet to Market Wallet Pvr</td>

                <td></td>
                <td>0x994986464564...</td>
                <td>0x994986464564545894856148498479454615646464546464468429</td>


              </tr>
              <tr>
                <th scope="row"style={{width:'10%'}}>212278</th>
                <td style={{width:'6%'}}>Pvr Main Wallet to Market Wallet Pvr</td>
                <td></td>
                <td>0x994986464564...</td>
                <td>0x994986464564545894856148498479454615646464546464468429489</td>


              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  </div>
   
  )
}
