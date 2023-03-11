import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function FAQ() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="bg_ratiry py-5">
        9499498328
        <div className="container">
          <h2 className="fw_700 fs_90 ff_space Rarity text-center mb-0 text-center">
            FAQ
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="box1 mt-4 py-3"
          >
            <p className="fw_700 fs_35 clr_1 text-center mb-0">
              What is the total The Name supply?
            </p>
            <p className="fw_600 fs_35 ff_space clr mb-0 text-center">
              The Total supply is *****.
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="box1 mt-5 py-3"
          >
            <p className="fw_700 fs_35 clr_1 text-center mb-0">
              Where can I buy or sell my The Name?
            </p>
            <p className="fw_600 fs_35 ff_space clr mb-0 text-center">
              You can mint them on our website or get them on secondary market.
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="box1 mt-5 py-3"
          >
            <p className="fw_700 fs_35 clr_1 text-center mb-0">
              Where can I buy TNAT$ token?
            </p>
            <p className="fw_600 fs_35 ff_space clr mb-0 text-center">
              You can buy across multiple platforms.
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="box1 mt-5 py-3"
          >
            <p className="fw_700 fs_35 clr_1 text-center mb-0">
              Have More Questions?
            </p>
            <p className="fw_600 fs_35 ff_space clr mb-0 text-center">
              Join our Discord.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
