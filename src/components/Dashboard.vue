<template>
   13:53:02 GMT -->

  <head>

    <meta charset="utf-8" />
    <title>NG CDF</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Keep your finances and membership up to date" name="description" />
    <meta content="Kelvin Njuguna Ndungu" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="/assets/images/favicon.svg">

    <!-- Bootstrap Css -->
    <link href="/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- App Css-->
    <link href="/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="/assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />


  </head>

  <body data-sidebar="dark">

  <!-- Loader -->
<!--  <div id="preloader">-->
    <div id="status">
      <div class="spinner-chase">
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
      </div>
    </div>
<!--  </div>-->
  <!-- Begin page -->

  <!-- Begin page -->
  <div id="layout-wrapper">


    <header id="page-topbar">
      <div class="navbar-header">
        <div class="d-flex">
          <!-- LOGO -->
          <div class="navbar-brand-box"><a class="logo logo-dark"><span class="logo-sm">
                        </span></a>
              <a> <span class="logo-lg"></span>
              <div class="portal-title">
<!--                <h5 class="text-success">Welcome Back, {{ names }}!</h5>-->
                <h6 class="text-muted mb-0 text-white opacity-75">County</h6>
              </div>
            </a>
          </div>

          <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
            <i class="fa fa-fw fa-bars"></i>
          </button>
          <!-- logo small -->



          <!-- App Search-->
          <form class="app-search d-none d-lg-block">
            <div class="position-relative">
              <input type="text" class="form-control" placeholder="Search...">
              <span class="bx bx-search-alt"></span>
            </div>
          </form>


        </div>

        <div class="d-flex">
          <!-- small search -->
          <div class="dropdown d-inline-block d-lg-none ms-2">
            <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="mdi mdi-magnify"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">

              <form class="p-3">
                <div class="form-group m-0">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="dropdown d-none d-lg-inline-block ms-1">
            <button type="button" class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
              <i class="bx bx-fullscreen"></i>
            </button>
          </div>

          <div class="dropdown d-inline-block d-none">

            <!-- notifications, i will come to this later -->
            <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="bx bx-bell bx-tada"></i>
              <span class="badge bg-danger rounded-pill">3</span>
            </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
              <div class="p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0" key="t-notifications"> Notifications </h6>
                  </div>
                  <div class="col-auto">
                    <a href="#!" class="small" key="t-view-all"> View All</a>
                  </div>
                </div>
              </div>
              <div data-simplebar style="max-height: 230px;">
                <a href="javascript: void(0);" class="text-reset notification-item">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i class="bx bx-cart"></i>
                                                </span>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-1" key="t-your-order">Your order is placed</h6>
                      <div class="font-size-12 text-muted">
                        <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="javascript: void(0);" class="text-reset notification-item">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h6 class="mb-1">James Lemire</h6>
                      <div class="font-size-12 text-muted">
                        <p class="mb-1" key="t-simplified">It will seem like simplified English.</p>
                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="javascript: void(0);" class="text-reset notification-item">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-success rounded-circle font-size-16">
                                                    <i class="bx bx-badge-check"></i>
                                                </span>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-1" key="t-shipped">Your item is shipped</h6>
                      <div class="font-size-12 text-muted">
                        <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="javascript: void(0);" class="text-reset notification-item">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h6 class="mb-1">Salena Layfield</h6>
                      <div class="font-size-12 text-muted">
                        <p class="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="p-2 border-top d-grid">
                <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                  <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
                </a>
              </div>
            </div>
          </div>



          <div class="dropdown d-inline-block">
            <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="d-none d-xl-inline-block ms-1" key="t-henry">{{ names }}</span>

              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <!-- item-->
