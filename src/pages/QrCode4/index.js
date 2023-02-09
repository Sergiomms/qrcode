import React, { useEffect, useState } from "react";
import RealTimeDimensions from "../../utils/responsiveness/RealTimeDimensions";
import { qrCodeRequest, qrCodeSelector } from "../../store/modules/qrCode";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toUpperCaseFirstLetter } from "../../utils/masks";
import { Img, ImgContainer, LoadingBox } from "../../styles/qrCodeStyles";
import Spinner from "../../components/Spinner";
import { Col } from "../../styles/grid";
import px2vw from "../../utils/responsiveness/px2vw";

export function QrCode4() {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  const { loadingqrCode, successqrCode, errorqrCode } =
    useSelector(qrCodeSelector);

  const qrCode4 = "15";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(qrCodeRequest(qrCode4));
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
              src={require("../../assets/images/kickoff_bem_estar_4.png")}
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
          <ImgContainer isMobile height={px2vw(1350)}>
            <Img
              src={require("../../assets/images/kickoff_bem_estar_4.png")}
            />
          </ImgContainer>
        )}
      </>
    );
  }
}
