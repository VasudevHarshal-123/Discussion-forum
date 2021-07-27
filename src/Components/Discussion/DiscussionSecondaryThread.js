import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import store from '../../Store/DataStore';
import TrailUserSubscriptionModal from '../Common/TrailUserSubscriptionModal';
import { extractUserNameFromEmail } from '../../Utilities/CommonUtility/CommonUtility';
import  { handleSecondaryThreadQuestion, handleThreadVote } from './DiscussionClient';
import { sweetAlertWarning, THREAD_TYPE } from '../../Constants/DiscussionConstant';
import SecondaryThreadVote from './discussionSecondaryThreadVote';
import './styles/DiscussionSecondaryThread.css';

class DiscussionSecondaryThread extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isModalOpen: false,
        }
        store.paths({
            onFreeTrial: "onFreeTrial",
            latestSecondaryId: "latestSecondaryId",
        }).link(this)
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handlSecondaryThreadPost = (htmlMessage) => {
        if(htmlMessage !== "<p><br></p>"){
            handleSecondaryThreadQuestion(this.props.primaryId, htmlMessage);
        }
    }

    getTakeSubscriptionModal = () => {
        return <TrailUserSubscriptionModal isOpen={this.state.isModalOpen} toggleModal={this.toggleModal}/>
    }

    handleQuestionSubmit = (event) => {
        event.preventDefault();
        let question = event.target[0].value;
        let primaryId = this.props.primaryId;
        let isUserOnFreeTrial = store.get('onFreeTrial');
        if(isUserOnFreeTrial){
            sweetAlertWarning();
        }else{
            handleSecondaryThreadQuestion(primaryId, question);
        }
        event.target[0].value = "";
    }

    handleOnClickVoteIcon = (secondary_id, vote) => {
        let isUserOnFreeTrail = store.get('onFreeTrial');
        if(isUserOnFreeTrail){
            this.toggleModal();
        }else{
            handleThreadVote(THREAD_TYPE.SECONDARY, secondary_id, vote);
        }
    }

    getName = (name, email) => {
        return <div className="secondaryThreadName">{name?name:extractUserNameFromEmail(email)}</div>;
    }

    getSecondaryThreadVoting = (vote , user_voted, id) => {
        return <SecondaryThreadVote user_voted={user_voted} id={id} vote={vote} handleOnClickVoteIcon={this.handleOnClickVoteIcon} />
    }

    getSecondaryThreadQuestion = (question) => {
        return (
            <div className="secondaryQuestionContainer">
                {ReactHtmlParser(question)}
            </div>
        )
    }

    handleSecondaryThread = (item, index) => {
        return(
            <>
                <div className= {`secondaryThreadItemContainer ${(item.id === store.get('latestSecondaryThreadInsertId'))?"discussionSecondaryThreadActive":""}`}>
                    {this.getName(item.fullname, item.email)}
                    {this.getSecondaryThreadQuestion(item.thread)}
                    {this.getSecondaryThreadVoting(item.vote , item.user_voted, item.id)}
                </div>
                <hr className="secondaryThreadHorizontalLine"/>
            </>
        )
    }

    render(){
        return(
            <>
                <div className="secondaryThreadContainer">
                    {this.props.data ? this.props.data.map((item, index) => <div key={item.id}>{this.handleSecondaryThread(item, index)}</div>): ""}
                </div>
                {this.getTakeSubscriptionModal()}
            </>
        )
    }

}
export default DiscussionSecondaryThread;