import React, { useEffect, useState } from "react";
import RealTimeDimensions from "../../utils/responsiveness/RealTimeDimensions";
import { qrCodeRequest, qrCodeSelector } from "../../store/modules/qrCode";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toUpperCaseFirstLetter } from "../../utils/masks";
import { Img, ImgContainer, LoadingBox } from "../../styles/qrCodeStyles";
import Spinner from "../../components/Spinner";
import { Col } from "../../styles/grid";

export function QrCode1() {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  const { loadingqrCode, successqrCode, errorqrCode } =
    useSelector(qrCodeSelector);

  const qrCode1 = "12";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(qrCodeRequest(qrCode1));
  }, []);

  if (isWeb) {
    return (
      <>
        {loadingqrCode ? (
          <LoadingBox>
            <Spinner />
          </LoadingBox>
        ) : (
          <ImgContainer>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_1.png")}
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
        ) : (
          <ImgContainer isMobile>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_1.png")}
            />
          </ImgContainer>
        )}
      </>
    );
  }
}