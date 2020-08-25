import React from "react";
import styled from "styled-components";

const ProfileOverviewHeader = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    line-height: 1.67;
    text-transform: uppercase;
    width: 100%;
    height: 3.4rem;
    padding: 0.6rem 1.2rem;
`;

const ProfileOverviewBody = styled.div`
    color: rgb(204, 173, 112);
    letter-spacing: 0.3px;
    font-size: 1.4rem;
    padding: 1.2rem;
`
const ProfileOverviewBodyHeader = styled.div`
    display: grid;
    grid-template-areas: "Tag Games TopRate Description";
    grid-template-columns: 17rem 10rem 10rem 30rem;
    font-size: 1.4rem;
    color: #333333;
    height: 2.5rem;
    margin-top: 0.5rem;
    gap: 0px;
`
const ProfileOverviewTagContent = styled.div`
    text-align: center;
    white-space: nowrap;
    grid-area: Tag / Tag / Tag / Tag;
`

const ProfileOverviewGamesContent = styled.div`
    text-align: center;
    white-space: nowrap;
    grid-area: Games / Games / Games / Games;
`

const ProfileOverviewTopRateContent = styled.div`
    text-align: center;
    white-space: nowrap;
    grid-area: TopRate / TopRate / TopRate / TopRate;
`

const ProfileOverviewDescriptionContent = styled.div`
    text-align: center;
    white-space: nowrap;
    grid-area: Description / Description / Description / Description;
`

const ProfileOverviewLine = styled.div`
    width: 100%;
    height: 1px;
    background: rgb(204, 173, 112); 
    margin: 0.6rem 0px;
`
const Tag = styled.span`
    box-shadow: 0 0 1px 2.5px rgba(254, 76, 64, 0.4);
    background: rgba(254, 76, 64, 0.8);
    cursor: pointer;
    font-size: 10px;
    font-weight: 500;
    border-radius: 10px;
    color: white
`
const Tag2 = styled.span`
    box-shadow: 0 0 1px 2.5px rgba(254, 76, 64, 0.4);
    background: rgb(229, 242, 254);
    cursor: pointer;
    font-size: 10px;
    font-weight: 500;
    border-radius: 10px;
    color: white
`

const ProfileTagBox = styled.div`
    display: grid;
    grid-template-areas: "Tag Games TopRate Description";
    grid-template-columns: 17rem 10rem 10rem 30rem;
    height: 4rem;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    gap: 0px;
`
const ProfileTag = styled.div`
    text-align: center;
    white-space: nowrap;
    grid-area: Tag / Tag / Tag / Tag;
`
const ProfileGames = styled.div`
    text-align: center;
    white-space: nowrap;
    color: #333333;
    grid-area: Games / Games / Games / Games;
`
const ProfileTopRate = styled.div`
    text-align: center;
    white-space: nowrap;
    color: #333333;
    grid-area: TopRate / TopRate / TopRate / TopRate;
`
const ProfileDescription = styled.div`
    text-align: center;
    white-space: nowrap;
    color: #333333;
    grid-area: Description / Description / Description / Description;
`

const ProfileOverview:React.FunctionComponent = () => {
    return (
        <>
            <ProfileOverviewHeader>
                Primary Role Overview
                <ProfileOverviewLine></ProfileOverviewLine>
            </ProfileOverviewHeader>
            <ProfileOverviewBody>
                <ProfileOverviewBodyHeader>
                    <ProfileOverviewTagContent> Tags </ProfileOverviewTagContent>
                    <ProfileOverviewGamesContent> Games </ProfileOverviewGamesContent>
                    <ProfileOverviewTopRateContent> TopRate </ProfileOverviewTopRateContent>
                    <ProfileOverviewDescriptionContent> Description </ProfileOverviewDescriptionContent>
                </ProfileOverviewBodyHeader>
                <ProfileOverviewLine></ProfileOverviewLine>
                <ProfileTagBox>
                    <ProfileTag>
                        <Tag> DamageMachine </Tag>
                    </ProfileTag>
                    <ProfileGames> 170 </ProfileGames>
                    <ProfileTopRate>
                        <span> 10% </span>
                    </ProfileTopRate>
                    <ProfileDescription>
                        <span> Be highly aggressive </span>
                    </ProfileDescription>
                </ProfileTagBox>

                <ProfileTagBox>
                    <ProfileTag>
                        <Tag> Nexus </Tag>
                    </ProfileTag>
                    <ProfileGames> 170 </ProfileGames>
                    <ProfileTopRate>
                        <span> 10% </span>
                    </ProfileTopRate>
                    <ProfileDescription>
                        <span> Be highly aggressive </span>
                    </ProfileDescription>
                </ProfileTagBox>

                <ProfileTagBox>
                    <ProfileTag>
                        <Tag> Farming </Tag>
                    </ProfileTag>
                    <ProfileGames> 170 </ProfileGames>
                    <ProfileTopRate>
                        <span> 10% </span>
                    </ProfileTopRate>
                    <ProfileDescription>
                        <span> Be highly aggressive </span>
                    </ProfileDescription>
                </ProfileTagBox>

                <ProfileTagBox>
                    <ProfileTag>
                        <Tag> Aggressive </Tag>
                    </ProfileTag>
                    <ProfileGames> 170 </ProfileGames>
                    <ProfileTopRate>
                        <span> 10% </span>
                    </ProfileTopRate>
                    <ProfileDescription>
                        <span> Be highly aggressive </span>
                    </ProfileDescription>
                </ProfileTagBox>

                <ProfileTagBox>
                    <ProfileTag>
                        <Tag> Carry </Tag>
                    </ProfileTag>
                    <ProfileGames> 170 </ProfileGames>
                    <ProfileTopRate>
                        <span> 10% </span>
                    </ProfileTopRate>
                    <ProfileDescription>
                        <span> Be highly aggressive </span>
                    </ProfileDescription>
                </ProfileTagBox>

                <ProfileTagBox>
                    <ProfileTag>
                        <Tag> Start Strong </Tag>
                    </ProfileTag>
                    <ProfileGames> 170 </ProfileGames>
                    <ProfileTopRate>
                        <span> 10% </span>
                    </ProfileTopRate>
                    <ProfileDescription>
                        <span> Be highly aggressive </span>
                    </ProfileDescription>
                </ProfileTagBox>
            </ProfileOverviewBody>
        </>
    )
}

export default ProfileOverview