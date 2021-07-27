import React, { Component } from 'react'

export class NotificationModal extends Component {
    render() {
        return (
            <div className="ThanksModalContent">
                <img className="" src={this.props.image} alt="thanks modal image"></img>
                <h1 className="ThanksModalSuccess">
                    {this.props.header}
                </h1>
                <p className="ThanksModalContent">
                    {this.props.content}
                </p>
                <h2 className="ThanksModalThankYou">
                    {this.props.footer}
                </h2>
                {this.props.imageContent ? <img src={this.props.imageContent} alt="thanks modal image content" ></img>:""}
            </div>
        )
    }
}

export default NotificationModal
