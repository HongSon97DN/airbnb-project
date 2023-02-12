import moment from "moment";
import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInforTripsAPI } from "../../../redux/actions/BookTravelAction";
import { bothServiceToken } from "../../../services/BothTokenService";

export default function YourBooking() {
  const { uLogin } = useSelector((state) => state.FormReducer);
  const { inforYourTrips } = useSelector((state) => state.BookTravel);
  const [trips, setTrips] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInforTripsAPI(uLogin.id));
  }, []);
  useLayoutEffect(() => {
    let a = [];
    inforYourTrips.map(async (trip) => {
      try {
        let room = await bothServiceToken.get(`phong-thue/${trip.maPhong}`);
        let { data } = await bothServiceToken.get(
          `vi-tri/${room.data.content.maViTri}`
        );
        let viTri = data.content.tenViTri;
        let tinhThanh = data.content.tinhThanh;
        let quocGia = data.content.quocGia;

        a.push({
          ngayDen: trip.ngayDen,
          ngayDi: trip.ngayDi,
          tenPhong: room.data.content.tenPhong,
          viTri: `${viTri}, ${tinhThanh}, ${quocGia} `,
        });
        setTrips(a);
      } catch (error) {}
    });
  }, [inforYourTrips]);
  const navigate = useNavigate();
  const renderNoTrip = () => {
    return (
      <div className="no-trip border-bottom">
        <div className="title-trip">
          <h4>No trips booked...yet!</h4>
          <p>
            Time to dust off your bags and start planning your next adventure
          </p>
          <button
            className="btn btn-searching"
            onClick={() => {
              navigate("/");
            }}
          >
            Start Searching
          </button>
        </div>
      </div>
    );
  };
  const renderTrips = () => {
    return (
      <div className="trips">
        <table className="table trips_table">
          <thead>
            <tr className="trips-title">
              <th>RoomName</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody className="trips_content">
            {trips?.map((trip, i) => {
              return (
                <tr className="trips_content-list trips-title" key={i}>
                  <td>{trip.tenPhong}</td>
                  <td>
                    {moment(trip.ngayDen, ["DD-MM-YYYY", "YYYY-MM-DD"]).format(
                      "DD-MM-YYYY"
                    )}
                  </td>
                  <td>
                    {moment(trip.ngayDi, ["DD-MM-YYYY", "YYYY-MM-DD"]).format(
                      "DD-MM-YYYY"
                    )}
                  </td>
                  <td>{trip.viTri}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-center">
              <td colSpan={4}>
                <button
                  className="btn btn_second mt-3"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Continue to book travel
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };
  return (
    <div className="your_booking">
      <div className="border-bottom">
        <h2>
          <span>
            <i
              className="fa-solid fa-chevron-left "
              onClick={() => {
                navigate(-1);
              }}
            ></i>
          </span>
          Your Travel Booking
        </h2>
      </div>
      <div className="your_booking-content">
        {trips.length === 0 ? renderNoTrip() : renderTrips()}
      </div>
    </div>
  );
}
