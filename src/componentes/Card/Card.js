import React from 'react';
import './Card.css';
import { Badge } from 'react-bootstrap';

const Card = ({ title, image, badges, width, badgewidth, fontSize }) => {
  return (
    <div className="card" style={{ maxWidth: width, fontSize: fontSize }}>
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title" style={{ fontSize: fontSize }}>{title}</h2>
        <div>
        {badges.map((badge, index) => {
            let badgeColor = badge.color;
            let textColor = badge.text;
            let badgeIcon = "";
            if (badge.name === "Playstation") {
              badgeIcon = <img src="/icon/icons8-playstation-60.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "primary";
            } else if (badge.name === "X-Box") {
              badgeIcon = <img src="/icon/icons8-xbox-100.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "success";
            } else if (badge.name === "Nintendo") {
              badgeIcon = <img src="/icon/icons8-nintendo-switch-logo-120.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "danger";
            } else if (badge.name === "Portatéis") {
              badgeIcon = <img src="/icon/icons8-gameboy-64.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "warning";
            } else if (badge.name === "PC") {
              badgeIcon = <img src="/icon/icons8-computer-game-64.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "secondary";
            } else if (badge.name === "IOS") {
              badgeIcon = <img src="/icon/icons8-ios-100.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "dark";
            } else if (badge.name === "Android") {
              badgeIcon = <img src="/icon/icons8-android-100.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "success";
            } else if (badge.name === "Cinema/Séries") {
              badgeIcon = <img src="/icon/icons8-movie-100.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "dark";
            } else if (badge.name === "Anime/HQ/Mangá") {
              badgeIcon = <img src="/icon/icons8-anime-128.png" alt="Logo" className="logo" width={badgewidth} />;
              badgeColor = "warning";
              textColor = "dark";
            }
            return (
              <Badge key={index} bg={badgeColor} className="card-badge" text={textColor}>
                {badgeIcon}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;