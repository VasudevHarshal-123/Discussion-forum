import React, { Component } from 'react';
import queryString from 'query-string';
import { DISCUSSION_TYPE } from '../../Constants/DiscussionConstant';
import store from '../../Store/DataStore';
import DiscussionMain from './DiscussionMain';

export class DiscussionMainWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            otp: null,
            playbackInfo: null,
            video: null,
            videoProgressData: null,
            video_max_progress_time: null,
            windowWidth: window.innerWidth,
            pastWatchTime: 0
        };
        store.paths({
            resourceName: "resourceName",
            sectionId: "sectionId"
        }).link(this);
    }

    setDiscussionForumData = () =>{
        let queryObject = queryString.parse(window.location.search);
        console.log("Whaaaat",queryObject);
        store.set('discussionType', DISCUSSION_TYPE.SUBTOPIC_VIDEO);
        store.set('discussionId', queryObject.subtopicId);
        store.set('emailId', queryObject.emailId);
    }

    componentDidMount() {
        this.setDiscussionForumData();
    }

    componentWillUnmount() {
        // this.videoProgressSend(this.props.subtopicId);
        store.set('discussionType', "");
        store.set('discussionId', "");
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.subtopicId !== prevProps.subtopicId) {
            this.setState({
                clicked: false,
                otp: null,
                playbackInfo: null,
                video: null,
                videoProgressData: null,
                pastWatchTime: 0
            });
            this.setDiscussionForumData(); 
        }
    }
    render() {

        return (
            <div>
                <DiscussionMain/>
            </div>
        )
    }
}

export default DiscussionMainWrapper
