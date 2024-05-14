import React, { useState, useEffect } from 'react';
import { Button, Pagination } from 'react-bootstrap';
import Card from '../../componentes/Card/Card';
import './Body.css';
import { Container, Row, Col } from 'react-bootstrap';
import TitleDivider from '../../componentes/TitleDivider/TitleDivider';
import { FaFilm, FaRegNewspaper, FaYoutube, FaMoneyBillAlt, FaSmileWink, FaMusic, FaSearchPlus } from 'react-icons/fa';
import axios from 'axios';
import ListGroupImage from '../../componentes/ListGroupImage/ListGroupImage';
import YoutubeEmbed from '../../componentes/YoutubeEmbed/YoutubeEmbed';

const Body = () => {
    const [mainPosts, setMainPosts] = useState([]);


    const [gamePosts, setGamePosts] = useState([]);
    const [currentPostsPage, setPostsCurrentPage] = useState(1);
    const [totalPostsPages, setPostsTotalPages] = useState(1);

    const [videos, setVideos] = useState([]);


    const analyses = [
        {
            title: 'The Legend of Zelda - Tears Of The Kingdom',
            platform: 'Nintendo Switch',
            releaseDate: '29/06/2023',
            description: 'Após seis anos aguardando sequência do tão premiado jogo de Breath of the Wild, Tears of the Kingdom finalmente chega em 12 de maio para que voltemos ao vasto reino de Hyrule.',
            average: 10,
            urlImage: 'https://now.estarland.com/images/products/18/71118/Legend-of-Zelda-Tears-of-The-Kingdom-large-image.jpg'
        },
        {
            title: 'Final Fantasy XVI',
            platform: 'Playstation 5',
            description: 'Este jogo é um dos melhores de todos os tempos.',
            releaseDate: '29/06/2023',
            average: 9.0,
            urlImage: 'https://tse3.mm.bing.net/th?id=OIP.I1J345zZZl3zscPEm0uJ9wHaJO&pid=Api&P=0&h=180'
        },
        {
            title: 'Dead Space',
            platform: 'PS5, X-box, PC',
            description: 'O remake de Dead Space consegue estabelecer um bom padrão a ser seguido nos remakes daqui para frente. É uma experiência familiar, original, imersiva e assustadora. A nova história de Isaac tem muitos acontecimentos inéditos, além dos já conhecidos que foram apresentados em uma perspectiva totalmente diferente.',
            releaseDate: '29/06/2023',
            average: 9.5,
            urlImage: 'https://www.ziliongames.com.br/banco_imagens/produtos/g/dead-space-remake-ps5-prevenda-janeiro-2023119t.jpg'
        },
        {
            title: 'Final Fantasy XVI',
            platform: 'Playstation 5',
            description: 'Este jogo é um dos melhores de todos os tempos.',
            releaseDate: '29/06/2023',
            average: 9.0,
            urlImage: 'https://tse3.mm.bing.net/th?id=OIP.I1J345zZZl3zscPEm0uJ9wHaJO&pid=Api&P=0&h=180'
        },
        {
            title: 'Dead Space',
            platform: 'PS5, X-box, PC',
            description: 'O remake de Dead Space consegue estabelecer um bom padrão a ser seguido nos remakes daqui para frente. É uma experiência familiar, original, imersiva e assustadora. A nova história de Isaac tem muitos acontecimentos inéditos, além dos já conhecidos que foram apresentados em uma perspectiva totalmente diferente.',
            releaseDate: '29/06/2023',
            average: 9.5,
            urlImage: 'https://www.ziliongames.com.br/banco_imagens/produtos/g/dead-space-remake-ps5-prevenda-janeiro-2023119t.jpg'
        }
    ];



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
                    page: currentPage,
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
                    size: 6
                });
                setVideos(response.data.videos);
            } catch (error) {
                console.error('Error fetching Videos:', error);
            }
        };
        fetchVideos();
    }, []);



    return (
        <Container fluid className="full-height-container">
            <Row>
                <TitleDivider title="Últimas Postagens" icon={<FaRegNewspaper />} fontSize="32px" />
                {mainPosts.map((post, index) => (
                    <Col key={post.id}>
                        <div className="card-wrapper">
                            <Card
                                title={post.title}
                                description={post.description}
                                image={post.urlMainImage}
                                badges={post.badges}
                                width={'24rem'}
                                badgewidth={25}
                                fontSize={18}
                            />
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
                                <Card
                                    title={post.title}
                                    description={post.description}
                                    image={post.urlMainImage}
                                    badges={post.badges}
                                    width={'12rem'}
                                    badgewidth={12}
                                    fontSize={12}
                                />
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
                                analyses={analyses}
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

                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="Memes" icon={<FaSmileWink />} fontSize="22px" />
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <TitleDivider title="PodCast" icon={<FaMusic />} fontSize="22px" />
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </Row>
        </Container >
    );
};

export default Body;
