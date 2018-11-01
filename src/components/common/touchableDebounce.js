import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { debounce } from "lodash";

class TouchableDebounce extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                disabled={this.props.disabled}
                activeOpacity={this.props.activeOpacity}
                onPress={debounce(() => {
                    this.props.onPress();
                }, 1000)} //wait period in miliseconds
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

export default TouchableDebounce;