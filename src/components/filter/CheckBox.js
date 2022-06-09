

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

    const get = () => {
        console.log(check)
    }
    return (
        <div>
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
            <button onClick={() => get()}>submid</button>
        </div>
    )
}

export default CheckBox

