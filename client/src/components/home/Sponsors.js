
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sponsors = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="sponsors" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Our Sponsors</h2>
                    </div>
                    <div className="col-12">
                        <div className="sponsors-bx wow zoomIn">
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme sponsors-slider"
                            >
                                <div className="item">
                                    <img
                                        src="/assets/sponsor1.png"
                                        alt="Sponsor"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="/assets/sponsor2.png"
                                        alt="Sponsor"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="/assets/sponsor3.png"
                                        alt="Sponsor"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="/assets/sponsor4.png"
                                        alt="Sponsor"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="/assets/sponsor5.png"
                                        alt="Sponsor"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="/assets/sponsor6.png"
                                        alt="Sponsor"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="/assets/sponsor7.png"
                                        alt="Sponsor"
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