<!--              <a class="dropdown-item" href="myprofile.html"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">My Profile</span></a>-->
<!--              <a class="dropdown-item" href="my-logs.html"><i class="bx bx-time font-size-16 align-middle me-1"></i> <span key="t-profile">My Logs</span></a>-->
<!--              <a class="dropdown-item" href="auth-lock-screen.html"><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>-->
<!--              <div class="dropdown-divider"></div>-->
              <a class="dropdown-item text-danger" @click="logout">
                <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                <span key="t-logout">Logout</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ========== Left Sidebar Start ========== -->
    <div class="vertical-menu">

      <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
          <!-- Left Menu Start -->
          <ul class="metismenu list-unstyled text-capitalize" id="side-menu">

            <li>
              <a href="index.html" class="waves-effect">
                <i class="bx bx-home-circle"></i><span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="javascript: void(0);" class="waves-effect has-arrow">
                <i class="mdi mdi-file-document-edit-outline"></i>
                <span>Bursery Applications</span>
              </a>
              <ul class="sub-menu" aria-expanded="false">
                <li><a href="application-new.html">Initiate Application</a></li>
                <li><a href="application-validation.html">Application Validation</a></li>
                <li><a href="application-approval.html">Awaiting Approval</a></li>
              </ul>
            </li>
<!--            <li>-->
<!--              <a href="clients.html" class="waves-effect">-->
<!--                <i class="mdi mdi-account-group-outline"></i><span>Clients</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="map.html" class="waves-effect">-->
<!--                <i class="mdi mdi-map-marker-alert-outline"></i><span>Map View</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="agents.html" class="waves-effect">-->
<!--                <i class="mdi mdi-account-cog-outline"></i><span>Agents</span>-->
<!--              </a>-->
<!--            </li>-->

<!--            <li>-->
<!--              <a href="distributors.html" class="waves-effect">-->
<!--                <i class="mdi mdi-truck-delivery-outline"></i><span>Distributors</span>-->
<!--              </a>-->
<!--            </li>-->

<!--            <li class="menu-title" key="t-pages">Reports</li>-->

<!--            <li>-->
<!--              <a href="sales.html" class="waves-effect">-->
<!--                <i class="mdi mdi-cart-outline"></i><span>Sales</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="javascript: void(0);" class="waves-effect has-arrow">-->
<!--                <i class="mdi mdi-wallet-outline"></i>-->
<!--                <span>Finance statements</span>-->
<!--              </a>-->
<!--              <ul class="sub-menu" aria-expanded="false">-->
<!--                <li><a href="statements-agents.html">Agents statements</a></li>-->
<!--                <li><a href="statements-clients.html">Clients Statements</a></li>-->
<!--              </ul>-->
<!--            </li>-->

<!--            <li>-->
<!--              <a href="javascript: void(0);" class="waves-effect has-arrow">-->
<!--                <i class="mdi mdi-package-variant-closed"></i>-->
<!--                <span>Stock statements</span>-->
<!--              </a>-->
<!--              <ul class="sub-menu" aria-expanded="false">-->
<!--                <li><a href="stock-agents.html">Agents Stocks</a></li>-->
<!--                <li><a href="stock-distributor.html">Distributor Stocks</a></li>-->
<!--              </ul>-->
<!--            </li>-->

<!--            <li class="d-none">-->
<!--              <a href="javascript: void(0);" class="waves-effect has-arrow">-->
<!--                <i class="bx bx-slider"></i>-->
<!--                <span>Settings & Setups</span>-->
<!--              </a>-->
<!--              <ul class="sub-menu" aria-expanded="false">-->
<!--                <li><a href="finance-act.html">Finance atc</a></li>-->
<!--                <li><a href="set-roads.html">Roads</a></li>-->
<!--              </ul>-->
<!--            </li>-->


