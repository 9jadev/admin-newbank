(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1365:function(t,e,o){"use strict";o.r(e);o(1316);var n=o(7),r=(o(66),o(47),o(1315)),l=(o(1320),{mixins:[r.validationMixin],layout:"dash",name:"IndexPage",data:function(){return{visible:!1,visibletime:!1,customer:null,creditamount:"",creditvisible:!1,debitamount:"",debitvisible:!1,debitmessage:"",blockmessage:"",blockvisible:!1,unblockmessage:"",unblockvisible:!1,transactions:[],wire_transfers:[],show_wiretransfervisible:!1,wire_transfers_data:null,datetime:null,tdatetime:null,trans:null}},methods:{visibletimeget:function(t){this.visibletime=!0,this.trans=t},tworddate:function(){var t=this;if(null!=this.tdatetime){var data={datetime:this.tdatetime,id:this.trans.uuid};console.log(data),this.$apiservice.updateTransaction(data).then((function(e){console.log(e.data),t.$notyf.success(e.data.message),t.tdatetime=null,t.trans=null,t.visibletime=!1,t.showCustomer()})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}))}else this.$notyf.error("Date Time Required")},worddate:function(){var t=this;if(null!=this.datetime){var data={id:this.wire_transfers_data.id,datetime:this.datetime};console.log(data),this.$apiservice.updateCreatedAt(data).then((function(e){console.log(e.data),t.$notyf.success(e.data.message),t.parseTransaction(t.wire_transfers_data.url),t.datetime=null,t.showCustomer()})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}))}else this.$notyf.error("Date Time Required")},parseTransaction:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(null!=t){o.next=3;break}return console.log("924924"+t),o.abrupt("return");case 3:if(!((n=/pdftransfer\/([^\/]+)\/([^\/]+)/.exec(t))&&n.length>2)){o.next=15;break}return r=n[1],n[2],console.log("UUID:",r),data={id:r,datetime:e.datetime},console.log(data),o.next=13,e.$apiservice.updateCreatedAtTransaction(data).then((function(t){console.log(t.data),e.$notyf.success(t.data.message),e.datetime=null})).catch((function(t){console.log(t),e.$notyf.error(null==t.response.data.message?"Error Occoured":t.response.data.message)}));case 13:o.next=16;break;case 15:console.log("UUID and Variable Part not found in the URL");case 16:case"end":return o.stop()}}),o)})))()},showModal:function(){this.visible=!0},showWireModel:function(data){this.wire_transfers_data=data,this.show_wiretransfervisible=!0},showBlockvisible:function(){this.blockvisible=!0},showunBlockvisible:function(){this.unblockvisible=!0},handleOk:function(t){console.log(t),this.visible=!1},customerTransaction:function(t){var e=this;this.$apiservice.customerTransaction(t).then((function(data){console.log(data.data),e.transactions=data.data.transctions})).catch((function(t){console.log(t),e.$notyf.error(null==t.response.data.message?"Error Occoured":t.response.data.message)}))},deleteWireTransaction:function(t){var e=this;this.$apiservice.deleteWireTransaction(t).then((function(data){e.$notyf.success(data.data.message),e.showCustomer()}))},deleteTransaction:function(t){var e=this;this.$apiservice.deleteTransaction(t).then((function(data){e.$notyf.success(data.data.message),e.showCustomer()}))},canceldete:function(){},customerWireTransaction:function(t){var e=this;this.$apiservice.customerWireTransaction(t).then((function(data){console.log(data.data),e.wire_transfers=data.data.wire_transfers})).catch((function(t){console.log(t),e.$notyf.error(null==t.response.data.message?"Error Occoured":t.response.data.message)}))},submitCredit:function(){var t=this;""!=this.creditamount&&null!=this.creditamount||this.$notyf.error("Amount Required");var param={amount:this.creditamount,customer_id:this.customer.id};this.$apiservice.creditCustomer(param).then((function(data){console.log(data.data),t.creditamount=null,t.creditvisible=!1,t.$notyf.success(data.data.message)})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}))},showCustomer:function(){var t=this;this.$apiservice.showCustomer(this.$route.params.id).then((function(data){t.customer=data.data.customer,t.blockvisible=!1,t.blockmessage="",t.customerTransaction(t.customer.id),t.customerWireTransaction(t.customer.id)}))},showCreditvisible:function(){this.creditvisible=!0},unblockAccount:function(){var t=this;if(""!=this.unblockmessage&&null!=this.unblockmessage){var param={customer_id:this.customer.id,message:this.unblockmessage};this.$apiservice.unblockAccount(param).then((function(data){t.$notyf.success(data.data.message),t.unblockmessage="",t.unblockvisible=!1,t.showCustomer()})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}))}else this.$notyf.error("Message Required")},blockAccount:function(){var t=this;if(""!=this.blockmessage&&null!=this.blockmessage){var param={customer_id:this.customer.id,message:this.blockmessage};this.$apiservice.blockAccount(param).then((function(data){t.$notyf.success(data.data.message),t.showCustomer(),t.blockmessage="",t.blockvisible=!1})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}))}else this.$notyf.error("Message Required")},submitDebit:function(){var t=this;if(""!=this.debitamount&&null!=this.debitamount)if(""!=this.debitmessage){var param={amount:this.debitamount,customer_id:this.customer.id,message:this.debitmessage};this.$apiservice.debitCustomer(param).then((function(data){console.log(data.data),t.debitamount=null,t.debitmessage="",t.debitvisible=!1,t.$notyf.success(data.data.message)})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}))}else this.$notyf.error("Message Required");else this.$notyf.error("Amount Required")},showDebitvisible:function(){this.debitvisible=!0}},created:function(){this.showCustomer()}}),c=o(60),component=Object(c.a)(l,(function(){var t,e,o,n,r,l,c,d,v,m,f,_,h,x,w,y,C,k,D,$,A,T,B,O,z,P,E,M,N,R,U,W,S,F,j,I=this,V=I._self._c;return V("div",{staticClass:"p-5"},[V("div",{staticClass:"bg-[#1A3E69] flex h-[120px] items-center justify-start p-5 rounded-lg w-full gap-3"},[V("img",{staticClass:"w-[80px] h-[80px] rounded-full",attrs:{src:null===(t=I.customer)||void 0===t?void 0:t.image}}),I._v(" "),V("h3",{staticClass:"font-bold text-[20px] text-white"},[I._v(" "+I._s(I._f("capitalize")(null===(e=I.customer)||void 0===e?void 0:e.firstname))+" "+I._s(I._f("capitalize")(null===(o=I.customer)||void 0===o?void 0:o.lastname)))]),V("a-button",{attrs:{type:"dashed"},on:{click:I.showModal}},[I._v(" View ")])],1),I._v(" "),V("div",{staticClass:"flex flexwrap gap-2 mt-3 w-full"},[V("a-button",{attrs:{type:"primary"},on:{click:I.showCreditvisible}},[I._v(" Credit ")]),I._v(" "),V("a-button",{attrs:{type:"danger"},on:{click:I.showDebitvisible}},[I._v(" Debit ")]),I._v(" "),"active"==(null===(n=I.customer)||void 0===n?void 0:n.status)?V("a-button",{attrs:{type:"primary"},on:{click:function(t){return I.showBlockvisible()}}},[I._v(" Block Account ")]):I._e(),I._v(" "),"active"!=(null===(r=I.customer)||void 0===r?void 0:r.status)?V("a-button",{attrs:{type:"danger"},on:{click:function(t){return I.showunBlockvisible()}}},[I._v(" Unblock Account ")]):I._e(),I._v(" "),V("a-button",{attrs:{type:"dashed"}},[I._v(" Create Transaction ")])],1),I._v(" "),V("div",{staticClass:"mt-3 flex flex-col md:flex-row gap-0 md:gap-2"},[V("div",{staticClass:"w-full mb-6"},[V("h4",[I._v(" Transaction ")]),I._v(" "),V("table",{staticClass:"w-full"},[I._m(0),I._v(" "),V("tbody",I._l(I.transactions,(function(t,e){var o;return V("tr",{key:t.id,staticClass:"cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]"},[V("td",{staticClass:"text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4"},[I._v(I._s(e+1))]),I._v(" "),V("td",{staticClass:"text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4"},[I._v("\n                            "+I._s(I._f("capitalize")(t.type))+"\n                        ")]),I._v(" "),V("td",{staticClass:"text-[15px] font-bold leading-[21px] font-[#1D2939] py-4"},[I._v(I._s(I._f("currency")(t.amount,null===(o=I.customer)||void 0===o?void 0:o.currency)))]),I._v(" "),V("td",{staticClass:"text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"},[I._v(" "+I._s(I._f("dateFormat")(t.created_at))+" ")]),I._v(" "),V("td",{staticClass:"text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"},[V("a-button",{attrs:{type:"primary"},on:{click:function(e){return I.visibletimeget(t)}}},[I._v("\n                                Backdate\n                            ")]),I._v(" "),V("a-popconfirm",{attrs:{title:"Are you sure delete this transaction","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return I.deleteTransaction(t.id)},cancel:function(t){return I.canceldete()}}},[V("a-button",{attrs:{type:"danger"}},[I._v(" Delete ")])],1)],1)])})),0)])]),I._v(" "),V("div",{staticClass:"w-full mb-6"},[V("h4",[I._v(" Wire Transaction ")]),I._v(" "),V("table",{staticClass:"w-full"},[I._m(1),I._v(" "),V("tbody",I._l(I.wire_transfers,(function(t,e){return V("tr",{key:t.id,staticClass:"cusor-auto p-6 border-b-2 hover:bg-[#D2DDFD]"},[V("td",{staticClass:"text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4"},[I._v(I._s(e+1))]),I._v(" "),V("td",{staticClass:"text-[15px] pl-5 font-normal leading-[21px] font-[#1D2939] py-4"},[I._v("  "+I._s(I._f("capitalize")(t.status))+" ")]),I._v(" "),V("td",{staticClass:"text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"},[I._v(" "+I._s(I._f("dateFormat")(t.created_at))+" ")]),I._v(" "),V("td",{staticClass:"text-[15px] font-normal leading-[21px] font-[#1D2939] py-4"},[V("a-button",{attrs:{type:"primary"},on:{click:function(e){return I.showWireModel(t)}}},[I._v(" View ")]),I._v(" "),V("a-popconfirm",{attrs:{title:"Are you sure delete this wire transaction","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return I.deleteWireTransaction(t.id)},cancel:function(t){return I.canceldete()}}},[V("a-button",{attrs:{type:"danger"}},[I._v(" Delete ")])],1)],1)])})),0)])])]),I._v(" "),V("a-modal",{attrs:{title:"Profile"},on:{ok:I.handleOk},model:{value:I.visible,callback:function(t){I.visible=t},expression:"visible"}},[V("img",{staticClass:"w-[200px] h-[200px]",attrs:{src:null===(l=I.customer)||void 0===l?void 0:l.image}}),I._v(" "),V("p",[I._v("Account number: "+I._s(null===(c=I.customer)||void 0===c?void 0:c.account_number)+" ")]),I._v(" "),V("p",[I._v("Firstname: "+I._s(I._f("capitalize")(null===(d=I.customer)||void 0===d?void 0:d.firstname))+" ")]),I._v(" "),V("p",[I._v("Lastname: "+I._s(I._f("capitalize")(null===(v=I.customer)||void 0===v?void 0:v.lastname))+" ")]),I._v(" "),V("p",[I._v("Email: "+I._s(null===(m=I.customer)||void 0===m?void 0:m.email)+" ")]),I._v(" "),V("p",[I._v("Phone number: "+I._s(null===(f=I.customer)||void 0===f?void 0:f.phone_number)+" ")]),I._v(" "),V("p",[I._v("Username: "+I._s(null===(_=I.customer)||void 0===_?void 0:_.username))]),I._v(" "),V("p",[I._v("Account Type: "+I._s(null===(h=I.customer)||void 0===h?void 0:h.account_type)+" ")]),I._v(" "),V("p",[I._v("Country: "+I._s(null===(x=I.customer)||void 0===x?void 0:x.country))]),I._v(" "),V("p",[I._v("Account Type: "+I._s(null===(w=I.customer)||void 0===w?void 0:w.account_type)+" ")]),I._v(" "),V("p",[I._v("Country: "+I._s(null===(y=I.customer)||void 0===y?void 0:y.country))]),I._v(" "),V("p",[I._v("Password: "+I._s(null===(C=I.customer)||void 0===C?void 0:C.wordpassword))]),I._v(" "),V("p",[I._v("Account Balance: "+I._s(I._f("currency")(null===(k=I.customer)||void 0===k||null===(D=k.wallet)||void 0===D?void 0:D.balance,null===($=I.customer)||void 0===$?void 0:$.currency)))])]),I._v(" "),V("a-modal",{attrs:{title:"Wire Transfer"},on:{ok:I.handleOk},model:{value:I.show_wiretransfervisible,callback:function(t){I.show_wiretransfervisible=t},expression:"show_wiretransfervisible"}},[V("p",[I._v("Account number: "+I._s(null===(A=I.wire_transfers_data)||void 0===A?void 0:A.account_number)+" ")]),I._v(" "),V("p",[I._v("Account Type: "+I._s(I._f("capitalize")(null===(T=I.wire_transfers_data)||void 0===T?void 0:T.account_type))+" ")]),I._v(" "),V("p",[I._v("Created At: "+I._s(I._f("dateFormat")(null===(B=I.wire_transfers_data)||void 0===B?void 0:B.created_at))+" ")]),I._v(" "),V("p",[I._v("Reciepient Address: "+I._s(null===(O=I.wire_transfers_data)||void 0===O?void 0:O.reciepient_address)+" ")]),I._v(" "),V("p",[I._v("OTP: "+I._s(null===(z=I.wire_transfers_data)||void 0===z?void 0:z.otp)+" ")]),I._v(" "),V("p",[I._v("Phone number: "+I._s(I._f("capitalize")(null===(P=I.wire_transfers_data)||void 0===P?void 0:P.reciepient_account_name))+" ")]),I._v(" "),V("p",[I._v("Username: "+I._s(I._f("capitalize")(null===(E=I.wire_transfers_data)||void 0===E?void 0:E.reciepient_account_number)))]),I._v(" "),V("p",[I._v("Account Type: "+I._s(I._f("capitalize")(null===(M=I.wire_transfers_data)||void 0===M?void 0:M.reciepient_address))+" ")]),I._v(" "),V("p",[I._v("Country: "+I._s(I._f("capitalize")(null===(N=I.wire_transfers_data)||void 0===N?void 0:N.reciepient_bank_name)))]),I._v(" "),V("p",[I._v("Account Type: "+I._s(I._f("capitalize")(null===(R=I.wire_transfers_data)||void 0===R?void 0:R.status))+" ")]),I._v(" "),V("p",[I._v("Country: "+I._s(I._f("capitalize")(null===(U=I.wire_transfers_data)||void 0===U?void 0:U.transaction_swift_number)))]),I._v(" "),V("p",[I._v("Account Balance: "+I._s(I._f("currency")(null===(W=I.wire_transfers_data)||void 0===W?void 0:W.transaction_transfer_amount,null===(S=I.wire_transfers_data)||void 0===S?void 0:S.transaction_transfer_currency)))]),I._v(" "),V("p",[I._v("Account Type: "+I._s(I._f("capitalize")(null===(F=I.wire_transfers_data)||void 0===F?void 0:F.transaction_transfer_description))+" ")]),I._v(" "),V("p",[I._v("Country: "+I._s(I._f("capitalize")(null===(j=I.wire_transfers_data)||void 0===j?void 0:j.transaction_transfer_type)))]),I._v(" "),V("p",[I._v(" Back Date Time ")]),I._v(" "),V("div",{staticClass:"flex justify-center items-center"},[V("div",{staticClass:"mb-4 w-full"},[V("input",{directives:[{name:"model",rawName:"v-model.trim",value:I.datetime,expression:"datetime",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg p-2",attrs:{type:"datetime-local",id:"datetime",placeholder:"Set your datetime"},domProps:{value:I.datetime},on:{input:function(t){t.target.composing||(I.datetime=t.target.value.trim())},blur:function(t){return I.$forceUpdate()}}})]),I._v(" "),V("button",{staticClass:"hover:transition-all hover:bg-[#072C5C] text-white h-10 bg-[#072C5C] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] w-full px-5 py-2 text-center",attrs:{type:"button"},on:{click:function(t){return I.worddate()}}},[I._v("Back Date")])])]),I._v(" "),V("a-modal",{attrs:{footer:null,title:"Credit Account "},model:{value:I.creditvisible,callback:function(t){I.creditvisible=t},expression:"creditvisible"}},[V("div",{staticClass:"w-full"},[V("input",{directives:[{name:"model",rawName:"v-model",value:I.creditamount,expression:"creditamount"}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2",attrs:{type:"number",min:"1",placeholder:"Amount"},domProps:{value:I.creditamount},on:{input:function(t){t.target.composing||(I.creditamount=t.target.value)}}}),I._v(" "),V("a-button",{staticClass:"mt-3",attrs:{type:"primary"},on:{click:function(t){return I.submitCredit()}}},[I._v(" Submit ")])],1)]),I._v(" "),V("a-modal",{attrs:{footer:null,title:"Debit Account "},model:{value:I.debitvisible,callback:function(t){I.debitvisible=t},expression:"debitvisible"}},[V("div",{staticClass:"w-full"},[V("input",{directives:[{name:"model",rawName:"v-model",value:I.debitamount,expression:"debitamount"}],staticClass:"bg-white border mb-2 border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2",attrs:{type:"number",min:"1",placeholder:"Amount"},domProps:{value:I.debitamount},on:{input:function(t){t.target.composing||(I.debitamount=t.target.value)}}}),I._v(" "),V("textarea",{directives:[{name:"model",rawName:"v-model",value:I.debitmessage,expression:"debitmessage"}],staticClass:"bg-white border border-[#D1D1D1] h-20 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2",attrs:{placeholder:"Message"},domProps:{value:I.debitmessage},on:{input:function(t){t.target.composing||(I.debitmessage=t.target.value)}}}),I._v(" "),V("a-button",{staticClass:"mt-3",attrs:{type:"primary"},on:{click:function(t){return I.submitDebit()}}},[I._v(" Submit ")])],1)]),I._v(" "),V("a-modal",{attrs:{footer:null,title:"Block Account"},model:{value:I.blockvisible,callback:function(t){I.blockvisible=t},expression:"blockvisible"}},[V("div",{staticClass:"w-full"},[V("textarea",{directives:[{name:"model",rawName:"v-model",value:I.blockmessage,expression:"blockmessage"}],staticClass:"bg-white border border-[#D1D1D1] h-20 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2",attrs:{placeholder:"Message"},domProps:{value:I.blockmessage},on:{input:function(t){t.target.composing||(I.blockmessage=t.target.value)}}}),I._v(" "),V("a-button",{staticClass:"mt-3",attrs:{type:"primary"},on:{click:function(t){return I.blockAccount()}}},[I._v(" Submit ")])],1)]),I._v(" "),V("a-modal",{attrs:{footer:null,title:"UnBlock Account"},model:{value:I.unblockvisible,callback:function(t){I.unblockvisible=t},expression:"unblockvisible"}},[V("div",{staticClass:"w-full"},[V("textarea",{directives:[{name:"model",rawName:"v-model",value:I.unblockmessage,expression:"unblockmessage"}],staticClass:"bg-white border border-[#D1D1D1] h-20 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2",attrs:{placeholder:"Message"},domProps:{value:I.unblockmessage},on:{input:function(t){t.target.composing||(I.unblockmessage=t.target.value)}}}),I._v(" "),V("a-button",{staticClass:"mt-3",attrs:{type:"primary"},on:{click:function(t){return I.unblockAccount()}}},[I._v(" Submit ")])],1)]),I._v(" "),V("a-modal",{attrs:{title:"BackDate",visible:I.visibletime},on:{ok:I.handleOk,cancel:I.handleCancel}},[V("div",{staticClass:"flex justify-center items-center"},[V("div",{staticClass:"mb-4 w-full"},[V("input",{directives:[{name:"model",rawName:"v-model.trim",value:I.tdatetime,expression:"tdatetime",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg p-2",attrs:{type:"datetime-local",id:"datetime",placeholder:"Set your datetime"},domProps:{value:I.tdatetime},on:{input:function(t){t.target.composing||(I.tdatetime=t.target.value.trim())},blur:function(t){return I.$forceUpdate()}}})]),I._v(" "),V("button",{staticClass:"hover:transition-all hover:bg-[#072C5C] text-white h-10 bg-[#072C5C] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] w-full px-5 py-2 text-center",attrs:{type:"button"},on:{click:function(t){return I.tworddate()}}},[I._v("Back Date")])])])],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]"},[e("td",{staticClass:"text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("S/N")]),t._v(" "),e("td",{staticClass:"text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("Type")]),t._v(" "),e("td",{staticClass:"text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("Amount")]),t._v(" "),e("td",{staticClass:"text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("Date")]),t._v(" "),e("td",{staticClass:"text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"})])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"p-6 border-b-2 border-b-[#B8B8B8] bg-[#D2DDFD]"},[e("td",{staticClass:"text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("S/N")]),t._v(" "),e("td",{staticClass:"text-[15px] pl-5 font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("Status")]),t._v(" "),e("td",{staticClass:"text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"},[t._v("Date")]),t._v(" "),e("td",{staticClass:"text-[15px] font-semibold leading-[21px] font-[#1D2939] py-4"})])])}],!1,null,null,null);e.default=component.exports}}]);