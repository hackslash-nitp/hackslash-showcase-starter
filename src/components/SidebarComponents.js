import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    width: 100vw;
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #60B6E9;
       
    @media (min-width: 1200px) {
        flex-direction: row;
    }
   
`;

const Sidebar = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: row;
    order: 2;
    justify-content: space-evenly;
    align-items: center;
    background-color: #24292E;
    flex-wrap: wrap;
    z-index: 1000;
    padding: 48px 0;
    
    @media (min-width: 1200px) {
        position: fixed;
        left: 0;
        padding: 0;
        height: 100vh;
        flex-direction: column;
        width: 25vw;
        order: 1;
        min-width: 320px;
    }
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: Mukta, sans-serif;
    min-width: 300px;
    margin: 8px 0;
    
    @media (min-width: 1200px) {
        width: 100%;
    }
    
`;

const SidebarTitle = styled.div`
    font-size: calc(36px + 2vw);
    color: #ffffff;
    font-weight: 400;
    
    @media (min-width: 1200px) {
        font-size: 48px;
    }
`;

const SidebarDescription = styled.div`
    font-size: calc(12px + 1vw);
    color: #60B6E9;
    font-weight: 600;
    
    @media (min-width: 1200px) {
        font-size: 16px;
    }
`;

const SidebarCollege = styled.div`
    font-size: calc(14px + 1vw);
    color: #ffffff;
    font-weight: 500;
    
    @media (min-width: 1200px) {
        font-size: 18px;
    }
`;

const SidebarLogo = styled.img`
    width: 175px;
`;

const SidebarActions = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 12px;
    justify-content: space-between;
`;

const GitHubData = styled.div`
    font-family: Mukta, sans-serif;
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;
`;

const Octocat = styled.img`
    width: 100px;
`;

const ViewOnGitHub = styled.div`
    width: 300px;
    height: 60px;
    margin-top: 12px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-family: Mukta, sans-serif;
    color: #424242;
    font-weight: 600;
    font-size: 20px;
    transition-duration: 0.4s;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
    cursor: pointer;
    
    &:hover {
        background-color: #ffffff; 
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    }

`;

const GitHub = styled.img`
    height: 26px;
`;


export {
    Container,
    Sidebar,
    SidebarLogo,
    SidebarContainer,
    SidebarTitle,
    SidebarDescription,
    SidebarCollege,
    SidebarActions,
    GitHubData,
    Octocat,
    ViewOnGitHub,
    GitHub
}