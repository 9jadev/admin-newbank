(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1363:function(e,t,r){"use strict";r.r(t);r(1316);var o=r(7),n=(r(27),r(66),r(1315)),l=r(1317),d={mixins:[n.validationMixin],layout:"dash",name:"IndexPage",data:function(){return{togglestatus:!1,payment_type:[],form:{email:"",firstname:"",lastname:"",phone_number:""},formpass:{oldpassword:"",newpassword:""}}},validations:{formpass:{oldpassword:{required:l.required},newpassword:{required:l.required}},form:{email:{required:l.required,email:l.email},firstname:{required:l.required},lastname:{required:l.required},phone_number:{required:l.required}}},methods:{callback:function(e){console.log(e)},paymentype:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return data={payment_types_id:"".concat(e),value:t},o.next=3,r.$apiservice.paymentType(data).then((function(e){r.$notyf.success(e.data.message)})).catch((function(e){r.$notyf.error(e.response.data.message)}));case 3:case"end":return o.stop()}}),o)})))()},profileFormFill:function(){this.form.firstname=this.$auth.user.firstname,this.form.lastname=this.$auth.user.lastname,this.form.email=this.$auth.user.email,this.form.phone_number=this.$auth.user.phone_number},submit:function(){this.$v.form.$touch(),this.$v.form.$invalid?this.$notyf.error("Invalid Form."):this.updateProfile(this.form)},submitPass:function(){this.$v.formpass.$touch(),this.$v.formpass.$invalid?this.$notyf.error("Invalid Form."):this.formPass(this.formpass)},selectFileIdprofile:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.target.files[0]){r.next=3;break}return r.abrupt("return");case 3:return n=function(e){return new Promise((function(t){var r=new FileReader;r.onloadend=function(){return t(r.result)},r.readAsDataURL(e)}))},r.next=6,n(o);case 6:data=r.sent,t.loadingkyc=!0,t.$cloudinary.upload(data,{folder:"ajosuite",uploadPreset:"x62tzib0"}).then((function(e){t.loadingkyc=!1,console.log(e.secure_url),t.uploadImg(e.secure_url)}));case 9:case"end":return r.stop()}}),r)})))()},uploadImg:function(image){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={image:image},t.next=3,e.$apiservice.uploadImg(data).then((function(t){e.$notyf.success(t.data.message),e.$auth.fetchUser(),e.$nuxt.refresh()})).catch((function(t){e.$notyf.error(t.response.data.message)}));case 3:case"end":return t.stop()}}),t)})))()},selectFileId:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.target.files[0]){r.next=3;break}return r.abrupt("return");case 3:return n=function(e){return new Promise((function(t){var r=new FileReader;r.onloadend=function(){return t(r.result)},r.readAsDataURL(e)}))},r.next=6,n(o);case 6:data=r.sent,t.loadingkyc=!0,t.$cloudinary.upload(data,{folder:"ajosuite",uploadPreset:"x62tzib0"}).then((function(e){t.loadingkyc=!1,console.log(e),t.uploadImageKyc(e.secure_url)}));case 9:case"end":return r.stop()}}),r)})))()},uploadImageKyc:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return data={id_card:e},r.next=3,t.$apiservice.uploadKycImage(data).then((function(e){t.$notyf.success(e.data.message),window.location.reload(),t.$auth.fetchUser(),t.$nuxt.refresh(),t.$bvModal.hide("updateimagekyc")})).catch((function(e){t.$notyf.error(e.response.data.message)}));case 3:case"end":return r.stop()}}),r)})))()},payTypeSubmit:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var element,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return element=document.getElementById("pay"+e),data={payment_types_id:"".concat(e),value:element.value},console.log(data),r.next=5,t.$apiservice.paymentCreate(data).then((function(e){console.log(e.data),t.$notyf.success(e.data.message)})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}));case 5:case"end":return r.stop()}}),r)})))()},formPass:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$apiservice.formPass(e).then((function(e){console.log(e.data),t.$notyf.success(e.data.message),t.$auth.refresh(),t.$v.formpass.$reset()})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}));case 2:case"end":return r.stop()}}),r)})))()},updateProfile:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$apiservice.updateProfile(e).then((function(e){console.log(e.data),t.$notyf.success(e.data.message),t.$auth.fetchUser(),t.$nuxt.refresh(),t.profileFormFill()})).catch((function(e){console.log(e),t.$notyf.error(null==e.response.data.message?"Error Occoured":e.response.data.message)}));case 2:case"end":return r.stop()}}),r)})))()},paymentList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$apiservice.paymentList().then((function(t){console.log(t.data.payment_type),e.payment_type=t.data.payment_type})).catch((function(t){console.log(t),e.$notyf.error(null==t.response.data.message?"Error Occoured":t.response.data.message)}));case 2:case"end":return t.stop()}}),t)})))()}},created:function(){this.profileFormFill(),this.users=this.$auth.user}},m=r(60),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"w-full"},[t("div",{staticClass:"p-6"},[t("a-tabs",{attrs:{"default-active-key":"1"},on:{change:e.callback}},[t("a-tab-pane",{key:"1",attrs:{tab:"PROFILE"}},[t("div",{staticClass:"flex md:gap-[20px] flex-col md:flex-row"},[t("div",{staticClass:"border p-6 rounded md:w-4/6 mb-4 w-full shadow-[#072C5C]-500/50 shadow-lg"},[t("div",{staticClass:"flex justify-between items-center"},[t("h5",{staticClass:"text-[#072c5c]"},[e._v("Update Contact Information")]),e._v(" "),t("button",{staticClass:"hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-2 py-2.5 text-center",on:{click:function(t){e.togglestatus=!e.togglestatus}}},[e._v("Edit")])]),e._v(" "),t("form",{staticClass:"w-full",on:{submit:function(t){return t.preventDefault(),e.submit()}}},[t("div",{staticClass:"mb-4 w-full"},[t("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"fullname"}},[e._v("First name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.firstname.$model,expression:"$v.form.firstname.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":e.$v.form.firstname.$error},attrs:{type:"text",id:"firstname",disabled:0==e.togglestatus},domProps:{value:e.$v.form.firstname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.firstname,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.$v.form.firstname.required&&e.$v.form.firstname.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" First name is required.")]):e._e()]),e._v(" "),t("div",{staticClass:"mb-4 w-full"},[t("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"lastname"}},[e._v("Last name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.lastname.$model,expression:"$v.form.lastname.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":e.$v.form.lastname.$error},attrs:{type:"text",id:"lastname",disabled:0==e.togglestatus},domProps:{value:e.$v.form.lastname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.lastname,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.$v.form.lastname.required&&e.$v.form.lastname.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" Last name is required.")]):e._e()]),e._v(" "),t("div",{staticClass:"mb-4 w-full"},[t("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.email.$model,expression:"$v.form.email.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":e.$v.form.email.$error},attrs:{type:"text",id:"email",disabled:0==e.togglestatus},domProps:{value:e.$v.form.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.email,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.$v.form.email.required&&e.$v.form.email.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" Email is required.")]):e._e(),e._v(" "),!e.$v.form.email.email&&e.$v.form.email.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" Email is required.")]):e._e()]),e._v(" "),t("div",{staticClass:"mb-4 w-full"},[t("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"phone_number"}},[e._v("Phone number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.phone_number.$model,expression:"$v.form.phone_number.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":e.$v.form.phone_number.$error},attrs:{type:"text",id:"phone_number",disabled:0==e.togglestatus},domProps:{value:e.$v.form.phone_number.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.phone_number,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.$v.form.phone_number.required&&e.$v.form.phone_number.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" Phone number is required.")]):e._e()]),e._v(" "),e.togglestatus?t("button",{staticClass:"hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-5 py-2 text-center",attrs:{type:"submit"}},[e._v("Save")]):e._e()])]),e._v(" "),t("div",{staticClass:"flex flex-col md:w-2/6 mb-4 w-full"},[t("div",{staticClass:"border p-6 rounded w-full mb-2 shadow-[#072C5C]-500/50 shadow-lg"},[t("div",{staticClass:"flex flex-col items-center justify-between"},[t("h5",{staticClass:"text-[#072c5c]"},[e._v("Update Profile Image")]),e._v(" "),t("img",{staticClass:"w-[200px] h-[200px] mb-3 rounded-md",attrs:{src:e.$auth.user.image}}),e._v(" "),t("input",{attrs:{type:"file",accept:".jpeg,.jpg,.png,image/jpeg,image/png","aria-label":"Upload new profile image"},on:{change:e.selectFileIdprofile}})])]),e._v(" "),t("div",{staticClass:"border p-6 rounded w-full shadow-[#072C5C]-500/50 shadow-lg"},[t("div",{staticClass:"flex justify-between items-center"},[t("h5",{staticClass:"text-[#072c5c]"},[e._v("Update Password")])]),e._v(" "),t("form",{staticClass:"w-full",on:{submit:function(t){return t.preventDefault(),e.submitPass()}}},[t("div",{staticClass:"mb-4 w-full"},[t("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"oldpassword"}},[e._v("Old Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.formpass.oldpassword.$model,expression:"$v.formpass.oldpassword.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":e.$v.formpass.oldpassword.$error},attrs:{type:"password",id:"oldpassword"},domProps:{value:e.$v.formpass.oldpassword.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.formpass.oldpassword,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.$v.formpass.oldpassword.required&&e.$v.formpass.oldpassword.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" Old password is required.")]):e._e()]),e._v(" "),t("div",{staticClass:"mb-4 w-full"},[t("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"newpassword"}},[e._v("New Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.formpass.newpassword.$model,expression:"$v.formpass.newpassword.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":e.$v.formpass.newpassword.$error},attrs:{type:"password",id:"newpassword"},domProps:{value:e.$v.formpass.newpassword.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.formpass.newpassword,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.$v.formpass.newpassword.required&&e.$v.formpass.newpassword.$error?t("div",{staticClass:"text-[10px] font-medium text-red-400"},[e._v(" New password is required.")]):e._e()]),e._v(" "),t("button",{staticClass:"hover:transition-all hover:bg-[#0042EC] text-white h-10 bg-[#0042EC] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] px-5 py-2 text-center",attrs:{type:"submit"}},[e._v("Save")])])])])])]),e._v(" "),t("a-tab-pane",{key:"2",attrs:{tab:"KYC","force-render":""}},[e.users.id_card?t("div",[t("h5",{staticClass:"text-[#072c5c]"},[e._v("VERIFICATION DOCUMENT")]),e._v(" "),t("img",{staticClass:"w-[200px] h-[200px]",attrs:{src:e.users.id_card,alt:"",srcset:""}})]):t("div",[t("h5",{staticClass:"text-[#072c5c]"},[e._v("UPDATE DOCUMENT")]),e._v(" "),t("input",{attrs:{type:"file",accept:".jpeg,.jpg,.png,image/jpeg,image/png","aria-label":"upload image button"},on:{change:e.selectFileId}})])])],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);