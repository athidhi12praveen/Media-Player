import React from "react";
import { PlusCircle } from "react-feather";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { addVideo } from "../service/allapi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({handleresponse}) {

  const [uploaddata, setUploaddata] = useState({
    id: "", caption: "", thumbnail: "", url: "",
  });

  // define setinput function

  const setInput = (e) => {

    const { name, value } = e.target;

    //  ... is called spread operator --------- if a object value in a state are placed as a key value pair and when we give the value to a key then the other key in the object are shown to be empty

    setUploaddata({ ...uploaddata, [name]: value });

    // setUploaddata(e.target.value)

  };

  console.log(uploaddata);

  // extract embedded url from youtube original url

  const extractUrl = (e) => {

    let youtubeurl = e.target.value;

    if (youtubeurl.includes("v=")) {

      let index = youtubeurl.indexOf("v=");

      console.log(index);

      let videourl = youtubeurl.substring(index + 2, index + 13);

      console.log(videourl);

      let videodata = uploaddata;

      videodata.url = `https://www.youtube.com/embed/${videourl}`;

      setUploaddata(videodata);

    }

    console.log(uploaddata);

  };

  const handleAdd = async () => {

    // destructure the state

    const { id, caption, thumbnail, url } = uploaddata;

    if (!id || !caption || !thumbnail || !url) {

      toast.error("Please fill the form completely");

    } 

    else {

      let response = await addVideo(uploaddata);

      if (response.status >= 200 && response.status < 300) {

        // console.log(response.data);

        handleresponse(response.data)

        setShow(false);

        toast.success("New Video Uploaded Successfully....", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      } 

      else {
        toast.warning("Provide a unique ID...!");
      }

    }

  };

  // state for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (

    <>

      <div onClick={handleShow} className="btn">

        <PlusCircle size={70} style={{ marginTop: "-10px", color: "black" }} />

      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>

        <Modal.Header closeButton>

          <Modal.Title>Upload Video Details</Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form>

            {/* id number */}

            <FloatingLabel className="mb-3" controlId="floatingid" label="Video Id">

              <Form.Control name="id" onChange={setInput} type="text" placeholder=" Video Id"/>

            </FloatingLabel>

            {/* caption */}

            <FloatingLabel className="mb-3" controlId="floatingcaption" label=" Video Caption">

              <Form.Control name="caption" onChange={setInput} type="text" placeholder="Video Caption"/>
              
            </FloatingLabel>

            {/* Uploading video cover image url */}

            <FloatingLabel className="mb-3" controlId="floatingimage" label="Cover Image url">
              <Form.Control name="thumbnail" onChange={setInput} type="text" placeholder=" Cover Image url"/>

            </FloatingLabel>

            {/* Uploading video link */}
            
            <FloatingLabel className="mb-3" controlId="floatinglink" label=" Video Link">

              <Form.Control name="url" onChange={extractUrl} type="text" placeholder="Video Link"/>

            </FloatingLabel>

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>Cancel</Button>

          <Button onClick={handleAdd} variant="dark">Add</Button>

        </Modal.Footer>

      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Add;
