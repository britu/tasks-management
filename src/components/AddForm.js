import { useState } from "react"

const AddForm = ({add}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert('Please fill teh text field')
        }

        add({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Text</label>
                <input type="text" placeholder="Place the text" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Text</label>
                <input type="text" placeholder="Place the text" value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Reminder</label>
                <input type="checkbox" value={reminder} checked = {reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value='submit' className="btn btn-block" />
        </form>
    )
}

export default AddForm
