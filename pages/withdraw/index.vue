<template>
    <div class="px-10">
        <div class="border p-6 rounded md:w-2/6 mb-4 w-full shadow-[#072C5C]-500/50 shadow-lg">
            <div class="flex justify-between items-center">
                <h5 class="text-[#072c5c] text-2xl">Withdrawal ({{ user.customerbalance | currency('$') }})</h5>
            </div>
            <div>
                <div class="mb-4 w-full">
                    <label
                      for="fullname"
                      class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                    >Amount: ({{ amount | currency('$') }})</label>
                    <input
                      type="text"
                      v-model="amount"
                      class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                    />
                </div>
                <div class="mb-4 w-full">
                    <label
                      for="fullname"
                      class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                    >Payment Method:</label>
                    <select 
                        class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
                        v-model="payment_type"
                    >
                        <option :value="item" v-for="item in paymentsmethods" :key="item.id">{{ item.payment_type_name }}</option>
                    </select>
                </div>
                <button @click="createWithdraw()" class="hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-5 py-2 text-center">Save</button>
            </div>
        </div>

        <div>
            <a-tabs default-active-key="1" @change="callback">
              <a-tab-pane key="1" tab="All Withdrawals">

                <table  v-if="withdrawals_data.length != 0" class="w-full">
                    <thead>
                      <tr class="p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]">
                        <td class="text-[15px]  pl-4 font-semibold leading-[21px] font-[#1D2939] py-4">Amount</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Payment Type</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Status</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Created At</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(item, index) in withdrawals_data" :key="item.id" class="cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]">
                        <td class="text-[15px] pl-4 font-normal leading-[21px] font-[#1D2939] py-4">{{ item.amount | currency('$') }}</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"> {{ item.paymenttype?.payment_type_name ? item.paymenttype?.payment_type_name : '' | capitalize }}</td>
                        
                        <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> 
                          <a-tag v-if="item.status == '1'" color="green">Completed</a-tag>
                          <a-tag v-if="item.status == '0'" color="red">Pending</a-tag>
                        </td>
                        <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">{{ item.created_at | dateFormat }}</td>
                      </tr>  
                    </tbody>
                </table>  

                <div class="w-full flex justify-end items-end my-3">
                    <div v-if="withdrawals != null" class="flex items-center space-x-1 flexwrap">
                        <div v-for="item in withdrawals.links" :key="item.id" @click="paginate(item)" class="cursor-pointer px-4 py-2 text-gray-700  rounded-md hover:bg-[#0042EC] hover:text-white" :class="{ 'bg-[#0042EC] text-white' : item.active }" v-html="item.label">
                            
                        </div>
                    </div>
                </div>

              </a-tab-pane>
              <a-tab-pane key="2" tab="Confirmed Withdrawals">
                <table  v-if="withdrawals_data.length != 0" class="w-full">
                    <thead>
                      <tr class="p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]">
                        <td class="text-[15px]  pl-4 font-semibold leading-[21px] font-[#1D2939] py-4">Amount</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Payment Type</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Status</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Created At</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(item, index) in withdrawals_data" :key="item.id" class="cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]">
                        <td class="text-[15px] pl-4 font-normal leading-[21px] font-[#1D2939] py-4">{{ item.amount | currency('$') }}</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"> {{ item.paymenttype?.payment_type_name ? item.paymenttype?.payment_type_name : '' | capitalize }}</td>
                        
                        <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> 
                          <a-tag v-if="item.status == '1'" color="green">Completed</a-tag>
                          <a-tag v-if="item.status == '0'" color="red">Pending</a-tag>
                        </td>
                        <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">{{ item.created_at | dateFormat }}</td>
                      </tr>  
                    </tbody>
                </table>  

                <div class="w-full flex justify-end items-end my-3">
                    <div v-if="withdrawals != null" class="flex items-center space-x-1 flexwrap">
                        <div v-for="item in withdrawals.links" :key="item.id" @click="paginate(item)" class="cursor-pointer px-4 py-2 text-gray-700  rounded-md hover:bg-[#0042EC] hover:text-white" :class="{ 'bg-[#0042EC] text-white' : item.active }" v-html="item.label">
                            
                        </div>
                    </div>
                </div>
              </a-tab-pane>
              <a-tab-pane key="3" tab="Unconfirmed Withdrawal">
                <table  v-if="withdrawals_data.length != 0" class="w-full">
                    <thead>
                      <tr class="p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]">
                        <td class="text-[15px]  pl-4 font-semibold leading-[21px] font-[#1D2939] py-4">Amount</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Payment Type</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Status</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Created At</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(item, index) in withdrawals_data" :key="item.id" class="cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]">
                        <td class="text-[15px] pl-4 font-normal leading-[21px] font-[#1D2939] py-4">{{ item.amount | currency('$') }}</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"> {{ item.paymenttype?.payment_type_name ? item.paymenttype?.payment_type_name : '' | capitalize }}</td>
                        
                        <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> 
                          <a-tag v-if="item.status == '1'" color="green">Completed</a-tag>
                          <a-tag v-if="item.status == '0'" color="red">Pending</a-tag>
                        </td>
                        <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">{{ item.created_at | dateFormat }}</td>
                      </tr>  
                    </tbody>
                </table>  

                <div class="w-full flex justify-end items-end my-3">
                    <div v-if="withdrawals_data.length != 0" class="flex items-center space-x-1 flexwrap">
                        <div v-for="item in withdrawals.links" :key="item.id" @click="paginate(item)" class="cursor-pointer px-4 py-2 text-gray-700  rounded-md hover:bg-[#0042EC] hover:text-white" :class="{ 'bg-[#0042EC] text-white' : item.active }" v-html="item.label">
                            
                        </div>
                    </div>
                </div>
              </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'dash',
    async asyncData({params, $axios }) {
        try {
            const paymentsmethods = await $axios.get(`payment/list`)
            return {
                paymentsmethods: paymentsmethods.data.payment_type
            }
        } catch (error) {
            console.log(error)
            window.location.assign('/dashboard')
        }
    },
     data() {
        return {
            plans: [],
            amount: 0,
            status: null,
            user: null,
            per_page: 10,
            payment_type: null,
            paymentsmethods: [],
            withdrawals_data: [],
            withdrawals: null
        }
    },
    methods: {
        callback(key) {
            console.log(key);
            if (key == 1) {
                this.status =  null
            }

            if (key == 2) {
                this.status =  1
            }

            if (key == 3) {
                this.status =  0
            }
            this.firstload()
            this.withdrawals_data = []
            this.withdrawals = null
            console.log(this.withdrawals_data.length);
        },

        paginate(item) {
            if (item.url == null) {
                this.$notyf.error("No more data");
                return;
			}
			const param = {
				page_number: this.per_page,
			}

            if (this.status != null) {
                param.status = this.status
            }
			this.$axios.post(item.url, param).then((data) => {
				this.loading = false
				this.investloading = false
				this.withdrawals_data = data.data.withdrawals.data
				this.withdrawals = data.data.withdrawals
			}).catch((err)  => {
				this.loading = false
				this.show = false
			});
        },
        firstload() {
			this.investloading = true
			const param = {
				status: this.status,
				page_number: this.per_page,
			}
            console.log(param)
			this.$apiservice.listWithdrawal(param).then((data) => {
				this.loading = false
				this.investloading = false
				this.withdrawals_data = data.data.withdrawals.data
				this.withdrawals = data.data.withdrawals
			}).catch((err)  => {
				this.loading = false
				this.investloading = false
				this.show = false
			});
		},
        async createWithdraw()
		{
			if (!this.amount)
			{
				this.$notyf.error("Amount is required");
				return
			}

			if (!this.payment_type || this.payment_type == null)
			{
				this.$notyf.error("Payment type is required");
				return
			}
			const data = {
				"amount": this.amount,
				"payment_type": this.payment_type.id
			};
			
			this.investloading = true
			 await this.$apiservice.createWithdrawal(data).then((data) => {
				// console.log(data.data)
				this.$notyf.success(data.data.message);
				//this.$bvModal.show('modal1')
				this.investloading = false
				this.amont = null
				this.$auth.fetchUser()
				// this.firstload()
			}).catch((err)  => {
				this.investloading = false
				this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
			});
		},
    },
    created() {
		this.user = this.$auth.user
        this.firstload()
	},

}  
</script>