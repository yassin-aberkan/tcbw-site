import React from "react";

function GoogleMaps() {
  return (
    <div>
      <iframe
        className="display rounded-xl bg-gray-400"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei9UZXJodWxwZW5zZXN0ZWVud2VnIDMxMCwgMzA5MCBPdmVyaWpzZSwgQmVsZ2l1bSJREk8KNAoyCZm2EoJi18NHEaHriMe7VmWMGh4LEO7B7qEBGhQKEgmhdec_2WLBRxHsATL84ByPGgwQtgIqFAoSCbmkaRxh18NHESjDii-zO9lW&key=AIzaSyB01u6Zgb0r_X647UpE4P2W0yAjQeQO_Xo"
      ></iframe>
      <style jsx>{`
        .display {
          width: 100%;
          height: 450px;
        }
      `}</style>
    </div>
  );
}

export default GoogleMaps;
