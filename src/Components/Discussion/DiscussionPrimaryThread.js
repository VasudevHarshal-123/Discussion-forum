import React from 'react'
import Linkify from 'react-linkify';
import ReactHtmlParser from 'react-html-parser';
// import { withRouter } from 'react-router-dom';
import DiscussionSecondaryThread from './DiscussionSecondaryThread';
import { handleSecondaryThreadQuestion, handleThreadVote } from './DiscussionClient';
import { sortJsonArray, extractUserNameFromEmail, getTotalVote } from '../../Utilities/CommonUtility/CommonUtility';
import { messageIcon, blackMessageIcon, readThreadIcon, upwardArrow, blackUpwardTriangle, blackDownwardTriangle, greenUpwardTriangle, greenDownwardTriangle, THREAD_TYPE } from '../../Constants/DiscussionConstant'
import store from '../../Store/DataStore';
import './styles/DiscussionPrimaryThread.css'
import TextEditor from '../Common/TextEditor';
import TrailUserSubscriptionModal from '../Common/TrailUserSubscriptionModal';

class DiscussionPrimaryThread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readThread: false,
            isModalOpen: false,
        }
    }

    trialUserOnClickAddComment = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleOnClickReadTheThread = () => {
        this.setState({ readThread: true });
    }

    handleOnClickUpwardArrow = (event) => {
        event.preventDefault();
        this.setState({ readThread: false });
    }

    handleOnClickVoteIcon = (vote) => {
        let primaryId = this.props.data.id;
        let isUserOnFreeTrial = store.get('onFreeTrial');
        if (isUserOnFreeTrial) {
            this.trialUserOnClickAddComment();
        } else {
            handleThreadVote(THREAD_TYPE.PRIMARY, primaryId, vote);
        }
    }

    handleSecondaryThreadPost = (htmlMessage) => {
        if (htmlMessage !== "<p><br></p>") {
            handleSecondaryThreadQuestion(this.props.data.id, htmlMessage);
        }
        this.handleOnClickReadTheThread();
    }

    getPrimaryThreadVote = (vote, user_prev_voted) => {
        return (
            <div className="votingContainer">
                <div className="upVotingIcon" onClick={() => this.handleOnClickVoteIcon(1)}>{(user_prev_voted === 1) ? greenUpwardTriangle : blackUpwardTriangle}</div>
                <div className="totalVote">{vote ? getTotalVote(vote) : "00"}</div>
                <div className="downVotingIcon" onClick={() => this.handleOnClickVoteIcon(-1)}>{(user_prev_voted === -1) ? greenDownwardTriangle : blackDownwardTriangle}</div>
            </div>
        )
    }

    getPrimaryThreadPersonName = (name, email) => {
        return (
            <div className="personNameContainer">
                <div className="personName">{name ? name : extractUserNameFromEmail(email)}</div>
                {this.state.readThread ? <div className="upArrowIcon" onClick={this.handleOnClickUpwardArrow}>{upwardArrow}</div> : ""}
            </div>
        )
    }

    getPrimaryThreadQuestion = (question) => {
        return (
            <Linkify>
                <div className="questionContainer">
                    {ReactHtmlParser(question)}
                </div>
            </Linkify>
        )
    }

    getTextEditor = () => {
        return (
            <div className="primaryThreadTextEditorInputContainer">
                <TextEditor onClickPostButton={this.handleSecondaryThreadPost}
                    textEditorClass={'primaryThreadTextEditor'}
                    styleControlDisabled={true}
                    inlinePostButton={true}
                    placeHolder={'Add comment'}
                />
            </div>
        );
    }

    getPrimaryThreadAddAndReadThread = () => {
        let isClientOnTrial = store.get('onFreeTrial');
        let threadText = window.innerWidth <= 600 ? "Thread" : "Read the thread";
        let commentText = window.innerWidth <= 600 ? "Comments" : "Add a comment";
        return (
            <div className="commentAndReadContainer">
                <span onClick={isClientOnTrial ? this.trialUserOnClickAddComment : this.handleOnClickReadTheThread}>
                    <span className="commentAndReadIcon" >{isClientOnTrial ? blackMessageIcon : messageIcon}</span>
                    <span className={`commentAndReadText ${isClientOnTrial ? "clientOnTrialTextFont" : ""}`} >{commentText}</span>
                </span>
                <span onClick={this.handleOnClickReadTheThread}>
                    <span className="commentAndReadIcon">{readThreadIcon}</span>
                    <span className="commentAndReadText">{threadText}</span>
                </span>
            </div>
        )
    }

    getPrimaryPersonQuestionCommentReadComponent = (item) => {
        return (
            <div className="primaryContentContainer">
                {this.getPrimaryThreadPersonName(item.full_name, item.email)}
                {this.getPrimaryThreadQuestion(item.thread)}
                {this.state.readThread && !store.get('onFreeTrial') ? this.getTextEditor() : this.getPrimaryThreadAddAndReadThread()}
            </div>
        )
    }

    getPrimaryThreadContent = () => {
        return (
            <div className="primaryThreadContainer">
                {this.getPrimaryThreadVote(this.props.data.vote, this.props.data.user_voted)}
                {this.getPrimaryPersonQuestionCommentReadComponent(this.props.data)}
            </div>
        );
    }

    render() {
        return (
            <>
                <div className={`threadContainer ${store.get('latestPrimaryThreadInsertedId') === this.props.data.id ? "discussionPrimaryThreadActive" : ""}`} >
                    {this.getPrimaryThreadContent()}
                    {this.state.readThread ? <DiscussionSecondaryThread primaryId={this.props.data.id} data={sortJsonArray(this.props.data.secondary, 'date_of_created', 'asc')} primaryThreadIndex={this.props.primaryThreadIndex} /> : ""}
                    <hr className="horizontalLine" />
                </div>
                <TrailUserSubscriptionModal isOpen={this.state.isModalOpen} toggleModal={this.trialUserOnClickAddComment} />
            </>
        );
    }
}
export default DiscussionPrimaryThread;
// export default withRouter(DiscussionPrimaryThread);