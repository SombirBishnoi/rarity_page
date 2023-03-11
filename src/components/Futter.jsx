import React from "react";
import twiters from "../assets/img/png/twiters.png";
import discords from "../assets/img/png/discords.png";
function Futter() {
  return (
    <>
      <section className="py-3 bg_footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex gap-4">
              <p className="fw_400 fs_31 ff_ubu clr">Tokemonics</p>
              <p className="fw_400 fs_31 ff_ubu clr">Rarity</p>
              <p className="fw_400 fs_31 ff_ubu clr">Team</p>
              <p className="fw_400 fs_31 ff_ubu clr">FAQ</p>
            </div>
            <div className="d-flex justify-content-center gap-4">
              <a href="#">
                <img src={twiters} alt="mnbmj" />
              </a>
              <a href="#">
                <img src={discords} alt="mnbmj" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Futter;
