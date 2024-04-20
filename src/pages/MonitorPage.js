import React from "react";
import NmsApi from "../api/NmsApi";
import useInterval from "../hook/useInterval";

const MonitoringPage = () => {

    const onClickMonitorStart = async () => {
        try {
            const response = await NmsApi.startMonitoring();
            console.log(response);
        } catch(e) {
            console.log(e);
        }
    }

    useInterval(async () => {
        try {
            const response = await NmsApi.startMonitoring();
            console.log(response);
        } catch(e) {
            console.log(e);
        }
    }, 5000);

    return (
        <>
        <button onClick={onClickMonitorStart}>모니터링 시작</button>
        </>
    )
}

export default MonitoringPage;