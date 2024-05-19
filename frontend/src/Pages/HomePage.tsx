import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Jumbotron from "../Components/Jumbotron";

export default function HomePage() {
  const [data, setData] = useState<Response | null>(null);
  useEffect(() => {
    async function fetctData() {
      let response = await fetch("http://localhost:8080/api/v1/");
      let res = response;
      setData(res);
    }
    fetctData();
  }, []);

  console.log(data);
  return (
    <React.Fragment>
      <main className="w-full h-[100vh] antialiased font-sans">
        <Navbar />
        <section className="w-full h-full px-8 md:px-10 lg:px-16">
          <Jumbotron />
        </section>
      </main>
    </React.Fragment>
  );
}
