import React from "react";
import styled from "styled-components";
import axios from "axios";
import ProfilePresenter from "./ProfilePresenter";
interface IState{

}

interface IProps{
    nickname: string
}

export default class extends React.Component<IProps, IState> {
    state = {}

    constructor(props: Readonly<IProps>) {
        super(props);
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        return (
            <ProfilePresenter />
        )
    }
};