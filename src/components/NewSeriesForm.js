import React, { useState } from 'react'

const NewSeriesForm = ({ addSeries }) => {
    const [seriesName, setSeriesName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addSeries(seriesName)
        setSeriesName("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Series name:</label>
            <input type="text" required value={seriesName} onChange={(e) => setSeriesName(e.target.value)}/>
            <input type="submit" value="Add Series" />
        </form>
    )
}

export default NewSeriesForm
