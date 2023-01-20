import React from "react";
import "./Dashboard.css";
import Image from "../../images/safe-part-2-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useGetStoresQuery } from "../../api/farmApi";
import { useEffect } from "react";
export const DashboardContain = () => {
  const { data, isError, error } = useGetStoresQuery();

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  }, [isError, error, data]);

  return (
    <div className="DashboardContain_container">
      <div className="DashboardContain_container_primary">
        <h2>farmname / Get Storage / Book Storage </h2>
      </div>
      <div className="DashboardContain_container_stores">
        {data?.map((item) => {
          return (
            <Link to={`/store/${item.id}`} key={item.id}>
              <div className="dashboard_singlestore">
                <div className="dashboard_singlestore_image">
                  <img src={item?.image} alt="Single product" />
                </div>
                <div className="dashboard_singlestore_detail">
                  <h1>{item.name}</h1>
                  <p>{item.rating}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
