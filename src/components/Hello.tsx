import * as React from "react";
import * as _ from 'lodash';
export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {_.lowerCase(this.props.compiler)} and {this.props.framework}!</h1>;
    }
}