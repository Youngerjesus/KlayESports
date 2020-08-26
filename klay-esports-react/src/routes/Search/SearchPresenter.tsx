import React from "react";
import styled from "styled-components";
import SearchInputComponent from "./SearchInputComponent";
import SearchPlayerComponent from "./SearchPlayerComponent";

const SearchResultsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: calc(151.4rem);
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    margin: auto;
`
const SearchResultsWrapper = styled.div`
    display: flex;
    width: 100%;
    margin:auto;
    max-width: 119.4rem;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    padding: 2rem 1.5rem;
`
const SearchOverviewContainer = styled.div`
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(204, 174, 112);
    overflow: hidden;
`
const SearchOverview = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding-bottom: 20px;
    margin-bottom: -20px;
    text-decoration: none;
`
const SearchOverviewName = styled.span`
    color: rgb(204, 174, 112);
    border-bottom: 4px solid rgb(204, 174, 112);
    width: 20%;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 1.5rem 0px;
    text-transform: uppercase;
`
const SearchResultsBody = styled.div`
`
const SearchResultsBodyWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
        "SearchFilters SearchFilters"
        "CenterSide CenterSide";
    grid-template-columns: 30rem 4fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
`

const SearchResultsBodyCenter = styled.div`
    width: 116.4rem;
     grid-area: CenterSide / CenterSide / CenterSide / CenterSide;
`

const SearchPresenter:React.FunctionComponent = () => {
    return (
        <SearchResultsContainer>
            <SearchResultsWrapper>
                <SearchOverviewContainer>
                    <SearchOverview>
                        <SearchOverviewName>
                            Search Results
                        </SearchOverviewName>
                    </SearchOverview>
                </SearchOverviewContainer>

                <SearchResultsBody>
                    <SearchResultsBodyWrapper>
                        <SearchInputComponent />

                        <SearchResultsBodyCenter>
                            <SearchPlayerComponent />
                        </SearchResultsBodyCenter>
                    </SearchResultsBodyWrapper>
                </SearchResultsBody>
            </SearchResultsWrapper>
        </SearchResultsContainer>
    )
}

export default SearchPresenter;