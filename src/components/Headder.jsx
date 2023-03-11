import React, { useState } from "react";
import birds from "../assets/img/png/birds.png";
import game from "../assets/img/png/game.png";
import van from "../assets/img/png/van.png";
function Headder() {
  const [nav, setnav] = useState(1);
  return (
    <>
      <section className="py-2 bg_clr">
        <div className="container">
          <nav
            data-aos="fade-down"
            data-aos-duration="3000"
            className="d-flex align-items-center justify-content-between "
          >
            <h2 className="ff_sans fw_700 fs_58 text-white m-0  ">THE LOGO</h2>

            <span className="d-none d-xl-flex gap-5 ">
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                Tokemonics
              </a>
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                Rarity
              </a>
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                Team
              </a>
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                FAQ
              </a>
            </span>
            <span className="d-none d-xl-flex ">
              <button className=" ff_ubu fw_500 fs_32 color_light_gray Roadmap  border-0 rounded-2">
                Roadmap
              </button>
            </span>

            <div
              onClick={() => setnav(!nav)}
              className="d-flex flex-column z_index1 d-xl-none"
            >
              <div className="line1"></div>
              <div className="line1 my-2"></div>
              <div className="line1"></div>
            </div>
          </nav>
        </div>
      </section>
      <section className=" ">
        <div className="container">
          <div className={` ${nav ? "hide " : "box_5 "}`}>
            <div
              onClick={() => setnav(!nav)}
              className="d-flex flex-column z_index1 position-relative d-xl-none  "
            >
              <span className="d-flex justify-content-end">
                <button className="mt-5 me-5 px-4 border-0 rounded-3 bg-danger py-2">
                  Back
                </button>
              </span>
            </div>
            <span className="d-flex justify-content-center flex-column align-content-center align-items-center min-vh-100  gap-4">
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                Tokemonics
              </a>
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                Rarity
              </a>
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                Team
              </a>
              <a className="ff_ubu fw_400 fs_32 color_light_gray " href="#">
                FAQ
              </a>
            </span>
          </div>
        </div>{" "}
      </section>
      <section className="bg_color">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-lg-7"
            >
              <div className="py-5">
                <h2 className="lorem_clr ff_pro fw_900 fs_81 m-0">
                  LOREM IPSUM
                </h2>
                <p className="ff_pro fw_600 fs_53 p_clr m-0">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="p2_clr ff_pro fw_300 fs_32 m-0 pb-3">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span className="d-lg-flex gap-5 text-center">
                  <button className="btun ff_code fw_500 fs_32 text-white ms-3 ms-lg-0 mt-3 mt-lg-0">
                    <img className="pe-4" src={birds} alt="birds" />
                    Twitter
                  </button>
                  <button className="btun1 ff_code fw_500 fs_32 mt-3 mt-sm-0 ms-3 ms-lg-0 text-white">
                    <img className="pe-4" src={game} alt="game" />
                    Discord
                  </button>
                </span>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="col-lg-5"
            >
              <div className="py-5">
                <img className="w-100" src={van} alt="van" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Headder;
