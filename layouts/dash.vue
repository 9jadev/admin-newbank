<template>
  <div class="w-screen h-screen flex flex-row">
  
    <div
      class="h-full w-[15rem] fixed ease-in duration-300 mainsidebar bg-white md:7/12 md:relative md:flex flex-col"
      :class="{'ease-out translate-x-[-15rem] md:translate-x-0': togglestatus}"
    >
      <div @click="changeToggleStatus()" class="bg-[#072C5C] flex flex-col h-10 justify-between py-2 px-2 rounded-sm w-10 md:hidden absolute right-0 top-0">
        <div class="w-full h-1 bg-white rounded-sm"></div>
        <div class="w-full h-1 bg-white rounded-sm"></div>
        <div class="w-full h-1 bg-white rounded-sm"></div>
      </div>

      <SideBar></SideBar>

    </div>

    <div class="h-full w-full overflow-auto">
      <header class="flex items-center justify-between h-max bg-[#F1F5F8] fixed w-auto" style="z-index: 100; box-shadow: 0px 0px 5px rgba(18, 23, 39, 0.5); width: -webkit-fill-available;">

        <div @click="showDrawer" class="flex flex-col h-10 justify-between py-2 px-2 rounded-sm w-10 md:hidden">
          <div class="w-full h-1 bg-[#1A3E69] rounded-sm"></div>
          <div class="w-full h-1 bg-[#1A3E69] rounded-sm"></div>
          <div class="w-full h-1 bg-[#1A3E69] rounded-sm"></div>
        </div>

        <div class="flex items-center justify-between w-full">
           <div class="dropdown inline-block relative">
              <h3 class="ml-3 mb-0 text-white">
                <span class="text-[#1A3E69] font-bold">{{ this.$auth.user.firstname | capitalize }} </span>
                <span class="text-[#1A3E69] font-bold">{{ this.$auth.user.lastname | capitalize }} </span>
              </h3>
              <p class="ml-3 mb-0 text-[#4B7DBE]">{{ this.$auth.user.account_number }}</p>
            </div>
        </div>

        <div class="mr-2">
          <a-dropdown>
            <a class="ant-dropdown-link w-[50px] h-[50px] p-[5px] rounded-full" @click="e => e.preventDefault()">
              <!-- <a-icon type="user" /> -->
              <img :src="$auth.user.image" class="w-[40px] h-[40px] rounded-md" />
            </a>

            <a-menu slot="overlay">
              <a-menu-item key="1">
                <NuxtLink to="/dashboard/profile">
                  Profile
                </NuxtLink>
               
              </a-menu-item>
              <a-menu-item @click="logout()" key="2">
                Logout
              </a-menu-item>
             
            </a-menu>
          </a-dropdown>
        </div>
        
      </header>

      <div class="mt-[90px]">
        <div id="google_translate_element" style="margin-left: 40px;"></div>
        <script type="text/javascript">
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          }
        </script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

        <Nuxt/>
      </div>
      
    </div>

    <a-modal v-model="visibleOtp" title="" :footer="null">
      <div class="flex flex-col item-center justify-center my-10 mx-10">
        <h3 class="text-[#1E1E1E] text-[32px] text-center font-medium m-0 leading-[38px]">Enable OTP Authentication</h3>
        <p class="text-[#1E1E1E] text-[16px] text-center font-medium leading-[19px]">Would you want to enable OTP authentication?</p>

        <button @click="createCustomer()" class="mt-3 m text-white h-12 bg-[#EE5A35] hover:bg-[#EE5A34] focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded  w-full px-5 py-2.5 text-center">
          Enable OTP </button>
      </div>
    </a-modal>


    <a-drawer
      title=""
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
    <SideBar></SideBar>
    </a-drawer>

  </div>
</template>
<script>
import swal from 'sweetalert';
import SideBar from '../components/SideBar.vue';
export default {
  data() {
    return {
      togglestatus: true,
      greeting: null,
      visibleOtp: false,
      visible: false,
    }
  },
  components: {
    SideBar
  },
  middleware({ store, redirect }) {
    if (store.state.auth.loggedIn == false) {
      return redirect('/')
    }
  },
  created() {
    // if(this.$auth.user.otp_status == "inactive") {
    //   this.visibleOtp = true
    // }
  },
  mounted() {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.text = `function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element')}`;
    document.body.appendChild(script1);

    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/653017eef2439e1631e5d8e3/1hd1tqvpc';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  },
  watch: {
    $route(to, from) {
      this.visible = false
    }
  },
  methods: {
    logout() {
      swal("Logout!", `You are about to logout.`, "error").then((res) => {
        if (res == true) {
          this.$auth.logout()
        }
      });
    },
    afterVisibleChange(val) {
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    async createCustomer(){
       this.visbleOtp = false;

      const data = {"otp": "active"}
			await this.$apiservice.setOtp(data).then(res => {
				console.log(res.data)
        this.visibleOtp = false
        this.$auth.fetchUser()
				this.$notyf.success(res.data.message)
      
			}).catch(err => {
        console.log(err)
				this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
			})
		},
    handleOk(){},
    logout() {
      this.$auth.logout()
    },
    changeToggleStatus() {
      this.togglestatus = !this.togglestatus;
    },

    getgreeting() {
      const date = new Date();
      const currentTime = date.getHours();
      let greeting;
      if (currentTime >= 0 && currentTime <= 12) {
          greeting = "Good Morning";
      } else if (currentTime > 12 && currentTime <= 18) {
          greeting = "Good Afternoon";
      } else {
          greeting = "Good Evening";
      }
      this.greeting = greeting
    },
  }
}
</script>
