import * as React from "react";
import * as _ from 'lodash';
export interface HelloProps { compiler: string; framework: string; }
import {Button} from "@material-ui/core";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div><Button onClick={() => console.log(_.random(0, 100))}>WORK</Button> </div>;
    }
}