<!--            <li class="d-none">-->
<!--              <a href="javascript: void(0);" class="waves-effect has-arrow">-->
<!--                <i class="mdi mdi-monitor-multiple"></i>-->
<!--                <span>System Users</span>-->
<!--              </a>-->
<!--              <ul class="sub-menu" aria-expanded="false">-->
<!--                <li><a href="user-userlist.html">System Users</a></li>-->
<!--                <li><a href="user-registration.html">Add a system user</a></li>-->
<!--              </ul>-->
<!--            </li>-->



          </ul>
        </div>
        <!-- Sidebar -->
      </div>
    </div>
    <!-- Left Sidebar End -->



    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

      <div class="page-content">
        <div class="container-fluid">

          <!-- start page title -->
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->
          <div class="row d-none">
            <div class="col-lg-12 px-sm-30px">
              <div class="card">
                <div class="card-body">
                  <div class="row">

                    <div class="col-lg-12 align-self-center">
                      <div class="text-lg-left mt-4 mt-lg-0">
                        <div class="row">
                          <div class="col-lg-2 col-sm-6 col-lg-2">
                            <div class="d-flex">

                              <div class="flex-grow-1 align-self-center">
                                <div class="text-muted">
                                  <p class="mb-2">Stats overview for</p>
<!--                                  <div>-->
<!--                                    <select class="form-control selectpicker" fdprocessedid="msspc">-->
<!--                                      <option>All Counties</option>-->
<!--                                      <option>Meru County</option>-->
<!--                                      <option>Kirinyaga County</option>-->
<!--                                      <option value="">Embu County</option>-->
<!--                                      <option value="">Tharaka Nithi</option>-->
<!--                                    </select>-->
<!--                                  </div>-->
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 col-sm-6 col-md-4 col-sm-6 col-lg-2">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-info font-size-16">
                                                                        <i class="mdi mdi-account-cog-outline text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Registered Clients</p>
                              <h5 class="mb-0">781,489</h5>
                            </div>
                          </div>
                          <div class="col-3 col-md-4 col-sm-6 col-lg-2">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-whatsApp font-size-16">
                                                                        <i class="mdi mdi-account-multiple-plus-outline"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Agents</p>
                              <h5 class="mb-0">310</h5>

                            </div>
                          </div>
                          <div class="col-3 col-sm-6 col-md-4 col-sm-6 col-lg-2">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle font-size-16">
                                                                        <i class="mdi mdi-truck-delivery-outline text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Distributors</p>
                              <h5 class="mb-0">18</h5>
                            </div>
                          </div>
                          <div class="col-3 col-sm-6 col-md-4 col-sm-6 col-lg-2">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-danger font-size-16">
                                                                        <i class="mdi mdi-water-outline text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Supplied Ethanol</p>
                              <h5 class="mb-0">103,200 L</h5>

                            </div>
                          </div>
                          <div class="col-3 col-sm-6 col-md-4 col-sm-6 col-lg-2">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-dark font-size-16">
                                                                        <i class="mdi mdi-fire text-white"></i>
                                                                    </span>
                              </div>
                              <p class="text-muted text-truncate mb-2">Stove Sales</p>
                              <h5 class="mb-0">823,789</h5>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  <!-- end row -->
                </div>
              </div>
            </div>
          </div>

          <!-- another statitistics container -->
          <div class="row">

            <div class="col-lg-12 px-sm-30px">
              <div class="card quick-stats-cont">
                <div class="card-body">
                  <div class="row ">

                    <div class="col-12 mb-3 d-flex justify-content-between align-items-center">
                      <div>
                        <div class="form-group mb-0">
                          <select class="form-select selectpicker form-select text-black p-0" data-live-search="true" title="Select A specific County" data-style="form-select btn border text-black">
                            <option value="" selected>All Counties</option>
                            <option value="">Meru County</option>
                            <option value="">Embu County</option>
                            <option value="">Tharaka-Nithi County</option>
                            <option value="">Makueni County</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-3 pb-5  pb-md-0 d-none">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                        <div class="flex-grow-1 align-self-center">
                          <div class="text-muted">
                            <p class="mb-2 d-none">Daily Quick Stats for NTSA</p>
                            <h5 class="mb-1 today-date">22 Jul 2022</h5>
                            <p class="mb-0 d-non pb-0"><small>Daily summary for NTSA  Road Safety Intelligence Portal for <strong>Today</strong></small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div class="col-12 align-self-center text-capitalize">
                      <div class="text-lg-left mt-lg-0">
                        <div class="row">
                          <div class="col-sm-6 col-md-3 col-lg-2 mb-5 mb-md-0 quick-stat">
                            <div>
                              <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-white bg-opacity-25 font-size-16">
                                                                        <i class="mdi mdi-account-group text-white"></i>
                                                                    </span>
                              </div>
                              <div>
                                <p class="text-muted mb-2">Registerd Clients</p>
                                <h5 class="mb-0">56</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-3 col-lg-2 mb-5 mb-md-0 quick-stat">
                            <div>

                              <div class="avatar-xs mb-3 d-non">
                                                                <span class="avatar-title rounded-circle bg-white bg-opacity-25 font-size-16">
                                                                    <i class="mdi mdi-account-cog-outline text-white"></i>
                                                                </span>
                              </div>
                              <div>
                                <p class="text-muted mb-2">Agents</p>
                                <h5 class="mb-0">67</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-3 col-lg-2 mb-5 mb-md-0 quick-stat">
                            <div>
                              <img src="./assets/images/index-icons/protection.png" alt="">
                              <div class="avatar-xs mb-3 d-non">
                                                                <span class="avatar-title rounded-circle bg-white bg-opacity-25 font-size-16">
                                                                    <i class="mdi mdi-truck-delivery-outline text-white"></i>
                                                                </span>
                              </div>
                              <div>
                                <p class="text-muted mb-2">Distributors</p>
                                <h5 class="mb-0">18</h5>
                              </div>

                            </div>
                          </div>

                          <div class="col-sm-12 col-md-3 col-lg-3 mb-5 mb-md-0 quick-stat">
                            <div>
                              <div class="avatar-xs mb-3 d-non">
                                                                <span class="avatar-title rounded-circle bg-white bg-opacity-25 font-size-16">
                                                                    <i class="mdi mdi-water-outline text-white"></i>
                                                                </span>
                              </div>
                              <div>
                                <p class="text-muted mb-2">Total Supplied Ethanol</p>
                                <h5 class="mb-0">23,090 Liters</h5>
                              </div>

                            </div>
                          </div>

                          <div class="col-sm-12 col-md-3 col-lg-2 mb-5 mb-md-0 quick-stat">
                            <div>
                              <div class="avatar-xs mb-3 d-non">
                                                                <span class="avatar-title rounded-circle bg-white bg-opacity-25 font-size-16">
                                                                    <i class="mdi mdi-fire text-warning"></i>
                                                                </span>
                              </div>
                              <div>
                                <p class="text-muted mb-2">Stove Sales</p>
                                <h5 class="mb-0">230</h5>
                              </div>

                            </div>
                          </div>



                          <div class="col-sm-12 col-md-3 col-lg-2 mb-5 mb-md-0 d-none quick-stat">
                            <div>
                              <div class="avatar-xs mb-3">

                                <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->

                                                                    </span>
                              </div>
                              <div>
                                <p class="text-muted mb-2">Installed But Offline</p>
                                <h5 class="mb-0">22%</h5>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>


                  </div>
                  <!-- end row -->
                </div>
              </div>
            </div>
          </div>

          <!-- quick stats -->
          <div class="row">
            <div class="col-xl-4 px-sm-30px">
              <div class="card  member-wedges-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="d-flex flex-wrap align-items-start">
                      <h5 class="mb-3 me-2 text-black">Today's Overview</h5>
                    </div>
                    <div class="ms-auto align-self-end position-absolute d-none">
                      <i class="mdi mdi-block-helper display-4  opacity-50"></i>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-6 align-self-center">


                      <div class="mt-0 pt-2 text-capitalize">
                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-black text-capitalize"></i>Value of Stock in distribution</p>
                        <h5 class="text-blac">KES 632,230 <small class="text-muted font-size-14">+2,876</small></h5>
                      </div>

                      <div class="mt-4 pt-2">
                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i>Net Sales</p>
                        <h3 class="text-black mb-0">KES 22,562  <small class="text-muted font-size-14">+1,000</small></h3>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-4 col-lg-6">
                      <div class="mt-4 mt-sm-0">
                        <div id="radialBar-chart" data-colors='["--bs-primary"]' class="apex-charts"></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="card-footer bg-primary p-4">
                  <div class="row">
                    <div class="col-6">
                      <p class="text-light mb-0 opacity-75">Orders Made</p>
                      <h5 class="text-white mb-0">21<small class="text-light opacity-75 pl-2">+3</small></h5>
                    </div>

                    <div class="col-6">
                      <p class="text-light mb-0 opacity-75">Customers Served</p>
                      <h5 class="text-white mb-0">15<small class="text-light opacity-75 pl-2">+1</small></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 px-sm-30px">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex mb-3 flex-column">
                        <div class="avatar-xs-2 me-3 mb-3">
                                                    <span class="avatar-title rounded-circle bg-dark bg-soft text-success  font-size-18">
                                                        <i class="mdi mdi-calendar-text-outline h2 mb-0 pb-0 text-black"></i>
                                                    </span>
                        </div>
                        <div class="d-flex flex-column">
                          <h5 class="font-size-14 mb-0 mt-3 text-black fw-semibold">Weekly Transactions</h5>
                          <p class="text-grey">From Mar 13th 2023</p>
                        </div>
                      </div>
                      <div class="text-muted mt-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0">Value Of Sales</p>
                          <h4 class="text-black fw-semibold">KES 34,790</h4>
                          <div><p class="text-muted mb-0 comparison-txt"><span class="text-success me-2 fw-semibold"><i class="mdi mdi-arrow-up"></i> + 1,329 </span> Since Last Week</p></div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer bg-black p-4">
                      <p class="text-light mb-0 opacity-75">Ethanol Sales</p>
                      <div>
                        <h5 class="text-white mb-0">2,234 L<small class="text-light opacity-75 pl-2">+546 L</small></h5>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex mb-3 flex-column">
                        <div class="avatar-xs-2 me-3 mb-3">
                                                    <span class="avatar-title rounded-circle bg-success bg-soft text-success  font-size-18">
                                                        <i class="mdi mdi-calendar-month-outline h2 mb-0 pb-0 text-success"></i>
                                                    </span>
                        </div>
                        <div class="d-flex flex-column">
                          <h5 class="font-size-14 mb-0 mt-3 text-black fw-semibold">Monthly Transactions</h5>
                          <p class="text-grey">March 2023</p>
                        </div>
                      </div>
                      <div class="text-muted mt-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0">Value Of Sales</p>
                          <h4 class="text-black fw-semibold">KES 456,789</h4>
                          <div><p class="text-muted mb-0 comparison-txt"><span class="text-success me-2 fw-semibold"><i class="mdi mdi-arrow-up"></i> +56 41,678 </span> Since Last Month</p></div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer bg-primary p-4">
                      <p class="text-light mb-0 opacity-75">Ethanol Sales</p>
                      <div>
                        <h5 class="text-white mb-0">92,989 L<small class="text-light opacity-75 pl-2">+456 L</small></h5>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex mb-3 flex-column">
                        <div class="avatar-xs-2 me-3 mb-3">
                                                    <span class="avatar-title rounded-circle bg-dark bg-soft text-success  font-size-18">
                                                        <i class="mdi  mdi-calendar-check-outline h2 mb-0 pb-0 text-black"></i>
                                                    </span>
                        </div>
                        <div class="d-flex flex-column">
                          <h5 class="font-size-14 mb-0 mt-3 text-black fw-semibold">This Year</h5>
                          <p class="text-grey">2023</p>
                        </div>
                      </div>
                      <div class="text-muted mt-4">
                        <div class="d-flex flex-column">
                          <p class="mb-0">Value Of Sales</p>
                          <h4 class="text-black fw-semibold">KES 1,934,230</h4>
                          <div><p class="text-muted mb-0 comparison-txt"><span class="text-danger me-2 fw-semibold"><i class="mdi mdi-arrow-down"></i> - 234,890 </span> Since Last Year</p></div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer bg-black p-4">
                      <p class="text-light mb-0 opacity-75">Ethanol Sales</p>
                      <div>
                        <h5 class="text-white mb-0">872,234 L<small class="text-light opacity-75 pl-2">-56,789 L</small></h5>
                      </div>

                    </div>
                  </div>
                </div>


              </div>
              <!-- end row -->
            </div>
          </div>
          <!-- end of quick stats -->

