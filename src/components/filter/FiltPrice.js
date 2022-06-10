// import CheckBox from "./CheckBox"
import  { useState } from 'react';

const price = [
    {
        id: 0,
        name: "Tất cả"
    },
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

    const [check, setCheck] = useState(0)

    console.log(check)

    // const  get =()=> {
    //     console.log(check)
    // }
    return (
        <div className="find-box">
            <div className="find-header second-header">Khoảng giá</div>
            {/* <CheckBox  id="1" name="price1" value="1" text="giá" /> */}
            {
                
                price.map(price => (
                    <div key={price.id}>
                      
                        <input className='filt-radio' type="radio"
                        
                        checked={price.id === check}
                            onChange={() =>setCheck(price.id)}
                        /> {price.name}
                    </div>
                ))
            }
            {/* <button onClick={()=>get()}>submid</button> */}
            <div className="line-find"></div>
        </div>
    )
}

export default FiltPrice