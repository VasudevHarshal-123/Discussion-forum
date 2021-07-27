import React from 'react';
import { Modal ,ModalBody, ModalHeader } from 'reactstrap';
import TextEditor from './TextEditor';
import './styles/TextEditorModal.css';

class TextEditorModal extends React.Component{
    getTextEdtior = () => {
        return <TextEditor 
        onClickPostButton={this.props.onClickPostButton} 
        toggleModal={this.props.toggleModal}
        wrapperClass={this.props.textEditorWrapperClass}
        textEditorClass={this.props.textEditorClass}
        styleControlDisabled={false}
        placeHolder={this.props.placeHolder?this.props.placeHolder:"Ask Doubt"}
        />;
    }
    
    render(){
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal} className="textEditorModalContainer">
                <ModalHeader toggle={this.props.toggleModal}>{this.props.ModalHeader}</ModalHeader>
                <ModalBody className="textEditorModalBody">
                    {this.getTextEdtior()}
                </ModalBody>
            </Modal>
        );
    }
}

export default TextEditorModal;