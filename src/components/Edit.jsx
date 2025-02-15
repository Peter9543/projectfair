import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SERVER_URL from '../../Services/ServerUrl';
import { editprojectapi } from '../../Services/allApi';
import { useContext } from 'react';





function Edit({projec}) {

  const [projectDetails, setProjectDetails]=useState({id:projec?._id,title:projec?.title,language:projec?.language,github:projec?.github,link:projec?.link,overview:projec?.overview,prjctImg:""})
 //console.log(proj);
 
   const [preview,setPreview]=useState("")
   const [isValidfile,setIsValidfile]=useState(false);

  const [show, setShow] = useState(false);
  
    const handleClose = () =>{ setShow(false);

      setProjectDetails({title:projec?.title,language:projec?.language,github:projec?.github,link:projec?.link,overview:projec?.overview,prjctImg:""})

    }
    const handleShow = () => setShow(true);
     useEffect(()=>{
        if(projectDetails.prjctImg.type=="image/png" || projectDetails.prjctImg.type=="image/jpg" || projectDetails.prjctImg.type=="image/jpeg"){
          setIsValidfile(true)
          // temprary store (for only show image)
          setPreview(URL.createObjectURL(projectDetails.prjctImg))
    
        }else{
          setIsValidfile(false)
          setProjectDetails({...projectDetails,prjctImg:""})
          setPreview("")
        }
      },[projectDetails.prjctImg])

      const handleupdate=async()=>{
        const {title,language,projec,github,link,overview,prjctImg}=projectDetails
        if(title,language,projec,github,link,overview){
          //Api Call
          //Req body

          const reqbody=new FormData()
          reqbody.append("title",title)
          reqbody.append("language",language)
          reqbody.append("github",github)
          reqbody.append("link",link)
          reqbody.append("overview",overview)
          preview?reqbody.append("projecimg",prjctImg):reqbody.append("projecimg",projec?.prjctImg)

          //req header

          const token=sessionStorage.getItem("token")
          if (token){


            const reqHeader={
              "Content-Type":preview?"multipart/form-data":"application/json",
              "Authorization":`Beror ${token}`
            }
            try{
              const result=await editprojectapi(id,reqbody,reqHeader)
              console.log(result);
              
            }
            catch(err){
              console.log(err);
              if(result.data=200){
                handleClose()
                seteditresponse(result.data)
              }
              else{
                console.log(result.response);
                
              }


              
            }
    
          }
        }
        else{
          toast.warning("fill the form completelt")
        }
      }


  return (
    <>
    <Button onClick={handleShow} variant="outline-dark"><i class="fa-regular fa-pen-to-square"></i></Button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col lg={5}>
              <label >
                <input type="file" style={{ display: 'none' }} onChange={(e)=>setProjectDetails({...projectDetails,prjctImg:e.target.files[0]})} />
                <img style={{height:'320px',width:'20rem'}} src={preview?preview:`${SERVER_URL}/uploads/${projec?.prjctImg}`} alt="" />
              </label>
              {
                !isValidfile &&
                <div className='text-danger text-center '  style={{fontSize:'14px'}}>
                **upload only the following file type (jpg,jpeg,png)**
              </div>}
            </Col>
            <Col lg={7} className='p-2'>
              <form action="">

                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Project title"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                  onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>


                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Language Used"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                  onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>


                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Github link"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                  onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Project Website"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                  onChange={(e)=>setProjectDetails({...projectDetails,link:e.target.value})}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Project OverView"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                  onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>


              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupdate} variant="success">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit