
<template>

<head>

<meta charset="utf-8" />
<title>NG CDF</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta content="Keep your finances and membership up to date" name="description" />
<meta content="Kelvin Njuguna Ndungu" name="author" />
<!-- App favicon -->
<link rel="shortcut icon" href="/assets/images/favicon.svg">
<!-- Plugins css -->
<link href="/assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

<link href="/assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />



<link href="/assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
<link href="/assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
<link href="/assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
<link href="/assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="/assets/libs/%40chenfengyuan/datepicker/datepicker.min.css">



<!-- Bootstrap Css -->
<link href="/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
<!-- Bootstrap select styling -->
<!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">-->
<!-- Icons Css -->
<link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
<!-- App Css-->
<link href="/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
<!-- custom Css-->
<link href="/assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />


</head>

<body data-sidebar="dark">

<!-- <body data-layout="horizontal" data-topbar="dark"> -->
<!-- Loader -->
<!--<div id="preloader">-->
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
<!--</div>-->
<!-- Begin page -->

<!-- Begin page -->
<div id="layout-wrapper">


  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <div class="portal-title">
              <h4 class="text-white">CDF Bursery</h4>
              <h6 class="text-muted mb-0 text-white opacity-75">Mwea Constituency</h6>
            </div>

        </div>


        <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- logo small -->
        <div class="phone-logo d-md-none d-sm-flex"> <img src="/assets/images/color-log0.svg" alt="" class="img"></div>



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
                  <img src="/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic">
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
                  <img src="/assets/images/users/avatar-4.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic">
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
            <img class="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg"
                 alt="Header Avatar">
            <span class="d-none d-xl-inline-block ms-1" key="t-henry">{{ names }}</span>

            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
