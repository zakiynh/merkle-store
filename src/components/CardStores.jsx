import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItem } from "../store/actions/storeAction";

function CardStores() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, [dispatch]);

  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-5 gap-4 justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-sm cursor-pointer overflow-hidden shadow-2xl my-10 mx-8 rounded-lg"
          style={{
            backgroundImage: `url('${item.image}')`,
            objectFit: "contain",
            width: "300px",
            height: "450px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: "16px", // Add margin between cards if desired
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0))",
            }}
          >
            <div className="px-6 py-4 justify-end" style={{ opacity: "100%" }}>
              <div className="font-bold text-2xl mb-2 text-white">
                {item.title}
              </div>
              <p className="text-base text-white">{item.category}</p>
              <p className="text-base text-white">{item.rating.rate}</p>
              <p className="text-base text-white">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardStores;
