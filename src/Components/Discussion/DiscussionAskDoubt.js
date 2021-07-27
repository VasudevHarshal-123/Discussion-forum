import React from 'react';
import TakeSubscriptionModal from '../Common/TrailUserSubscriptionModal';
import TextEditorModal from '../Common/TextEditorModal';
import store from '../../Store/DataStore';
import { sendIcon, whiteSendIcon } from '../../Constants/DiscussionConstant';

class DiscussionAskDoubtButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    getTakeSubscriptionModal = () => {
        return <TakeSubscriptionModal isOpen={this.state.isModalOpen} toggleModal={this.toggleModal} />
    }

    getTextEditorModal = () => {
        return <TextEditorModal onClickPostButton={this.props.onClickPostDoubtButton} 
                isOpen={this.state.isModalOpen} 
                toggleModal={this.toggleModal}  //on off
                header={"Ask Doubt"}
                textEditorWrapperClass={"modalTextEditorContainer"}
                textEditorClass={"modalTextEditor"}
                placeHolder={"Ask Your Doubt..."}
            />  
    }

    getAskDoubtButton = () => {
           
    }

    render(){
        let isClientOnTrial = store.get('onFreeTrial');
        return (
        <>
            <button className={`discussionThreadPostButton ${isClientOnTrial ? "threadPostUnsubscribed" : "threadPostSubscribed" }`} onClick={this.toggleModal}>{isClientOnTrial?sendIcon:whiteSendIcon} Ask Doubt</button>
            {isClientOnTrial?this.getTakeSubscriptionModal():this.getTextEditorModal()}
        </>
        );
    }
}

export default DiscussionAskDoubtButton