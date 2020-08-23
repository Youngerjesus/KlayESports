import React from "react";
import styled from "styled-components";
import axios from "axios";
import SearchBox from "../Components/SearchBox";

const BoxWrapper = styled.div`
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
`

const Home:React.FunctionComponent = () => {
    return (
        <BoxWrapper>
            <SearchBox />
        </BoxWrapper>
    )
}

export default Home;