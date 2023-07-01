import { signal } from "@preact/signals"


export default function FeedOptions() {
    const feedSection = signal("feed-recommended")

    const changeFeedSection = () => {
        document.querySelector(`h3.${feedSection}`).classList.remove("highlight-feed")
        if (feedSection.value === "feed-recommended") {
            feedSection.value = "feed-followed"
        } else {
            feedSection.value = "feed-recommended"
        }
        document.querySelector(`h3.${feedSection}`).classList.add("highlight-feed")
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