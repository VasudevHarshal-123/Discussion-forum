import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import React from 'react';
// import { withRouter } from 'react-router-dom';
import { locked_image } from '../../Constants/DashboardConstants';
import NotificationModal from './NotificationModal';
import './styles/TrailUserSubscriptionModal.css';

class TakeSubscriptionModal extends React.Component {
    goToPayments = () => {
        this.props.history.push("/payments");
    }; 
    
    render(){
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal} className="takeSubscriptionModalContainer">
                <ModalHeader toggle={this.props.toggleModal}></ModalHeader>
                <ModalBody className="takeSubscriptionBody">
                    <NotificationModal content={"Please subscribe to ask a doubt"} image={locked_image} header={"Locked!"}/>
                    <button className="takeSubscriptionButton" onClick={this.goToPayments}>{"Check Payment Plans"}</button>
                </ModalBody>
            </Modal>
        )
    }
}
export default TakeSubscriptionModal;
// export default withRouter(TakeSubscriptionModal);