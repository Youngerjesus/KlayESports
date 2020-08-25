import React from "react";
import styled from "styled-components";
import HomeSearch from "./HomeSearch";

const HomeBoxWrapper = styled.div`
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
`

const HomeContainerBox = styled.div`
    margin:auto;
    max-width: 118rem;
    width: 100%;
    flex: 1 1 100%;
`
const HomeDescription = styled.h1`
    color: #333333;
    font-size: 2.4rem;
    font-weight: 500;
    width: 100%;
    max-width: 70rem;
    line-height: 1.5;
    text-transform: uppercase;
    text-align: center;
    margin: 7rem auto 3.2rem;
`

const HomeSearchBox = styled.div`
    margin: 0px auto 6rem;
    width: 64rem;
`

const HomePresenter:React.FunctionComponent = () => {
    return (
       <HomeBoxWrapper>
            <HomeContainerBox>
                <HomeDescription>
                    The most comprehensive
                    <span> Player History </span>
                    and
                    <span> live player info </span>
                </HomeDescription>
                <HomeSearchBox>
                    <HomeSearch />
                </HomeSearchBox>
            </HomeContainerBox>
       </HomeBoxWrapper>
    )
}

export default HomePresenter;