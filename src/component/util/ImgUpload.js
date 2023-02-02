import axios from 'axios';
import React, { useState, useRef } from 'react'
import styled from 'styled-components';

export default function ImgUpload() {
  const [state, setState] = useState({
    aa: '',
  });

  const fileInputRef = useRef(null);

  const uploadImage = async (e) => {
    const url = `/user/user-profile`;

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
      const res = await axios.post(url, formData, {});
      console.log(res);

      if (res.status === 200) {
        alert("이미지 업로드 성공!");
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

