import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FolderGroup(props) {
  const { icon, title } = props;
  return (
    <React.Fragment>
      <IconBox>
        <FontAwesomeIcon icon={icon} size="3x" color="#81BEF7" />
      </IconBox>
      <NameBox>{title}</NameBox>
    </React.Fragment>
  );
};

const IconBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NameBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
`