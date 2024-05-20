import React from "react";
import Cover from "../assets/Cover.jpg";
export default function Jumbotron() {
  return (
    <React.Fragment>
      <div className="font-bold text-black relative px-8">
        <h2 className="text-3xl">Recommended For You</h2>
        <div className="px-4">
          <div className="flex md:justify-center flex-col justify-center">
            <div className="rounded-xl flex md:items-center space-y-3 border-2 border-gray-400 bg-gray-100">
              <img
                src={Cover}
                alt="Cover Photo"
                className="rounded-lg h-72 md:96 w-40 md:w-52 object-cover"
              />
              <div className="w-full px-3">
                <h1 className="block text-left text-4xl text-black">
                  Hell University
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
