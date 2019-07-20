import React, { useState } from 'react'
import { isSymbol } from 'util';

const SeriesList = () => {
    const [series, setSeries] = useState([ // This could come from an API
        { id: 1, title: "How I met your mother" },
        { id: 2, title: "Riverdale" },
        { id: 3, title: "Dynasty" },
        { id: 4, title: "Game of Thrones" },
        { id: 5, title: "The Originals" },
        { id: 6, title: "Hit the floor" },
        { id: 7, title: "Power" },
        { id: 8, title: "Once upon a time" },
    ])
    const addSeries = () => {
        setSeries([...series, { title: "The Vampire diaries", id: 9 } ])
    }
    return (
        <div>
            <ul>
                { series.map(item => (<li key={item.id}>{item.title}</li>)) }
            </ul>
            <button onClick={addSeries}>Add Series</button>
        </div>
    )
}

export default SeriesList
