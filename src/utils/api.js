import axios from "axios";

const BASE_API_URL = "https://jpk-202603-pa-b.onrender.com";

export async function getCardioWarmups(intensity, sort) {
  const query = new URLSearchParams({
    ...(intensity !== "all" ? { intensity } : {}),
    ...(sort !== "none" ? { sort } : {}),
  });

  const res = await axios.get(`${BASE_API_URL}/cardio-warmups?${query}`);
  return res.data;
}

export async function getStretchingWarmups(search, limit, page) {
  const query = new URLSearchParams({
    ...(search !== "" ? { search } : {}),
    ...{ limit },
    ...{ page },
  });

  const res = await axios.get(`${BASE_API_URL}/stretching-warmups?${query}`);
  return res.data;
}