<!--          <div class="row d-non">-->
<!--            <div class="col-sm-12 col-xl-6 col-md-5 px-sm-30px">-->
<!--              <div class="row h-100">-->
<!--                <div class="col-12">-->
<!--                  <div class="card perfomance-card">-->
<!--                    <div class="card-header bg-white">-->
<!--                      <div class="d-flex justify-content-between align-items-center">-->
<!--                        <h4 class="card-title mb-0"><span class="map-time-txt">All time</span> <span class="map-product-sales-txt">Ethernal </span> <span class="map-mvt-type-txt">Peformance(%)</span></h4>-->
<!--                        <div class="d-flex mx-3">-->
<!--                          <select class="form-select form-select-sm ms-2 map-product-type">-->
<!--                            <option value="Ethanol"  selected>Ethanol</option>-->
<!--                            <option value="Burner">All Burners</option>-->
<!--                            <option value="Double Burners">Double Burners</option>-->
<!--                            <option value="Single Burners">Single Burners</option>-->

<!--                          </select>-->

<!--                          <select class="form-select form-select-sm ms-2 map-mvt-type">-->
<!--                            <option value="Sales Perfomance(%)" selected>Perfomance</option>-->
<!--                            <option value="Sales">Sales</option>-->
<!--                            <option value="Stock">Stock</option>-->

