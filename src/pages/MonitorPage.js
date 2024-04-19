import React, { useState } from "react";
import NmsApi from "../api/NmsApi";


const MonitoringPage = () => {

    const onClickMonitorStart = async () => {
        try {
            const response = await NmsApi.startMonitoring();
            console.log(response);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <>
        <button onClick={onClickMonitorStart}>모니터링 시작</button>
        </>
    )
}

export default MonitoringPage;