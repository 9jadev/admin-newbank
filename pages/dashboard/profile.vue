<template>
    <div>
        <div class="w-full ">
            <!-- <h4 class="font-light mx-10 mt-8 text-2xl">Profile</h4> -->
            <div class="p-6">
                <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" tab="PROFILE">
                        <div class="flex md:gap-[20px] flex-col md:flex-row">
                            <div class="border p-6 rounded md:w-4/6 mb-4 w-full shadow-[#072C5C]-500/50 shadow-lg">
                                <div class="flex justify-between items-center">
                                    <h5 class="text-[#072c5c]">Update Contact Information</h5>
                                    <button @click="togglestatus = !togglestatus" class="hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-2 py-2.5 text-center">Edit</button>
                                </div>
                                <form @submit.prevent="submit()" class="w-full">
      
                                    <div class="mb-4 w-full">
                                        <label
                                          for="fullname"
                                          class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                                        >First name</label>
                                        <input
                                          type="text"
                                          v-model.trim="$v.form.firstname.$model"
                                          class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                                          :class="{'border-red-400': $v.form.firstname.$error}"
                                          id="firstname"
                                          :disabled="togglestatus == false"
                                        />
                                        <div v-if="!$v.form.firstname.required && $v.form.firstname.$error" class="text-[10px] font-medium text-red-400"> First name is required.</div>
                                    </div>

                                    <div class="mb-4 w-full">
                                        <label
                                          for="lastname"
                                          class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                                        >Last name</label>
                                        <input
                                          type="text"
                                          v-model.trim="$v.form.lastname.$model"
                                          class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                                          :class="{'border-red-400': $v.form.lastname.$error}"
                                          id="lastname"
                                          :disabled="togglestatus == false"
                                        />
                                        <div v-if="!$v.form.lastname.required && $v.form.lastname.$error" class="text-[10px] font-medium text-red-400"> Last name is required.</div>
                                    </div>

                                    <div class="mb-4 w-full">
                                      <label
                                        for="email"
                                        class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                                      >Email</label>
                                      <input
                                        type="text"
                                        v-model.trim="$v.form.email.$model"
                                        class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                                        :class="{'border-red-400': $v.form.email.$error}"
                                        id="email"
                                        :disabled="togglestatus == false"
                                      />
                                      <div v-if="!$v.form.email.required && $v.form.email.$error" class="text-[10px] font-medium text-red-400"> Email is required.</div>
                                      <div v-if="!$v.form.email.email && $v.form.email.$error" class="text-[10px] font-medium text-red-400"> Email is required.</div>
                                    </div>

                                    <div class="mb-4 w-full">
                                        <label
                                          for="phone_number"
                                          class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                                        >Phone number</label>
                                        <input
                                          type="text"
                                          v-model.trim="$v.form.phone_number.$model"
                                          class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                                          :class="{'border-red-400': $v.form.phone_number.$error}"
                                          id="phone_number"
                                        :disabled="togglestatus == false"
                                        />
                                        <div v-if="!$v.form.phone_number.required && $v.form.phone_number.$error" class="text-[10px] font-medium text-red-400"> Phone number is required.</div>
                                    </div>
                                    <button type="submit" v-if="togglestatus" class="hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-5 py-2 text-center">Save</button>
                                </form>    
                            </div>

                            <div class="flex flex-col md:w-2/6 mb-4 w-full">
                                <div class="border p-6 rounded w-full mb-2 shadow-[#072C5C]-500/50 shadow-lg">
                                    <div class="flex flex-col items-center justify-between">
                                        <h5 class="text-[#072c5c]">Update Profile Image</h5>
                                        <img :src="$auth.user.image" class="w-[200px] h-[200px] mb-3 rounded-md" />
                                        <input
                                            type="file"
                                            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                                            aria-label="Upload new profile image"
                                            @change="selectFileIdprofile"
                                        />
                                        <!-- <button class="hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-5 py-2 text-center">Upload</button> -->
                                    </div>
                                </div>    
                          
                                <div class="border p-6 rounded w-full shadow-[#072C5C]-500/50 shadow-lg">
                                    <div class="flex justify-between items-center">
                                        <h5 class="text-[#072c5c]">Update Password</h5>
                                    </div>
    
                                    <form @submit.prevent="submitPass()" class="w-full">
          
                                        <div class="mb-4 w-full">
                                            <label
                                              for="oldpassword"
                                              class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                                            >Old Password</label>
                                            <input
                                              type="password"
                                              v-model.trim="$v.formpass.oldpassword.$model"
                                              class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                                              :class="{'border-red-400': $v.formpass.oldpassword.$error}"
                                              id="oldpassword"
                                            />
                                            <div v-if="!$v.formpass.oldpassword.required && $v.formpass.oldpassword.$error" class="text-[10px] font-medium text-red-400"> Old password is required.</div>
                                        </div>
    
                                        <div class="mb-4 w-full">
                                            <label
                                              for="newpassword"
                                              class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                                            >New Password</label>
                                            <input
                                              type="password"
                                              v-model.trim="$v.formpass.newpassword.$model"
                                              class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                                              :class="{'border-red-400': $v.formpass.newpassword.$error}"
                                              id="newpassword"
                                            />
                                            <div v-if="!$v.formpass.newpassword.required && $v.formpass.newpassword.$error" class="text-[10px] font-medium text-red-400"> New password is required.</div>
                                        </div>
                                        <button type="submit"  class="hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-5 py-2 text-center">Save</button>
                                     </form>   
    
                                </div>
                            </div>
                            
                        </div>
                      
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="KYC" force-render>

                        <div v-if="users.id_card">
                            <h5 class="text-[#072c5c]">VERIFICATION DOCUMENT</h5>
                            <img :src="users.id_card" class="w-[200px] h-[200px]" alt="" srcset="" />
                        </div>
                        <div v-else>
                            <h5 class="text-[#072c5c]">UPDATE DOCUMENT</h5>
                            <input
                                type="file"
                                accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                                aria-label="upload image button"
                                @change="selectFileId"
                            />
                        </div>
                        

                    </a-tab-pane>
                   
                </a-tabs>
            </div>
            
        </div>
    </div>
  </template>
  
  <script>
  import { validationMixin } from "vuelidate";
  import { required, minLength, email } from "vuelidate/lib/validators";
  export default {
    mixins: [validationMixin],
    layout: 'dash',
    name: 'IndexPage',
    data() {
        return {
            togglestatus: false,
            payment_type: [],
            form: {
                email: '',
                firstname: '',
                lastname: '',
                phone_number: ''
            },
            formpass: {
                oldpassword: '',
                newpassword: ''
            }
        }
    },
    validations: {
        formpass: {
            oldpassword: {
                required
            },
            newpassword: {
                required
            }
        },
        form: {
            email: {
                required,
                email
            },
            firstname: {
                required,
            },
            lastname: {
                required,
            },
            phone_number: {
                required,
            }
        }
    },
    methods: {
        callback(key) {
            console.log(key);
        },
        async paymentype(payment_types_id, value) {
			const data = {
				"payment_types_id": `${payment_types_id}`,
				"value": value
			};
			await this.$apiservice.paymentType(data).then((res) => {
				this.$notyf.success(res.data.message);
			}).catch(err => {
				this.$notyf.error(err.response.data.message);
			})
		},
        profileFormFill() {
            this.form.firstname = this.$auth.user.firstname
            this.form.lastname = this.$auth.user.lastname
            this.form.email = this.$auth.user.email
            this.form.phone_number = this.$auth.user.phone_number
        },
        submit() {
            this.$v.form.$touch()
            if (this.$v.form.$invalid) {
                this.$notyf.error("Invalid Form.")
            } else {
                this.updateProfile(this.form)
            }
        },
        submitPass() {
            this.$v.formpass.$touch()
            if (this.$v.formpass.$invalid) {
                this.$notyf.error("Invalid Form.")
            } else {
                this.formPass(this.formpass)
                // this.$v.formpass.reset();
            }
        },
        async selectFileIdprofile(e) {
            const file = e.target.files[0];
           /* Make sure file exists */
           if (!file) return;
           /* create a reader */
           const readData = (f) =>  new Promise((resolve) => {
               const reader = new FileReader();
               reader.onloadend = () => resolve(reader.result);
               reader.readAsDataURL(f);
           });
           /* Read data */
           const data = await readData(file);
           /* upload the converted data */
           this.loadingkyc = true
           this.$cloudinary.upload(data, {
               folder: 'ajosuite',
               uploadPreset: "x62tzib0",
           }).then((res)  => {
               this.loadingkyc = false
               console.log(res.secure_url)
              this.uploadImg(res.secure_url)
           })
        },
        async uploadImg(image) {
            const data = { "image": image };
            await this.$apiservice.uploadImg(data).then((res) => {
                this.$notyf.success(res.data.message);
                // window.location.reload();
                this.$auth.fetchUser()
                this.$nuxt.refresh()
            }).catch(err => {
                this.$notyf.error(err.response.data.message);
            })
        },
        async selectFileId(e) {
           const file = e.target.files[0];
           /* Make sure file exists */
           if (!file) return;
           /* create a reader */
           const readData = (f) =>  new Promise((resolve) => {
               const reader = new FileReader();
               reader.onloadend = () => resolve(reader.result);
               reader.readAsDataURL(f);
           });
           /* Read data */
           const data = await readData(file);
           /* upload the converted data */
           this.loadingkyc = true
           this.$cloudinary.upload(data, {
               folder: 'ajosuite',
               uploadPreset: "x62tzib0",
           }).then((res)  => {
               this.loadingkyc = false
               console.log(res)
              this.uploadImageKyc(res.secure_url)
           })
        },
        async uploadImageKyc(logo) {
            const data = { "id_card": logo };
            await this.$apiservice.uploadKycImage(data).then((res) => {
                this.$notyf.success(res.data.message);
                window.location.reload();
                this.$auth.fetchUser()
                this.$nuxt.refresh()
                this.$bvModal.hide('updateimagekyc');
            }).catch(err => {
                this.$notyf.error(err.response.data.message);
            })
        },

        async payTypeSubmit(id) {
            var element = document.getElementById("pay"+id);
            const data = {
                "payment_types_id": `${id}`,
                "value": element.value
            }
            console.log(data)
            
            await this.$apiservice.paymentCreate(data).then(res => {
                console.log(res.data)
                this.$notyf.success(res.data.message)
            }).catch(err => {
                console.log(err)
                this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
            })
        },
        async formPass(params) {
            await this.$apiservice.formPass(params).then(res => {
                console.log(res.data)
                this.$notyf.success(res.data.message)
                this.$auth.refresh()
                this.$v.formpass.$reset()
            }).catch(err => {
                console.log(err)
                this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
            })
        },
        async updateProfile(params) {
            await this.$apiservice.updateProfile(params).then(res => {
                console.log(res.data)
                this.$notyf.success(res.data.message)
                this.$auth.fetchUser()
                this.$nuxt.refresh()
                this.profileFormFill()
            }).catch(err => {
                console.log(err)
                this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
            })
        },
        async paymentList() {
            await this.$apiservice.paymentList().then(res => {
                console.log(res.data.payment_type)
                this.payment_type = res.data.payment_type
            }).catch(err => {
                console.log(err)
                this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
            })
        }
    },
    created() {
        this.profileFormFill()
        // this.paymentList(
        this.users = this.$auth.user
    }
  }
  </script>  