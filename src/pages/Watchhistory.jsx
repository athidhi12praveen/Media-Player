import React, { useEffect, useState } from 'react'
import { deleteHistory, getHistory } from '../service/allapi'

function Watchhistory() {

    const[history,sethistory]=useState([])

    useEffect(() => {
      getwatchHistory()
    }, [])
    

    const getwatchHistory=async()=>{
        const {data}=await getHistory()
        sethistory(data)
    }
    console.log(history);

    const removeHistory =async (id)=>{
        // delete api call
        const res = await deleteHistory(id)
        console.log(res);
        getwatchHistory()
    }
    

  return (

    <>
    
        <h2 className='text-danger'>Watch History</h2>

        <table className='table-shadow m-3 rounded border w-100 text-center' >

            <thead>

                <tr>

                    <th className='pt-3 pb-3'>ID</th>
                    <th className='pt-3 pb-3'>NAME</th>
                    <th className='pt-3 pb-3'>URL</th>
                    <th className='pt-3 pb-3'>DATE</th>
                    <th className='pt-3 pb-3'>REMOVE HISTORY</th>

                </tr>

            </thead>

            <tbody>

                {
                    history?.map((item,index)=>(

                        <tr>

                            <td>{index+1}</td>
                            <td>{item?.CategoryName}</td>
                            <td>{item?.url}</td>
                            <td>{item?.date}</td>
                            <td><button onClick={()=>removeHistory(item?.id)} className='btn btn-warning mt-4 mb-2'>Remove</button></td>

                        </tr>

                    ))
                }

            </tbody>

        </table>
    
    </>

  )
}

export default Watchhistory