<!--                          </select>-->

<!--                          <select class="form-select form-select-sm ms-2 map-time">-->
<!--                            <option value="All Time" selected>All Time</option>-->
<!--                            <option value="2023">2022</option>-->
<!--                            <option value="2022">2022</option>-->
<!--                            <option value="2021">2021</option>-->
<!--                            <option value="2020">2020</option>-->
<!--                            <option value="2019">2019</option>-->
<!--                          </select>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="card-body">-->


<!--                      <div class="row">-->

<!--                        <div class="col-sm-12">-->
<!--                          <div>-->
<!--                            <div id="Map-data" class=""></div>-->
<!--                          </div>-->
<!--                        </div>-->



<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="card-footer bg-white border-top">-->
<!--                      <div class="col-12 ">-->
<!--                        <div id="projections">-->

<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->


<!--              </div>-->
<!--            </div>-->

<!--            <div class="col-xl-6 col-md-7 px-sm-30px">-->
<!--              <div class="row">-->
<!--                <div class="col-12">-->
<!--                  <div class="card">-->
<!--                    <div class="card-header bg-transparent border-bottom">-->
<!--                      <div class="d-flex flex-wrap align-items-start">-->
<!--                        <div class="me-2 d-flex">-->
<!--                          <select class="form-control selectpicker" data-live-search="true" title="Select Stock Type " data-style="form-select btn border btn-sm pe-5">-->
<!--                            <option value="" selected>Sales</option>-->
<!--                            <option value="">Distributions</option>-->
<!--                          </select>-->
<!--                          <input class="form-control form-control-sm mx-3 select-week d-none" type="week" value="2019-W33" id="example-week-input">-->

