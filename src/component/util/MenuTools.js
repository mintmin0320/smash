import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

export default function MenuTools() {
  const now = new Date();
  let month = now.getMonth() + 1;
  month = month >= 10 ? month : month;
  const date = now.getDate();
  const day = now.getDay();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  let hour = now.getHours();
  const meridiem = hour <= 12 ? '오전' : '오후';
  hour = hour <= 12 ? hour : hour - 12;
  return (
    <React.Fragment>
      <ToolMenu>
        <FontAwesomeIcon icon={faPowerOff} />
      </ToolMenu>
      <CenterMenu />
      <WidgetMenu>
        {month}월 {date}일 ({dayList[day]}) {meridiem} {hour}:{ }
      </WidgetMenu>
    </React.Fragment >
  )
}


const ToolMenu = styled.div`
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CenterMenu = styled.div`
  width: 71%;
  height: 100%;
  display: flex;
`

const WidgetMenu = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`