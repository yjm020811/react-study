import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message:'今天是三月23号'
        }
    }
    render() {
        const {message}=this.state
        return (
            <div>
                <h2>{message}</h2>
            </div>
        );
    }
}

export default Message;
