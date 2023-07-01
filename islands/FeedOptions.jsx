import { useStore, Stores } from "@store"

export default function FeedOptions (props) {
    useStore("feed-recommended", {
        pointer: props.store,
    })


    const changeFeedSection = () => {
        const currentSection = Stores.get(props.store).state
        document.querySelector(`h3.${currentSection}`).classList.remove("highlight-feed")

        if (currentSection === "feed-recommended") {
            Stores.get(props.store).set("feed-followed")
        } else if (currentSection === "feed-followed") {
            Stores.get(props.store).set("feed-recommended")
        }
        document.querySelector(`h3.${Stores.get(props.store).state}`).classList.add("highlight-feed")
    }

    return (
        <div className="feed-options">
            <h3 className="feed-recommended highlight-feed" onClick={changeFeedSection}>
                Para ti
            </h3>
            <h3 className="feed-followed" onClick={changeFeedSection}>
                Seguidos
            </h3>
        </div>
    )
}