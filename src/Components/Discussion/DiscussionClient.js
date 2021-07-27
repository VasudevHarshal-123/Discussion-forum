import axios from 'axios'
import Cookies from 'universal-cookie'
import store from '../../Store/DataStore'
import { sweetAlertFailure, DISCUSSION_URI_ENDPOINT } from '../../Constants/DiscussionConstant'
import { COURSE_URL  } from '../../Constants/UrlConstants'

let getDiscussionForumContent = () => {
    store.set('discussionLoading',true);
    store.set('discussionError',"");
    let data = {
        discussionType: store.get('discussionType'),
        discussionId: store.get('discussionId'),
        emailId: store.get('emailId')
    }
    console.log(data,"data")
    axios.post(COURSE_URL + DISCUSSION_URI_ENDPOINT.GET_DISCUSSION_CONTENT, data)
    .then(response => {
        store.set('discussion',response.data);
        store.set('discussionLoading', false);
    })
    .catch(error => {
        store.set('discussion',[]);
        if(error.response){
            store.set('errorMessage',error.response.data.errorMessage);
        } 
        else{
            store.set('discussionError',error.message);
        }
        store.set('discussionLoading', false);
    })
}

let handlePostRequest = (URI , postData) => {
    store.set('discussionLoading', true);
    const cookies = new Cookies();
    axios.post(COURSE_URL + URI, postData, { headers: {
		'authorization': cookies.get('authorization')
	}})
    .then( response => {
        if(URI === DISCUSSION_URI_ENDPOINT.POST_MAIN_THREAD){
            store.set('latestPrimaryThreadInsertedId',response.data.id);
        } else if(URI === DISCUSSION_URI_ENDPOINT.POST_SECONDARY_THREAD){
            store.set('latestSecondaryThreadInsertId', response.data.id);
        }
        getDiscussionForumContent();
    })
    .catch(error => {
        store.set('discussionLoading', false);
        if(error.response && error.response.data){
            store.set('errorMessage', error.response.data.errorMessage);
        }
        else {
            sweetAlertFailure();
            store.set('discussionError', error.message);
        }
    })
}

let handlePrimaryThreadQuestion = (question) => {
    let data = {
        discussionType: store.get('discussionType'),
        discussionId: store.get('discussionId'),
        emailId: store.get('emailId'),
        thread: question,
        request_endpoint: window.location.href,
    };
    handlePostRequest(DISCUSSION_URI_ENDPOINT.POST_MAIN_THREAD, data);
}

let handleSecondaryThreadQuestion = (primaryId, question) => {
    let data = {
        emailId: store.get('emailId'),
        primaryId: primaryId,
        thread: question,
        request_endpoint: window.location.href,
    };
    handlePostRequest(DISCUSSION_URI_ENDPOINT.POST_SECONDARY_THREAD, data);
}

let handleThreadVote = (threadType, threadId, vote) => {
    store.set('discussionLoading', true);
    let data = {
        threadId: threadId,
        emailId: store.get('emailId'),
        vote: vote,
        threadType: threadType
    };
    handlePostRequest(DISCUSSION_URI_ENDPOINT.POST_THREAD_VOTE, data);
}

export  {
    getDiscussionForumContent,
    handlePrimaryThreadQuestion,
    handleSecondaryThreadQuestion,
    handleThreadVote,
}
