import React from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { FaPlaystation, FaXbox, FaGamepad, FaMobileAlt, FaVideo, FaBook, FaDesktop, FaApple, FaAndroid } from 'react-icons/fa';
import { BsController } from 'react-icons/bs';

const CardWithBadges = ({ title, image, badges, description }) => {
  return (
    <Card style={{ width: '46rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {badges.map((badge, index) => {
            let badgeColor = badge.color;
            let textColor = badge.text;
            let badgeIcon = "";
            if (badge.name === "Playstation") {
              badgeIcon = <img src="icon/icons8-playstation-60.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "primary";
            } else if (badge.name === "X-Box") {
              badgeIcon = <img src="icon/icons8-xbox-100.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "success";
            } else if (badge.name === "Nintendo") {
              badgeIcon = <img src="icon/icons8-nintendo-switch-logo-120.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "danger";
            } else if (badge.name === "Portatéis") {
              badgeIcon = <img src="icon/icons8-gameboy-64.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "warning";
            } else if (badge.name === "PC") {
              badgeIcon = <img src="icon/icons8-computer-game-64.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "secondary";
            } else if (badge.name === "IOS") {
              badgeIcon = <img src="icon/icons8-ios-100.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "dark";
            } else if (badge.name === "Android") {
              badgeIcon = <img src="icon/icons8-android-100.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "success";
            } else if (badge.name === "Cinema/Séries") {
              badgeIcon = <img src="icon/icons8-movie-100.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "dark";
            } else if (badge.name === "Anime/HQ/Mangá") {
              badgeIcon = <img src="icon/icons8-anime-128.png" alt="Logo" className="logo" width={15} />;
              badgeColor = "warning";
              textColor = "dark";
            }
            return (
              <Badge key={index} bg={badgeColor} className="card-badge" text={textColor}>
                {badgeIcon}
              </Badge>
            );
          })}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardWithBadges;