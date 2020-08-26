import React from "react";
import SearchPresenter from "./SearchPresenter";

interface IProps{
}

interface IState{
}

export default class extends React.Component<IProps, IState> {
    state = {}

    constructor(props: Readonly<IProps>) {
        super(props);
    }

    render() {
        return (
            <SearchPresenter />
        )
    }
}