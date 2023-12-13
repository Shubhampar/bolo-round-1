import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

  function ShowForm() {
    const [DeleteId,SetDeleteId]=useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [allData,setALlData]=useState([])
    const Navigate = useNavigate();
  
    async function fetchData() {
      let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/form`);
      setALlData(res.data);
    }
  
    async function handleDelete() {
      let res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/form/${DeleteId}`);
      onClose()
      setALlData((prev)=>prev.filter((el)=>el._id !== DeleteId))
    }
    
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <div className="max-w-[1200px] mx-auto mt-5 p-3">
  <div className="flex items-start flex-col sm:flex-row sm:justify-between sm:items-center mb-[20px]">
    <h2 className="text-blue-500 text-5xl font-bold">Forms</h2>
    {/* <button
      onClick={() => Navigate("/form/New")}
      className="flex items-center gap-3 text-white px-4 py-2 rounded-md text-lg bg-black hover:text-black hover:bg-white hover:border-2 border-black"
    >
      <FiPlusCircle size={"25px"} />
      Create New Form
    </button> */}
    <button
  onClick={() => Navigate("/form/New")}
  className="flex items-center gap-2 px-4 py-2 rounded-md text-lg bg-blue-500 text-white border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-transparent transition-all duration-300"
>
  <FiPlusCircle size={"25px"} />
  <span>Create New Form</span>
</button>
  </div>

  {allData.length === 0 ? (
    <h2 className="text-center font-semibold text-lg my-5">Loading <span id="loaderAnimation">. . .</span></h2>
  ) : null}

  <div className="grid gap-5">
    {allData.map(data => (
      <div key={data._id} className="border-4 border-gray-100 p-5 rounded-lg flex justify-between items-center hover:border-blue-200">
        <h3 className="font-semibold text-3xl capitalize text-blue-500">{data.title}</h3>
        <div className="flex gap-3">
          <button className="py-1 px-3 rounded-md text-white font-semibold bg-blue-500" onClick={() => Navigate(`/view/${data._id}`)}>Preview</button>
          <button className="py-1 px-3 rounded-md text-white font-semibold bg-green-500" onClick={() => Navigate(`/form/${data._id}`)}>Edit</button>
          <button className="py-1 px-3 rounded-md text-white font-semibold bg-red-500" onClick={() => { SetDeleteId(data._id); onOpen() }}>Delete</button>
        </div>
      </div>
    ))}
  </div>

  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent padding={"10px"}>
      <ModalCloseButton bg={"white"} />
      <ModalHeader textAlign={"center"} fontSize={'25px'}>Confirm Delete</ModalHeader>
      <ModalBody display={"flex"} justifyContent={'space-around'}>
      <button onClick={handleDelete} className="px-10 py-1 text-[20px] font-bold rounded-md text-white bg-green-500">Yes</button>
      <button onClick={onClose} className="px-10 py-1 text-[20px] font-bold rounded-md text-white bg-red-500">NO</button>
      </ModalBody>
    </ModalContent>
  </Modal>
</div>
    );
  }
  
  export default ShowForm;
