import React, { useState, useEffect } from 'react';
import { Button, Pagination } from 'react-bootstrap';
import Card from '../../componentes/Card/Card';
import './MainPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import TitleDivider from '../../componentes/TitleDivider/TitleDivider';
import { FaFilm, FaRegNewspaper, FaYoutube, FaMoneyBillAlt, FaSmileWink, FaMusic, FaSearchPlus } from 'react-icons/fa';
import axios from 'axios';
import ListGroupImage from '../../componentes/ListGroupImage/ListGroupImage';
import YoutubeEmbed from '../../componentes/YoutubeEmbed/YoutubeEmbed';
import { Link } from 'react-router-dom';

const MainPage = () => {
    const [mainPosts, setMainPosts] = useState([]);


    const [gamePosts, setGamePosts] = useState([]);
    const [currentPostsPage, setPostsCurrentPage] = useState(1);
    const [totalPostsPages, setPostsTotalPages] = useState(1);

    const [videos, setVideos] = useState([]);


    const [analysis, setAnalysis] = useState([]);



    useEffect(() => {
        const fetchMainPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/open/posts/mainpost');
                setMainPosts(response.data);
            } catch (error) {
                console.error('Error fetching MainPosts:', error);
            }
        };

        fetchMainPosts();
    }, []);

    useEffect(() => {
        const fetchGamePosts = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/open/posts/postsexceptmain', {
                    page: currentPostsPage,
                    size: 40
                });
                setGamePosts(response.data.posts);
                setPostsTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching Games Posts:', error);
            }
        };

        fetchGamePosts();
    }, [currentPostsPage]);

    const handlePageChange = (page) => {
        setPostsCurrentPage(page);
    };


    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/open/videos/paginated', {
                    page: 1,
                    size: 3
                });
                setVideos(response.data.videos);
            } catch (error) {
                console.error('Error fetching Videos:', error);
            }
        };
        fetchVideos();
    }, []);


    useEffect(() => {
        const fetchAnalysis = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/open/gameanalysis/paginated', {
                    page: 1,
                    size: 6
                });
                setAnalysis(response.data.analysis);
            } catch (error) {
                console.error('Error fetching Analysis:', error);
            }
        };
        fetchAnalysis();
    }, []);


    return (
        <Container fluid className="full-height-container">
            <Row>
                <TitleDivider title="Últimas Postagens" icon={<FaRegNewspaper />} fontSize="32px" />
                {mainPosts.map((post, index) => (
                    <Col key={post.id}>
                        <div className="card-wrapper">
                            <Link to={`/post/${post.id}`}> {/* Adicione o link aqui */}
                                <Card
                                    title={post.title}
                                    description={post.description}
                                    image={post.urlMainImage}
                                    badges={post.badges}
                                    width={'24rem'}
                                    badgewidth={25}
                                    fontSize={18}
                                />
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                <TitleDivider title="Postagens" icon={<FaFilm />} fontSize="22px" />
                <Row>
                    {gamePosts.map((post, index) => (
                        <Col key={post.id}>
                            <div className="card-wrapper">
                                <Link to={`/post/${post.id}`}> {/* Adicione o link aqui */}
                                    <Card
                                        title={post.title}
                                        description={post.description}
                                        image={post.urlMainImage}
                                        badges={post.badges}
                                        width={'12rem'}
                                        badgewidth={12}
                                        fontSize={12}
                                    />
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: '40px', marginBottom: '30px' }}>
                        <Pagination>
                            <Pagination.First onClick={() => handlePageChange(1)} />
                            <Pagination.Prev onClick={() => handlePageChange(currentPostsPage - 1)} />
                            {Array.from({ length: totalPostsPages }, (_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={currentPostsPage === index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => handlePageChange(currentPostsPage + 1)} />
                            <Pagination.Last onClick={() => handlePageChange(totalPostsPages)} />
                        </Pagination>
                    </div>
                </Row>
            </Row >
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="Nossas Análises" icon={<FaYoutube />} fontSize="22px" />
                    </Row>
                    <Row>
                        <Col>
                            <ListGroupImage
                                analyses={analysis}
                            />
                        </Col>
                    </Row>
                    <Row style={{ margin: '1px', marginTop: '10px', marginBottom: '20px', justifyContent: "center" }}>
                        <Button variant="danger" size="md" style={{ maxWidth: '20%' }}>
                            <FaSearchPlus /> Ver mais Análises
                        </Button>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="Vídeos" icon={<FaYoutube />} fontSize="22px" />
                    </Row>
                    <Row style={{ margin: '20px' }}>
                        {videos.map((video, index) => (
                            <Col key={video.id}>
                                <YoutubeEmbed embedId={video.embedId} title={video.description} />
                            </Col>
                        ))}
                    </Row>
                    <Row style={{ margin: '1px', marginTop: '10px', marginBottom: '20px', justifyContent: "center" }}>
                        <Button variant="danger" size="md" style={{ maxWidth: '20%' }}>
                            <FaSearchPlus /> Ver mais Vídeos
                        </Button>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="Últimas Promoções" icon={<FaMoneyBillAlt />} fontSize="22px" />
                    </Row>
                    <Row>
                        <h1>Em Breve !!</h1>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="Memes" icon={<FaSmileWink />} fontSize="22px" />
                    </Row>
                    <Row>
                        <h1>Em Breve !!</h1>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="PodCast" icon={<FaMusic />} fontSize="22px" />
                    </Row>
                    <Row>
                        <h1>Em Breve !!</h1>
                    </Row>
                </Container>
            </Row>
        </Container >
    );
};

export default MainPage;
