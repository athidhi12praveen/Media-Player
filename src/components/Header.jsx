import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Upload} from 'react-feather'
import { Link } from "react-router-dom";

function Header() {

  return (

    <>
      <Navbar className="bg-dark">

        <Container>

          <Navbar.Brand>

            <span className="text-light">

              {/* going to langing page */}
              <Link to={'/'} style={{textDecoration:'none', color:'white'}}>

                <Upload/> <span>VIDEO TALK</span>

              </Link>
                
            </span>

          </Navbar.Brand>

        </Container>

      </Navbar>

    </>

  );

}

export default Header;
