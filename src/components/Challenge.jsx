import React from "react";
import Styles from "@/styles/challenge/Challenge.module.css";
import Image from "next/image";
const qrImage = "/image-qr-code.png";
function Challenge() {
  return (
    <div>
      <div className={Styles.qrCodeContainer}>
        <div className={Styles.qrCodeCard}>
          <div className={Styles.qrCodeImgSection}>
            <Image src={qrImage} alt="" width={100} height={100} />
          </div>
          <div className={Styles.qrCodeTextSection}>
            <h5>Improve your front-end skills by building projects</h5>
            <p>
              Scroll the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
