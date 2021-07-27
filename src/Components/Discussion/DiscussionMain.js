import React from 'react';
import store from '../../Store/DataStore';
import { getDiscussionForumContent, handlePrimaryThreadQuestion } from './DiscussionClient';
import { sortJsonArray } from '../../Utilities/CommonUtility/CommonUtility';
import SortDropDown from './DiscussionSortDropDown';
import DiscussionAskDoubtButton from './DiscussionAskDoubt';
import DiscussionMainContent from './DiscussionMainContent';
import './styles/DiscussionMain.css';

class DiscussionMain extends React.Component {
    constructor(props) {
        super(props);
        store.paths({
            discussionType: 'discussionType',
            discussionId: 'discussionId',
            discussion: 'discussion',
            discussionSortedBy: 'discussionSortedBy',
        }).link(this)
    }

    onClickPostDoubtButton = (htmlMessage) => {
        if (htmlMessage !== "<p><br></p>") {
            handlePrimaryThreadQuestion(htmlMessage);
        }
    }

    getAskDoubtButton = () => {
        return <DiscussionAskDoubtButton onClickPostDoubtButton={this.onClickPostDoubtButton} />
    }

    getDiscussionFilterThreadPostButton = () => {
        return (
            <div className="filterThreadPostButton">
                {/* <SortDropDown /> */}
                {this.getAskDoubtButton()}
            </div>
        );
    }

    getDiscussionHeading = () => {
        return (
            <div className="discussionForumHeading">
                <h3>Discussion Forum</h3>
                {this.getDiscussionFilterThreadPostButton()}
            </div>
        )
    }

    componentDidMount() {
        let discussionId = store.get('discussionId');
        let discussionType = store.get('discussionType');
        if (discussionId && discussionType) {
            store.set('discussion', []);
            getDiscussionForumContent();
        }
    }

    componentWillUnmount() {
        store.set('discussion', []);
        store.set('discussionId', null);
        store.set('discussionType', null);
    }

    componentDidUpdate(prevProps, prevState) {
        let prevDiscussionId = prevState.store.discussionId;
        let prevDiscussionType = prevState.store.discussionType;
        let currDiscussionId = store.get('discussionId');
        let currDiscussionType = store.get('discussionType');
        if (currDiscussionType !== prevDiscussionType || currDiscussionId !== prevDiscussionId) {
            if (currDiscussionId && currDiscussionType) {
                store.set('discussion', []);
                getDiscussionForumContent();
            }
            store.set('latestPrimaryThreadInsertedId', null);
            store.set('latestSecondaryThreadInsertId', null);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        let currDiscussionId = store.get('discussionId');
        let currDiscussionType = store.get('discussionType');
        let currDiscussion = store.get('discussion');
        let currDiscussionSortedBy = store.get('discussionSortedBy')
        if (currDiscussionId !== nextState.store.discussionId || currDiscussionType !== nextState.store.discussionType || JSON.stringify(currDiscussion) !== JSON.stringify(nextState.store.discussion) || currDiscussionSortedBy !== nextState.store.discussionSortedBy) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="discussionCard">
                {this.getDiscussionHeading()}
                <hr />
                <DiscussionMainContent discussionData={sortJsonArray(store.get('discussion'), store.get('discussionSortedBy'), 'desc')} />
                <hr />
            </div>
        );
    }
}

export default DiscussionMain;