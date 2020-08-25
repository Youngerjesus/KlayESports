import React from "react";
import styled from "styled-components";

const HomeSearchInputBox = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    background-color: rgb(255, 255, 255);
    width: 100%;
    max-width: 64rem;
    height: 60px;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-radius: 5px;
    margin: auto;
`

const HomeSearchComponent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
`
const HomeSearchImage = styled.svg`
    display: flex;
    width: 2rem;
    height: 2rem;
    color: rgb(137, 145, 182);
    margin-left: 1.6rem;
`

const HomeSearchInput = styled.input`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
    color: rgb(68, 59, 107);
    height: 3.7rem;
    font-family: Roboto, sans-serif;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    flex: 1 1 0%;
    margin: 0px 1rem;
    text-overflow: ellipsis; 
`

const HomeSearchButton = styled.button`
    min-width: 6.2rem;
    height: 3.6rem;
    background-image: linear-gradient(119deg, rgb(204, 173, 112),   rgb(204, 173, 112));
    text-transform: uppercase;
    text-align: center;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
    margin-right: 1.6rem;
    border-radius: 0.4rem;
`

const HomeSearch:React.FunctionComponent = () => {
    return(
        <HomeSearchInputBox>
            <HomeSearchComponent>
                            <span>
                                <HomeSearchImage width="16" height="16" viewBox="0 0 16 16">
                                    <path transform="translate(-143 -324) translate(70 60) translate(60 211) translate(0 42)"
                                          d="M29 25.844l-4.999-4.996a6.128 6.128 0 10-10.966-4.37 6.129 6.129 0 009.81 5.522L27.846 27 29 25.844zm-10.348-4.243a4.497 4.497 0 11.954-8.943 4.497 4.497 0 01-.954 8.943z" >
                                    </path>
                                </HomeSearchImage>
                            </span>
                <HomeSearchInput placeholder="Search champions, summoners and live games" />
                <HomeSearchButton> KR </HomeSearchButton>
            </HomeSearchComponent>
        </HomeSearchInputBox>
    )
}

export default HomeSearch;