import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const genres: Array<Genre> = [
  {
    id: 1,
    name: "Fantasy",
  },
  {
    id: 2,
    name: "Horror",
  },
  {
    id: 3,
    name: "Mystery",
  },
  {
    id: 4,
    name: "Thriller",
  },
];

export default function GenreTabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Fragment>
      <div className="w-full overflow-hidden flex items-center md:gap-3 gap-1">
        {genres.map((genre: Genre, index: number) => (
          <Link
            key={index}
            to={"/"}
            role="tab"
            onClick={() => setActiveTab(genre.id)}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </Fragment>
  );
}
