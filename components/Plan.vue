<template>
    <div class="w-full overflow-hidden rounded-lg h-[440px]" style="
    box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08); border: 1px solid #e2e0e04a;">
        <div class="cardlabel flex flex-col justify-center items-center">
            <h4 class="text-white">{{ plan.plan_name | capitalize }}</h4>
            <div class="px-[10px] py-[3px] text-white text-xs font-light rounded-lg border">Cryptocurrency</div>
        </div>
        
        <div class="w-full bg-[#072C5C] h-16 slacker"></div>
        <div class="bg-white border flex flex-col font-semibold h-[60px] items-center justify-center m-auto relative rounded-md text-center top-[-163px] w-1/2">
            <span>{{ plan.percentage }} %</span> 
            <span class="text-sm font-light">Daily</span>
        </div>
        <div class="w-full px-3 relative top-[-130px]">
            <div class="flex flex-row my-2 justify-between items-center">
            <span class="font-semibold">Minimum Deposit:</span>
            <span>{{ plan.min_amount | currency }}</span>
            </div>

            <div class="flex flex-row my-2 justify-between items-center">
            <span class="font-semibold">Minimum Deposit:</span>
            <span>{{ plan.max_amount | currency }}</span>
            </div>

            <div class="flex flex-row my-2 justify-between items-center">
            <span class="font-semibold">Duration:</span>
            <span>{{ plan.duration | pluralize('Day', { includeNumber: true })}}</span>
            </div>

            <div class="mb-4 mt-3 w-full">
            <label
                for="fullname"
                class="mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]"
            >Amount: ({{ amount | currency('$') }})</label>
            <input
                type="text"
                v-model="amount"
                class="bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2"
            />
            <button @click="joinPlan()" class="hover:transition-all hover:bg-[#072C5C] text-white h-10 bg-[#072C5C] focus-visible:outline-none font-normal leading-[150%] w-full rounded-[0.5rem] mt-3 px-5 py-2 text-center">Save</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['plan'],
    data() {
        return {
            plans: [],
            amount: 0
        };
    },
    methods: {
        joinPlan() {
            if (this.amount == 0 || this.amount == "" || this.amount == null) {
                this.$notyf.error("Amount is required")
                return;
            }
            if (!this.amount)
			{
				this.$notyf.error("Amount is required");
				return
			}
			if (parseInt(this.amount) < parseInt(this.plan.min_amount))
			{
				this.$notyf.error("Amount should be more than minimum amount");
				return
			}

			if ( parseInt(this.amount) > parseInt(this.plan.max_amount))
			{
				this.$notyf.error("Amount should be less than maximum amount");
				return
			}
			this.enterPlan()
        },
        async enterPlan() {
			const param = {
				"plan_id": this.plan.id,
				"cost": this.amount
			};
			await this.$apiservice.joinPlan(param).then(res =>
			{
				console.log(res)
				this.$notyf.success(res.data.message)
				this.$router.push({ path: '/investment' })
				this.$auth.fetchUser()
				return
			}).catch(err => {
				this.$notyf.error(err.response.data.message == null ? "Error Occoured" : err.response.data.message);
			})
		}
    }
}
</script>