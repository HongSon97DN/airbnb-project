import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import CardComponent from "../CardComponent/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import {
    getBookingRoomAPI,
    getListFullRoomAPI,
} from "../../redux/actions/LocationRoomAction";
import { roomImage } from "../../utils/roomImage";
import MapContainer from "../MapConponent/MapContainer";

export default function BodyComponent(props) {
    const dispatch = useDispatch();
    const [activeMap, setActiveMap] = useState(false);
    const { roomFullList, roomFilter } = useSelector(
        (state) => state.LocationRoomReducer
    );
    const [roomFIlterArr, setRoomFilterArr] = useState([]);
    const { dataFilter } = props;
    useEffect(() => {
        if(props.dataFilter !== undefined){
            document.querySelector("body").classList.add("overflow");
        } else {
            document.querySelector("body").classList.remove("overflow");
        }
        dispatch(getListFullRoomAPI());
    }, []);
    useEffect(() => {
        let roomFilterArr = [];
        if (roomFullList?.length > 0) {
           
        }
        setRoomFilterArr(roomFilterArr);
    }, [roomFilter]);
    let renderListCard = () => {
        if (dataFilter === undefined) {
            return roomFullList?.map((card, index) => {
                return (
                    <Col
                        key={`${props.size === 4 ? index : "filter-" + index}`}
                    >
                        <CardComponent card={card} />
                    </Col>
                );
            });
        } else {
            return roomFullList?.map((card, index) => {
                return (
                    <Col
                        key={`${props.size === 4 ? index : "filter-" + index}`}
                    >
                        <CardComponent card={card} />
                    </Col>
                );
            });

            // roomFullList?.map((card, index) => {
            //     let { id, khach } = card;
            //     if (dataFilter.guestNum <= khach) {
            //         console.log(index);
            //         // dispatch(getBookingRoomAPI(dataFilter, id));
            //     }
            // });
        }
    };

    let renderBodyCpn = () => {
        if (dataFilter === undefined) {
            return (
                <>
                    {!activeMap && (
                        <div className={`my_container container ${props.dataFilter!==undefined ? "overflow" : ""}`}>
                            <div
                                className={`body_grid ${
                                    props.size === 4
                                        ? "body_grid_template1"
                                        : "body_grid_template2"
                                }`}
                            >
                                {renderListCard()}
                            </div>
                        </div>
                    )}
                    {activeMap && <MapContainer arrRoom={roomFullList} />}
                    <div
                        className="show__map"
                        onClick={() => {
                            setActiveMap(!activeMap);
                        }}
                    >
                        <div className="btn--show">
                            {activeMap ? "Show list" : "Show map"}
                            <i className="fa-solid fa-map"></i>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="my_container container">
                        <div
                            className={`body_grid ${
                                props.size === 4
                                    ? "body_grid_template1"
                                    : "body_grid_template2"
                            }`}
                        >
                            {renderListCard()}
                        </div>
                    </div>
                </>
            );
        }
    };

    return <>{renderBodyCpn()}</>;
}
