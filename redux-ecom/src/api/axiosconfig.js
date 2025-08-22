import axiosLib from "axios";

// Adjust baseURL to where your API/json-server runs
// If using json-server: npx json-server --watch src/backend/db.json --port 3000
export const axios = axiosLib.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;