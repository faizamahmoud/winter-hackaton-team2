import axios from "axios";
const TOKEN = process.env.RESCUE_GROUPS_API_KEY

export default axios.create({
    baseURL: 'https://api.rescuegroups.org/v5',
    headers: {
        "Content-Type": "application/vnd.api+json",
        "Authorization": 'GPKNSuYF',
    },
})