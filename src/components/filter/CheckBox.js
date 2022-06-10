

// function CheckBox(props) {
//     return (
//         <div>
//             <input type="checkbox" id={props.id} name={props.name} value={props.value}/>
//             <label htmlFor={props.id}> {props.text}</label>
//         </div>
//     )
// }

// export default CheckBox

// import CheckBox from "./CheckBox"
import { useState } from 'react';

const price = [
    {
        id: 1,
        name: "Hà Nội"
    },
    {
        id: 2,
        name: "Đà Nẵng"
    },
    {
        id: 3,
        name: "Hồ Chí Minh"
    }
]

function CheckBox() {

    const [check, setCheck] = useState([])
    console.log(check)

    const tick = (id) => {
        setCheck(
            prev => {
                if (check.includes(id)) {
                    return check.filter(item => item !== id)
                }
                else {

                    return [...prev, id]
                }
            }
        )

    }

    // const get = () => {
    //     console.log(check)
    // }
    return (
        <div className="find-box">
            <div className="find-header second-header">Chủ đề</div>

            {/* <CheckBox  id="1" name="price1" value="1" text="giá" /> */}
            {
                price.map(price => (
                    <div key={price.id}>
                        <input type="checkBox"
                            checked={check.includes(price.id)}
                            onChange={() => tick(price.id)}
                        /> {price.name}
                    </div>
                ))
            }
            {/* <button onClick={() => get()}>submid</button> */}
            

        </div>
    )
}

export default CheckBox

