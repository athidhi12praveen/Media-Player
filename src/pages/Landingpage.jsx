import React from 'react'
import { Row , Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  // redirect from one page to another page

  const navigate=useNavigate()

  // function definition

  const handlenavigate=()=>{

    // page we want to redirect
    
    navigate('/home')

  }

  return (
    <> 
      
      <div>
        <Row>
  
        <Col></Col>
  
        <Col lg={5} style={{marginTop:'125px',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
  
          <h1 style={{textAlign:'center'}}><b>WELCOME VIDEO TALK</b></h1>
  
          <p style={{textAlign:'justify', marginTop:'25px', lineHeight:'30px'}}>Where user can use their favourite videos. A user can upload any YouTube videos by copying and pasting their url in to Video.com. It will allow to add and remove the uploaded videos and also arrange them in different categories by drag and drop and it is free try it now...!!! </p>
  
          <button onClick={handlenavigate} className='btn btn-dark' style={{marginTop:'20px', padding:'13px'}}>Click Here to Know More</button>
  
      </Col>
  
      <Col lg={6} style={{marginTop:'70px'}} className='image'>
  
        <img src="https://img.freepik.com/premium-photo/youtube-logo-black-background-3d-rendering_494516-341.jpg" alt="no image" width="550px" height="850px" className='img-fluid' style={{marginLeft:'100px',marginTop:'30px',borderRadius:'20px',marginBottom:'180px'}}/>
  
      </Col>
  
        </Row>
  
      </div>
    </>
  )
}

export default Landingpage