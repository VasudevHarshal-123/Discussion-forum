import React from 'react';
import AdobeImage from '../Resources/images/Adobe.svg';
import AmazonImage from '../Resources/images/amazon.svg';
import FlipkartImage from '../Resources/images/flipkart.svg';
import GoldmanImage from '../Resources/images/Goldman sachs.svg';
import HotstarImage from '../Resources/images/hotstar.svg';
import MicrosoftImage from '../Resources/images/Microsoft.svg';
import WalmartImage from '../Resources/images/Walmart.svg';
import ZyngaImage from '../Resources/images/zynga.svg';

const welcomeMessage = "Embark on your journey to be an incredible Software Engineer. We catalyse the process by honing your coding skills, building intuition to problem-solving and helping you dig your heels deeper into the realm of fundamentals of computer science.";

const alumniMessage = "Top product based companies and emerging startups such as:";

const companySvgList1 = [
	AdobeImage, AmazonImage, FlipkartImage, GoldmanImage
];

const companySvgList2 = [
	HotstarImage, MicrosoftImage, WalmartImage, ZyngaImage
];

const tabList = {
	signUp: "sign_up",
	changePassword: "change_password",
	forgotPassword: "forgot_password",
	setPassword: "set_password"
}

const flowList = {
	signUp: "signup",
	logIn: "login",
	forgotPassword: "forgotpassword"
}

const activeTabs = {
	signUp: "1",
	logIn: "2",
}

export {
	welcomeMessage,
	alumniMessage,
	companySvgList1,
	companySvgList2,
	tabList,
	flowList,
	activeTabs
};