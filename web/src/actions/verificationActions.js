import axios from 'axios';
import { PLUGIN_URL } from 'config/constants';
import querystring from 'query-string';

const VERIFICATION_ENDPOINTS = {
	VERIFY_SMS_CODE: `${PLUGIN_URL}/plugins/sms/verify`,
	VERIFY_BANK: `${PLUGIN_URL}/plugins/bank/user`,
	GET_USER: '/user',
	PAYMENT_DATA: `/plugins/deposit/credit/pg-ipaytotal/get-payment-url`,
	PAYSTACK_CREDIT: `/plugins/deposit/credit/pg-paystack`,
	FLUTTERWAVE_CREDIT: `/plugins/deposit/credit/pg-flutterwave`,
	IPAYTOTAL_WEBHOOK: `/plugins/deposit/credit/pg-ipaytotal`,
	IPAYTOTALTRANSACTION: 'https://ipaytotal.solutions/api/get/transaction',
	VERIFYME_BVN: 'https://vapi.verifyme.ng/v1/verifications/identities/bvn/',
	VERIFYME_NIN: 'https://vapi.verifyme.ng/v1/verifications/identities/nin/',
};

const VERIFYME_API_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgwODc3LCJlbnYiOiJsaXZlIiwiaWF0IjoxNjIxMzU4NDkzfQ.NfdVeaFJFO-6XpzvINuS522itX0v6CeOJlcLFDGqV0Y';

export const getUserData = () => axios.get(VERIFICATION_ENDPOINTS.GET_USER);

export const requestSmsCode = (phoneNumber = '') => {
	const qs = querystring.stringify({ phone: phoneNumber });
	return axios.get(`${VERIFICATION_ENDPOINTS.VERIFY_SMS_CODE}?${qs}`);
};

export const verifySmsCode = ({ code = '', phone = '' }) => {
	const body = { code, phone };
	return axios.post(VERIFICATION_ENDPOINTS.VERIFY_SMS_CODE, body);
};

export const verifyBankData = (formProps) => {
	return axios.post(VERIFICATION_ENDPOINTS.VERIFY_BANK, formProps);
};

export const verifyBVN = (values) => {
	const body = {
		firstname: values.first_name,
		lastname: values.last_name,
	};
	return axios.post(VERIFICATION_ENDPOINTS.VERIFYME_BVN + values.bvn, body, {
		headers: {
			Authorization: 'Bearer ' + VERIFYME_API_KEY,
		},
	});
};

export const verifyNIN = (values) => {
	const body = {
		firstname: values.first_name,
		lastname: values.last_name,
	};
	return axios.post(VERIFICATION_ENDPOINTS.VERIFYME_NIN + values.bvn, body, {
		headers: {
			Authorization: 'Bearer ' + VERIFYME_API_KEY,
		},
	});
};

export const paymentData = (values) => {
	// console.log(values, 'IpayTotal Values');
	// console.log(VERIFICATION_ENDPOINTS.PAYMENT_DATA, 'Url');
	return axios({
		data: values,
		url: VERIFICATION_ENDPOINTS.PAYMENT_DATA,
		method: 'POST',
		baseURL: PLUGIN_URL,
	});
};

export const payStackCredit = (values) => {
	return axios({
		data: values,
		url: VERIFICATION_ENDPOINTS.PAYSTACK_CREDIT,
		method: 'POST',
		baseURL: PLUGIN_URL,
	});
};

export const flutterwaveCredit = (values) => {
	return axios({
		data: values,
		url: VERIFICATION_ENDPOINTS.FLUTTERWAVE_CREDIT,
		method: 'POST',
		baseURL: PLUGIN_URL,
	});
};

export const IPaytotalWebHookData = (values) => {
	return axios({
		data: values,
		url: VERIFICATION_ENDPOINTS.IPAYTOTAL_WEBHOOK,
		method: 'POST',
		baseURL: PLUGIN_URL,
	});
};

export const IPaytotalTransaction = (values) => {
	return axios({
		data: values,
		url: VERIFICATION_ENDPOINTS.IPAYTOTAL_TRANSACTION,
		method: 'POST',
		baseURL: PLUGIN_URL,
	});
};
