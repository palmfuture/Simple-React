import React, {Component} from 'react';

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        const styles = {
            color: 'red',
            fontSize: '150px'
        }
        return(<h1 style={styles}>{this.state.text}</h1>);
    }
}