import { useStore } from "@store"
import { useState } from "preact/hooks"
import Card from "../components/Card.jsx"

export default function Recommended (props) {
    const [section, setSection] = useState("feed-recommended")

    useStore(section, {
        pointer: props.store,
        onChange: (state) => setSection(state),
    })


    return (
        <section id="recommended">
            <Card 
                publisher="ikerovski"
                content="DJ"
                image="https://images.lucasfox.com/development/4x3_1600w/E81A69BE2E.jpg"
            />
        </section>
    )
}