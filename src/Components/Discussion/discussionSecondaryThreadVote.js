import React from 'react';
import { blueVoteIcon, solidBlueUpvoteIcon, upvoteIcon } from '../../Constants/DiscussionConstant';
import { getTotalVote } from '../../Utilities/CommonUtility/CommonUtility';

class SecondaryThreadVote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isMouseHover: false,
        };
    }

    onMouseEnter = () => {
        this.setState({isMouseHover: true});
    }

    onMouseLeave = () => {
        this.setState({isMouseHover: false});
    }

    render(){
        return(
            <div className={`${this.props.user_voted===1?"secondaryThreadVoted":"secondaryVotingContainer"}`} onMouseOver={this.onMouseEnter} onMouseOut={this.onMouseLeave}>
                <button className="upvoteSecondaryThreadIcon" onClick={() => this.props.handleOnClickVoteIcon(this.props.id , 1)}>{(this.props.user_voted===1)?solidBlueUpvoteIcon:(this.state.isMouseHover?blueVoteIcon:upvoteIcon)}</button>
                <div className="secondaryTotalVote">{this.props.vote?getTotalVote(this.props.vote):"00"}</div>
                <button className="upvoteSecondaryThreadText" onClick={() => this.props.handleOnClickVoteIcon(this.props.id, 1)}>Upvote</button>
            </div>
        );
    } 
}

export default SecondaryThreadVote;