<!--                        </div>-->
<!--                        <ul class="nav nav-tabs nav-tabs-custom card-header-tabs ms-auto" role="tablist">-->
<!--                          <li class="nav-item nav-yearly" role="presentation">-->
<!--                            <a class="nav-link active nav-yearly" data-bs-toggle="tab" href="#" role="tab" aria-selected="true">-->
<!--                              Yearly-->
<!--                            </a>-->
<!--                          </li>-->
<!--                          <li class="nav-item nav-weekly" role="presentation">-->
<!--                            <a class="nav-link" data-bs-toggle="tab" href="#" role="tab" aria-selected="false" tabindex="-1">-->
<!--                              Weekly-->
<!--                            </a>-->
<!--                          </li>-->
<!--                        </ul>-->
<!--                      </div>-->

<!--                    </div>-->

<!--                    <div class="card-header d-none">-->
<!--                      <h4 class="card-title">Sales Perfomance</h4>-->
<!--                    </div>-->
<!--                    <div class="card-body">-->
<!--                      <div class="vales-options-cont">-->
<!--                        &lt;!&ndash; <div id="annual-sales" class="apex-charts" dir="ltr"></div> &ndash;&gt;-->
<!--                        <div id="annual-sales" class="" dir="ltr"></div>-->
<!--                        <div id="weekly-sales" class="d-none" dir="ltr"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-12">-->
<!--                  <div class="card">-->
<!--                    <div class="card-header d-flex align-items-center justify-content-between">-->
<!--                      <div class="d-none">-->
<!--                        <h4 class="card-title mb-0">Weekly Products Perfomance</h4>-->
<!--                      </div>-->
<!--                      <div class="d-flex">-->
<!--                        <select class="form-control selectpicker mx-2 " data-live-search="true" title="Products" data-style="form-control form-select btn-sm btn border pe-5">-->
<!--                          <option value="" selected>Ethanol Sales</option>-->
<!--                          <option value="">All Burners</option>-->
<!--                          <option value="">Double Burner</option>-->
<!--                          <option value="">Single Burners</option>-->
<!--                        </select>-->

