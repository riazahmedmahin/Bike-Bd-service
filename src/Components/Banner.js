import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/driving-green-neon-color-motorcycle-road_114579-5031.jpg?w=1380&t=st=1672071572~exp=1672072172~hmac=f9d3dc320266eef049bda65ed6e0335c0558d759d1e30dc2bd9188fc42c3d5ae"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?w=1380&t=st=1672071555~exp=1672072155~hmac=1bfa74ea2b6c15e4e064fbf8a3da28caf6d793d69b2c562fdbeeb30ee8bd9d0b"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/woman-fashion-person-retro-motorcycle_1296-403.jpg?t=st=1672071636~exp=1672072236~hmac=ab411fdb06ad91f47a43a7d5cbd3c10b1d8713e5a4b62ccb906161c841dec0ac"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/biker-motorbike-parked-road_23-2148321946.jpg?w=1380&t=st=1672071636~exp=1672072236~hmac=3ff35ba0d20a4d2f98d4765080445aaee8a4e682ff143906e1220f951da2ecb3"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
