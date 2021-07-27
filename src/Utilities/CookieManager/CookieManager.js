import store from '../../Store/DataStore';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { UTILITY_URL } from '../../Constants/UrlConstants';
import { setSubscriptionExpiryDate, setPauseData } from '../../Utilities/SubscriptionUtility/SubscriptionUtility';

let checkSubscribe = (username, cookies) => {
	store.set('loaded', false);
	axios.get(UTILITY_URL + '/isSubscribed', {
		headers: {
			"authorization": cookies.get('authorization')
		}
	}, {
		params: {
			"username": username
		}
	})
		.then(response => {
			if (response.status === 200) {
				store.set('subscribed', response.data.Response.Subscription.status);
				setPauseData(response.data.Response.Subscription.pauseDetails);
				store.set('showFreeTrial', !response.data.Response.Subscription.everSubscribed);
				store.set('onFreeTrial', response.data.Response.Subscription.onTrial);
				store.set('subscriptionValidDays', response.data.Response.Subscription.subscriptionValidDays);
				setSubscriptionExpiryDate(response.data.Response.Subscription.subscriptionValidDays);
				store.set('isLiveClassBooked', response.data.Response.Subscription.isLiveClassBookedRes);
				store.set('liveClassDate', new Date(response.data.Response.Subscription.nextSundayDate).toLocaleDateString());
				store.set('authorizing', false);
				store.set('loaded', true);
			}
		})
		.catch(error => {
			store.set('authorizing', false);
			store.set('loaded', true);
		})
}

let checkLoggedIn = (username, cookies) => {
	axios.get(UTILITY_URL + '/isLoggedIn', {
		headers: {
			"authorization": cookies.get('authorization')
		}
	}, {
		params: {
			"username": username
		}
	})
		.then(response => {
			store.set('loggedIn', response.data.Response.isLoggedIn);
			checkSubscribe(username, cookies);
		})
		.catch(error => {
			store.set('authorizing', false);
			store.set('loaded', true);
		})
}

let checkCookie = () => {
	store.set('authorizing', true);
	store.set('loaded', false);
	let cookies = new Cookies();
	let accessToken = cookies.get('authorization')
	if (!accessToken) {
		store.set('authorizing', false);
		store.set('loaded', true);
		return;
	}
	let base64Payload = accessToken.split(".")[1];
	let payload = Buffer.from(base64Payload, "base64");
	let decodedPayload = JSON.parse(payload.toString());
	let username = decodedPayload && decodedPayload.email;
	let expTime = parseInt(decodedPayload.exp);
	let curTime = new Date();
	let jwtExpTime = new Date(expTime * 1000);
	let isExpired = true;
	isExpired = curTime > jwtExpTime ? true : false;
	if (isExpired) {
		store.set('authorizing', false);
		store.set('loaded', true);
		return;
	}
	store.set('emailId', username);
	checkLoggedIn(username, cookies);
}

let setCookieWhenRedirectingAfterGoogleSignIn = (id_token, access_token) => {
	const cookies = new Cookies();
	if(cookies.get('id_token')) cookies.remove('id_token', {path: "/", domain: '.programmingpathshala.com'});
    cookies.set('id_token', id_token, { domain: '.programmingpathshala.com' });
	if(cookies.get('access_token')) cookies.remove('access_token', {path: "/", domain: '.programmingpathshala.com'});
	cookies.set('access_token', access_token, { domain: '.programmingpathshala.com' });
}

let setAuthorizationCookie = (token) => {
	const cookies = new Cookies();
	if(cookies.get('authorization')) cookies.remove('authorization', {path: "/", domain: '.programmingpathshala.com'});
	cookies.set('authorization', token, '.programmingpathshala.com');
}

export {
	checkCookie,
	setCookieWhenRedirectingAfterGoogleSignIn,
	setAuthorizationCookie,
	checkSubscribe
}