<!--                        <select class="form-control selectpicker form-select  mx-2 " data-live-search="true" title="Select Cashiers" data-style="form-select btn border btn-sm pe-5">-->
<!--                          <option value="">All Counties</option>-->
<!--                          <option value="">Meru County</option>-->
<!--                          <option value="">Kirinyaga County</option>-->
<!--                          <option value="">Embu County</option>-->
<!--                        </select>-->
<!--                        <input class="form-control form-control-sm" type="week" value="2019-W33" id="example-week-input">-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="card-body">-->
<!--                      <div id="heatMap"></div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; end row &ndash;&gt;-->



        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->


      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row text-capitalize">
            <div class="col-sm-6 d-none ">
              <div class="text-sm-end d-sm-block ">
                South Imenti Dairy
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- end main content-->

  </div>
  <!-- END layout-wrapper -->

  <!-- Right bar overlay-->
  <div class="rightbar-overlay "></div>


  </body>


  <!-- index.html   13:55:49 GMT -->





</template>

<script>
export default {
  data() {
    return {
      names: "Loading...", // Default before fetching
    };
  },
  mounted() {
    this.fetchUserName(); // Call function when component loads
  },
  methods: {
    fetchUserName() {
      // ✅ Retrieve user from localStorage
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          const user = JSON.parse(storedUser); // Convert JSON to object
          this.names = user.names || "User"; // ✅ Ensure correct field is used
        } catch (error) {
          console.error("Error parsing user data:", error);
          this.names = "Unknown User"; // Default fallback
        }
      } else {
        this.names = "Unknown User"; // If no user is stored
      }
    },
    logout() {
      localStorage.removeItem("user"); // ✅ Clear stored user data
      this.$router.push("/login"); // ✅ Redirect to login
    }
  }
};
</script>









