import React from 'react'


export default function pageSection({section}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: section }}>
            
        </div>
    )
}
