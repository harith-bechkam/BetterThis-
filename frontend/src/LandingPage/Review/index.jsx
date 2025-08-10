import { useNavigate } from 'react-router-dom';
import './review.css';

const Index = () => {
    const navigate = useNavigate()

    const images = [
        { img: "../asset/image/fullstack.jpg" },
        { img: "../asset/image/frontend.jpg" },
        { img: "../asset/image/backend.jpg" },
        { img: "../asset/image/database.jpg" },
        { img: "../asset/image/frontend.jpg" },
    ];

    const totalImagesNeeded = 34 * 2;

    let repeatedImages = Array.from({ length: totalImagesNeeded }, (_, i) => {
        return images[i % images.length];
    });

    for (let i = repeatedImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [repeatedImages[i], repeatedImages[j]] = [repeatedImages[j], repeatedImages[i]];
    }

    return (
        <section className="review">
            <div className="upper">
                <div className="rut">
                    <h2>Smart. Motivated</h2>
                    <h2 className="Inventive">Inventive</h2>
                    <h3 className='career'>Build A Career With BetterThis</h3>
                </div>

                <div>
                    <button className="join-btn" onClick={() => navigate("/contact")}>Join Our Talent</button>
                </div>

                <div className="rutConnect">
                    <h2>Connect With Us</h2>
                    <h2 className="Inventive">+1 (800) 123-4567</h2>
                    <h5>info@betterthis.com</h5>
                </div>
            </div>

            <div className="mid">
                <div className="image-overlay">
                    <p className="overlay-text">Let’s Spark Your Passion!</p>
                    <span className="overlay-span-text">Students Experience Reimagined</span>
                </div>

                <div className="image-row">
                    {repeatedImages.map((item, index) => (
                        <img key={index} src={item.img} alt={`img-${index}`} />
                    ))}
                </div>
            </div>

            <div className="divider-wrapper">
                <div className="divider"></div>
            </div>

            <h1 className="reason">  We Are BetterThis For A Reason</h1>


        </section>
    );
}

export default Index;
