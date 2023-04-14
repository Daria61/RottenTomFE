import React from "react";

export const Poster = (): JSX.Element => {
  return (
    <div className="flex h-80 overflow-hidden">
      <div className="basis-2/4 border border-white ">
        <img
          style={{ objectFit: "cover", width: "100%" }}
          alt="poster"
          src="https://resizing.flixster.com/DfeRUghHAHtBvkvxIy_zQU0Vzi8=/550x310/v2/https://images.fandango.com/cms/assets/aae48720-d27a-11ed-81d8-51a487a38835--dungeons-dragons-honor-thieves-bo-rep.jpeg"
        />
      </div>
      <div className="basis-1/4 border border-white">
        <img
          style={{ objectFit: "cover", width: "100%" }}
          alt="poster"
          src="https://resizing.flixster.com/l0M-qBPixouiqAgzoBte0lXkmiA=/540x610/v2/https://images.fandango.com/cms/assets/438f3380-d30c-11ed-a868-adceb8892ad3--wb100.jpg"
        />
      </div>
      <div className="basis-1/4 border border-white">
        <img
          style={{ objectFit: "cover", width: "100%" }}
          alt="poster"
          src="https://resizing.flixster.com/ErTqzORpaMZBAxFymMT_uXaj-eI=/540x610/v2/https://images.fandango.com/cms/assets/93e31e20-d346-11ed-81d8-51a487a38835--barry-s4-bill-hader-274x310.jpg"
        />
      </div>
    </div>
  );
};
