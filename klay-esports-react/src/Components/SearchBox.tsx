import React, {Component} from "react";
import styled from "styled-components";

interface IState{
    keyword: string;
    keywords: [];
}

const SearchInputBox = styled.input`
    background: none;
    border: none;
    line-height: 17px;
    font-size: 14px;
    color: #9b9b9b;
    box-sizing: border-box;
    outline: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    height: 40px;
    width: 50%;
`

class SearchBox extends Component<{}, IState>{

    // @ts-ignore
    state = {
        keyword: '',
        keywords: []
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SearchInputBox type="text" name="searchBox"></SearchInputBox>
        )
    }

    componentDidMount() {
    }

}

export default SearchBox;