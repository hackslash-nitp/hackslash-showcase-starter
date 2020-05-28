import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    order: 1;
    padding: 2rem 0;
    
    @media (min-width: 1200px) {
        width: 75vw;
        order: 2;
    }
`;

const BGIm1 = styled.img`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50vh;
    
    @media (min-width: 1200px) {
        height: 60vh;
        left: calc(25vw - 10px);
    }
`;

const BGIm2 = styled.img`
    position: fixed;
    top: 0;
    height: 50vh;
    right: 0;
    
    @media (min-width: 1200px) {
        height: 60vh;
    }
`;

const ProjectTitle = styled.div`
    font-family: Source Code Pro;
    font-weight: bold;
    font-size: 48px;
    margin: 0 2rem;
    color: #FFFFFF;
    z-index: 5;
`;

const ProjectDescription = styled.div`
    font-family: Mukta;
    font-size: 30px;
    color: #FFFFFF;
    margin: 0 2rem;
    z-index: 5;
`;

const SubmissionsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 24px;
    z-index: 5;
`;

const SubmissionCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 330px;
    background-color: #ffffff;
    margin: 16px;
    border-radius: 12px;
    cursor: pointer;
`;

const PreviewImage = styled.img`
    width: 100%;
    height: 225px;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
`;

const DetailsContainer = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    flex-direction: row;
    padding: 0 2rem;
`;

const TaskName = styled.div`
    font-family: Source Code Pro;
    font-style: normal;
    padding: 0 2rem;
    margin-top: 12px;
    font-weight: 600;
    font-size: 18px;
    color: #60B6E9;
`;

const AuthorPhoto = styled.img`
    width: 44px;
    height: 44px;
    object-fit: cover;
    object-position: center;
    border-radius: 100px;
    margin-right: 16px;
`;

const AuthorDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const AuthorName = styled.div`
    font-family: Mukta, sans-serif;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: -8px;
    color: #24292E;
`;

const AuthorLink = styled.a`
    font-family: Mukta, sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #24292E;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`;

export {
    MainContainer,
    BGIm1,
    BGIm2,
    ProjectTitle,
    ProjectDescription,
    SubmissionsList,
    SubmissionCard,
    PreviewImage,
    DetailsContainer,
    TaskName,
    AuthorPhoto,
    AuthorDetails,
    AuthorName,
    AuthorLink
}