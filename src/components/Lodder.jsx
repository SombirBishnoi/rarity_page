import React, { useEffect, useState } from "react";

function Lodder() {
  const [show, SetShow] = useState(1);
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  useEffect(() => {
    SetShow(true);
    {
      setTimeout(() => {
        SetShow(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      {show ? (
        <section data-aos="fade-up-right">
          <div className="lodder_wapper position-fixed">
            <div className="">
              <h2 className="fw_900 fs_81 ff_open color_light_white ">
                Please wait...
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Lodder;
