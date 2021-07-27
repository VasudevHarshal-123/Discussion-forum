// const BASE_URL = "https://backend.programmingpathshala.com/rest/";	
const BASE_URL = "https://backend-staging.programmingpathshala.com/rest/"

const AUTH_URL = BASE_URL + "auth/";
// const AUTH_URL = 'http://127.0.0.1:4001';

const UTILITY_URL = BASE_URL + "utility/";
//const UTILITY_URL = 'http://127.0.0.1:4003';

const PAYMENT_URL = BASE_URL + "payments/";
// const PAYMENT_URL = 'http://127.0.0.1:4002';


//const COURSE_URL = 'http://127.0.0.1:4004';
const COURSE_URL = BASE_URL + "courses/";

const ADMIN_URL = BASE_URL + "admin/";
// const ADMIN_URL = "http://127.0.0.1:4005";

const CODE_JUDGE_URL = BASE_URL + "/codejudge";
//const CODE_JUDGE_URL = "http://35.222.83.82:4006";

const MISC_URL = BASE_URL + "misc/";
// const MISC_URL = "http://127.0.0.1:4010";

// for local
const REDIRECT_URL_FOR_GOOGLE_AUTH_LOCAL = "http://localhost:3000";

// for staging

const REDIRECT_URL_FOR_GOOGLE_AUTH_STAGING = "https://renaissance-staging.programmingpathshala.com";

// for prod
const REDIRECT_URL_FOR_GOOGLE_AUTH_PROD = "https://renaissance.programmingpathshala.com";

// Cognito User Pool client id for staging
const COGNITO_CLIENT_ID_STAGING = "3r2p1ic9qdodqgl2tb4rfpvf5k";

// Cognito User Pool client id for prod
const COGNITO_CLIENT_ID_PROD = "564ucjm8fnn4eirdd9ic2404me";

// Google Oauth Login URL for local
// const GOOGLE_OAUTH_LOGIN_URL = `https://programmingpathshala.auth.ap-south-1.amazoncognito.com/oauth2/authorize?redirect_uri=${REDIRECT_URL_FOR_GOOGLE_AUTH_LOCAL}&response_type=token&client_id=${COGNITO_CLIENT_ID_STAGING}&identity_provider=Google`;

// Google Oauth Login URL for staging
const GOOGLE_OAUTH_LOGIN_URL = `https://programmingpathshala.auth.ap-south-1.amazoncognito.com/oauth2/authorize?redirect_uri=${REDIRECT_URL_FOR_GOOGLE_AUTH_STAGING}&response_type=token&client_id=${COGNITO_CLIENT_ID_STAGING}&identity_provider=Google`;

// Goole Oauth Login URL for prod
// const GOOGLE_OAUTH_LOGIN_URL = `https://programming-pathshala.auth.ap-south-1.amazoncognito.com/oauth2/authorize?redirect_uri=${REDIRECT_URL_FOR_GOOGLE_AUTH_PROD}&response_type=token&client_id=${COGNITO_CLIENT_ID_PROD}&identity_provider=Google`;

const headers = {
	'Cache-control': 'no-store'
}

export {
	BASE_URL,
	AUTH_URL,
	UTILITY_URL,
	PAYMENT_URL,
	COURSE_URL,
	headers,
	ADMIN_URL,
	CODE_JUDGE_URL,
	GOOGLE_OAUTH_LOGIN_URL,
	MISC_URL
}


