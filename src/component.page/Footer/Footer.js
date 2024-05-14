import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left" style={{ color: 'white' }}>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Games Por Gamers</h5>
                <p>Inserir a Logomarca</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>X-box</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>Playstation</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>Nintendo</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>PC</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>Portatéis</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>IOS</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>Android</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>Cinema/Séries</a></li>
                    <li><a href="#!" style={{ textDecoration: 'none', color: 'white' }}>Anime/HQ/Mangá</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{ color: 'white', fontSize: '22px' }}>© 2023 Copyright:
        GAMESPORGAMERS
    </div>

</footer>

export default Footer