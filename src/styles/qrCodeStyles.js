import styled from 'styled-components';

import px2vw from '../utils/responsiveness/px2vw'

import { Input, Form } from '@rocketseat/unform';
import Background from "../assets/images/fundo_cadastro.png";

export const ImgContainer = styled.div`
  width: ${px2vw(800)};
  height: ${px2vw(800)};

  cursor: pointer;

  ${(props) => props.isMobile && `
    width: ${px2vw(1400)};
    height: ${px2vw(1250)};
  `}

  ${(props) =>`
    width: ${props.width};
    height: ${props.height};
  `}

`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${px2vw(80)};
  margin-top: ${px2vw(40)};

  ${(props) => props.isMobile && `
    margin-top: ${px2vw(70)};
    margin-left: ${px2vw(600)};
  `}
`;

export const InputData = styled(Input)`
  padding: ${px2vw(2)} !important;
  padding-left: ${px2vw(30)} !important;;
  border: ${px2vw(2)} solid #DBDBDB !important;
  border-radius: ${px2vw(99)} !important;
  font-size: ${px2vw(40)} !important;
  font-weight: bold !important;
  letter-spacing: 0.36px !important;
  width: ${px2vw(800)} !important;
  height: ${px2vw(100)} !important;

  ::placeholder {
    color: #A3A3A3 !important;
  }

  :focus {
    border: ${px2vw(2)} solid #A3A3A3 !important;
    box-shadow: none !important;
  }

  ${(props) => `
      width: ${props.width} !important;
      height: ${props.height} !important;
      margin-top: ${props.margtop} !important;
      border: ${props.border} !important;
      border-radius: ${props.borderRadius} !important;
   `};

  ${(props) =>
    props.disabled &&
    `
      background: #DBDBDB !important;
      color: #3E393E !important;
      border: 1px solid #A3A3A3 !important;
    `};

  ${(props) =>
    props.empty &&
    `
      border: 1px solid #FF4343 !important;
    `};
`;

export const InputTitle = styled.div`
  font-weight: bold;
  font-size: ${px2vw(60)};
  color: #FFFFFF;
  text-align: center;
  ${(props) => `
    font-weight: ${props.fontweight};
    cursor: ${props.cursor};
  `}
`;

export const FormBox = styled(Form)`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ConfirmButton = styled.button`
  border: none;
  border-radius: ${px2vw(99)};
  background-color: #ff6b99;
  font-weight: bold;
  height: ${px2vw(100)} !important;;
  width: ${px2vw(500)};
  color: #FFFFFF;
  margin-top: ${px2vw(25)};
`;

export const BackgroundImage = styled.div`
  width: ${px2vw(390)};
  height: ${px2vw(215)};
  background-image: url(${Background});
  background-size: ${px2vw(390)} ${px2vw(215)};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: start;

  ${(props) => props.isMobile && `
    width: ${px2vw(1400)};
    height: ${px2vw(1250)};
    background-size: ${px2vw(1400)} ${px2vw(1250)};
  `}
`;