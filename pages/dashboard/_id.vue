<template>
    <div class="p-5">
        <div class="bg-[#1A3E69] flex h-[120px] items-center justify-start p-5 rounded-lg w-full gap-3">
            <img :src="customer?.image" class="w-[80px] h-[80px] rounded-full" />
            <h3 class="font-bold text-[20px] text-white"> {{ customer?.firstname | capitalize }} {{ customer?.lastname | capitalize }}</h3><a-button type="dashed" @click="showModal"> View </a-button>
            
        </div>
        <div class="flex flexwrap gap-2 mt-3 w-full">
            <a-button type="primary" @click="showCreditvisible"> Credit </a-button>
            <a-button type="danger" @click="showDebitvisible"> Debit </a-button>
            <a-button v-if="customer?.status == 'active'" @click="showBlockvisible()" type="primary"> Block Account </a-button>
            <a-button v-if="customer?.status != 'active'" @click="showunBlockvisible()" type="danger"> Unblock Account </a-button>
            <a-button type="dashed"> Create Transaction </a-button>
        </div>

        <div class="mt-3 flex flex-col md:flex-row gap-0 md:gap-2">
            <div class="w-full  mb-6">
                <h4> Transaction </h4>
                <table class="w-full">
                    <thead>
                      <tr class="p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]">
                        <td class="text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4">S/N</td> 
                        <td class="text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4">Type</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Amount</td> 
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Date</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"></td>
                      </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(item, index) in transactions" :key="item.id" class="cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]">
                            <td class="text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4">{{ index + 1}}</td> 
                            <td class="text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4">
                                {{ item.type | capitalize }}
                            </td> 
                            <td class="text-[15px] font-bold leading-[21px] font-[#1D2939] py-4">{{ item.amount | currency(customer?.currency) }}</td> 
                            <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> {{ item.created_at | dateFormat }} </td>
                            <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4">
                                <a-button type="primary" @click="visibletimeget(item)">
                                    Backdate
                                </a-button>

                                <a-popconfirm
                                    title="Are you sure delete this transaction"
                                    ok-text="Yes"
                                    cancel-text="No"
                                    @confirm="deleteTransaction(item.id)"
                                    @cancel="canceldete()"
                                >
                                    <a-button type="danger"> Delete </a-button>
                                </a-popconfirm>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-full mb-6">
                <h4> Wire Transaction </h4>
                <table class="w-full">
                    <thead>
                      <tr class="p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]">
                        <td class="text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4">S/N</td> 
                        <td class="text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4">Status</td> 
                        <!-- <td class="text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4">OTP</td>  -->
                        <!-- <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Amount</td>  -->
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4">Date</td>
                        <td class="text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"></td>
                      </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(item, index) in wire_transfers" :key="item.id" class="cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]">
                            <td class="text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4">{{ index + 1}}</td> 
                            <td class="text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4">  {{ item.status | capitalize }} </td> 
                            <!-- <td class="text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4">
                                {{ item.otp }}
                            </td>  -->
                            <!-- <td class="text-[15px] font-bold leading-[21px] font-[#1D2939] py-4">{{ item?.transaction_transfer_amount | currency(item?.transaction_transfer_currency) }}</td>  -->
                            <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> {{ item.created_at | dateFormat }} </td>
                            <td class="text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"> 
                                <a-button type="primary" @click="showWireModel(item)"> View </a-button>
                                <a-popconfirm
                                    title="Are you sure delete this wire transaction"
                                    ok-text="Yes"
                                    cancel-text="No"
                                    @confirm="deleteWireTransaction(item.id)"
                                    @cancel="canceldete()"
                                >
                                    <a-button type="danger"> Delete </a-button>
                                </a-popconfirm>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <a-modal v-model="visible" title="Profile" @ok="handleOk">
            <!-- <p>Some contents...</p> -->
            <img :src="customer?.image" class="w-[200px] h-[200px]" />
            <p>Account number: {{ customer?.account_number }} </p>
            <p>Firstname: {{ customer?.firstname | capitalize }} </p>
            <p>Lastname: {{ customer?.lastname | capitalize }} </p>
            <p>Email: {{ customer?.email }} </p>
            <p>Phone number: {{ customer?.phone_number }} </p>
            <p>Username: {{ customer?.username }}</p>
            <p>Account Type: {{ customer?.account_type }} </p>
            <p>Country: {{ customer?.country }}</p>
            <p>Account Type: {{ customer?.account_type }} </p>
            <p>Country: {{ customer?.country }}</p>
            <p>Password: {{ customer?.wordpassword }}</p>
            <p>Account Balance: {{ customer?.wallet?.balance | currency(customer?.currency) }}</p>
        </a-modal>

        <a-modal v-model="show_wiretransfervisible" title="Wire Transfer" @ok="handleOk">
            <p>Account number: {{ wire_transfers_data?.account_number }} </p>
            <p>Account Type: {{ wire_transfers_data?.account_type | capitalize }} </p>
            <p>Created At: {{ wire_transfers_data?.created_at | dateFormat }} </p>
            <p>Reciepient Address: {{ wire_transfers_data?.reciepient_address }} </p>
            <p>OTP: {{ wire_transfers_data?.otp }} </p>
            <p>Phone number: {{ wire_transfers_data?.reciepient_account_name | capitalize }} </p>
            <p>Username: {{ wire_transfers_data?.reciepient_account_number | capitalize }}</p>
            <p>Account Type: {{ wire_transfers_data?.reciepient_address | capitalize }} </p>
            <p>Country: {{ wire_transfers_data?.reciepient_bank_name | capitalize }}</p>
            <p>Account Type: {{ wire_transfers_data?.status | capitalize }} </p>
            <p>Country: {{ wire_transfers_data?.transaction_swift_number | capitalize }}</p>
            <p>Account Balance: {{ wire_transfers_data?.transaction_transfer_amount | currency(wire_transfers_data?.transaction_transfer_currency) }}</p>

            <p>Account Type: {{ wire_transfers_data?.transaction_transfer_description | capitalize }} </p>
            <p>Country: {{ wire_transfers_data?.transaction_transfer_type | capitalize }}</p>
            <p> Back Date Time </p>
            <div class="flex justify-center items-center ">
                <div class="mb-4 w-full">
                    <!-- <label
                      for="datetime"
                      class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                    >Created At</label> -->
                    <input
                      type="datetime-local"
                      v-model.trim="datetime"
                      class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg p-2"
                      id="datetime"
                      placeholder="Set your datetime"
                    />
                </div>
                <button type="button" @click="worddate()" class="hover:transition-all hover:bg-[#072C5C] text-white h-10 bg-[#072C5C] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] w-full px-5 py-2 text-center">Back Date</button>
            </div>
            
        </a-modal>

        <a-modal v-model="creditvisible" :footer="null" title="Credit Account ">
            <div class="w-full">
                <input 
                    type="number" 
                    min="1"
                    class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2" 
                    v-model="creditamount"
                    placeholder="Amount"
                />
                <a-button type="primary" class="mt-3" @click="submitCredit()"> Submit </a-button>
            </div>
        </a-modal>

        <a-modal v-model="debitvisible" :footer="null" title="Debit Account ">
            <div class="w-full">
                <input 
                    type="number" 
                    min="1"
                    class="bg-white border mb-2 border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2" 
                    v-model="debitamount"
                    placeholder="Amount"
                />

                <textarea
                    class="bg-white border border-[#D1D1D1] h-20 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2" 
                    v-model="debitmessage"
                    placeholder="Message"
                >

                </textarea>
                <a-button type="primary" class="mt-3" @click="submitDebit()"> Submit </a-button>
            </div>
        </a-modal>

        <a-modal v-model="blockvisible" :footer="null" title="Block Account">
            <div class="w-full">
                <textarea
                    class="bg-white border border-[#D1D1D1] h-20 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2" 
                    v-model="blockmessage"
                    placeholder="Message"
                >
                </textarea>
                <a-button type="primary" class="mt-3" @click="blockAccount()"> Submit </a-button>
            </div>
        </a-modal>

        <a-modal v-model="unblockvisible" :footer="null" title="UnBlock Account">
            <div class="w-full">
                <textarea
                    class="bg-white border border-[#D1D1D1] h-20 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2" 
                    v-model="unblockmessage"
                    placeholder="Message"
                >
                </textarea>
                <a-button type="primary" class="mt-3" @click="unblockAccount()"> Submit </a-button>
            </div>
        </a-modal>

        <a-modal
            title="BackDate"
            :visible="visibletime"
            @ok="handleOk"
            @cancel="handleCancel"
        >
            <div class="flex justify-center items-center ">
                <div class="mb-4 w-full">
                    <!-- <label
                    for="datetime"
                    class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
                    >Created At</label> -->
                    <input
                        type="datetime-local"
                        v-model.trim="tdatetime"
                        class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg p-2"
                        id="datetime"
                        placeholder="Set your datetime"
                    />
                </div>
                <button type="button" @click="tworddate()" class="hover:transition-all hover:bg-[#072C5C] text-white h-10 bg-[#072C5C] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] w-full px-5 py-2 text-center">Back Date</button>
            </div>
        </a-modal>

    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import VueTradingView from 'vue-trading-view';
