<template>
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Register 2 | NG CDF</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Keep your finances and membership up to date" name="description" />
    <meta content="Kelvin Njuguna Ndungu" name="author" />
    <link rel="shortcut icon" href="/assets/images/favicon.svg">

    <link rel="stylesheet" href="/assets/libs/owl.carousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="/assets/libs/owl.carousel/assets/owl.theme.default.min.css">
    <link href="/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link href="/assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />
  </head>

  <body class="auth-body-bg">
  <div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-xl-9">
          <div class="auth-full-bg pt-lg-5 p-4">
            <div class="w-100">
              <div class="bg-overlay"></div>
              <div class="d-flex h-100 flex-column">
                <div class="p-4 mt-auto">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <div class="text-center">
                        <h4 class="mb-3"><i class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span class="text-primary">5k</span>+ Satisfied clients</h4>
                        <div dir="ltr">
                          <div class="owl-carousel owl-theme auth-review-carousel" id="auth-review-carousel">
                            <div class="item">
                              <div class="py-3">
                                <p class="font-size-16 mb-4">" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. "</p>
                                <div>
                                  <h4 class="font-size-16 text-primary">Abs1981</h4>
                                  <p class="font-size-14 mb-0">- Skote User</p>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="py-3">
                                <p class="font-size-16 mb-4">" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "</p>
                                <div>
                                  <h4 class="font-size-16 text-primary">nezerious</h4>
                                  <p class="font-size-14 mb-0">- Skote User</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-xl-3">
          <div class="auth-full-page-content p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5">
                  <a href="index.html" class="d-block auth-logo d-flex justify-content-center">
                    <img src="/assets/images/color-logo.png" alt="" height="18" class="auth-logo-dark">
                    <img src="/assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">
                  </a>
                </div>
                <div class="my-auto">
                  <h5 class="text-primary">Register account</h5>
                  <form @submit.prevent="submitForm" class="needs-validation" novalidate autocomplete="on">
                    <!-- Your input fields here -->
                    <div class="mb-3">
                      <label for="Email" class="form-label">Email</label>
                      <input type="email" class="form-control" v-model="email" placeholder="Enter email" required>
                    </div>

                    <div class="mb-3">
                      <label for="Name" class="form-label">Name</label>
                      <input type="text" class="form-control" v-model="names" placeholder="Enter Name" required>
                    </div>

                    <div class="mb-3">
                      <label for="Password" class="form-label">Password</label>
                      <input type="password" class="form-control" v-model="password" placeholder="Enter password" required>
                    </div>

                    <div class="mb-3">
                      <label for="phoneNumber" class="form-label">Phone Number</label>
                      <input type="text" class="form-control" v-model="phoneNumber" placeholder="Enter phone number" required>
                    </div>

                    <!-- Submit button -->
                    <div class="mt-4 d-grid">
                      <button type="submit" class="btn btn-primary waves-effect waves-light" :disabled="isLoading">Register</button>
                    </div>

                    <!-- Error message display -->
                    <div v-if="errorMessage" class="alert alert-danger mt-3">
                      {{ errorMessage }}
                    </div>
                  </form>

                  <div class="mt-5 text-center">
                    <p>Already have an account? <a href="auth-login-2.html" class="fw-medium text-primary">Login</a></p>
                  </div>
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
  </html>
</template>

<script>
import { execute } from '@/api/index.js'

export default {
  data() {
    return {
      names: '',
      email: '',
      password: '',
      phoneNumber: '',
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    submitForm() {
      // Reset error message
      this.errorMessage = '';

      console.log("Form submitted with data:", this.names, this.email, this.password, this.phoneNumber);

      // Validate form fields
      if (!this.names || !this.email || !this.password || !this.phoneNumber) {
        this.errorMessage = "All fields are required";
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errorMessage = "Please enter a valid email address";
        return;
      }

      // Set loading state
      this.isLoading = true;

      // Prepare the parameters to be sent
      const params = {
        function: 'addUser',
        names: this.names,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber
      };

      console.log("Sending request with params:", params);  // Check the params

      // Send the form data to the backend
      execute(params)
          .then(response => {
            console.log("Backend Response:", response.data);

            if (response.data.success) {
              // If registration is successful, alert and redirect to login
              alert('User added successfully!');
              this.$router.push('/login');  // Redirect to login page
            } else {
              // If there was an error, display the message
              this.errorMessage = response.data.message || 'Registration failed';
            }
          })
          .catch(error => {
            console.error("API Call Error:", error);
            this.errorMessage = 'An error occurred while registering the user.';
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
}
</script>
