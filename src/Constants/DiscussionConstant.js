import React from 'react'
import swal from 'sweetalert';
import BlackUpwardTriangle from '../Resources/images/blackupwardtriangle.svg';
import BlackDownwardTriangle from '../Resources/images/blackdowntriangle.svg';
import GreenUpwardTriangle from '../Resources/images/greenupwardtriangle.svg';
import GreenDownwardTriangle from '../Resources/images/greendowntriangle.svg';
import SmallBlackUpTriangle from '../Resources/images/blacksmalluptriangle.svg';
import SmallBlackDownTriangle from '../Resources/images/blacksmalldowntriangle.svg';
import SmallGreenUpTriangle from '../Resources/images/smallgreenuptriangle.svg';
import SmallGreenDownTriangle from '../Resources/images/smallgreendowntriangle.svg';
import UpArrow from '../Resources/images/uparrowDiscussion.svg';
import SendIcon from '../Resources/images/sendIconDiscussion.svg';
import MessageIcon from '../Resources/images/messageIcon.svg';
import ReadThreadIcon from '../Resources/images/readThreadIcon.svg';
import SortIcon from '../Resources/images/sortIcon.svg';
import WhiteSendIcon from '../Resources/images/whitesendicon.svg';
import BlackMessageIcon from '../Resources/images/chat-alt.svg';
import DownVoteIcon from '../Resources/images/downvoteArrow.svg';
import UpvoteIcon from '../Resources/images/upVoteIcon.svg';
import BlueUpvoteIcon from '../Resources/images/blueUpvoteIcon.svg';
import SolidUpvoteIcon from '../Resources/images/solidUpvoteIcon.svg';



const blackUpwardTriangle = <img src={BlackUpwardTriangle} alt="black upward triangle" />
const blackDownwardTriangle = <img src={BlackDownwardTriangle} alt="black downward triangle" />
const greenUpwardTriangle = <img src={GreenUpwardTriangle} alt="upward triangle" />
const greenDownwardTriangle = <img src={GreenDownwardTriangle} alt="downward triangle" />
const smallBlackUpTriangle = <img src={SmallBlackUpTriangle} alt="upward triangle" />
const smallBlackDownTriangle = <img src={SmallBlackDownTriangle} alt="downward triangle" />
const smallGreenUpTriangle = <img src={SmallGreenUpTriangle} alt="upward triangle" />
const smallGreenDownTriangle = <img src={SmallGreenDownTriangle} alt="downward triangle" />
const sendIcon = <img src={SendIcon} alt="send Icon" />
const upwardArrow = <img src={UpArrow} alt="up arrow" />
const messageIcon = <img src={MessageIcon} alt="message icon" />
const readThreadIcon = <img src={ReadThreadIcon} alt="read thread icon" />
const sortIcon = <img src={SortIcon} alt="filter Icon" />
const whiteSendIcon = <img src={WhiteSendIcon} alt="White send Icon" />
const blackMessageIcon = <img src={BlackMessageIcon} alt="Black message icon" />
const downVoteIcon = <img src={DownVoteIcon} alt="downvote Icon" />
const upvoteIcon = <img src={UpvoteIcon} alt="upvoteIcon" onMouseOver={(e)=>e.currentTarget.src=BlueUpvoteIcon} onMouseOut={(e)=>e.currentTarget.src=UpvoteIcon}/>
const blueVoteIcon = <img src={BlueUpvoteIcon} alt="blue upvote icon" />
const solidBlueUpvoteIcon = <img src={SolidUpvoteIcon} alt="solid upvote icon" />

const DISCUSSION_TYPE  = {
    SUBTOPIC_VIDEO: 'SUBTOPICVIDEO',
    SUBTOPIC_QUESTION: 'SUBTOPICQUESTION'
}

const THREAD_TYPE = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
}

const DISCUSSION_URI_ENDPOINT = {
    POST_MAIN_THREAD: '/postMainThread',
    POST_SECONDARY_THREAD: '/postSecondaryThread',
    POST_THREAD_VOTE: '/postThreadVote',
    GET_DISCUSSION_CONTENT: '/getDiscussionContent',
}

const sweetalertSuccessTitle = "successful";
const sweetalertSuccessText = "Your question has been posted";
const sweetalertSuccessIcon = "success";
const sweetalertFailureTitle = "Error Occured";
const sweetalertFailureText = "Your request can not be completed at this moment.";
const sweetalertFailureIcon = "error";
const sweetalertWarningTitle = "Warning";
const sweetalertWarningText = "Please subscribe to ask your doubts, upvote/downvote on existing comments and have an amazing learning experience";
const sweetalertWarningIcon = "warning";

const sweetAlertSuccess = () => {
    swal({
        title: sweetalertSuccessTitle,
        text: sweetalertSuccessText,
        icon: sweetalertSuccessIcon
    })
}

const sweetAlertFailure = () => {
    swal({
        title: sweetalertFailureTitle,
        text: sweetalertFailureText,
        icon: sweetalertFailureIcon,
    })
}

const sweetAlertWarning = () => {
    swal({
        title: sweetalertWarningTitle,
        text: sweetalertWarningText,
        icon: sweetalertWarningIcon,
    })
}

export {
    blackUpwardTriangle,
    blackDownwardTriangle,
    greenUpwardTriangle,
    greenDownwardTriangle,
    smallBlackUpTriangle,
    smallBlackDownTriangle,
    smallGreenUpTriangle,
    smallGreenDownTriangle,
    messageIcon,
    readThreadIcon,
    sendIcon,
    upwardArrow,
    sortIcon,
    blackMessageIcon,
    whiteSendIcon,
    upvoteIcon,
    blueVoteIcon,
    solidBlueUpvoteIcon,
    downVoteIcon,
    DISCUSSION_TYPE,
    THREAD_TYPE,
    DISCUSSION_URI_ENDPOINT,
    sweetAlertSuccess,
    sweetAlertFailure,
    sweetAlertWarning,
}


