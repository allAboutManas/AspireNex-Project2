import React, { useState } from 'react'
import "./style.css"

export default function Habitmaker({array}) {
    const [habbit,SetHabbit]=useState({name:"",assign:"",deadline:"",assigndate:""});
    function handleChange(e){
        e.preventDefault();
        SetHabbit({...habbit,[e.target.id]:e.target.value,})
    }
    function handleSubmit(e){
        e.preventDefault();
        array(habbit);
        SetHabbit({name:"",assign:"",deadline:"",assigndate:""})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input type="text" className='what' id="name" value={habbit.what} onChange={handleChange} placeholder=' Project Name' required/>
                <input type="text" className='where' id="assign" value={habbit.where} onChange={handleChange} placeholder=' Assigned To' required/><br />
                <input type="text" className='why' id="deadline" value={habbit.why} onChange={handleChange} placeholder='Deadline' required/>
                <input type="date" className='when' id="assigndate" value={habbit.when} onChange={handleChange} required/>
                <button className='savebtn' >Save</button>

            </form>
        </div>
    )
}
