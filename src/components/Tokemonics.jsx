import React from "react";
import Mask from "../assets/img/png/Mask.png";
function Tokemonics() {
  return (
    <>
      <section className="bg_tok py-5">
        <div className="container">
          <h2 className="fw_700 fs_90 text-center ff_space tok_color">
            Tokemonics
          </h2>
          <div className="row py-5">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="border_2"
            >
              <div className=" col-md-10 col-12 d-flex align-items-center">
                <a className="col-3" href="#">
                  {" "}
                  <img className="ps-0 ps-sm-5  pt-2" src={Mask} alt="mnkj" />
                </a>
                <div className="col-6">
                  <p className="fw_400 fs_28 text-center color_blue ff_sans pt-4 mb-0">
                    THE NAME TOKEN (TNAT)
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <p className="fw_400 fs_30 ff_sans color_light_gray mb-0">
                      0.332627
                    </p>
                    <p className="fw_400 fs_20 ff_sans color_green mb-0">
                      (+17.4%)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div className="bord"> */}
                <div className="col-3 border">
                  <p className="fw_400 fs_22 text-center ff_sans color_light_gray pt-2 mb-0">
                    RANK
                  </p>
                  <p className="fw_400 fs_22 text-center ff_sans color_light_gray mb-0">
                    3
                  </p>
                </div>
                {/* </div> */}
                {/* <div className="bord"> */}
                <div className="col-6 border">
                  <p className="fw_400 fs_22 text-center ff_sans color_light_gray pt-2 mb-0">
                    MARKET CAP
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <p className="fw_400 fs_25 text-center ff_sans color_light_gray mb-0">
                      $?
                    </p>
                    <p className="fw_400 fs_18 text-center ff_sans color_light_gray mb-0">
                      USD
                    </p>
                  </div>
                </div>
                {/* </div> */}
                {/* <div className="bord"> */}
                <div className="col-3 border">
                  <p className="fw_400 fs_22 text-center ff_sans color_light_gray pt-2 mb-0">
                    VOLUME
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <p className="fw_400 fs_22 text-center ff_sans color_light_gray mb-0">
                      $12.65 K
                    </p>
                    <p className="fw_400 fs_18 text-center ff_sans color_light_gray mb-0">
                      USD
                    </p>
                  </div>
                </div>
                {/* </div> */}
              </div>
              <p className="fw_400 fs_28 text-center color_blue ff_sans mb-0">
                Powered by CoinMarketCap
              </p>
            </div>
          </div>
          <div className="row">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-sm-6 col-md-4 mt-3 md-0"
            >
              <div className="box_tok btn_2">
                <div className="d-flex justify-content-between">
                  <h2 className="fw_900 fs_40 text-white ff_pro">
                    {" "}
                    <span className="d-block">NFT</span> Holders{" "}
                  </h2>
                  <p className="fw_900 fs_46 text-white ff_pro">70%</p>
                </div>
                <p className="clr fw_300 fs_33 ff_pro">
                  NFT Holders will earn $TNAT{" "}
                  <span className="d-block"> via p2e mechanism.</span>{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-sm-6 col-md-4 mt-3 md-0"
            >
              <div className="box_tok btn_2">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fw_900 fs_40 text-white ff_pro"> Liquidity</h2>
                  <p className="fw_900 fs_46 text-white ff_pro">20%</p>
                </div>
                <p className="clr fw_300 fs_33 ff_pro">
                  20% of $TNAT token supply{" "}
                  <span className="d-block">will be used for liquidity in</span>
                  exchanges.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-sm-6 col-md-4 mt-3 md-0"
            >
              <div className="box_tok btn_2">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fw_900 fs_40 text-white ff_pro"> Team</h2>
                  <p className="fw_900 fs_46 text-white ff_pro">10%</p>
                </div>
                <p className="clr fw_300 fs_33 ff_pro">
                  10% of $TNAT token supply is{" "}
                  <span className="d-block"> for TNAT team.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tokemonics;
