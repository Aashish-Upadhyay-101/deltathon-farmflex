import React from "react";
import "./MyStorage.css";
import DashboradNav from "../../components/DashboardNav/DashboradNav";
import DashboardContain from "../../components/DashboardContain/DashboardContain";
import { useMyStoresQuery } from "../../api/farmApi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { WiDirectionLeft } from "react-icons/wi";

const MyStorage = () => {
  const navigate = useNavigate();
  const { data } = useMyStoresQuery();

  useEffect(() => {
    if (data) {
      navigate("/my-storage");
    }
  }, [data]);

  return (
    <div className="StorePage_container">
      <DashboradNav />
      <div className="DashboardContain_container">
        <div className="DashboardContain_container_primary">
          <h2>farmname / Get Storage / Book Storage </h2>
        </div>
        <div className="DashboardContain_container_stores">
          {data?.map((item) => {
            return (
              <Link
                to={`/store/${item.store_product.id}`}
                key={item.store_product.id}
              >
                <div className="dashboard_singlestore">
                  <div className="dashboard_singlestore_image">
                    <img src={item?.store_product.image} alt="Single product" />
                  </div>
                  <div className="dashboard_singlestore_detail">
                    <h1>{item?.store_product.name}</h1>
                    <p>{item?.store_product.rating}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyStorage;
