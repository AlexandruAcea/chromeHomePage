import React, { useContext } from "react";
import Context from "../Context";
import bg from "../../assets/transparent.png";
import Cookies from "universal-cookie";

const ImagesPage = () => {
  const value = useContext(Context);
  const list = value.state.photoList.results;
  const cookies = new Cookies();

  function checkSelected(item) {
    if (item.isSelected) return "photoListItemSelected";
  }

  function renderList() {
    if (typeof list !== "undefined") {
      return (
        <div>
          <div className="titlesx">
            <h1 id="photosTitle">Photos</h1>
            <p>See an inspirational photo every day</p>

            <div className="tags">
              <input
                type="text"
                value={value.state.queries}
                onChange={e => {
                  value.refresh(e.target.value);
                  cookies.set("queries", e.target.value, { path: "/" });
                }}
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
                    onClick={() => {
                      list.forEach(function(entry) {
                        item.id === entry.id
                          ? (entry.isSelected = true)
                          : (entry.isSelected = false);
                      });
                      value.updateList(list);
                      value.setBackground({ backgroundImage: item.urls.full });

                      cookies.set("background", item.urls.full, { path: "/" });
                    }}
                  >
                    <div>
                      <img
                        className={checkSelected(item)}
                        alt=""
                        src={bg}
                        style={{
                          backgroundImage: "url(" + item.urls.small + ")"
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  }

  return <div>{renderList()}</div>;
};

export { ImagesPage };
