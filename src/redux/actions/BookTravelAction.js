import moment from "moment";
import { toast } from "react-toastify";
import { bothServiceToken } from "../../services/BothTokenService";
import { getInforYourTrips } from "../reducer/BookTravel";
import { getCheckIn, getCheckOut } from "../reducer/CalendarReducer";

export const bookTravelAPI = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post("dat-phong", payload);
      await dispatch(getCheckIn(""));
      await dispatch(getCheckOut(""));
      await navigate(`/bookingtravel/${payload.maPhong}`);
      await navigate(0);
      toast.success("You have successfully booked travel !", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
};
export const getInforTripsAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `dat-phong/lay-theo-nguoi-dung/${id}`
      );
      const arrFilter = [...data.content];
      let arrFilters = arrFilter.sort((a, b) => {
        return new Date(b.ngayDi) - new Date(a.ngayDi);
      });
      let a;
      arrFilters = arrFilters.filter((date) => {
        if (!moment(date.ngayDen).isSame(a)) {
          a = date.ngayDen;
          return date;
        }
        a = date.ngayDen;
      });
      dispatch(getInforYourTrips(arrFilters));
    } catch (error) {
      toast.error(error.response, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
};
export const getListTripsAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(`phong-thue/${id}`);
      const arrFilter = [...data.content];

      let arrFilters = arrFilter.sort((a, b) => {
        return new Date(b.ngayDi) - new Date(a.ngayDi);
      });
      let a;
      arrFilters = arrFilters.filter((date) => {
        if (!moment(date.ngayDen).isSame(a)) {
          a = date.ngayDen;
          return date;
        }
        a = date.ngayDen;
      });
      dispatch(getInforYourTrips(arrFilters));
    } catch (error) {
      toast.error(error.response, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
};
