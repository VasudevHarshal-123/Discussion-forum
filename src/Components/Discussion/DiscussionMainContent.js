import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import store from '../../Store/DataStore';
import DiscussionPrimaryThread from './DiscussionPrimaryThread';

class DiscussionMainContent extends React.Component{
    constructor(props){
        super(props);
        store.paths({
            discussionLoading: 'discussionLoading',
        }).link(this);
    }

    getEmptyDiscussionMessage = () => {
        return (
            <div className="discussionMainContentEmpty">
                <p>Be the first one to start a discussion!</p>
            </div>
        );
    }

    getDiscussionContent = () => {
        return (
            <div className="dicussionContentContainer">
                <div className="discussionContent">
                    {this.props.discussionData.length>0? this.props.discussionData.map((item, index) => <DiscussionPrimaryThread key={item.id} data={item} primaryThreadIndex={index} />) : this.getEmptyDiscussionMessage()}
                </div>
            </div>
        );
    }

    render(){
        return <LoadingOverlay active={store.get('discussionLoading')} text="Loading..." spinner>{this.getDiscussionContent()}</LoadingOverlay>;
    }
}

export default DiscussionMainContent;