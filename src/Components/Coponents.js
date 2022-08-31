import React, { useEffect, useState } from "react";
import data from "./Data.json";
import Datacomp from "./Datalogic";

const Coponents = () => {
  const [dataDisplay, setDisplay] = useState(false);
  const [myData, setData] = useState([]);

  useEffect(() => {
    let fileData = data.data.map((data) => {
      return { ...data};
    });

    setData(
      fileData.sort((a, b) => {
        return b.source_items.audience_size - a.source_items.audience_size;
      })
    );

    setDisplay(true);
  }, []);

  return (
    <section className="mt-3">
      <div className="container" data-aos="fade-up">
        <p className="fw-bold">Choose Conde Nast brand's audience</p>
        <div className="row justify-content-md-center">
          {dataDisplay &&
            myData.map((info) => (
              <Datacomp
                id={info.source_items.id}
                category={info.social_media_pages.category}
                picture={info.social_media_pages.picture}
                name={info.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Coponents;