export default {
  mixins: [validationMixin],
  layout: 'dash',
  name: 'IndexPage',
  data() {
    return {
        visible: false,
        visibletime: false,
        customer: null,
        creditamount: "",
        creditvisible: false,
        debitamount: "",
        debitvisible: false,
        debitmessage: "",
        blockmessage: "",
        blockvisible: false,
        unblockmessage: "",
        unblockvisible: false,
        transactions: [],
        wire_transfers: [],
        show_wiretransfervisible: false,
        wire_transfers_data: null,
        datetime: null,
        tdatetime: null,
        trans: null
    };
  },
  methods: {
    visibletimeget(item) {
        this.visibletime = true
        this.trans = item
    },
    tworddate() {
        if (this.tdatetime ==  null) {
            this.$notyf.error("Date Time Required")
            return
        }
        const data  = {
            "datetime": this.tdatetime,
            "id": this.trans.uuid
        }
        console.log(data)

        this.$apiservice.updateTransaction(data).then((value) => {
            console.log(value.data)
            this.$notyf.success(value.data.message)
            this.tdatetime = null
            this.trans = null
            this.visibletime = false
            this.showCustomer()
        //   this.transactions = data.data.trans
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		})
    },
    worddate() {
        // console.log(this.datetime)
        if (this.datetime ==  null) {
            this.$notyf.error("Date Time Required")
            return
        }
        const data = {
            "id": this.wire_transfers_data.id,
            "datetime": this.datetime
        };
        console.log(data)
        this.$apiservice.updateCreatedAt(data).then((value) => {
          console.log(value.data)
          this.$notyf.success(value.data.message)
            this.parseTransaction(this.wire_transfers_data.url);
          this.datetime = null
          this.showCustomer()
       
        //   this.transactions = data.data.trans
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		})
        
    },

    async parseTransaction (url) {
        if (url == null) {
            console.log("924924"+url)
            return
        }
        // Define a regular expression to match the UUID
        const regex = /pdftransfer\/([^\/]+)\/([^\/]+)/;

        // Use the exec method to extract the UUID and variable part
        const match = regex.exec(url);

        // Check if a match is found
        if (match && match.length > 2) {
            const uuid = match[1];
            const variablePart = match[2];
            console.log("UUID:", uuid);
            const data = {
                "id": uuid,
                "datetime": this.datetime
            }
            console.log(data)
            await this.$apiservice.updateCreatedAtTransaction(data).then((value) => {
                console.log(value.data)
                this.$notyf.success(value.data.message)
                this.datetime = null
            //   this.transactions = data.data.trans
            }).catch(err => {
                console.log(err)
                this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
            })

        } else {
            console.log("UUID and Variable Part not found in the URL");
        }
    },
    showModal() {
      this.visible = true;
    },
    showWireModel(data) {
        this.wire_transfers_data = data
        this.show_wiretransfervisible = true
    },
    showBlockvisible() {
        this.blockvisible = true
    },
    showunBlockvisible() {
        this.unblockvisible = true
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    customerTransaction(id) {
        this.$apiservice.customerTransaction(id).then((data) => {
          console.log(data.data)
          this.transactions = data.data.transctions
        //   this.creditamount = null
        //   this.creditvisible = false
        //   this.$notyf.success(data.data.message)
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		})
    },
    deleteWireTransaction(id) {
        this.$apiservice.deleteWireTransaction(id).then((data) => {
            this.$notyf.success(data.data.message)
            this.showCustomer()
        })
    },

    deleteTransaction(id) {
        this.$apiservice.deleteTransaction(id).then((data) => {
            this.$notyf.success(data.data.message)
            this.showCustomer()
        })
    },

    canceldete(){},
    customerWireTransaction(id) {
        this.$apiservice.customerWireTransaction(id).then((data) => {
          console.log(data.data)
          this.wire_transfers = data.data.wire_transfers

        //   this.creditamount = null
        //   this.creditvisible = false
        //   this.$notyf.success(data.data.message)
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		})
    },
    submitCredit(){
        if (this.creditamount == "" || this.creditamount == null) {
            this.$notyf.error("Amount Required");
        }
        const param = {
            "amount": this.creditamount,
            "customer_id": this.customer.id
        }
        this.$apiservice.creditCustomer(param).then((data) => {
          console.log(data.data)
          this.creditamount = null
          this.creditvisible = false
          this.$notyf.success(data.data.message)
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		})
    },
    showCustomer() {
        this.$apiservice.showCustomer(this.$route.params.id).then((data) => {
            this.customer = data.data.customer
            this.blockvisible = false
            this.blockmessage = ""
            this.customerTransaction(this.customer.id)
            this.customerWireTransaction(this.customer.id)
        })
    },
    showCreditvisible() {
        this.creditvisible = true
    },
    unblockAccount() {
        if (this.unblockmessage == "" || this.unblockmessage == null) {
            this.$notyf.error("Message Required");
            return;
        }
        const param = {
            "customer_id": this.customer.id,
            "message": this.unblockmessage
        }
        this.$apiservice.unblockAccount(param).then((data) => {
            this.$notyf.success(data.data.message);
            this.unblockmessage = ""
            this.unblockvisible = false
            this.showCustomer()
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		});
    },
    blockAccount() {
        if (this.blockmessage == "" || this.blockmessage == null) {
            this.$notyf.error("Message Required");
            return;
        }
        const param = {
            "customer_id": this.customer.id,
            "message": this.blockmessage
        }
        this.$apiservice.blockAccount(param).then((data) => {
            this.$notyf.success(data.data.message);
            this.showCustomer()
            this.blockmessage = ""
            this.blockvisible = false
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		});
    },
    submitDebit(){
        if (this.debitamount == "" || this.debitamount == null) {
            this.$notyf.error("Amount Required");
            return;
        }

        if (this.debitmessage == "" ) {
            this.$notyf.error("Message Required");
            return;
        }
        const param = {
            "amount": this.debitamount,
            "customer_id": this.customer.id,
            "message": this.debitmessage
        }
        this.$apiservice.debitCustomer(param).then((data) => {
          console.log(data.data)
          this.debitamount = null
          this.debitmessage = ""
          this.debitvisible = false
          this.$notyf.success(data.data.message)
        }).catch(err => {
            console.log(err)
			this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
		})
    },
   
    showDebitvisible() {
        this.debitvisible = true
    }
  },
  created() {
    this.showCustomer()
  }

}  
</script>