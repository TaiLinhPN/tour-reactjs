

function CheckBox(props) {
    return (
        <div>
            <input type="checkbox" id={props.id} name={props.name} value={props.value}/>
            <label for={props.id}> {props.text}</label>
        </div>
    )
}

export default CheckBox

