import React, { useEffect } from "react";
import "./SingelProductDetail.css";
import Image from "../../images/safe-part-2-svgrepo-com.svg";
import { BsFillCartFill, BsThermometerHalf } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import {
  useGetStoreProductsMutation,
  useGetOneProductDetailQuery,
} from "../../api/farmApi";
import { useParams } from "react-router-dom";
import { Rate } from "antd";

const SingelProductDetail = () => {
  const [products, { data: productData }] = useGetStoreProductsMutation();
  const params = useParams();

  const {
    data: storeData,
    isError: isErrorStoreData,
    error: errorStoreData,
  } = useGetOneProductDetailQuery(params.id);

  useEffect(() => {
    if (storeData) {
      console.log(storeData);
    }

    if (isErrorStoreData) {
      console.log(errorStoreData);
    }
    products(params.id);
  }, [storeData, params]);

  if (!storeData?.rating) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="SingelProductDetail_container">
      <div className="SingelProductDetail_container_primary">
        <h2>farmname / Get Storage / Book Storage </h2>
      </div>
      <div className="SingelProductDetail_container_stores">
        <div className="SingelProductDetail_container_stores_bookstorage">
          <h1 className="SingelProductDetail_container_stores_bookstorage_primary">
            Book Storage
          </h1>
          <div className="SingelProductDetail_singlestore_big">
            <div className="SingelProductDetail_singlestore_image_big">
              <img src={storeData?.image} alt="Single product" />
            </div>
            <div className="SingelProductDetail_singlestore_detail_big">
              <h1>{storeData?.name}</h1>

              <Rate disabled defaultValue={storeData?.rating} count={5} />
            </div>
          </div>
          <div className="SingelProductDetail_singlestore_detailsecondary">
            <p>
              <span>
                <ImLocation className="icon" />
              </span>
              Dharan-15
            </p>
            <p>
              <span>
                <IoIosCall className="icon" />
              </span>
              +977 9817485859
            </p>
            <p>
              <span>
                <AiOutlineMail className="icon" />
              </span>
              storage1@gmail.com
            </p>
          </div>
        </div>
        <div className="SingelProductDetail_container_stores_fruits">
          {productData?.map((data) => {
            return (
              <div className="SingelProductDetail_singlestore" key={data.id}>
                <div className="SingelProductDetail_singlestore_image">
                  <h2>{data.name}</h2>
                  <img src={data?.image} alt="Single product" />
                </div>
                <div className="SingelProductDetail_singlestore_detail">
                  <p>
                    <span>
                      <BsFillCartFill />
                    </span>{" "}
                    {data.quantity}kg
                  </p>
                  <p>
                    <span>
                      <BsThermometerHalf />
                    </span>
                    {data.humidity}&#8451;C
                  </p>
                  <p>
                    <span>
                      <WiHumidity />
                    </span>
                    {data.temperature}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingelProductDetail;
