import React from "react";
import styled from "styled-components";

const SearchResultsBodyInput = styled.div`
    width: 116.4rem;
    grid-area: SearchFilters / SearchFilters / SearchFilters / SearchFilters;
`
const SearchInputBoxContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    width: 48rem;
    height: 4rem;
`
const SearchInputBoxWrapper = styled.div`
    width:100%;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    height: 100%;
    position: relative;
    color: rgb(255, 255, 255);
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204,174,112);
    border-image: initial;
    padding: 0px 1rem;
    border-radius: 0.6rem;
`

const SearchInputBox = styled.div`
    height: 100%;
    text-align: left;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
const SearchInputImage = styled.svg`
    width: 1.7rem;
    height: 1.7rem;
    color: rgb(136, 144, 181);
    flex: 0 0 auto;
    margin: 0.5rem 0px;
`

const SearchInput = styled.input`
    background-color: transparent;
    width: 100%;
    color: #333333;
    font-size: inherit;
    font-weight: inherit;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    padding: 0.5rem 0.7rem;
`
const SearchInputComponent:React.FunctionComponent = () => {
    return (
        <SearchResultsBodyInput>
            <SearchInputBoxContainer>
                <SearchInputBoxWrapper>
                    <SearchInputBox>
                        <SearchInputImage width="16" height="16" viewBox="0 0 16 16" >
                            <path transform="translate(-143 -324) translate(70 60) translate(60 211) translate(0 42)"
                                  d="M29 25.844l-4.999-4.996a6.128 6.128 0 10-10.966-4.37 6.129 6.129 0 009.81 5.522L27.846 27 29 25.844zm-10.348-4.243a4.497 4.497 0 11.954-8.943 4.497 4.497 0 01-.954 8.943z">
                            </path>
                        </SearchInputImage>
                        <SearchInput type="text" placeholder="Search champions, summoners and live games" />
                    </SearchInputBox>
                </SearchInputBoxWrapper>
            </SearchInputBoxContainer>
        </SearchResultsBodyInput>
    )
}

export default SearchInputComponent;