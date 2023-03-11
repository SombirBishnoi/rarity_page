import React, { useEffect, useState } from "react";

function Backtop() {
  const [backtop, setBackToTop] = useState(true);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });

  return (
    <>
      {backtop && (
        <div className="">
          <button
            onClick={() => top()}
            className=" bg-danger fw_600 fs_30 ff_ubu lorem_clr rounded-3 border-0  text-warning position-fixed bottom-0 end-0"
          >
            Top
          </button>
        </div>
      )}
    </>
  );
}
export default Backtop;
