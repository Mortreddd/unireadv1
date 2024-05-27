import Navbar from "@/Components/Common/Navbar";
import Jumbotron from "@/Components/Jumbotron";
import React, { Fragment } from "react";

export default function HomeLayout() {
  return (
    <Fragment>
      <Navbar />
      <section className="w-full h-full px-8 md:px-10 lg:px-16 font-serif">
        <Jumbotron />
      </section>
    </Fragment>
  );
}
