import React, { useEffect, useState } from "react";
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
  useBookStoreMutation,
} from "../../api/farmApi";
import { useNavigate, useParams } from "react-router-dom";
import { Rate, Modal, notification } from "antd";

const SingelProductDetail = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState({
    store: "",
    store_product: "",
    quantity: "",
    duration: "",
  });
  const [products, { data: productData }] = useGetStoreProductsMutation();
  const params = useParams();

  const {
    data: storeData,
    isError: isErrorStoreData,
    error: errorStoreData,
  } = useGetOneProductDetailQuery(params.id);

  const [bookStore] = useBookStoreMutation();

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

  const handleBooking = () => {
    console.log(detail);
    bookStore(detail);
    setDetail({
      store: "",
      store_product: "",
      quantity: "",
      duration: "",
    });

    navigate("/payment-in-khalti");

    setOpen(false);
  };

  const onOpenModal = (imageUrl, id) => {
    setImage(imageUrl);
    console.log(imageUrl);
    setOpen(true);
    setDetail({ ...detail, store_product: id, store: storeData?.id });
  };
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
              </span>{" "}
              {storeData?.address}
            </p>
            <p>
              <span>
                <IoIosCall className="icon" />
              </span>{" "}
              {storeData?.phone_number}
            </p>
            <p>
              <span>
                <AiOutlineMail className="icon" />
              </span>{" "}
              {storeData?.email}
            </p>
          </div>
        </div>
        <div className="SingelProductDetail_container_stores_fruits">
          {productData?.map((data) => {
            return (
              <div
                className="SingelProductDetail_singlestore"
                key={data.id}
                onClick={() => onOpenModal(data?.image, data.id)}
              >
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
      <Modal
        title="Book this cold store"
        centered
        open={open}
        onOk={() => handleBooking()}
        onCancel={() => setOpen(false)}
        width={300}
        okText="Book"
      >
        <div className="modal-top">
          <img src={image} />
          <div>
            <p>
              {" "}
              <BsFillCartFill className="icon" /> 1200kg
            </p>
            <p>
              {" "}
              <BsThermometerHalf className="icon" /> 32 C
            </p>
            <p>
              {" "}
              <WiHumidity className="icon" /> 55.56%
            </p>
          </div>
        </div>

        <div className="modal-down">
          <div className="modal-down-group">
            <p>Duration (days)</p>
            <div>
              <button>-</button>
              <input
                onChange={(e) =>
                  setDetail({ ...detail, duration: e.target.value })
                }
                value={detail.duration}
              />
              <button>+</button>
            </div>
          </div>
          <div className="modal-down-group">
            <p>Quantity (kg)</p>
            <div>
              <button>-</button>
              <input
                onChange={(e) =>
                  setDetail({ ...detail, quantity: e.target.value })
                }
                value={detail.quantity}
              />
              <button>+</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingelProductDetail;
