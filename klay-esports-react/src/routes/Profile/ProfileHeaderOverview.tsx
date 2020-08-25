import React from "react";
import styled from "styled-components";

const ProfileBase = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
`

const ProfileNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 1.5rem;
`;

const ProfileName = styled.h3`
    font-size: 2.4rem;
    font-weight: 500;
    text-transform: capitalize;
    color: rgb(170, 170, 170));
    padding: 0.5rem 0px; 
`
const ProfileNameBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProfileLeagueName = styled.span`
    font-size: 1.2rem;
    text-transform: capitalize;
    color: rgb(170, 170, 170));
    padding: 0.5rem 0px; 
`
const ProfileTeamName = styled.span`
    font-size: 1rem;
    text-transform: capitalize;
    color: rgb(170, 170, 170));
    padding: 0.5rem 0px; 
`

const ProfileHeaderOverview:React.FunctionComponent = () => {
    return(
        <>
            <ProfileBase>
                <ProfileNameContainer>
                    <ProfileName> DRX Deft </ProfileName>
                    <ProfileNameBox>
                        <ProfileLeagueName> LoL Champions Korea · &nbsp; </ProfileLeagueName>
                        <ProfileTeamName> Dragon X </ProfileTeamName>
                    </ProfileNameBox>
                </ProfileNameContainer>
            </ProfileBase>
        </>
    )
}

export default ProfileHeaderOverview;