import axios from "axios";

export const KEY = "AIzaSyDz3KNrKVNmfZ5gkAuShZ9D8DCW78kRiyo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
