import React, { CSSProperties } from "react";
import { PulseLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function Loader() {
  return (
    <div>
      <PulseLoader color="#743f25" loading={true} cssOverride={override} />
    </div>
  );
}

export default Loader;
