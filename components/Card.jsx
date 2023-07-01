export default function Card (props) {
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
                <button>
                    Like
                </button>
                <button>
                    Share
                </button>
            </div>
        </div>
    )
}