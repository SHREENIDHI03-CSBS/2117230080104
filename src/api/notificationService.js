import axios from "axios";

const TOKEN = "YOUR_NEW_ACCESS_TOKEN";

export const fetchNotifications = async (
  page = 1,
  limit = 10
) => {

  const response = await axios.get(
    `http://20.207.122.201/evaluation-service/notifications?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  return response.data.notifications;
};