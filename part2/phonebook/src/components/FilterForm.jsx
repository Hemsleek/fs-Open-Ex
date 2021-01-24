import React from 'react'

function FilterForm({filtered , setFiltered}) {
    return (
        
        <div>
            filter shown with <input value={filtered} onChange={(e) => setFiltered(e.target.value)}/>
        </div>
    )
}

export default FilterForm
