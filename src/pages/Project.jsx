import React, { useEffect, useState } from 'react'
import { getAllProject } from '../../Services/allApi';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardItems from '../components/CardItems';





function Project() {

  const [allProject, setAllProject] = useState()
  console.log(allProject)

  useEffect(() => {
    getAllProjects()
  }, [])




  const getAllProjects = async () => {

    const token = sessionStorage.getItem("token")

    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Beror ${token}`
      }


      try {

        const result = await getAllProject(reqHeader)
        console.log(result);

        if (result.status == 200) {
          setAllProject(result.data)
        } else {
          toast.error(result.response.data)
        }


      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <div>
        <div className='d-flex'>



          {
            allProject?.length>0 &&
              allProject.map(proj=>(
                <CardItems proj={proj} />
              ))
              

}


        </div>
      </div>
    </>
  )
}

export default Project