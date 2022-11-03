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

                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-VAULT-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-VAULT"
                                type="button"
                                role="tab"
                                aria-controls="pills-VAULT"
                                aria-selected="false"
                            >
                                VULCANS'VAULT
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div
                            style={{ height: "10rem" }}
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                        >
                            <div className="gallery_main_container ">
                                <div>
                                    <div className='row mt-3 '>
                                        <div class=" col-lg-3 col-md-6 col-12" >
                                            <div class="card ">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 class="card-title">VulcanMarket NFTs</h5>
                                                            <span class="card-title fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class=" col-lg-3 col-md-6 col-12  " >
                                            <div class="card ">
                                                <div class="card-body" style={{ height: '140px' }}>
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 class="card-title">Agors NFTs</h5>
                                                            <span class="card-title fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class=" col-lg-3 col-md-6 col-12" >
                                            <div class="card ">
                                                <div class="card-body" style={{ height: '140px' }}>
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 class="card-title">Total NFTs</h5>
                                                            <span class="card-title fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class=" col-lg-3 col-md-6 col-12" >
                                            <div class="card ">
                                                <div class="card-body">
                                                    <div className='row'>
                                                        <div className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </div>
                                                        <div className='col-8'>
                                                            <h5 class="card-title">Total NFTs Sold</h5>
                                                            <span class="card-title fw-bolder fs-2">0</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>




                                        {/* <div class="card">

                                                        <div class="card-body">
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                        </div>
                                                        <div class="card-footer">
                                                            <small class="text-muted">Last updated 3 mins ago</small>
                                                        </div>
                                                    </div> */}

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div
                            style={{ height: "50rem" }}
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
                                    <h1 className='text-white'>2</h1>



                                </div>
                            </div>
                        </div>
                        <div
                            style={{ height: "50rem" }}
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
                            style={{ height: "50rem" }}
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
                            style={{ height: "50rem" }}
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
                            style={{ height: "50rem" }}
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
                            style={{ height: "50rem" }}
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
                            style={{ height: "50rem" }}
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

                {/* == */}
                <div className='row mt-5 text-white'>

                    <h1 >My NFTs</h1>
                    <div class='container '>
                        <input type="text" id="searchInput" className='rounded-3' placeholder="Search.." />
                        <div id='submitsearch'>
                            <span >Search</span>

                        </div>
                    </div>

                </div>


                {/* == */}


            </div>


    </>
)
}
