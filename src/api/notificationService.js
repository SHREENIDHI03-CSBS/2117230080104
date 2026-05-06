import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaHJlZW5pZGhpLmEuMjAyMy5jc2JzQHJpdGNoZW5uYWkuZWR1LmluIiwiZXhwIjoxNzc4MDQ3ODY0LCJpYXQiOjE3NzgwNDY5NjQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3OGE0ZTdhYS1iYzk1LTQ5MjUtOGU3ZC02N2YyNzcwOWRjY2MiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzaHJlZW5pZGhpIiwic3ViIjoiZTk1ZGYxOTMtM2MxMi00OTAyLTkwZDMtZGE2NTQ0NzQyNjk4In0sImVtYWlsIjoic2hyZWVuaWRoaS5hLjIwMjMuY3Nic0ByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJzaHJlZW5pZGhpIiwicm9sbE5vIjoiMjExNzIzMDA4MDEwNCIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6ImU5NWRmMTkzLTNjMTItNDkwMi05MGQzLWRhNjU0NDc0MjY5OCIsImNsaWVudFNlY3JldCI6IkJSWGFWeVpVWUFnZGVucG4ifQ.7BLzTDL_f_72duYWDX-FgbLH4bVsMpRypli1ItJ42Cc";

export const fetchNotifications = async () => {

  try {

    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data.notifications;

  } catch (error) {

    console.error(error);

    return [];

  }

};