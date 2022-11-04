import React from 'react'
import Avatar from "@mui/material/Avatar";
export default function MyAssets() {
    return (
        <>

            <div >
                <div className='text-white'>
                    <h1 style={{ fontSize: '60px', fontWeight: 'bold' }} >My Assets</h1>
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
                                NFTS
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
                                COLLECTIONS
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"

                                id="pills-land-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-land"
                                type="button"
                                role="tab"
                                aria-controls="pills-land"
                                aria-selected="false"
                            >
                                LANDS
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-VULCANITES-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-VULCANITES"
                                type="button"
                                role="tab"
                                aria-controls="pills-VULCANITES"
                                aria-selected="false"
                            >
                                VULCANITES
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-SOW-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-SOW"
                                type="button"
                                role="tab"
                                aria-controls="pills-SOW"
                                aria-selected="false"
                            >
                                SOW SEED
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-GOD-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-GOD"
                                type="button"
                                role="tab"
                                aria-controls="pills-GOD"
                                aria-selected="false"
                            >
                                GODS
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-BERSERK-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-BERSERK"
                                type="button"
                                role="tab"
                                aria-controls="pills-BERSERK"
                                aria-selected="false"
                            >
                                BERSERK
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
                                    <div className='row mt-3 '>
                                        <div class=" col-lg-3 col-md-6 col-12" >
                                            <div class="card blur_color border border-light ">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</h5>
                                                            <span class=" fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class=" col-lg-3 col-md-6 col-12  " >
                                            <div class="card blur_color border border-light">
                                                <div class="card-body" style={{ height: '140px' }}>
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 style={{ fontSize: '20px', fontWeight: 'bold',color:'#21E6C1' }} class="card-title">Agors NFTs</h5>
                                                            <span class=" fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class=" col-lg-3 col-md-6 col-12" >
                                            <div class="card blur_color border border-light ">
                                                <div class="card-body" style={{ height: '140px' }}>
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">Total NFTs</h5>
                                                            <span class=" fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class=" col-lg-3 col-md-6 col-12" >
                                            <div class="card blur_color border border-light ">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">Total NFTs Sold</h5>
                                                            <span class=" fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* ============================= table ///////////////////////// */}
                                         <div className='table_head'>
                    <div className='row mt-5'>
                      <div className='col-4'>
                        <h5 style={{ fontSize: '25px', fontWeight: 'bold' }} class="card-title">My<span className='wallet'>NFTs</span> </h5>

                      </div>
                      <div className='col-8'>
                        <input type="text" class="form-control shadow-none h-pxl-48 rounded-1 w-75" name="Payment.TwoFactorCode" placeholder="Search" />

                      </div>
                    </div>
                    <div className='table-container  blur_color'>
                      <table class="table  table-sm mt-4  blur_color">
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
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>
                            <td style={{ width: '15%' }}></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429</td>

                          </tr>
                          <tr>
                            <th scope="row">212276</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>

                            <td ></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429</td>

                          </tr>
                          <tr>
                            <th scope="row">212277</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>

                            <td></td>
                            <td>0x994986464564...</td>
                            <td>0x994986464564545894856148498479454615646464546464468429</td>


                          </tr>
                          <tr>
                            <th scope="row" style={{ width: '10%' }}>212278</th>
                            <td style={{ width: '6%' }}>Pvr Main Wallet to Market Wallet Pvr</td>
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
                                    <h1 className='text-white'>COLLECTIONS</h1>



                                </div>
                            </div>
                        </div>
                        <div
                           
                            className="tab-pane fade"
                            id="pills-land"
                            role="tabpanel"
                            aria-labelledby="pills-land-tab"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-land"
                                role="tabpanel"
                                aria-labelledby="pills-land-tab"
                            >
                                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>LAND</h1>


                                </div>
                            </div>
                        </div>
                        {/* == */}
                        <div
                           
                            className="tab-pane fade"
                            id="pills-VULCANITES"
                            role="tabpanel"
                            aria-labelledby="pills-VULCANITES-tab"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-VULCANITES"
                                role="tabpanel"
                                aria-labelledby="pills-VULCANITES-tab"
                            >
                                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>VULCANITES</h1>


                                </div>
                            </div>

                        </div>


                        <div
                           
                            className="tab-pane fade"
                            id="pills-SOW"
                            role="tabpanel"
                            aria-labelledby="pills-SOW-tab"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-SOW"
                                role="tabpanel"
                                aria-labelledby="pills-SOW-tab"
                            >
                                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>SOW SEED</h1>


                                </div>
                            </div>

                        </div>


                        <div
                         
                            className="tab-pane fade"
                            id="pills-GOD"
                            role="tabpanel"
                            aria-labelledby="pills-GOD-tab"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-GOD"
                                role="tabpanel"
                                aria-labelledby="pills-GOD-tab"
                            >
                                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>GODS</h1>


                                </div>
                            </div>

                        </div>


                        <div
                           
                            className="tab-pane fade"
                            id="pills-BERSERK"
                            role="tabpanel"
                            aria-labelledby="pills-BERSERK-tab"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-BERSERK"
                                role="tabpanel"
                                aria-labelledby="pills-BERSERK-tab"
                            >
                                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>BERSERK</h1>


                                </div>
                            </div>

                        </div>


                        <div
                           
                            className="tab-pane fade"
                            id="pills-VAULT"
                            role="tabpanel"
                            aria-labelledby="pills-VAULT-tab"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="pills-VAULT"
                                role="tabpanel"
                                aria-labelledby="pills-VAULT-tab"
                            >
                                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>VULCANS'VAULT</h1>


                                </div>
                            </div>

                        </div>
                        {/* == */}
                    </div>
                </div>

               


            </div>


        </>
    )
}
