import LikeButton from "../islands/LikeButton.jsx"
import ShareIcon from "./Icons/ShareIcon.jsx"
import TextBubbleIcon from "./Icons/TextBubbleIcon.jsx"

export default function Card(props) {
    const image = props.image
    const publisher = props.publisher
    const content = props.content

    return (
        <div className="card">
            <div className="content">
                <h2>
                    {publisher}
                </h2>
                <p>
                    {content}
                </p>
            </div>
            <img src={image} alt={`Imagen de ${publisher}`} />
            <div className="buttons">
                <LikeButton />
                <button>
                    <TextBubbleIcon />
                </button>
                <button className="share">
                    <ShareIcon />
                </button>
            </div>
        </div>
    )
}