import React from "react";
import styled from "styled-components";
import Polygon from 'react-polygon';
import ProfilePerformanceGraph from "../../Components/ProfilePerformanceGraph";
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

const ProfileBase = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
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
const ProfileGraphHeaderLineBox = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.9rem 1.2rem 0.8rem;
`
const ProfileGraphHeaderLineImage = styled.img`
    width: 2rem;
    height: 2rem;
    display: block;
    margin-right: 1.2rem;
`

const ProfileGraphHeaderLine = styled.p`
`

const ProfileGraphWrapper = styled.div`
    padding: 1.2rem;
    height:100%; 
    display:flex; 
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-align: center;
    position: relative;
    fill-opacity: 0.1;
    stroke: rgb(204, 173, 112); 
    stroke-width: 1.8;
    filter: drop-shadow(rgba(0, 0, 0, 0.4) 0px 0px 13px);
`
const PolygonBox = styled.div`
    transform: translate(60, 60) !important;
    width:100%;
    height:100%;
    background-image:url("../../assets/polygon.PNG");
`



const ProfilePresenter:React.FunctionComponent = () =>  {
    return (
        <ProfileWrapper>
            <ProfileHeaderContainer>
                <ProfileHeader>
                    <ProfileBase>
                        <ProfileNameContainer>
                            <ProfileName> DRX Deft </ProfileName>
                            <ProfileNameBox>
                                <ProfileLeagueName> LoL Champions Korea · &nbsp; </ProfileLeagueName>
                                <ProfileTeamName> Dragon X </ProfileTeamName>
                            </ProfileNameBox>
                        </ProfileNameContainer>
                    </ProfileBase>
                    <Contact>
                        <ContactButton> Contact </ContactButton>
                    </Contact>
                </ProfileHeader>
            </ProfileHeaderContainer>
            <ProfileBody>
                <ProfileGraphBox>
                    <ProfileGraphHeaderLineBox>
                        <ProfileGraphHeaderLineImage src={require("../../assets/position/Position_Challenger-Bot.png")}/>
                        <ProfileGraphHeaderLine> Bottom </ProfileGraphHeaderLine>
                    </ProfileGraphHeaderLineBox>
                    <ProfileGraphWrapper>
                        <PolygonBox>
                            <ProfilePerformanceGraph />
                        </PolygonBox>
                    </ProfileGraphWrapper>
                </ProfileGraphBox>
                <ProfileKeywordBox></ProfileKeywordBox>
                <ProfilePerformanceBox></ProfilePerformanceBox>
            </ProfileBody>
        </ProfileWrapper>
    )
};

// <svg height="300" width="300">
//     <polygon points="150,0,267.2747223702,56.47652972119,296.23918682727,183.37814009345,215.08256086763,285.14533018536,84.917439132366,285.14533018536,3.7608131727264,183.37814009345,32.725277629796,56.47652972119" style={{fill: "rgb(204, 173, 112)",stroke: "rgb(204, 173, 112)"}} />
// </svg>
// {/*<Polygon size="300" n="7"></Polygon>*/}
// <svg height="300" width="300">
//     <polygon points="220,10 300,210 170,250 123,234" style={{fill:"lime",stroke:'black'}} />
// </svg>

export default ProfilePresenter;