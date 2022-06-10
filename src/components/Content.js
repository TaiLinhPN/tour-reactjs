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
{/*                 
                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />

                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />

                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />
                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />

                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />

                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />
                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" />

                <Tour img="https://storage.googleapis.com/vntravel-fe/f82fa207dfb16df6831791c04ec6524b/130b6b6143e4eda9ec1567175a690b1f/dac026fdbcce80c2d3be743fd14f02c8.png"
                    name="Tour 1 Ngày: Tham quan Phan Thiết"
                    price="100.999"
                    adress="Bình Thuận" /> */}
            </div>
        </div>
    )
}
export default Content