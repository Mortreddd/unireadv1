import { Fragment } from "react";
import Cover from "@/Assets/Cover.jpg";
import BookCover from "@/Components/Book/BookCover";
import JumbotronBody from "./JumbotronBody";
export default function Jumbotron() {
  return (
    <Fragment>
      <div className="px-1 md:px-4">
        <div className="flex md:justify-center flex-col justify-center">
          <div className="rounded-xl flex md:items-center space-y-3 border-2 border-gray-300 bg-gray-50">
            <BookCover size={"md"} bookImage={Cover} />
            <JumbotronBody />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
