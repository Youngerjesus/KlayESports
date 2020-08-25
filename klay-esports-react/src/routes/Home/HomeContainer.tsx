import React from "react";
import HomePresenter from "./HomePresenter";
interface IState{
}


export default class extends React.Component<{}, IState> {
    state = {}

    constructor(props: Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <HomePresenter />
        )
    }
};