import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'

function Homepage() {

  const[serverRes,setserverRes]=useState({})

  const handleresponse=(res)=>{
    setserverRes(res)
  }

  return (

    <>

      <h1 className='ms-5 mb-5' style={{color:'black'}}><b>ALL VIDEO CARDS</b></h1>

      <Link to={'/watchhistory'} style={{textDecoration:"none",fontSize:"25px", color:"red"}}>Watch History</Link>

      <div className='container-fluid'>

        <Row>

          {/* Add component selector */}

          <Col lg={1}>
          
            <Add handleresponse={handleresponse}/>

          </Col>

          {/* View component selector */}

          <Col lg={7}>
          
            <View serverRes={serverRes}/>
          
          </Col>

          {/* category component selector */}
          
          <Col lg={4}>

            <Category/>

          </Col>

        </Row>

      </div>

    </>

  )

}

export default Homepage