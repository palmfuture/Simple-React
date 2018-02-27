import React, {Component} from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    handler = () => {
        this.setState({
            text: 'Wisit'
        })
    }

    render() {
        const styles = {
            marginRight: '15px',
            color: 'white',
            backgroundColor: 'red',
            padding: '20px'
        }
        return(<button style={styles} onMouseOver={this.handler}>{this.state.text}</button>);
    }
}