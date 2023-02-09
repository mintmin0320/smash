import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

export default function ImgUpload() {
  if (typeof window !== 'undefined') {
    var userId = localStorage.getItem("userId");
  }

  const [state, setState] = useState({
    fileName: '',
  });

  const fileInputRef = useRef(null);

  const uploadImage = async (e) => {
    const url = `/user/profile-upload/${userId}`;
    if (e.target.files === null) return;

    const file = e.target.files[0];
    console.log('file', file);

    const formData = new FormData();
    formData.append("file", file);

    // /* key 확인하기 */
    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    // /* value 확인하기 */
    // for (let value of formData.values()) {
    //   console.log(value);
    // }

    try {
      const res = await axios.post(url, formData);
      console.log(res);

      if (res.status === 200) {
        console.log("이미지 업로드 성공!");
        window.location.reload();
      }
      else {
        alert("이미지 업로드 실패!");
      }

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

  const getProfileData = async () => {
    const url = `/user/profile-download/${userId}`
    const res = await axios.post(url);
    console.log(res);
    try {
      setState({
        ...state,
        fileName: res.data.user.fileName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [])
  return (
    <>
      <input
        type="file"
        name="myFile"
        hidden={true}
        ref={fileInputRef}
        onChange={uploadImage}
        accept="image/png, image/jpeg, image/jpg"
      />
      <ProfileBox>
        <Profile
          onClick={openFileInput}
          src={`http://localhost:8080/images/${state.fileName}`}
        ></Profile>
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

const Profile = styled.img`
  width: 70%;
  height: 80%;
  border-radius: 50%;
  cursor: pointer;
  /* object-fit: fill; */
  /* border: solid 2px #D8D8D8; */
`
