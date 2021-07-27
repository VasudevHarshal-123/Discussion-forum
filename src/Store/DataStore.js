import ClearX from 'clearx';
// import { tabList, activeTabs, flowList } from '../Constants/SignUpConstants';
// // import { currentDashboardScreenList } from '../Constants/DashboardConstants';
// // import { CODE_JUDGE_THEME, LANGUAGE_CODE, EDITOR_THEME } from '../Constants/CodeJudgeConstant';

let Data = {
	// currentTab: tabList.signUp,
	// activeTab: activeTabs.signUp,
	authorizing: true,
	errorMessage: "",
	emailId: "",
	loggedIn: false,
	subscribed: false,
	loaded: false,
	// flow: flowList.signUp,
	sections: null,
	sectionsLoaded: false,
	sectionId: 1,
	moduleId: null,
	topicId: null,
	resourceHeading: null,
	showFreeTrial: true,
	onFreeTrial: false,
	subscriptionExpiryDate: null,
	isLiveClassBooked: false,
	liveClassDate: "",
	nudgeWaitTimeInMs: 600000,
	showNudge: false,
	discussionLoading: false,
	discussion: [],
	discussionError: "",
	discussionSortedBy: "date_of_created",
	// currentDashboardScreen: currentDashboardScreenList.myTracks,
	//Code Judge Variable
	submited: true,
	// editorLanguage: LANGUAGE_CODE.CPP,
	editorValue: null,
	prevEditorValue: null,
	//Code Judge Theme store variable
	// codeJudgeTheme: CODE_JUDGE_THEME.LIGHT,
	editorFontSize: 16,
	editorTabSize: 2,
	// editorTheme: EDITOR_THEME.MONOKAI,
	submissionsData: [],
	codeJudgeRunType: null,
	verdictResponse: {},
	resultConsoleOpen: false,
	questions: [],
	isCodeJudgeHamburgerOpen: false,
	allSubmissions: [],
	openHamburgerSuggestionModal: false,
	coupon_code: "",
	pauseDetails:{ isCurrentlyOnPause : false },
	resumeModalIsOpen: false,
	subscriptionValidDays: 0,
	"ad_details":{
		utm_source: null,
		utm_medium: null,
		utm_campaign: null,
		utm_term: null,
		location_id: null,
		device: null,
		browser: null,
		referrer: null,
	},
	adsMetaData: "",
	// Hamburger
	hamburgerOpen: false,
}

let store = new ClearX(
	Data
)

export default store;