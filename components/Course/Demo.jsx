import React from "react";

const Demo = () => {
  return (
    <section>
      <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins py-10 ">
        Demo Lectures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto ">
        <div className="aspect-video w-full  ">
          <iframe
            src="https://www.youtube.com/embed/tg6ME1kCp4w"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture"
            allowFullScreen
            className="w-full h-full
          rounded-xl"
          ></iframe>
        </div>
        <div className="aspect-video w-full  ">
          <iframe
            src="https://www.youtube.com/embed/CPM-0u2Kur4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
        <div className="aspect-video w-full  ">
          <iframe
            src="https://www.youtube.com/embed/rUkguB8jF4E"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Demo;
