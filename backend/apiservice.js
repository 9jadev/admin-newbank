export class ApiService {
	constructor($axios) {
		this.$axios = $axios;
	}

    async login(param) {
        return await this.$axios.post(`customer/login`, param);
    }
	async setOtp(param) {
        return await this.$axios.post(`customer/send-otp`, param);
    }

	async loginOtp(param) {
        return await this.$axios.post(`customer/login-otp`, param);
    }

    async createCustomer(param) {
        return await this.$axios.post(`customer/create`, param);
    }

    async editProfile(param) {
        return await this.$axios.post(`customer/changepassword`, param);
    }

	async verifyPaystack(param) {
        return await this.$axios.post(`customer/paystack/verify`, param);
    }

    async formPass(param) {
        return await this.$axios.post(`customer/changepassword`, param);
    }

    async uploadImg(param) {
        return await this.$axios.post(`customer/upload-img`, param);
    }

    async uploadIdcard(param) {
        return await this.$axios.post(`customer/upload-id-card`, param);
    }

    async paymentList() {
        return await this.$axios.get(`payment/list`);
    }

    async listCustomer() {
        return await this.$axios.get(`admin/customer/list`);
    }

    async creditCustomer(param) {
        return await this.$axios.post(`admin/customer/credit`, param);
    }

    async debitCustomer(param) {
        return await this.$axios.post(`admin/customer/debit`, param);
    }

    async blockAccount(param) {
        return await this.$axios.post(`admin/customer/block`, param);
    }

    async customerTransaction(id) {
        return await this.$axios.get(`admin/customer/transaction/${id}`);
    }

    async customerWireTransaction(id) {
        return await this.$axios.get(`admin/customer/wire-transaction/${id}`);
    }

    async unblockAccount(param) {
        return await this.$axios.post(`admin/customer/unblock`, param);
    }

    async showCustomer(id) {
        return await this.$axios.get(`admin/customer/show/${id}`);
    }

    async paymentType(param) {
		return await this.$axios.post(`payment/create`, param);
	}

    async paymentProof(param) {
		return await this.$axios.post(`payment/proof/create`, param);
	}

    async listWithdrawal(param) {
		return await this.$axios.post(`withdraw/list`, param);
	}

    async transferFund(param) {
		return await this.$axios.post(`customer/transfer`, param);
	}	

    async depositsCreate(param) {
        return await this.$axios.post(`customer/deposits/create`, param);
    }

    async depositsList(param) {
        return await this.$axios.post(`customer/deposits/list`, param);
    }

    async createWithdrawal(param) {
		return await this.$axios.post(`withdraw/create`, param);
	}

    async joinPlan(param) {
		return await this.$axios.post(`customer/investment/create`, param);
	}

    async investmentList(param) {
		return await this.$axios.post(`customer/investment/list`, param);
	}

    async plansList(param) {
        return await this.$axios.get(`plans/list`, param);
    }

    async paymentCreate(param) {
        return await this.$axios.post(`payment/create`, param);
    }

    async uploadKycImage(param) {
        return await this.$axios.post(`customer/upload-id-card`, param);
    }

    async createWireTransfer(param) {
        return await this.$axios.post(`customer/wire-transfer/create`, param);
    }

    async otpWireTransfer(param) {
        return await this.$axios.post(`customer/wire-transfer/otp`, param);
    }

    async getTransaction(param) {
        return await this.$axios.get(`customer/wire-transfer/list?${param}`);
    }

    // async createCustomer(param) {
    //     return await this.$axios.post(`customer/create`, param);
    // }


    async listDowliners(param) {
        return await this.$axios.post(`customer/list/dowliners`, param);
    }

	async listPaystack(param) {
        return await this.$axios.get(`customer/paystack`, param);
    }

    async updateProfile(param) {
        return await this.$axios.post(`customer/updateprofile`, param);
    }

	async listAirtime(param) {
        return await this.$axios.get(`customer/airtime${param}`);
    }

    async listData(param) {
        return await this.$axios.get(`customer/data${param}`);
    }

    async listElectricity(param) {
        return await this.$axios.get(`customer/electricity${param}`);
    }

    async listCabletv(param) {
        return await this.$axios.get(`customer/cabletv${param}`);
    }

    async listTransactions(param) {
        return await this.$axios.get(`customer/transactions/list${param}`);
    }

    async requery(param) {
        return await this.$axios.get(`customer/transactions/requery/${param}`);
    }

    async verifyCard(param) {
        return await this.$axios.post(`customer/cabletv/verify-card`, param);
    }

	async listInternationalAirtime(param) {
        return await this.$axios.get(`customer/airtime/get-international-airtime-countries`, param);
    }

	async getinternationalAirtimeProductTypes(param) {
        return await this.$axios.get(`customer/airtime/get-international-airtime-product-types/${param}`);
    }

    async getinternationalAirtimeProductTypes(param) {
        return await this.$axios.get(`customer/airtime/get-international-airtime-product-types/${param}`);
    }

    async getinternationalAirtimeOperator(code,product) {
        return await this.$axios.get(`customer/airtime/get-international-airtime-product-operators/${code}/${product}`);
    }

    async getinternationalServiceVariation(operator_id,product_type_id) {
        return await this.$axios.get(`customer/airtime/get-international-airtime-service-variations/${operator_id}/${product_type_id}`);
    }

    async buyAirTime(param) {
        return await this.$axios.post(`customer/airtime/mtn`, param);
    }

    async buyCabletv(param) {
        return await this.$axios.post(`customer/cabletv/subscribe-tv`, param);
    }

    async searchElectricity(param) {
        return await this.$axios.post(`customer/electricity/search`, param);
    }

    async getDataProviders(serviceID) {
        return await this.$axios.get(`customer/data/list-packages/${serviceID}`);
    }

    async buyData(param) {
        return await this.$axios.post(`customer/data/buydata`, param);
    }

    async buyEletricity(param) {
        return await this.$axios.post(`customer/electricity/buy`, param);
    }

    async buyAirTimeInternational(param) {
        return await this.$axios.post(`customer/airtime/airtime-international`, param);
    }

	async createPaystack(param) {
        return await this.$axios.post(`customer/paystack/generate`, param);
    }

    async forgotPassword(param) {
        return await this.$axios.post(`customer/resetpassword`, param);
    }

	async resetPassword(param) {
        return await this.$axios.post(`customer/reset-password`, param);
    }

	async listbusiness(param) {
		return await this.$axios.post(`admin/business/listbusinesses`, param);
	}

	async createBusiness(param) {
		return await this.$axios.post(`admin/business/create`, param);
	}

    async createServiceRequest(param) {
		return await this.$axios.post(`customer/servicerequest`, param);
	}
}    