<!--            <a class="dropdown-item" href="myprofile.html"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">My Profile</span></a>-->
<!--            <a class="dropdown-item" href="my-logs.html"><i class="bx bx-time font-size-16 align-middle me-1"></i> <span key="t-profile">My Logs</span></a>-->
<!--            <a class="dropdown-item" href="auth-lock-screen.html"><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>-->
<!--            <div class="dropdown-divider"></div>-->
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

          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li>
            <a href="javascript: void(0);" class="waves-effect has-arrow">
              <i class="mdi mdi-file-document-edit-outline"></i>
              <span>Bursary Applications</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li><router-link to="/application">Initiate Application</router-link></li>

              <li><a href="application-validation.html">Application Validation</a></li>
              <li><a href="application-approval.html">Awaiting Approval</a></li>
            </ul>
          </li>


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
              <h4 class="mb-sm-0 font-size-18 text-capitalize">New Application</h4>

              <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li><router-link to="/application">Initiate Application</router-link></li>
                  <li class="breadcrumb-item"><a href="#">Applications</a></li>
                  <li class="breadcrumb-item active">New Application</li>
                </ol>
              </div>

            </div>
          </div>
        </div>
        <!-- end page title -->

        <!-- eTransactions table -->


        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body text-capitalize">
                <p>Fill in the form correctly. Fields with an Asterisk <strong class="text-danger">*</strong> are mandatory fields.</p>
                <div id="kev-step-form">
                  <!-- <div id=""> -->
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <a class="nav-link active" href="#">1. Applicant's Information <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">2. Family Background</a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link" href="#">3. Additional Information</a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link" href="#">4. Funding histor</a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link" href="#">5. Academic Perfomance</a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link" href="#">6. Referees & Verrifications</a>
                        </li>


                        <li class="nav-item">
                          <a class="nav-link" href="#">7. Attachments</a>
                        </li>

                      </ul>

                    </div>
                  </nav>


                  <!-- Property details -->
                  <div class="step-cont active-step">
                    <h3>Applicant details</h3>
                    <p>Enter the details as they appear on the forms submited by the applicant</p>
                    <section>
                      <form>
                        <!-- Tenant type selection -->

                        <div class="row tenant-indidual-type">
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">First name <strong class="text-danger">*</strong></label>
                              <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter Your First Name">
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">Last Name <strong class="text-danger">*</strong></label>
                              <input type="text" class="form-control" id="basicpill-lastname-input" placeholder="Enter Your Last Name">
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="">Other Name(s)</label>
                              <input type="text" class="form-control" id="" placeholder="Enter Your Last Name">
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-md-6 col-lg-4 col-sm-12">
                                <div class="mb-4">
                                  <label for="" class="">Date Of Birth<strong class="text-danger">*</strong></label>
                                  <div class="input-group" id="datepicker1">
                                    <input type="text" class="form-control mouse-pointer" placeholder="Select Date" readonly data-date-format="dd M, yyyy" data-date-container='#datepicker1' data-provide="datepicker" data-date-autoclose="true">

                                    <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="row">
                                  <label for="" class="">Gender: <strong class="text-danger">*</strong></label>
                                  <div class="d-flex">
                                    <div class="form-check mb-3 pr-15px">
                                      <input class="form-check-input" type="radio" name="gender" id="formRadios1" checked>
                                      <label class="form-check-label" for="formRadios1">
                                        Male
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="gender" id="formRadios2">
                                      <label class="form-check-label" for="formRadios2">
                                        Female
                                      </label>
                                    </div>
                                  </div>
                                </div>

                              </div>
                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">ID Num/ PPT Num<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter Your First Name">
                                </div>
                              </div>

                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">Institution Type <strong class="text-danger">*</strong></label>
                              <select class="form-control selectpicker"data-live-search="true" title="Select Instituion Type">
                                <option value="primary">Primary School</option>
                                <option value="secondary">Secondary School</option>
                                <option value="college">College</option>
                                <option value="university">University</option>
                                <option value="vocational">Vocational School</option>
                                <option value="technical">Technical Institute</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">Name of the institution <strong class="text-danger">*</strong></label>
                              <select class="form-control selectpicker select-can-add" data-live-search="true" title="Select school" id="school-list">
                                <option value="stmarys">St. Mary's School, Mwea</option>
                                <option value="mwangaza">Mwangaza Primary School</option>
                                <option value="mwamodo">Mwamodo Secondary School</option>
                                <option value="karima">Karima Girls' High School</option>
                                <option value="kamuiru">Kamuiru Primary School</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input text-capitalize">Admission/Reg No.<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter number">
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-lastname-input">Campus/Branch <strong class="text-danger">*</strong></label>
                                  <select class="form-control selectpicker select-can-add" data-live-search="true" title="Select school" id="school-list">
                                    <option value="main-campus">Main Campus</option>
                                    <option value="nairobi-campus">Nairobi Campus</option>
                                    <option value="mombasa-campus">Mombasa Campus</option>
                                    <option value="nakuru-campus">Nakuru Campus</option>
                                    <option value="eldoret-campus">Eldoret Campus</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input text-capitalize">Department<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter number">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input text-capitalize">Course of Study<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter number">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">Mode of Study <strong class="text-danger">*</strong></label>
                              <select class="form-control selectpicker"  title="Select mode of study" id="school-list">
                                <option value="Reguler">Reguler</option>
                                <option value="Parallel">Parallel</option>
                                <option value="Boarding">Boarding</option>
                                <option value="Day">Day</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input text-capitalize">Course duration in years.<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="" placeholder="Enter Duration">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">Ends on<strong class="text-danger">*</strong></label>
                              <div class="d-flex">
                                <select class="form-control" >
                                  <option value="Jan">Jan</option>
                                  <option value="Feb">Feb</option>
                                  <option value="Mar">Mar</option>
                                  <option value="Apr">Apr</option>
                                  <option value="May">May</option>
                                  <option value="Jun">Jun</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Aug">Aug</option>
                                  <option value="Sep">Sep</option>
                                  <option value="Oct">Oct</option>
                                  <option value="Nov">Nov</option>
                                  <option value="Dec">Dec</option>
                                </select>
                                <select class="form-control" id="years-select">
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">County <strong class="text-danger">*</strong></label>
                              <select class="form-control selectpicker" data-live-search="true" title="Select County" id="">
                                <option value="Nairobi">Nairobi County</option>
                                <option value="Mombasa">Mombasa County</option>
                                <option value="Kwale">Kwale County</option>
                                <option value="Kilifi">Kilifi County</option>
                                <option value="TanaRiver">Tana River County</option>
                                <option value="Lamu">Lamu County</option>
                                <option value="TaitaTaveta">Taita-Taveta County</option>
                                <option value="Garissa">Garissa County</option>
                                <option value="Wajir">Wajir County</option>
                                <option value="Mandera">Mandera County</option>
                                <option value="Marsabit">Marsabit County</option>
                                <option value="Isiolo">Isiolo County</option>
                                <option value="Meru">Meru County</option>
                                <option value="TharakaNithi">Tharaka-Nithi County</option>
                                <option value="Embu">Embu County</option>
                                <option value="Kitui">Kitui County</option>
                                <option value="Machakos">Machakos County</option>
                                <option value="Makueni">Makueni County</option>
                                <option value="Nyandarua">Nyandarua County</option>
                                <option value="Nyeri">Nyeri County</option>
                                <option value="Kirinyaga" selected>Kirinyaga County</option>
                                <option value="Murang'a">Murang'a County</option>
                                <option value="Kiambu">Kiambu County</option>
                                <option value="Turkana">Turkana County</option>
                                <option value="WestPokot">West Pokot County</option>
                                <option value="Samburu">Samburu County</option>
                                <option value="TransNzoia">Trans Nzoia County</option>
                                <option value="UasinGishu">Uasin Gishu County</option>
                                <option value="ElgeyoMarakwet">Elgeyo-Marakwet County</option>
                                <option value="Nandi">Nandi County</option>
                                <option value="Bomet">Bomet County</option>
                                <option value="Kericho">Kericho County</option>
                                <option value="Kakamega">Kakamega County</option>
                                <option value="Vihiga">Vihiga County</option>
                                <option value="Bungoma">Bungoma County</option>
                                <option value="Busia">Busia County</option>
                                <option value="Siaya">Siaya County</option>
                                <option value="Kisumu">Kisumu County</option>
                                <option value="HomaBay">Homa Bay County</option>
                                <option value="Migori">Migori County</option>
                                <option value="Kisii">Kisii County</option>
                                <option value="Nyamira">Nyamira County</option>

                              </select>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-lastname-input">Ward <strong class="text-danger">*</strong></label>
                              <select class="form-control selectpicker" data-live-search="true" title="Select Ward" id="">
                                <option value="Kerugoya">Kerugoya</option>
                                <option value="Kutus">Kutus</option>
                                <option value="Kianyaga">Kianyaga</option>
                                <option value="Baragwi">Baragwi</option>
                                <option value="Ndia">Ndia</option>
                                <option value="Gichugu">Gichugu</option>
                                <option value="Ngariama">Ngariama</option>
                                <option value="Kiangai">Kiangai</option>
                                <option value="Mutira">Mutira</option>
                                <option value="Thiba">Thiba</option>
                                <option value="Tebere">Tebere</option>
                                <option value="Karumandi">Karumandi</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Physical address <strong class="text-danger">*</strong></label>
                              <input type="text" class="form-control" id="Enter tenants Phone Number" placeholder="Enter Phone No.">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Parmanent Address <strong class="text-danger">*</strong></label>
                              <input type="text" class="form-control" id="Enter tenants Phone Number" placeholder="Enter Phone No.">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Email. <strong class="text-danger">*</strong></label>
                              <input type="email" class="form-control" id="Enter tenants email address" placeholder="Enter property plot No.">
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Phone. <strong class="text-danger">*</strong></label>
                              <input type="text" class="form-control" id="Enter tenants Phone Number" placeholder="Enter Phone No.">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Amount Applied For<strong class="text-danger">*</strong></label>
                              <input type="text" class="form-control" id="" placeholder="KES ...">
                            </div>
                          </div>



                        </div>

                      </form>
                    </section>
                  </div>
                  <!-- next of kin and dependents -->
                  <div class="step-cont d-none">
                    <h3>Family Background</h3>
                    <section>
                      <form>
                        <div class="row">
                          <div class="col-lg-4 col-md-6">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Select the family status<strong class="text-danger">*</strong></label>
                              <select name="" id="" class="form-control form-select family-state">
                                <option value="Both Parents are dead">Both Parents are dead</option>
                                <option value="One parent dead">One parent dead</option>
                                <option value="Both parents dead">Both parenst alive</option>
                                <option value="single parent">Single parent</option>
                                <option value="other">Other status</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 other-family-status d-none">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Other Family status<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="" placeholder="Enter other family status">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Number of siblings (Alive)<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="" placeholder="Enter number of siblings">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Family expenses<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="" placeholder="Enter estimate Annual">
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Family Income<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="" placeholder="Enter estimated Annual">
                            </div>
                          </div>

                          <div class="col-12 mt-4">
                            <div class="mb-4">
                              <h5 class="font-size-14 mb-4">Is The father available</h5>
                              <div class="d-flex">
                                <div class="form-check mb-3">
                                  <input class="form-check-input" type="radio" name="father-radio" id="father-yes" checked="" value="yes">
                                  <label class="form-check-label" for="father-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mx-4">
                                  <input class="form-check-input" type="radio" name="father-radio" id="father-no" value="no">
                                  <label class="form-check-label" for="father-no">
                                    Passed Away
                                  </label>
                                </div>

                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="father-radio" id="farther-away" value="Dead beat">
                                  <label class="form-check-label" for="farther-away">
                                    Does not provide for the family
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 father-inputs">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Father's Full Names<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Father's Full Name">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Phone Number<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="enter farther's Phone Number">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Address<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Father's Address">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Occupation<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter father's occupation">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Type of Employment<strong class="text-danger">*</strong></label>
                                  <select name="" id="" class="form-control form-select">
                                    <option value="Permanent">Permanent</option>
                                    <option value="Contractual">Contractual</option>
                                    <option value="casual">casual</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Self employed">Self employed</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Main Source of income<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 mt-4">
                            <div class="mb-4">
                              <h5 class="font-size-14 mb-4">Is The Mother still available</h5>
                              <div class="d-flex">
                                <div class="form-check mb-3">
                                  <input class="form-check-input" type="radio" name="mother-radio" id="mother-yes" checked="" value="yes">
                                  <label class="form-check-label" for="mother-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mx-4">
                                  <input class="form-check-input" type="radio" name="mother-radio" id="mother-no" value="no">
                                  <label class="form-check-label" for="mother-no">
                                    Passed Away
                                  </label>
                                </div>

                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="mother-radio" id="mother-away" value="dead beat">
                                  <label class="form-check-label" for="mother-away">
                                    Does not provide for the family
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 mother-inputs">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Mother's Full Names<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Mother's Full Name">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Mother's Phone Number<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="enter Mother's Phone Number">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Mother's Address<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Mother's Address">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Mother's Occupation<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter Mother's occupation">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Mother's Type of Employment<strong class="text-danger">*</strong></label>
                                  <select name="" id="" class="form-control form-select">
                                    <option value="Permanent">Permanent</option>
                                    <option value="Contractual">Contractual</option>
                                    <option value="casual">casual</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Self employed">Self employed</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Mother's Main Source of income<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 mt-4">
                            <div class="mb-4">
                              <h5 class="font-size-14 mb-4">Is the applicant under the care of a Guardian?</h5>
                              <div class="d-flex">
                                <div class="form-check mb-3">
                                  <input class="form-check-input" type="radio" name="guardian-radio" id="guardian-yes" checked="" value="yes">
                                  <label class="form-check-label" for="guardian-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check mx-4">
                                  <input class="form-check-input" type="radio" name="guardian-radio" id="guardian-no" value="no">
                                  <label class="form-check-label" for="guardian-no">
                                    No
                                  </label>
                                </div>


                              </div>
                            </div>
                          </div>

                          <div class="col-12 guardian-inputs">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Guardian's Full Names<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Guardian's Full Name">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Guardian's Phone Number<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="enter Guardian's Phone Number">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Guardian's Address<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Guardian's Address">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Guardian's Occupation<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter Guardian's occupation">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Guardian's Type of Employment<strong class="text-danger">*</strong></label>
                                  <select name="" id="" class="form-control form-select">
                                    <option value="Permanent">Permanent</option>
                                    <option value="Contractual">Contractual</option>
                                    <option value="casual">casual</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Self employed">Self employed</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Guardian's Main Source of income<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter">
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </form>
                      <form>
                        <div class="row">

                          <div class="col-12">
                            <div class="bg-primary border-2 bg-soft p-3 mb-4">
                              <p class="fw-semibold mb-0 pb-0">names of siblings in school this year</p>

                            </div>
                          </div>

                          <div class="table-responsive table-responsive-md mb-4">
                            <table class="table table-editable-3 align-middle table-edits">
                              <thead class="table-light">
                              <tr class="text-uppercase table-dark">
                                <th>#</th>
                                <th>Full Names</th>
                                <th class="">Institution Type</th>
                                <th class="">Institution's Name</th>
                                <th class="">Annual Fees Payable</th>
                                <th></th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr data-id="1">
                                <td style="width: 80px">1.</td>
                                <td>
                                  <input type="text " class="form-control " placeholder="Enter Full Names" spellcheck="false" data-ms-editor="true">
                                </td>
                                <td class="">
                                  <select class="form-control selectpicker select-can-add"  title="Select Institution type" id="school-list">
                                    <option value="primary">Primary School</option>
                                    <option value="secondary">Secondary School</option>
                                    <option value="college">College</option>
                                    <option value="university">University</option>
                                    <option value="vocational">Vocational School</option>
                                    <option value="technical">Technical Institute</option>
                                  </select>
                                </td>
                                <td class="">
                                  <select class="form-control selectpicker select-can-add" data-live-search="true" title="Institution Name" id="school-list">
                                    <option value="stmarys">St. Mary's School, Mwea</option>
                                    <option value="mwangaza">Mwangaza Primary School</option>
                                    <option value="mwamodo">Mwamodo Secondary School</option>
                                    <option value="karima">Karima Girls' High School</option>
                                    <option value="kamuiru">Kamuiru Primary School</option>
                                  </select>
                                </td>
                                <td>
                                  <input type="text " class="form-control " placeholder="School Fee amount" spellcheck="false" data-ms-editor="true">

                                </td>
                                <td></td>

                              </tr>

                              <tr class="cloneCharges d-none">
                                <td style="width: 80px " class="categoryIndex ">#</td>

                                <td>
                                  <input type="text " class="form-control " placeholder="Enter Full Names" spellcheck="false" data-ms-editor="true">
                                </td>
                                <td class="">
                                  <select class="form-control selectpicker select-can-add"  title="Select Institution type" id="school-list">
                                    <option value="primary">Primary School</option>
                                    <option value="secondary">Secondary School</option>
                                    <option value="college">College</option>
                                    <option value="university">University</option>
                                    <option value="vocational">Vocational School</option>
                                    <option value="technical">Technical Institute</option>
                                  </select>
                                </td>
                                <td class="">
                                  <select class="form-control selectpicker select-can-add" data-live-search="true" title="Institution Name" id="school-list">
                                    <option value="stmarys">St. Mary's School, Mwea</option>
                                    <option value="mwangaza">Mwangaza Primary School</option>
                                    <option value="mwamodo">Mwamodo Secondary School</option>
                                    <option value="karima">Karima Girls' High School</option>
                                    <option value="kamuiru">Kamuiru Primary School</option>
                                  </select>
                                </td>
                                <td>
                                  <input type="text " class="form-control " placeholder="School Fee amount" spellcheck="false" data-ms-editor="true">

                                </td>
                                <td class="text-right cell-change d-flex align-items-center justify-content-end">
                                  <a class="btn btn-light btn-rounded waves-effect btn-circle btn-transparent cancel-new-category-2 " title="Cancel "><i class="bx bx-x "></i></a>
                                </td>
                              </tr>


                              </tbody>
                              <tfoot>
                              <tr>
                                <td colspan="7" class="bg-light add-field-3 cursor-pinter ">
                                  <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add a Kin</span></span>
                                </td>
                              </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>





                      </form>
                    </section>
                  </div>


                  <!-- Payment Details -->
                  <div class="step-cont d-none">
                    <h3>Applicant's Additional Information</h3>
                    <section>
                      <form>
                        <div class="row">
                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Why is the person applying for bursery<strong class="text-danger"></strong></label>
                              <input type="text" class="form-control" id="" placeholder="Reason for application">
                            </div>
                          </div>

                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Has the applicant previously received NG CDF financial assistance?<strong class="text-danger"></strong></label>
                              <div class="d-flex">
                                <div class="form-check mb-3 pr-15px">
                                  <input class="form-check-input" type="radio" name="received-before" id="received-yes" value="yes">
                                  <label class="form-check-label" for="received-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="received-before" id="received-no" checked  value="no">
                                  <label class="form-check-label" for="received-no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 cdf-aid-before d-none">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Amount allocated By CDF Before<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="KES">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Received assistance on<strong class="text-danger"></strong></label>
                                  <input class="form-control" type="month" value="2019-08" id="example-month-input">
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Has the applicant received financial aid from other organizations previously?<strong class="text-danger"></strong></label>
                              <div class="d-flex">
                                <div class="form-check mb-3 pr-15px">
                                  <input class="form-check-input" type="radio" name="received-aid" id="aid-yes" value="yes">
                                  <label class="form-check-label" for="aid-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="received-aid" id="aid-no" checked=""  value="no">
                                  <label class="form-check-label" for="aid-no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 other-aid-inputs d-none">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Organization's Name<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Enter name of the organization">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Amount received<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="KES">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Received assistance on<strong class="text-danger"></strong></label>
                                  <input class="form-control" type="month" value="2019-08" id="example-month-input">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Does the applicant suffer from any physical imparement?<strong class="text-danger"></strong></label>
                              <div class="d-flex">
                                <div class="form-check mb-3 pr-15px">
                                  <input class="form-check-input" type="radio" name="physican-suffure" id="physical-yes" value="yes">
                                  <label class="form-check-label" for="physical-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="physican-suffure" id="physical-no" checked=""  value="no">
                                  <label class="form-check-label" for="physical-no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 physical-condition-inputs d-none">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Condition<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Name of the Condition">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">More Details<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="More details about the condition">
                                </div>
                              </div>
                            </div>

                          </div>


                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Does the applicant suffer from any chronic illnesses<strong class="text-danger"></strong></label>
                              <div class="d-flex">
                                <div class="form-check mb-3 pr-15px">
                                  <input class="form-check-input" type="radio" name="chronic-suffure" id="chronic-yes" value="yes">
                                  <label class="form-check-label" for="chronic-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="chronic-suffure" id="chronic-no" checked=""  value="no">
                                  <label class="form-check-label" for="chronic-no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 chronic-condition-inputs d-none">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Chronic Disease<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Name of Disease">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">More Details<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="More details about the condition">
                                </div>
                              </div>
                            </div>

                          </div>

                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Does any of the applicants parents/guardians suffer from any form of disability?<strong class="text-danger"></strong></label>
                              <div class="d-flex">
                                <div class="form-check mb-3 pr-15px">
                                  <input class="form-check-input" type="radio" name="disabled-parent" id="parent-yes" value="yes">
                                  <label class="form-check-label" for="parent-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="disabled-parent" id="parent-no" checked=""  value="no">
                                  <label class="form-check-label" for="parent-no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 parent-condition-inputs d-none">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Name of Disability<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Name of Disease">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">More Details about the disability<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="More details about the condition">
                                </div>
                              </div>
                            </div>

                          </div>

                          <div class="col-lg-12 col-md-12 other-family-status">
                            <div class="mb-4">
                              <label for="basicpill-firstname-input">Does any of the applicants parents/guardians suffer from any chronic illnesses?<strong class="text-danger"></strong></label>
                              <div class="d-flex">
                                <div class="form-check mb-3 pr-15px">
                                  <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-yes" value="yes">
                                  <label class="form-check-label" for="chronic-parent-yes">
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-no" checked=""  value="no">
                                  <label class="form-check-label" for="chronic-parent-no">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 parent-chronic-inputs d-none">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">Name of Disability<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="Name of Disease">
                                </div>
                              </div>

                              <div class="col-lg-4 col-md-6 other-family-status">
                                <div class="mb-4">
                                  <label for="basicpill-firstname-input">More Details about the disability<strong class="text-danger"></strong></label>
                                  <input type="text" class="form-control" id="" placeholder="More details about the condition">
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>




                      </form>
                    </section>
                  </div>


                  <!-- Confirm Details -->
                  <div class="step-cont d-none">
                    <h3>Education Funding History</h3>

                    <section>
                      <div class="row">
                        <div class="col-12 mb-3">
                          <p><i>Indicate the main sources of funding for your education in the past as below:</i></p>
                        </div>
                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In Primary School<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In Secondary School<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In college<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In University<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>


                        <div class="col-12 mb-3">
                          <p><i>Indicate other sources of income if any</i></p>
                        </div>
                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In Primary School<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In Secondary School<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In college<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">In University<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter income source">
                          </div>
                        </div>
                      </div>

                    </section>
                  </div>

                  <!-- academic perfomance -->
                  <div class="step-cont d-none">
                    <h3>Applicants academic Perfomance</h3>

                    <section>
                      <div class="row mb-4">
                        <div class="col-lg-12 col-md-12 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">What's is the average perfomance of the applicant?<strong class="text-danger"></strong></label>
                            <div class="d-flex">
                              <div class="form-check mb-3 pr-15px">
                                <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-yes" value="yes">
                                <label class="form-check-label" for="chronic-parent-yes">
                                  Excellent
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-no" checked=""  value="no">
                                <label class="form-check-label" for="chronic-parent-no">
                                  Very Good
                                </label>
                              </div>

                              <div class="form-check mx-4">
                                <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-no" checked=""  value="no">
                                <label class="form-check-label" for="chronic-parent-no">
                                  Good
                                </label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-no" checked=""  value="no">
                                <label class="form-check-label" for="chronic-parent-no">
                                  Fair
                                </label>
                              </div>

                              <div class="form-check mx-4">
                                <input class="form-check-input" type="radio" name="chronic-parent" id="chronic-parent-no" checked=""  value="no">
                                <label class="form-check-label" for="chronic-parent-no">
                                  Poor
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12 col-md-12 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Has the applicant been sent away from school before?<strong class="text-danger"></strong></label>
                            <div class="d-flex">
                              <div class="form-check mb-3 pr-15px">
                                <input class="form-check-input" type="radio" name="sent-away" id="sent-away-yes" value="yes">
                                <label class="form-check-label" for="sent-away-yes">
                                  Yes
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="sent-away" id="sent-away-no" checked=""  value="no">
                                <label class="form-check-label" for="sent-away-no">
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 sent-away-inputs d-none">
                          <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6">
                              <div class="mb-4">
                                <label for="basicpill-firstname-input">Reason for your absence<strong class="text-danger"></strong></label>
                                <input type="text" class="form-control" id="" placeholder="Enter reason">
                              </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6">
                              <div class="mb-4">
                                <label for="basicpill-firstname-input">Number of weeks absent<strong class="text-danger"></strong></label>
                                <input type="text" class="form-control" id="" placeholder="Enter number of weeks">
                              </div>
                            </div>


                          </div>

                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">This Semester's/Tearm's Fee Balance<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="KES">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Next Semester's/Tearm's Fee Balance<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="KES">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">This Semester's/Tearm's Fee Balance<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="KES">
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Loan from HELB where applicable<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="KES">
                          </div>
                        </div>




                      </div>

                    </section>
                  </div>

                  <!-- referees and verifications -->
                  <div class="step-cont d-none">
                    <h3>referees and verifications</h3>

                    <section>
                      <div class="row mb-4">

                        <div class="col-12">
                          <div class="bg-primary border-2 bg-soft p-3 mb-4">
                            <p class="fw-semibold mb-0 pb-0">referees</p>
                          </div>
                        </div>

                        <div class="table-responsive table-responsive-md mb-4">
                          <table class="table table-editable-3 align-middle table-edits">
                            <thead class="table-light">
                            <tr class="text-uppercase table-dark">
                              <th>#</th>
                              <th>Full Names</th>
                              <th class="">Address</th>
                              <th class="">Telephone No.</th>
                              <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr data-id="1">
                              <td style="width: 80px">1.</td>
                              <td>
                                <input type="text " class="form-control " placeholder="Enter Full Names" spellcheck="false" data-ms-editor="true">
                              </td>
                              <td class="">
                                <input type="text " class="form-control " placeholder="Enter address"  data-ms-editor="true">
                              </td>

                              <td>
                                <input type="text " class="form-control " placeholder="Phone No." spellcheck="false" data-ms-editor="true">

                              </td>
                              <td></td>

                            </tr>

                            <tr data-id="1">
                              <td style="width: 80px">2.</td>
                              <td>
                                <input type="text " class="form-control " placeholder="Enter Full Names" spellcheck="false" data-ms-editor="true">
                              </td>
                              <td class="">
                                <input type="text " class="form-control " placeholder="Enter address"  data-ms-editor="true">
                              </td>

                              <td>
                                <input type="text " class="form-control " placeholder="Phone No." spellcheck="false" data-ms-editor="true">

                              </td>
                              <td></td>

                            </tr>

                            <tr class="cloneCharges d-none">
                              <td style="width: 80px " class="categoryIndex ">#</td>

                              <td>
                                <input type="text " class="form-control " placeholder="Enter Full Names" spellcheck="false" data-ms-editor="true">
                              </td>
                              <td class="">
                                <input type="text " class="form-control " placeholder="Enter address"  data-ms-editor="true">
                              </td>
                              <td class="">
                                <input type="text " class="form-control " placeholder="Enter Phone Number"  data-ms-editor="true">
                              </td>

                              <td class="text-right cell-change d-flex align-items-center justify-content-end">
                                <a class="btn btn-light btn-rounded waves-effect btn-circle btn-transparent cancel-new-category-2 " title="Cancel "><i class="bx bx-x "></i></a>
                              </td>
                            </tr>


                            </tbody>
                            <tfoot>
                            <tr>
                              <td colspan="7" class="bg-light add-field-3 cursor-pinter ">
                                <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add a Referree</span></span>
                              </td>
                            </tr>
                            </tfoot>
                          </table>
                        </div>

                        <div class="col-12 mb-4">
                          <div class="bg-primary border-2 bg-soft p-3 mb-4">
                            <p class="fw-semibold mb-0 pb-0">Verrification by religiouse leader</p>
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Full names<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Full Names">
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Religion<strong class="text-danger"></strong></label>
                            <select class="form-control selectpicker bg-white select-revenue" title="Select religion" data-live-search="true">
                              <option value="christianity">Christianity</option>
                              <option value="islam">Islam</option>
                              <option value="hinduism">Hinduism</option>
                              <option value="buddhism">Buddhism</option>
                              <option value="sikhism">Sikhism</option>
                              <option value="judaism">Judaism</option>
                              <option value="bahai">Bahá'í Faith</option>
                              <option value="taoism">Taoism</option>
                              <option value="shintoism">Shintoism</option>
                              <option value="confucianism">Confucianism</option>
                              <option value="jainism">Jainism</option>
                              <option value="zoroastrianism">Zoroastrianism</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Religiouse Leader Comments<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Comments about the family">
                          </div>
                        </div>


                        <div class="col-12 mb-4">
                          <div class="bg-primary border-2 bg-soft p-3 mb-4">
                            <p class="fw-semibold mb-0 pb-0">Verrification by Chief</p>
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Full names<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Full Names">
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Role<strong class="text-danger"></strong></label>
                            <select class="form-control selectpicker bg-white select-revenue" title="Select Designation" data-live-search="true">
                              <option value="Chief">Chief</option>
                              <option value="Assistant Chiel">Assistant Chiel</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Location/Sublocation<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Enter location Name">
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 other-family-status">
                          <div class="mb-4">
                            <label for="basicpill-firstname-input">Comments about Applicant's family<strong class="text-danger"></strong></label>
                            <input type="text" class="form-control" id="" placeholder="Comments about the family">
                          </div>
                        </div>


                      </div>
                    </section>
                  </div>

                  <!-- File attachments -->
                  <div class="step-cont d-none">
                    <h3>Attachments for this application</h3>

                    <section>
                      <div class="table-responsive table-responsive-md ">
                        <table class="table table-editable-file align-middle table-edits ">
                          <thead class="table-light ">
                          <tr class="text-uppercase table-dark ">
                            <th class="vertical-align-middle ">#</th>
                            <th class="vertical-align-middle ">Document Name</th>

                            <th class="vertical-align-middle ">Document Number</th>
                            <th class="vertical-align-middle ">Attach the file</th>
                            <th class="text-right "></th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr data-id="1 ">
                            <td style="width: 80px ">1.</td>

                            <td class=" ">
                              Fee structure
                            </td>

                            <td class=" " title="Select number of months after which the tenancy agreement should be renewed ">
                              <input type="text " class="form-control " placeholder="Document 's Unique No." spellcheck="false" data-ms-editor="true">
                            </td>
                            <td class="" title="Select number of months after which the tenancy agreement should be renewed">
                              <div class="input-group mb-0">
                                <label class="input-group-text bg-info text-white cursor-pointer" for="document1-1">
                                  <i class="font-14px mdi mdi-paperclip"></i> Attach File
                                </label>
                                <input type="file" class="form-control" id="document1-1">
                              </div>
                            </td>
                            <td></td>

                          </tr>


                          <tr class="cloneCharges d-none">
                            <td style="width: 80px " class="categoryIndex ">#</td>

                            <td>
                              <select class="form-control selectpicker" data-live-search="true" title="Select the Document">
                                <option value="">ID Card</option>
                                <option value="">Report Card</option>
                                <option value="">Admission Later</option>
                                <option value="">Death Certificate</option>
                                <option value="">Admission Letter</option>
                                <option value="">Student's Transcript/ Report Form</option>
                                <option value="">Student's ID Card</option>
                                <option value="">Birth Certificate</option>
                                <option value="">Student's ID Card</option>
                                <option value="">parent's ID Card</option>
                              </select>
                            </td>

                            <td class="">
                              <input type="text" class="form-control " placeholder="Document's Unique No. " spellcheck="false " data-ms-editor="true ">
                            </td>
                            <td class=" " title="Select number of months after which the tenancy agreement should be renewed ">
                              <div class="input-group mb-0 ">
                                <label class="input-group-text bg-info text-white cursor-pointer " for="document ">
                                  <i class="font-14px mdi mdi-paperclip "></i> Attach File
                                </label>
                                <input type="file " class="form-control the-document " id="document ">
                              </div>
                            </td>


                            <td class="text-right d-flex align-items-center justify-content-end ">
                              <a class="btn btn-light btn-rounded waves-effect btn-circle btn-transparent cancel-new-category-file " title="Cancel "><i class="bx bx-x "></i></a>
                            </td>
                          </tr>


                          </tbody>
                          <tfoot>
                          <tr>
                            <td colspan="7 " class="bg-light add-field-file cursor-pointer ">
                              <span class="d-flex align-items-center "><i class="dripicons-plus mr-5 d-flex justify-content-center align-items-center font-21 "></i><span class="pl-5 ">Add Document</span></span>
                            </td>
                          </tr>
                          </tfoot>
                        </table>
                      </div>

                    </section>
                  </div>


                  <!-- end of attachments -->

                  <div class="button-navigators">
                    <!-- Previous Button -->
                    <button
                        class="btn btn-primary waves-effect kev-prev me-3"
                        :disabled="currentStep === 0"
                        @click="prevStep"
                    >
                      <i class="mdi mdi-arrow-left font-16px ms-2 me-2"></i> Previous
                    </button>

                    <!-- Next Button -->
                    <button
                        v-if="currentStep < steps.length - 1"
                        class="btn btn-primary waves-effect kev-nxt me-3"
                        @click="nextStep"
                    >
                      Next <i class="mdi mdi-arrow-right font-16px ms-2 me-2"></i>
                    </button>

                    <!-- Submit Button (Only Visible on Last Step) -->
                    <button
                        v-if="currentStep === steps.length - 1"
                        class="btn btn-success kev-submit me-3"
                        @click="submit"
                    >
                      Submit <i class="mdi mdi-check-all me-2 font-16px"></i>
                    </button>
                  </div>
                </div>

              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
        </div>

        <!-- end row -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- End Page-content -->

    <!-- OTP modal -->
    <div class="modal fade OTP-modal " tabindex="-1 " role="dialog " aria-hidden="true ">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header border-bottom-0 ">
            <button type="button " class="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
          </div>
          <div class="modal-body ">
            <div class="text-center mb-4 ">
              <div class="avatar-md mx-auto mb-4 ">
                <div class="avatar-title bg-light rounded-circle text-primary h1 ">
                  <i class="mdi mdi-cellphone-message "></i>
                </div>
              </div>

              <div class="row justify-content-center ">
                <div class="col-xl-10 ">
                  <h4 class="text-primary ">Confirm OTP</h4>
                  <p class="text-muted font-size-14 mb-4 ">An OTP has been sent to <strong>0704549859</strong> kindly ask the Member being registered to check their phone and share the OTP sent to them with you and enetr it below to confirm</p>

                  <form>
                    <div class="row ">
                      <div class="col-3 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">Dight 1</label>
                          <input type="text " class="form-control form-control-lg text-center two-step " maxLength="1 " data-value="1 " id="digit1-input ">
                        </div>
                      </div>

                      <div class="col-3 ">
                        <div class="mb-3 ">
                          <label for="digit2-input " class="visually-hidden ">Dight 2</label>
                          <input type="text " class="form-control form-control-lg text-center two-step " maxLength="1 " data-value="2 " id="digit2-input ">
                        </div>
                      </div>

                      <div class="col-3 ">
                        <div class="mb-3 ">
                          <label for="digit3-input " class="visually-hidden ">Dight 3</label>
                          <input type="text " class="form-control form-control-lg text-center two-step " maxLength="1 " data-value="3 " id="digit3-input ">
                        </div>
                      </div>

                      <div class="col-3 ">
                        <div class="mb-3 ">
                          <label for="digit4-input " class="visually-hidden ">Dight 4</label>
                          <input type="text " class="form-control form-control-lg text-center two-step " maxLength="1 " data-value="4 " id="digit4-input ">
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-block w-100 ">
                      Verify phone number
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- end modal -->

    <!-- tenant id number modal -->
    <div class="modal fade " id="subscribeModal" data-bs-backdrop="static " data-bs-keyboard="false " tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header border-bottom-0 ">
            <button type="button " class="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
          </div>
          <div class="modal-body ">
            <div class="text-center mb-4 ">
              <div class="avatar-md mx-auto mb-4 ">
                <div class="avatar-title bg-light rounded-circle text-primary h1 ">
                  <i class="mdi mdi-card-account-details-outline "></i>
                </div>
              </div>

              <div class="row justify-content-center ">
                <div class="col-xl-10 ">
                  <h4 class="text-primary ">Member's ID Number</h4>
                  <p class="text-muted font-size-14 mb-4 ">
                    Enter the members ID No. This is important in checking if the member already exists in the system.
                  </p>

                  <form>
                    <div class="row ">
                      <div class="col-12 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">ID Number</label>
                          <input type="text " class="form-control form-control-lg text-center two-step " placeholder="ID / PPT No. ">
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-block w-100 ">
                      <i class="bx bx-search-alt-2 font-size-16 align-middle me-2 "></i>
                      Search
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tenant id number modal -->





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
</template>











<!--export default {-->
<!--name: "Application",-->
<!--  -->
<!--};-->
<script>
export default {
  data() {
    return {
      currentStep: 0, // Start at first step
      names: "Loading...", // Default before fetching
      steps: [
        "/application",
        "/family-background",
        "/additional-info",
        "/funding-history",
        "/academic-performance",
        "/referees",
        "/attachments",
      ],
    };
  },
  mounted() {
    this.fetchUserName(); // Call function when component loads
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.$router.push(this.steps[this.currentStep]);
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.$router.push(this.steps[this.currentStep]);
      }
    },
    submit() {
      alert("Application Submitted Successfully!");
      this.$router.push("/dashboard"); // Redirect after submission
    },
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
    },
  },
};
</script>
