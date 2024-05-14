import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css';

const YoutubeEmbed = ({ title, embedId }) => (
  <>
    <h4 style={{color:'white'}}>{title}</h4>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
