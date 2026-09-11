function Hero() {
    return ( 
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-tagline"> CCTV • Networking • Smart Infrastructure</p>

                <h1>Secure, Connect,and Empower your business
                    <span>With Cutting-Edge Tech Solutions</span>
                </h1>

                <p className="hero-description">
                From HD CCTV surveillance to enterprise-grade networking,
                we design reliable, scalable, and future-ready technology
                solutions for modern businesses.
                </p>


                <div className="hero-buttons">
                    <button className="primary-btn">
                        Get a Free Quote
                    </button>
                    <button className="secondary-btn">
                        Schedule a Demo
                    </button>
                </div>


                <div className="hero-stats">
                    <div>
                        <strong>24/7</strong>
                        <span>Support</span>
                    </div>
                    <div>
                        <strong>4K</strong>
                        <span>Surveillance</span>
                    </div>
                    <div>
                        <strong>100%</strong>
                        <span>Scalable</span>
                    </div>
                </div>

            </div>

            
            <div className="hero-visual">
                <div className="control-room">
                    <div className="camera-screen screen-one">
                        <span>CAM 01</span>
                    </div>
                    <div className="camera-screen screen-two">
                        <span>CAM 02</span>
                    </div>
                    <div className="camera-screen screen-three">
                        <span>CAM 03</span>
                    </div>
                    <div className="camera-screen screen-four">
                        <span>CAM 04</span>
                    </div>

                    <div className="network-line"></div>
                </div>
            </div>
        </section>
     );
}

export default Hero;