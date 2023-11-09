<template>
    <div class="flex flex-col items-center justify-center p-6">
      <h4 class="font-bold mb-10 text-center text-4xl"> OTP Authentication </h4>
      <p class="mb-4">Enter the 4-digit pin we sent to your email </p>

      <div class="sm:w-[600px]">
        <form @submit.prevent="submit()">
          <div class="mb-6">
            <label
              for="email"
              class=" mb-4 text-lg font-bold text-black dark:text-white"
              :class="{'text-red-400': $v.form.otp.$error}"
            >Your OTP</label>
            <input
              type="OTP"
              v-model.trim="$v.form.otp.$model"
              class="bg-gray-50 border h-12 border-gray-300 text-black text-lg rounded focus:border-green-200 w-full p-2.5"
              :class="{'border-red-400': $v.form.otp.$error}"
              id="otp"
            />
            <div v-if="!$v.form.otp.required && $v.form.otp.$error" class="text-lg font-bold text-red-400"> OTP is required.</div>
             </div>
          <div class="flex justify-end mb-4">
            <NuxtLink class="ml-2 text-sm font-medium text-[#EE5A34]" to="/forgot-password">Forgot Password ?</NuxtLink>
          </div>
          <button type="submit" class="text-white h-12 bg-[#EE5A35] hover:bg-[#EE5A34] focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded  w-full px-5 py-2.5 text-center">Login to your dashboard</button>
          <p class="pt-3 text-sm text-center">
            Don't have an account? <span class="text-[#EE5A34] hover:underline">
            <NuxtLink to="/">Sign Up</NuxtLink></span>
          </p>
        </form>
      </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: 'IndexPage',
  data() {
    return {
      form: {
        otp: '',
      },
    }
  },
  validations: {
    form: {
      otp: {
        required,
      },
    }
  },
  created() {
    console.log(this.$route.query)
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.$notyf.error("Invalid Form.")
      } else {
        // this.$router.push('/dashboard')
        this.userLogin()
      }
    },

    async userLogin() {
      this.$nuxt.$loading.start()
      const data = {
        "otp": this.form.otp,
        "email": this.$route.query.email
      }
      console.log(data)
      try {
        let response = await this.$auth.loginWith('local1', { data: data })
        this.$nuxt.$loading.finish()
        // console.log(response)
      } catch (err) {
        this.$nuxt.$loading.finish()
        console.log(err)
          if(err.response.data.status == "otp") {
            this.$router.push('/otp?email='+this.form.email)
            return;
          }
        this.$notyf.error(err.response.data.message);
      }
      
    },

  }
}
</script>
