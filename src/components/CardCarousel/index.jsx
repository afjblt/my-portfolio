import { CardCarouselContainer } from "./styles";

function CardCarousel({ src, title, description, vercel, github }) {
    return ( 
        <CardCarouselContainer>
            <div className="image">
                <img src={src} alt={title} />
            </div>
            <div className="info">
                <span>{title}</span>
                <p>{description}</p>

                <div className="buttons">
                    <a href={vercel} target='_blank'>View Live</a>
                    <a href={github} target='_blank'>Github Repo</a>
                </div>
            </div>
        </CardCarouselContainer>
     );
}

export default CardCarousel;