import { useStore } from "@store"
import { useState } from "preact/hooks"

export default function Recommended (props) {
    const [section, setSection] = useState(props.store)

    useStore(section, {
        pointer: props.store,
        onChange: (state) => setSection(state),
    })


    return (
        <section id="recommended">
            {section}
        </section>
    )
}