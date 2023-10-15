import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search order #" value={query} onChange={e => setQuery(e.target.value)}
                className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase trakin-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed" />
        </form>
    )
}

export default SearchOrder
