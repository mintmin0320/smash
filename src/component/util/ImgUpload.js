import axios from 'axios';
import React, { useState, useRef } from 'react'
import styled from 'styled-components';

export default function ImgUpload() {
  const fileInputRef = useRef(null);

  const uploadImage = async (e) => {
    if (e.target.files === null) return;

    const file = e.target.files[0];
    console.log('file', file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(``, formData, {
        headers: { "Context-Type": "multipart/form-data" }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const openFileInput = () => {
    const fileInput = fileInputRef.current;
    if (fileInput) {
      fileInput.click();
    }
  }
  return (
    <>
      <input type="file" hidden={true} ref={fileInputRef} onChange={uploadImage}></input>
      <ProfileBox>
        <Profile
          onClick={openFileInput}
        />
      </ProfileBox>
    </>
  )
}

const ProfileBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Profile = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 50%;
  border: solid 2px #D8D8D8;
`

