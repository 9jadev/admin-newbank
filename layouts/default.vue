<template>
	<div class="h-screen w-screen flex flex-row items-center overflow-y-scroll overflow-x-hidden">
    <!-- <div class="w:1/2 h-full bg-[#072C5C]"></div>
    <div class="w-full md:w-1/2">
      <Nuxt/>
    </div>
	 -->
    <div class="hidden md:block w-full md:w-1/2 h-full bg-[#072C5C]"></div>
    <div class="block w-full md:w-1/2 h-full mt-16 px-10">
      <Nuxt/>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      togglestatus: true,
    }
  },
  middleware({ store, redirect }) {
    if (store.state.auth.loggedIn == true) {
      return redirect('/dashboard')
    }
  },
  mounted() {
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
}
</script>