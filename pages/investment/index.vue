<template>
    <div class="px-10">
      <p>onfklso  nojkm </p>
        <!-- <h3  class="text-[20px] font-semibold leading-[21px]">Customers</h3>

        <a-tabs default-active-key="1" @change="callback">
          <a-tab-pane key="1" tab="Available Packages">
            <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
              <Plan v-for="(item, index) in plans" :plan="item" />
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Investments" force-render>
            <div v-if="loading" class="border shadow rounded-md p-4 mb-4 w-full">
              <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                  <div class="space-y-3">
                    <div class="grid grid-cols-4 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
  
                    <div class="grid grid-cols-4 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
  
                    <div class="grid grid-cols-4 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
  
                    <div class="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="border p-6 rounded mb-4 w-full overflow-x-scroll shadow-[#072C5C]-500/50 shadow-lg">
                <div v-if="investments.length == 0" class="bg-[#D2DDFD] flex flex-col h-80 items-center justify-center my-10 rounded-lg w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200" fill="none">
                        <g clip-path="url(#clip0_2396_8854)"><path d="M194.787 77.8657L164.868 59.9396C164.878 59.8435 164.882 59.7458 164.882 59.6467V2.95258C164.882 1.32141 163.558 0 161.924 0H148.905C147.273 0 145.947 1.32141 145.947 2.95258C145.947 4.58374 147.273 5.90516 148.905 5.90516H158.965V56.4026L132.51 40.5518H146.146C147.779 40.5518 149.104 39.2304 149.104 37.5992C149.104 35.968 147.779 34.6466 146.146 34.6466H123.133C122.99 34.6466 122.849 34.6604 122.71 34.6802L111.482 27.9541H146.144C147.779 27.9541 149.103 26.6312 149.103 25C149.103 23.3704 147.779 22.0474 146.144 22.0474H101.963C101.858 22.0474 101.755 22.0535 101.653 22.0642L86.5583 13.0203C85.1763 12.1918 83.3263 12.6541 82.4977 14.032L81.4657 15.7486H51.4694C49.8365 15.7486 48.511 17.07 48.511 18.7012V50.1984C48.511 51.828 49.8365 53.151 51.4694 53.151H58.9684L38.6498 86.9324V5.90516H135.231C136.866 5.90516 138.19 4.58374 138.19 2.95258C138.19 1.32141 136.866 0 135.231 0H35.6915C34.0571 0 32.7316 1.32141 32.7316 2.95258V96.7698L4.53168 143.654C3.69081 145.052 4.14488 146.866 5.54532 147.705L92.1295 199.581C92.7931 199.979 93.6186 200.101 94.3693 199.913L129.009 191.28C129.761 191.092 130.429 190.598 130.828 189.934L150.584 157.091H161.924C163.558 157.091 164.884 155.768 164.884 154.137V133.318L195.8 81.9169C196.641 80.5176 196.187 78.7049 194.787 77.8657ZM62.5154 47.2458H54.4292V21.6538H77.9141L62.52 47.2458C62.5185 47.2458 62.5169 47.2458 62.5154 47.2458ZM99.8641 192.456L107.66 179.497L120.646 187.277L118.504 187.81L99.8641 192.456ZM158.965 151.184H154.137L158.965 143.157V151.184ZM127.278 184.363L108.169 172.914C106.768 172.075 104.951 172.528 104.11 173.926L92.6386 192.998L11.1287 144.161L86.0492 19.603L189.205 81.4088L127.278 184.363Z" fill="#CAD2E2"></path> <path d="M106.235 53.7398L127.88 66.7082C128.357 66.9936 128.882 67.1294 129.4 67.1294C130.405 67.1294 131.385 66.6182 131.94 65.6966C132.782 64.2973 132.328 62.4846 130.926 61.6438L109.28 48.6754C107.88 47.8362 106.062 48.2893 105.221 49.687C104.38 51.0863 104.834 52.9005 106.235 53.7398Z" fill="#CAD2E2"></path> <path d="M138.703 73.1939L168.467 91.0253C169.961 91.9195 171.954 91.3 172.681 89.7222C173.3 88.3733 172.786 86.7254 171.512 85.9625L141.749 68.1295C140.348 67.2903 138.53 67.7434 137.689 69.1411C136.849 70.5404 137.303 72.3547 138.703 73.1939Z" fill="#CAD2E2"></path> <path d="M77.5487 58.5937L101.9 73.1842C102.378 73.4695 102.902 73.6053 103.42 73.6053C104.425 73.6053 105.405 73.0942 105.96 72.1725C106.802 70.7748 106.348 68.9606 104.946 68.1213L80.5942 53.5309C79.1938 52.6916 77.376 53.1448 76.5351 54.5425C75.6942 55.9402 76.1483 57.7545 77.5487 58.5937Z" fill="#CAD2E2"></path> <path d="M161.766 102.165L115.769 74.605C114.368 73.7658 112.55 74.219 111.709 75.6182C110.869 77.0159 111.323 78.8302 112.723 79.6694L158.72 107.228C160.214 108.122 162.209 107.503 162.934 105.925C163.555 104.576 163.041 102.928 161.766 102.165Z" fill="#CAD2E2"></path> <path d="M153.645 115.668L72.4727 67.0332C71.0722 66.1939 69.2544 66.6456 68.4135 68.0448C67.5726 69.4425 68.0267 71.2568 69.4272 72.096L150.599 120.73C152.093 121.625 154.088 121.005 154.813 119.427C155.433 118.077 154.918 116.43 153.645 115.668Z" fill="#CAD2E2"></path> <path d="M145.523 129.169L83.2925 91.8844C81.8905 91.0451 80.0742 91.4983 79.2318 92.896C78.3909 94.2937 78.845 96.108 80.247 96.9472L142.478 134.234C143.972 135.128 145.967 134.508 146.691 132.931C147.312 131.58 146.797 129.932 145.523 129.169Z" fill="#CAD2E2"></path> <path d="M53.1845 99.1011L101.888 128.28C102.365 128.566 102.889 128.702 103.408 128.702C104.412 128.702 105.392 128.19 105.947 127.269C106.788 125.871 106.334 124.057 104.934 123.218L56.23 94.0367C54.828 93.1974 53.0117 93.6506 52.1708 95.0498C51.33 96.4475 51.784 98.2618 53.1845 99.1011Z" fill="#CAD2E2"></path> <path d="M137.402 142.672L115.756 129.703C114.356 128.864 112.538 129.316 111.697 130.715C110.855 132.112 111.309 133.927 112.711 134.766L134.357 147.734C135.85 148.63 137.845 148.009 138.57 146.431C139.189 145.082 138.676 143.434 137.402 142.672Z" fill="#CAD2E2"></path> <path d="M45.0634 112.603L64.003 123.95C64.48 124.237 65.0044 124.373 65.5227 124.373C66.5286 124.373 67.5087 123.862 68.0636 122.939C68.9045 121.541 68.4504 119.727 67.0485 118.888L48.1089 107.54C46.7084 106.7 44.8906 107.154 44.0497 108.551C43.2089 109.951 43.6629 111.765 45.0634 112.603Z" fill="#CAD2E2"></path> <path d="M129.281 156.174L77.8726 125.373C76.4707 124.533 74.6544 124.987 73.812 126.384C72.9711 127.782 73.4252 129.596 74.8256 130.436L126.235 161.237C127.729 162.131 129.723 161.512 130.449 159.934C131.068 158.585 130.554 156.937 129.281 156.174Z" fill="#CAD2E2"></path> <path d="M121.159 169.676L39.9873 121.042C38.5853 120.202 36.769 120.656 35.9282 122.053C35.0873 123.451 35.5414 125.265 36.9418 126.104L118.114 174.739C119.606 175.633 121.601 175.014 122.326 173.436C122.947 172.087 122.433 170.439 121.159 169.676Z" fill="#CAD2E2"></path> <path d="M64.3347 153.998L31.8662 134.545C30.4642 133.705 28.648 134.158 27.8055 135.556C26.9647 136.954 27.4187 138.768 28.8207 139.607L61.2892 159.061C61.7662 159.348 62.2906 159.484 62.8089 159.484C63.8134 159.484 64.7934 158.972 65.3484 158.049C66.1892 156.651 65.7352 154.837 64.3347 153.998Z" fill="#CAD2E2"></path> <path d="M94.0969 171.831L75.1573 160.483C73.7553 159.644 71.939 160.097 71.0981 161.495C70.2557 162.892 70.7098 164.707 72.1118 165.546L91.0514 176.894C92.5451 177.788 94.5402 177.169 95.2649 175.591C95.8856 174.242 95.3719 172.594 94.0969 171.831Z" fill="#CAD2E2"></path></g> <defs><clipPath id="clip0_2396_8854"><rect width="200" height="200" fill="white"></rect></clipPath></defs>
                    </svg> 
                    <p class="text-[15px] font-semibold leading-[21px] font-[#1D2939]">No Transactions</p>
                </div>

                <table  v-if="investments.length != 0" class="w-full">
                  <thead>
                    <tr class="p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]">
                      <td class="text-[15px] pl-2 font-semibold leading-[21px] font-[#1D2939] py-4">S/N</td> 
                      <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Plan name</td> 
                      <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Principle</td> 
                      <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Timer</td> 
                      <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Status</td> 
                      <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Realtime earnings</td>
                      <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Possible earnings</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  v-for="(item, index) in investments" :key="item.id" class="cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]">
                      <td class="text-[15px] pl-2 font-normal leading-[21px] font-[#1D2939] py-4">{{ index + 1}}</td>
                      <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> {{ item.plan ? item.plan.plan_name : '' | capitalize }}</td>
                      <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> {{ item.cost | currency('$') }}</td>
                      <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">
                        <span v-if="item.is_completed == '1'" class="success">{{item.timeing}}</span>
                        <span v-else class="primary">{{item.timeing}}</span>
                      </td>
                      <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> 
                        <a-tag v-if="item.is_completed == '1'" color="green">Completed</a-tag>
                        <a-tag v-if="item.is_completed == '0'" color="red">Pending</a-tag>
                      </td>
                      <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">{{ item.realtime | currency('$') }}</td>
                      <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">{{ item.profit | currency('$') }}</td>
                    </tr>  
                  </tbody>
                </table>  

                <div class="w-full flex justify-end items-end my-3">
                  <div v-if="investmentData != null" class="flex items-center space-x-1 flexwrap">
                    <div v-for="item in investmentData.links" :key="item.id" @click="paginate(item)" class="cursor-pointer px-4 py-2 text-gray-700  rounded-md hover:bg-[#0042EC] hover:text-white" :class="{ 'bg-[#0042EC] text-white' : item.active }" v-html="item.label">
                        
                    </div>
                  </div>
                </div>

            </div>
          </a-tab-pane>
           
        </a-tabs> -->
    </div>
</template>
<!-- <script>
import Plan from "~/components/Plan.vue";
export default {
  layout: 'dash',
  name: 'InvestmentPage',
  components: {
    Plan
  },
  data() {
    return {
      plans: [],
      amount: 0,
      per_page: 10,
      loading: false,
	    investloading:  true,
      investments: [],
      investmentData: null,
      search_text: null,
      next_page_url: null,
      prev_page_url: null,
      from: "",
      to: "",
      total: "",
    };
  },
  methods: {
    callback(key) {
      console.log(key);
      this.firstload()
    },
    plansList() {
      this.$apiservice.plansList().then((data) => {
        this.plans = data.data.plans
      });
    },
    paginate(url) {
      console.log(url)
      if (url.url == null) {
        this.$notyf.error("No more data");
        return;
      }
      const param = {
        page_number: this.per_page,
      }
      this.$axios.post(url.url, param).then((data) => {
        this.loading = false
        this.investloading = false
        this.investments = data.data.investments.data
        this.investmentData = data.data.investments
        this.next_page_url = data.data.investments.next_page_url
        this.prev_page_url = data.data.investments.prev_page_url
        this.from = data.data.investments.from
        this.to = data.data.investments.to
        this.total = data.data.investments.total
      }).catch((err)  => {
        this.loading = false
        this.show = false
      });
    },
    firstload() {
      this.loading = true
      const param = {
        page_number: this.per_page,
      }
      this.$apiservice.investmentList(param).then((data) => {
        this.loading = false
        this.investloading = false
        this.investments = data.data.investments.data
        this.investmentData = data.data.investments
        this.next_page_url = data.data.investments.next_page_url
        this.prev_page_url = data.data.investments.prev_page_url
        this.from = data.data.investments.from
        this.to = data.data.investments.to
        this.total = data.data.investments.total
      }).catch((err)  => {
        this.loading = false
        this.investloading = false
        this.show = false
      });
    }
  },
  created() {
    this.plansList()
    this.firstload()
  }
}
  
</script> -->

