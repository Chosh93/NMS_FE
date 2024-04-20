import React, { useState } from "react";
import NmsApi from "../api/NmsApi";
import useInterval from "../hook/useInterval";

const MonitoringPage = () => {
    const [cpuCost, setCpuCost] = useState("");

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
            console.log(response.data.cpuCost);
            setCpuCost(response.data.cpuCost);
        } catch(e) {
            console.log(e);
        }
    }, 5000);

    return (
        <>
        <button onClick={onClickMonitorStart}>모니터링 시작</button>
        <h1>{cpuCost}</h1>
        </>
    )
}

export default MonitoringPage;