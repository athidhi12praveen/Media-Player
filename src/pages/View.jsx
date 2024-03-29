import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'

function View({serverRes}) {

  const[deleteStatus,setdeleteStatus]=useState(false)

  // to get delete response

  const handleDeleteStatus=(res)=>{
    setdeleteStatus(res)
  }

  
  // to store API response ---- create a state 
  const[allVideos,setallVideos]=useState([])

  useEffect(() => {

    // call get videos

    getallVideos()
  
  }, [serverRes,deleteStatus])

  // create a function

  const getallVideos=async()=>{

    const response = await getVideo()

    // console.log(response.data);

    setallVideos(response.data)

  }

  console.log(allVideos);
  
  return (

    <>

        <div className='border p-3 rounded ms-5 me-5'>

            <Row>

              { 

                allVideos.map(video=>(

                  <Col className='p-3 mb-3' sm={12} md={6}>

                    <VideoCard card={video} handleDeleteStatus={handleDeleteStatus}/>
                    
                  </Col>

                ))
                
              }

            </Row>

        </div>
    
    </>

  )

}

export default View