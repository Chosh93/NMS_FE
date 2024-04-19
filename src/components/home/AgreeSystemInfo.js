import React from "react";
import styled from "styled-components";
import { useNavigate  } from "react-router-dom";

const HomeDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const AgreeSystemInfo = () =>{
    const navigator = useNavigate ();

    const goToMonitor = () => {
        navigator("/monitor");
    }

    return(
        <HomeDiv>
            <button onClick={goToMonitor}>모니터링 시작</button>
        </HomeDiv>
    )
}

export default AgreeSystemInfo;