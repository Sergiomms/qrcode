import React, { useEffect, useState } from "react";
import RealTimeDimensions from "../../utils/responsiveness/RealTimeDimensions";
import {
  qrCodeRequest,
  qrCodeEdit,
  qrCodeSelector,
} from "../../store/modules/qrCode";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Img,
  ImgContainer,
  LoadingBox,
  InputData,
  InputTitle,
  FormBox,
  ConfirmButton,
  BackgroundImage,
} from "../../styles/qrCodeStyles";
import Spinner from "../../components/Spinner";
import { Col, Row } from "../../styles/grid";
import px2vw from "../../utils/responsiveness/px2vw";

export function QrCode24() {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  const {
    qrCodeData,
    loadingqrCode,
    successqrCode,
    errorqrCode,
    successqrCodeEdit,
    loadingqrCodeEdit,
  } = useSelector(qrCodeSelector);

  const qrCode24 = "5";
  const [awardAlreadyGiven, setAwardAlreadyGiven] = useState(false);
  const [qrCodeNumber, setQrCodeNumber] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();

  function handleSubmit() {
    if(userName === '' && userEmail === '') {
      toast.error('Por gentileza preencher Nome e E-mail!')
    } else if(userName === '') {
      toast.error('Por gentileza preencher o Nome!')
    } else if(userEmail === '') {
      toast.error('Por gentileza preencher o E-mail!')
    } else {
      dispatch(
        qrCodeEdit({
          qrCodeid: qrCode24,
          qrCodeNumber,
          isAward: true,
          awardAlreadyGiven: true,
          name: userName,
          email: userEmail
        })
      );
    }    
  }

  useEffect(() => {
    dispatch(qrCodeRequest(qrCode24));
    setShowForm(false);
  }, []);

  useEffect(() => {
    if (successqrCode) {
      setAwardAlreadyGiven(qrCodeData.award_already_given);
      setQrCodeNumber(parseInt(qrCodeData.qr_code_number));
    }
  }, [successqrCode]);

  useEffect(() => {
    if (successqrCodeEdit === 200) {
      toast.success('Dados enviados com sucesso! Obrigado!')
      dispatch(qrCodeRequest(qrCode24));
      setShowForm(false);
    }
  }, [successqrCodeEdit]);

  if (isWeb) {
    return (
      <>
        {loadingqrCode ? (
          <LoadingBox>
            <Spinner />
          </LoadingBox>
        ) : awardAlreadyGiven ? (
          <ImgContainer>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_30.png")}
            />
          </ImgContainer>
        ) : (
          <ImgContainer>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_20.png")}
            />
          </ImgContainer>
        )}
      </>
    );
  } else {
    return (
      <>
        {loadingqrCode ? (
          <LoadingBox isMobile>
            <Spinner />
          </LoadingBox>
        ) : awardAlreadyGiven ? (
          <ImgContainer isMobile>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_30.png")}
            />
          </ImgContainer>
        ) : showForm ? (
          <BackgroundImage isMobile>
            <Col alignCenter>
              <FormBox onSubmit={handleSubmit}>
                <Row justifyStart height="auto">
                  <InputTitle>Nome</InputTitle>
                </Row>
                <Row height="auto" margtop={px2vw(25)}>
                  <InputData
                    name="name"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Row>
                <Row justifyStart height="auto" margtop={px2vw(40)}>
                  <InputTitle>E-mail</InputTitle>
                </Row>
                <Row height="auto" margtop={px2vw(25)}> 
                  <InputData
                    name="email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </Row>
                <ConfirmButton type="submit">
                  {loadingqrCodeEdit ? (
                    <LoadingBox isMobile>
                      <Spinner 
                       style={{
                        width: '1.2rem',
                        height: '1.2rem',
                      }}
                      />
                    </LoadingBox>
                  ) : (
                    "Enviar"
                  )}
                </ConfirmButton>
              </FormBox>
            </Col>
          </BackgroundImage>
        ) : (
          <ImgContainer isMobile onClick={() => setShowForm(true)}>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_20.png")}
            />
          </ImgContainer>
        )}
      </>
    );
  }
}
