import React from "react";
import styled from "styled-components";

const ProfilePerformanceHeader = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    line-height: 1.67;
    text-transform: uppercase;
    color: #333333;
    width: 100%;
    height: 3.6rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.6rem 1.2rem;
    border-bottom: none;
`
const ProfilePerformanceHeaderBox = styled.div`
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`

const ProfilePerformanceHeaderContent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const ProfileGraphHeaderLineImage = styled.img`
    width: 2rem;
    height: 2rem;
    display: block;
    margin-right: 1.2rem;
`
const ProfilePerformanceBody = styled.div`
    color: rgb(136, 144, 181);
    letter-spacing: 0.3px;
    font-size: 1.4rem;
    padding: 0px 1.2rem 1.2rem;
    display: flex;
`
const ProfilePerformanceBodyBox = styled.div`
    width: 100%;
    display: flex;
`
const ProfilePerformanceAttributeBox = styled.div`
    width: 13rem;
    height: 13rem;
    background-color: rgb(204,173,112);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1.5rem;
    position: relative;
    padding: 0.8rem 1rem 1rem;
`
const ProfilePerformanceAttributeBorder = styled.div`
    text-align: right;
    height: 1.2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: rgb(137, 145, 182);
    position: absolute;
    top: 1rem;
    right: 1rem;
`

const ProfilePerformanceAttributeContent = styled.div`
    font-size: 3.2rem;
    font-weight: 500;
    text-align: center;
    color: rgb(255, 255, 255);
    display: block;
    font-family: Oswald, sans-serif;
    letter-spacing: -0.5px;
`
const ProfilePerformanceAttributeName = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff;
    margin: 0.7rem 0px 0px;
`


const ProfilePerformanceOverview:React.FunctionComponent = () => {
    return (
        <>
            <ProfilePerformanceHeader>
                <ProfilePerformanceHeaderBox>
                    <ProfilePerformanceHeaderContent>
                        <ProfileGraphHeaderLineImage src={require("../../assets/position/Position_Challenger-Bot.png")}/>
                        PERFORMANCE OVERVIEW
                    </ProfilePerformanceHeaderContent>
                </ProfilePerformanceHeaderBox>
            </ProfilePerformanceHeader>
            <ProfilePerformanceBody>
                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> +138.8 </span>
                        <ProfilePerformanceAttributeName> GD@15 </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> 23.1% </span>
                        <ProfilePerformanceAttributeName> Gold Share </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> 26.0% </span>
                        <ProfilePerformanceAttributeName> Damage Share </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> +112.6</span>
                        <ProfilePerformanceAttributeName> DMG/M-D </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> 0.6</span>
                        <ProfilePerformanceAttributeName> Solo Deaths </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> 57.0 </span>
                        <ProfilePerformanceAttributeName> Vision Score </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> 12.6 </span>
                        <ProfilePerformanceAttributeName> Control Wards </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

                <ProfilePerformanceAttributeBox>
                    <ProfilePerformanceAttributeBorder></ProfilePerformanceAttributeBorder>
                    <ProfilePerformanceAttributeContent>
                        <span> </span>
                        <ProfilePerformanceAttributeName> Leaderboard Coming soon </ProfilePerformanceAttributeName>
                    </ProfilePerformanceAttributeContent>
                </ProfilePerformanceAttributeBox>

            </ProfilePerformanceBody>
        </>
    )
}

export default ProfilePerformanceOverview;