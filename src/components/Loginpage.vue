<template>
  <div>

    <!-- auth-login-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 26 Jan 2022 14:02:33 GMT -->

    <head>

      <meta charset="utf-8" />
      <title>Login | NG CDF</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta content="Keep your finances and membership up to date" name="description" />
      <!-- App favicon -->
      <link rel="shortcut icon" href="/assets/images/favicon.svg">

      <!-- owl.carousel css -->
      <link rel="stylesheet" href="/assets/libs/owl.carousel/assets/owl.carousel.min.css">

      <link rel="stylesheet" href="/assets/libs/owl.carousel/assets/owl.theme.default.min.css">

      <!-- Bootstrap Css -->
      <link href="/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
      <!-- Icons Css -->
      <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <!-- App Css-->
      <link href="/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
      <link href="/assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

    </head>

    <body class="auth-body-bg">

    <div>
      <div class="container-fluid p-0">
        <div class="row g-0">

          <div class="col-xl-8 col-lg-8">
            <div class="auth-full-bg pt-lg-5 p-4">
              <div class="w-100">
                <div class="bg-overlay"></div>
                <div class="d-flex h-100 flex-column">

                  <div class="p-4 mt-auto">
                    <div class="row justify-content-center">
                      <div class="col-lg-7">
                        <div class="text-center">
<!--                          <img src="/assets/images/logo-text-white.png" alt="Nouveta Logo" class="img mb-1" style="width: 260px;">-->

<!--                          <h2 class="text-white fw-bold"></h2>-->
                          <p class="font-size-16 mb-0 text-white text-capitalize">Your Journey to Success Starts Here.</p>
                          <strong>-</strong>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-xl-4 col-md-4">
            <div class="auth-full-page-content p-md-5 p-4">
              <div class="w-100">

                <div class="d-flex flex-column h-100">
                  <div class="mb-4 mb-md-5">
<!--                    <a href="index.html" class="d-block auth-logo d-flex justify-content-center">-->
<!--                      <img src="/assets/images/color-logo.png" alt="" height="18" class="auth-logo-dark">-->
<!--                      <img src="/assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">-->
<!--                    </a>-->
                  </div>
                  <div class="my-auto">

                    <div>
                      <p class="text-muted">Sign in to continue</p>
                    </div>

                    <div class="mt-4">


                      <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter your Email address">
                      </div>

                      <div class="mb-3">
                        <div class="float-end">
                          <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                        </div>
                        <label class="form-label">Password</label>
                        <div class="input-group auth-pass-inputgroup">
                          <input v-model="password" type="password" class="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon">
                          <button class="btn btn-light " type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                        </div>
                      </div>

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="remember-check">
                        <label class="form-check-label" for="remember-check">
                          Remember me
                        </label>
                      </div>

                      <div class="mt-3 d-grid">
                        <button @click="login" class="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                      </div>


                    </div>
                  </div>

                  <div class="mt-4 mt-md-5 text-center">
                    <p>Don't have an account?
                      <router-link to="/" class="fw-medium text-primary">Sign Up</router-link>
                    </p>



                  </div>
                </div>


              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container-fluid -->
    </div>



    </body>

    <!-- auth-login-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 26 Jan 2022 14:02:36 GMT -->

  </div>
</template>

<script>
import { execute } from "@/api/index.js";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      isLoading: false
    };
  },
  methods: {
    login() {
      this.errorMessage = "";
      if (!this.email || !this.password) {
        this.errorMessage = "Email and password are required";
        return;
      }

      this.isLoading = true;

      const params = {
        function: "LoginUser",
        email: this.email,
        password: this.password
      };

      execute(params)
          .then((response) => {
            console.log("Login response:", response.data); // ✅ Check full API response
            console.log("User data:", response.data.user); // ✅ Check user object

            if (response.data.success) {
              alert("Login successful!");

              // ✅ Check if user data exists
              const user = response.data.user;
              if (user) {
                localStorage.setItem("user", JSON.stringify(user));
              } else {
                console.error("User object is missing in response!");
              }

              this.$router.push("/dashboard");
            } else {
              this.errorMessage = response.data.message || "Login failed";
            }
          })
          .catch((error) => {
            console.error("Login error:", error);
            this.errorMessage = "An error occurred during login";
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
};
</script>
