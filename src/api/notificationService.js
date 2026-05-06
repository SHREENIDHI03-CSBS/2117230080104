import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaHJlZW5pZGhpLmEuMjAyMy5jc2JzQHJpdGNoZW5uYWkuZWR1LmluIiwiZXhwIjoxNzc4MDQ5NjUwLCJpYXQiOjE3NzgwNDg3NTAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzN2IyODY1Ny1hZDUxLTQyOWYtYjRjYi1mYTRiYzkxMmUyNTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzaHJlZW5pZGhpIiwic3ViIjoiZTk1ZGYxOTMtM2MxMi00OTAyLTkwZDMtZGE2NTQ0NzQyNjk4In0sImVtYWlsIjoic2hyZWVuaWRoaS5hLjIwMjMuY3Nic0ByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJzaHJlZW5pZGhpIiwicm9sbE5vIjoiMjExNzIzMDA4MDEwNCIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6ImU5NWRmMTkzLTNjMTItNDkwMi05MGQzLWRhNjU0NDc0MjY5OCIsImNsaWVudFNlY3JldCI6IkJSWGFWeVpVWUFnZGVucG4ifQ.ItKQU8Gwr7ZEuThR-FNY8FJPTtQVLCUNJB58KLPsyHs";

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