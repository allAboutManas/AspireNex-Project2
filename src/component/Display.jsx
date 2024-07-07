import React from 'react'

export default function Display({ arrHabbit, toarrHabbit }) {
    function handleDelete(ind) {
        const updatehabbit = arrHabbit.filter((element, index) => ind !== index);
        toarrHabbit(updatehabbit);
    }
    const myhabbit = arrHabbit.map((element, index) => (<tr key={index}> <td>{element.name}</td>  <td>{element.assign}</td><td>{element.deadline}</td><td>{element.assigndate}</td> <td><button className='btn' onClick={() => handleDelete(index)}>Delete</button></td></tr>))
    if (arrHabbit.length === 0) {
        return (
            <h1 className='notask'> No tasks</h1>
        )
    }
    else {
        return (
            <div>
                <table className='displaybox'>
                    <tr>

                        <th>Project Name</th>
                        <th>Assign to</th>
                        <th>Deadline</th>
                        <th>Assign Date</th>
                        <th>Remove</th>
                    </tr>
                    {myhabbit}
                </table>
            </div>
        )
    }
}
