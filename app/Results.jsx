import * as React from "react";
import { battle } from "./utils/api/api";

export default class Results extends React.Component {
    async componentDidMount() {
        const { playerOne, playerTwo } = this.props;
        
        const result = await battle([playerOne, playerTwo])
        console.log(result)
    }
    render() {
        return (
            <div>
                Results
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        )
    }
}