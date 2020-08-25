import React from "react";
import styled from "styled-components";
import ProfilePerformanceGraph from "./ProfilePerformanceGraph";
import ProfileOverview from "./ProfileOverview";
import ProfilePerformanceOverview from "./ProfilePerformanceOverview";
import ProfileGraphOverview from "./ProfileGraphOverview";
import ProfileHeaderOverview from "./ProfileHeaderOverview";
const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
`
const ProfileHeader = styled.div`
    display: flex;
    width:60%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-bottom: 20px;
`

const Contact = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const ContactButton = styled.button`
    display: block;
    width: 12rem;
    height: 3.6rem;
    box-shadow: rgba(204, 173, 112, 0.6) 0px 0px 8px 2px;
    background-color: rgb(204, 173, 112);
    font-size: 12px;
    font-weight: 900;
    line-height: 36px;
    letter-spacing: 0.25px;
    text-align: center;
    color: rgb(255, 255, 255);
    cursor: pointer;
    margin-left: 1.5rem;
    border-radius: 3px;
`
const ProfileImage = styled.img`
`

const ProfileBody = styled.div`
    display: grid;
    grid-template-areas:
        "GPI primaryRoleOverview"
        "perfomanceOverview perfomanceOverview"
        "AD AD";
    grid-template-columns: 31rem 1fr;
    grid-template-rows: 34rem 1fr auto;
    position: relative;
    z-index: 2;
    gap: 0px;
    width:60%;
    margin:auto;
`

const ProfileGraphBox = styled.div`
    box-shadow: none !important;
    grid-area: GPI / GPI / GPI / GPI;
    border-radius: 6px 0px 0px !important;
    margin: 0px !important;
    width: 100%;
    height: 34rem;
    flex: 0 0 31rem;
`
const ProfileKeywordBox = styled.div`
    box-shadow: none !important;
    grid-area: primaryRoleOverview / primaryRoleOverview / primaryRoleOverview / primaryRoleOverview;
    border-left: none !important;
    margin: 0px !important;
    border-radius: 0px 6px 0px 0px !important;
    width: 100%;
    height: 34rem;
`

const ProfilePerformanceBox = styled.div`
    color: rgb(255, 255, 255);
    grid-area: perfomanceOverview / perfomanceOverview / perfomanceOverview / perfomanceOverview;
    width: 100%;
    height: 18rem;
    box-shadow: none !important;
    border-radius: 0px 0px 6px 6px !important;
    border-top: none !important;
`

const ProfileGraphHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.9rem 1.2rem 0.8rem;
`

const ProfileGraph = styled.div`
    padding: 1.2rem;
`

const ProfilePresenter:React.FunctionComponent = () =>  {
    return (
        <ProfileWrapper>
            <ProfileHeaderContainer>
                <ProfileHeader>
                    <ProfileHeaderOverview />
                    <Contact>
                        <ContactButton> Contact </ContactButton>
                    </Contact>
                </ProfileHeader>
            </ProfileHeaderContainer>
            <ProfileBody>
                <ProfileGraphBox>
                    <ProfileGraphOverview />
                </ProfileGraphBox>
                <ProfileKeywordBox>
                    <ProfileOverview />
                </ProfileKeywordBox>
                <ProfilePerformanceBox>
                    <ProfilePerformanceOverview />
                </ProfilePerformanceBox>
            </ProfileBody>
        </ProfileWrapper>
    )
};

export default ProfilePresenter;