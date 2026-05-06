import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationService";
import { getTopNotifications } from "../utils/priority";
import { Log } from "../api/logger";

import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";

function Notifications() {

  const [notifications, setNotifications] = useState([]);
  const [topNotifications, setTopNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {

    const loadNotifications = async () => {

      Log(
        "frontend",
        "info",
        "api",
        "Fetching notifications"
      );

      const data = await fetchNotifications(page,10);

      setNotifications(data);

      const top = getTopNotifications(data);

      setTopNotifications(top);

      Log(
        "frontend",
        "info",
        "page",
        "Notifications loaded successfully"
      );

    };

    loadNotifications();

  }, [page]);

  const filteredNotifications =
    filter === "All"
      ? topNotifications
      : topNotifications.filter(
          (item) => item.Type === filter
        );

  return (

    <Container>

      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ marginTop: 4 }}
      >
        Top Notifications
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: 4 }}
      >

        <Button
          variant="contained"
          onClick={() => setFilter("All")}
        >
          All
        </Button>
        <Button
    variant="outlined"
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
  >
    Previous
  </Button>

  <Typography variant="h6">
    Page {page}
  </Typography>

  <Button
    variant="outlined"
    onClick={() => setPage(page + 1)}
  >
    Next
  </Button>

        <Button
          variant="contained"
          onClick={() => {

            setFilter("Placement");

            Log(
              "frontend",
              "info",
              "component",
              "Placement filter selected"
            );

          }}
        >
          Placement
        </Button>

        <Button
          variant="contained"
          onClick={() => {

            setFilter("Result");

            Log(
              "frontend",
              "info",
              "component",
              "Result filter selected"
            );

          }}
        >
          Result
        </Button>

        <Button
          variant="contained"
          onClick={() => {

            setFilter("Event");

            Log(
              "frontend",
              "info",
              "component",
              "Event filter selected"
            );

          }}
        >
          Event
        </Button>

      </Stack>

      {filteredNotifications.map((item) => (

        <Card
          key={item.ID}
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 3,
          }}
        >

          <CardContent>

            <Typography
              variant="h5"
              color="primary"
            >
              {item.Type}
            </Typography>

            <Typography variant="h6">
              {item.Message}
            </Typography>

            <Typography color="text.secondary">
              {item.Timestamp}
            </Typography>

          </CardContent>

        </Card>

      ))}

    </Container>

  );
}

export default Notifications;