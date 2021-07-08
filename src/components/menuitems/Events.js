import React from 'react'

const Events = () => {
    return (
        <div className="events">
            <h3 className="articale--title">Events</h3>
            <iframe 
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%233f7b95&amp;ctz=America%2FNew_York&amp;src=Y2trdDFsdWc0a3ZlYTkwbzUyaW9ob2I0OWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23C0CA33&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
                frameborder="0" 
                scrolling="no"
                title="brewery calander"
            >
            </iframe>
        </div>
    )
}

export default Events