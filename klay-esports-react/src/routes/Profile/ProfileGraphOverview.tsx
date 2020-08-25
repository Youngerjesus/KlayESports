import React from "react";
import styled from "styled-components";
import ProfilePerformanceGraph from "./ProfilePerformanceGraph";

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



const ProfileGraphOverview:React.FunctionComponent = () => {
    return(
        <>
            <ProfileGraphHeaderLineBox>
                <ProfileGraphHeaderLineImage src={require("../../assets/position/Position_Challenger-Bot.png")}/>
                <ProfileGraphHeaderLine> Bottom </ProfileGraphHeaderLine>
            </ProfileGraphHeaderLineBox>
            <ProfileGraphWrapper>
                <PolygonBox>
                    <ProfilePerformanceGraph />
                </PolygonBox>
            </ProfileGraphWrapper>
        </>
    )
}

export default ProfileGraphOverview;