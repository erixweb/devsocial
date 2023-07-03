import { useSignal } from "@preact/signals"
import HeartIcon from "../components/Icons/HeartIcon.jsx"
import FilledHeartIcon from "../components/Icons/FilledHeartIcon.jsx"

export default function LikeButton() {
    const isLiked = useSignal(false)

    return (
        <button onClick={() => { isLiked.value = !isLiked.value }}>
            {!isLiked.value ?
                <HeartIcon />
                :
                <FilledHeartIcon />
            }
        </button>
    )
}