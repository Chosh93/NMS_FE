import axios from "axios";

const Domain = "http://localhost:8111";

const NmsApi = {
    startMonitoring: async() => {
        return await axios.get(Domain + "/start-monitoring");
    },

    stopMonitoring: async() => {
        return await axios.get(Domain + "/stop-monitoring");
    },

    getCpuInfo: async() => {
        return await axios.get(Domain + "/getCpu");
    }
}

export default NmsApi;