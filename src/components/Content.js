import Tour from "./Tour"
import SiteBar from "./SiteBar"

import { useState, useEffect } from 'react'


function Content() {

    const [tours, setTour] = useState([])

    useEffect(() => {
        fetch("https://61daee3c4593510017aff71b.mockapi.io/tours")
            .then(res => res.json())
            .then(tours => {
                setTour(tours)
            })
    }, [])


    return (
        <div className="row content">
            <div className="col c-3">
                <SiteBar />
            </div>
            <div className="col c-9 row">
                {tours.map(tour =>(
                    <Tour key={tour.id} img={tour.img}
                    name={tour.name}
                    price={tour.price}
                    adress={tour.adress}/>
                ))}
            </div>
        </div>
    )
}
export default Content