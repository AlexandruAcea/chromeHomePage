import React, { useContext } from "react";
import Context from "../Context";
import bg from "../../assets/transparent.png";

const ImagesPage = () => {
  const value = useContext(Context);
  console.log(value);

  const list = value.state.photoList.results;

  function renderList() {
    if (typeof list !== "undefined")
      return (
        <div>
          <div className="titlesx">
            <h1 id="photosTitle">Photos</h1>
            <p>See an inspirational photo every day</p>

            <div className="tags">
              <input
                type="text"
                //value={this.state.value}
                onChange={e => value.update({ cool: e.target.value })}
              />
            </div>
          </div>

          <div className="theList">
            <ul className="ulPhotoList">
              {list.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="photoListItem"
                    //onClick={this.handleListClick.bind(this, item, i)}
                  >
                    <img
                      src={bg}
                      style={{
                        backgroundImage: "url(" + item.urls.small + ")"
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
  }

  return <div>{renderList()}</div>;
};

export { ImagesPage };
