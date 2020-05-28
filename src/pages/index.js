import React, {useEffect, useState} from "react"
import SEO from "../components/seo"
import '../components/main.css';
import GitHubLogo from '../images/GitHub.png';
import OctocatLogo from '../images/Octocat.svg';
import ClubLogo from '../images/ClubLogo.png';
import BG1 from '../images/BG1.svg';
import BG2 from '../images/BG2.svg';
import {
    Container,
    GitHub,
    GitHubData,
    Octocat,
    Sidebar,
    SidebarActions,
    SidebarCollege,
    SidebarContainer,
    SidebarDescription,
    SidebarLogo,
    SidebarTitle,
    ViewOnGitHub
} from "../components/SidebarComponents";

import {
    AuthorDetails,
    AuthorLink,
    AuthorName,
    AuthorPhoto,
    BGIm1,
    BGIm2,
    DetailsContainer,
    MainContainer,
    PreviewImage,
    ProjectDescription,
    ProjectTitle,
    SubmissionCard,
    SubmissionsList,
    TaskName
} from "../components/MainComponents";

const data = 'https://raw.githubusercontent.com/hackslash-nitp/css-art/master/CONTRIBUTORS.json'

const Submission = (props) => {
    const [state, setState] = useState({
        name: '',
        link: '',
        img: ''
    })
    useEffect(() => {
        fetch("https://api.github.com/users/" + props.authorUserName).then(res => res.json())
            .then((res) => {
                setState({
                    name: res.name,
                    link: res.html_url,
                    img: res.avatar_url
                })
            });
    }, [])

    return (
        <SubmissionCard onClick={() => {window.open('https://hackslash.club/css-art/' + props.task + '/' + props.authorUserName, "_self")}}>
            <PreviewImage src={'https://raw.githubusercontent.com/hackslash-nitp/css-art/master/' + props.task + '/' + props.authorUserName + '/preview.jpg'}/>
            <TaskName>{props.task}</TaskName>
            <DetailsContainer>
                <AuthorPhoto src={state.img}/>
                <AuthorDetails>
                    <AuthorName>{state.name}</AuthorName>
                    <AuthorLink href={state.link}>{'@' + props.authorUserName}</AuthorLink>
                </AuthorDetails>
            </DetailsContainer>
        </SubmissionCard>
    );
}

const IndexPage = () => {
    const [state, setState] = useState({
        projectName: '',
        projectDescription: '',
        submissions: [],
    });

    const [repoData, setRepoData] = useState({
        forks: 0,
        stars: 0
    })

    let projects = [];

    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then((res) => {
                res.submissions.forEach((task) => {
                    task.contributors.forEach((contributor) => {
                        projects.push(
                            <Submission key={contributor} authorUserName={contributor} task={task.taskName}/>
                        )
                    })
                })

                setState({
                    projectName: res.projectName,
                    projectDescription: res.projectDescription,
                    submissions: projects
                })

                return fetch('https://api.github.com/repos/hackslash-nitp/' + res.projectName)
                    .then(res => res.json())
                    .then((res) => {
                        setRepoData({
                            forks: res.forks,
                            stars: res.stargazers_count
                        })
                    });

            });


    }, [])
    return (
        <Container>
            <SEO title={state.projectName}/>
            <Sidebar>
                <SidebarContainer>
                    <SidebarLogo src={ClubLogo}/>
                    <SidebarTitle>HackSlash</SidebarTitle>
                    <SidebarDescription>Student Developers' Club</SidebarDescription>
                    <SidebarCollege>National Institute of Technology Patna</SidebarCollege>
                </SidebarContainer>

                <SidebarContainer>
                    <SidebarActions>
                        <GitHubData>{'Forks: ' + repoData.forks}</GitHubData>
                        <Octocat src={OctocatLogo}/>
                        <GitHubData>{'Stars: ' + repoData.stars}</GitHubData>
                    </SidebarActions>
                    <ViewOnGitHub onClick={() => {
                        window.open('https://github.com/hackslash-nitp/' + state.projectName)
                    }}>
                        <div>View on</div>
                        <GitHub src={GitHubLogo}/>
                    </ViewOnGitHub>
                </SidebarContainer>


            </Sidebar>
            <MainContainer>
                <ProjectTitle>{state.projectName}</ProjectTitle>
                <ProjectDescription>{state.projectDescription}</ProjectDescription>
                <SubmissionsList>
                    {state.submissions}
                </SubmissionsList>
                <BGIm1 src={BG1}/>
                <BGIm2 src={BG2}/>

            </MainContainer>

        </Container>
    )
}

export default IndexPage
