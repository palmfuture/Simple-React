import React, {Component} from 'react';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        const styles = {
            color: 'blue',
            display: 'inline',
            fontSize: '50px',
        }
        return(<p style={styles}>{this.state.text} </p>);
    }
}