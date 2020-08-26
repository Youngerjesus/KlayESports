import React from "react";
import styled from "styled-components";


const SearchPlayerContainer = styled.div`
    margin-top: 2rem;
`

const SearchPlayerBoxLine = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: rgb(179, 180, 208);
    letter-spacing: 0.25px;
    text-transform: uppercase;
    line-height: 2rem;
    padding-bottom: 0.4rem;
    margin-bottom: 1.2rem;
    border-bottom: 1px solid rgba(204, 174, 112, 0.15);
`;

const SearchPlayerBox = styled.div`
    border-radius: 4px;
    box-shadow: rgba(21, 11, 37, 0.5) 0px 2px 10px 0px;
    margin-bottom: 1rem;
    color: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(97, 152, 164, 0.5) 0%, rgba(49, 41, 85, 0.5) 100%);
`
const SearchPlayerBoxHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid rgba(201, 103, 143, 0.25);
`
const SearchPlayerBoxBody = styled.div`
    display: flex;
    height: 12.6rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem 0.5rem 2rem;
`

const SearchPlayerBoxHeaderContent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
const PlayerLeagueName = styled.div`
    margin-right: 0.5rem;
    letter-spacing: 1px;
    font-size: 1.2rem;
    text-transform: uppercase;
`
const PlayerTeamName = styled.p`
    font-size: 1.2rem;
    color: rgb(137, 145, 182);
`
const PlayerProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 2rem 0px 0px;
    flex: 1 1 100%;
`
const PlayerProfileOverview = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 8rem;
    padding-bottom: 1rem;
`
const PlayerTagBox = styled.div`
    display: flex;
`
const PlayerProfileImageBox = styled.div`
    display: flex;
    width:100%; 
    grid-area: TopCol / TopCol / TopCol / TopCol;
`
const PlayerProfileImage = styled.img`
    align-self: center;
    width: 6rem;
    height: 6rem;
    flex: 0 0 auto;
    display: block;
    filter: drop-shadow(rgba(0, 0, 0, 0.4) 0px 3px 5px);
    border-radius: 50%;
`

const PlayerProfileName = styled.span`
    font-size: 1.8rem;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 2rem;
    display:flex; 
    align-self:center;
    margin-left:10px;
`
const PlayerDescription = styled.span`
    font-size: 1.6rem;
    text-align: center;
    color: white;
    line-height: 2rem;
    display:flex; 
    align-self:center;
    margin-left:auto;
    margin-right:auto;
`
const PlayerPositionWrapper = styled.div`
    display: flex;
    margin: 0px;
    padding: 0.3rem 1rem;
    box-shadow: rgba(204,173,112,0.6) 0px 0px 8px 2px;
    background-color: rgb(204,173,112);
    border-radius: 10px;  
    align-items: center;
`
const PlayerPositionImage = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    margin: 0px 0.3rem 0px 0px;
`
const PlayerPositionName = styled.span`
    font-size: 1rem;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    margin-left: 0.5rem;
`;

const PlayerTagWrapper = styled.div`
    display:flex; 
    margin-left:auto; 
    align-items: center;
`
const PlayerTagName = styled.span`
    box-shadow: rgba(204,173,112,0.6) 0px 0px 8px 2px;
    background-color: rgb(204,173,112);
    cursor: pointer;
    font-size: 10px;
    font-weight: 500;
    border-radius: 10px;
    color: white;
    display:flex; 
    margin-left:10px; 
    margin-right:10px;
    width:80px;
    justify-content: center;
`

const SearchPlayerComponent:React.FunctionComponent = () => {
    return (
        <SearchPlayerContainer>
            <SearchPlayerBoxLine></SearchPlayerBoxLine>
            <SearchPlayerBox>
                <SearchPlayerBoxHeader>
                    <SearchPlayerBoxHeaderContent>
                        <PlayerLeagueName> LoL Champions Korea </PlayerLeagueName>
                        <PlayerTeamName> Dragon X </PlayerTeamName>
                    </SearchPlayerBoxHeaderContent>
                </SearchPlayerBoxHeader>
                <SearchPlayerBoxBody>
                    <PlayerProfileBox>
                        <PlayerProfileOverview>
                            <PlayerProfileImageBox>
                                <PlayerProfileImage src={require("../../assets/lck/dragonx/deft.PNG")} />
                                <PlayerProfileName> DRX Deft </PlayerProfileName>
                                <PlayerDescription> " blabjaklbvjaslkgjlkasjgklajgklasjgklajglksajgklsajggjasklg " </PlayerDescription>
                            </PlayerProfileImageBox>
                        </PlayerProfileOverview>
                        <PlayerTagBox>
                            <PlayerPositionWrapper>
                                <PlayerPositionImage src={require("../../assets/position/Position_Challenger-Bot.png")} />
                                <PlayerPositionName> Bottom </PlayerPositionName>
                            </PlayerPositionWrapper>
                            <PlayerTagWrapper>
                                <PlayerTagName> damageMachine </PlayerTagName>
                                <PlayerTagName> Nexus </PlayerTagName>
                                <PlayerTagName> Farming </PlayerTagName>
                            </PlayerTagWrapper>
                        </PlayerTagBox>
                    </PlayerProfileBox>
                </SearchPlayerBoxBody>
            </SearchPlayerBox>
        </SearchPlayerContainer>
    )
}

export default SearchPlayerComponent;