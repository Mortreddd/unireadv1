import Header from "@/Components/Common/Header";
import Jumbotron from "@/Components/Common/Jumbotron";
import { Fragment } from "react";
import GenreTabs from "@/Components/Genre/GenreTabs";
export default function HomeLayout() {
  return (
    <Fragment>
      <Header>
        <GenreTabs />
      </Header>
      <section className="w-full h-full px-8 md:px-10 lg:px-16">
        <div className="font-bold space-y-2 font-serif text-black relative md:px-8 px-3 min-w-96 max-w-full my-3 md:my-8">
          <h2 className="text-xl md:text-3xl">Recommended For You</h2>
          <Jumbotron />
        </div>
      </section>
    </Fragment>
  );
}
