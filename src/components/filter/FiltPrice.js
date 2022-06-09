// import CheckBox from "./CheckBox"
import  { useState } from 'react';

const price = [
    {
        id: 1,
        name: "từ 0 đến 10"
    },
    {
        id: 2,
        name: "từ 10 đến 20"
    },
    {
        id: 3,
        name: "từ 20 đến 30"
    }
]

function FiltPrice() {

    const [check, setCheck] = useState()

    const  get =()=> {
        console.log(check)
    }
    return (
        <div>
            {/* <CheckBox  id="1" name="price1" value="1" text="giá" /> */}
            {
                price.map(price => (
                    <div key={price.id}>
                        <input type="radio"
                        checked={price.id === check}
                            onChange={() =>setCheck(price.id)}
                        /> {price.name}
                    </div>
                ))
            }
            <button onClick={()=>get()}>submid</button>
        </div>
    )
}

export default FiltPrice