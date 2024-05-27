import { Fragment } from "react";

export default function JumbotronBody() {
  return (
    <Fragment>
      <div className="w-full h-full px-3 font-serif">
        <h1 className="block text-left text-xl md:text-3xl text-black">
          Hell University
        </h1>
        <p className="block text-left text-xs md:text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Fragment>
  );
}
