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
  Chip,
  Box,
} from "@mui/material";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [topNotifications, setTopNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    const savedViewed =
      JSON.parse(localStorage.getItem("viewed")) || [];

    setViewed(savedViewed);

    const loadNotifications = async () => {
      try {
        await Log(
          "frontend",
          "info",
          "api",
          "Fetching notifications"
        );

        const data = await fetchNotifications(page, 10);

        setNotifications(data);

        const top = getTopNotifications(data);

        setTopNotifications(top);

        await Log(
          "frontend",
          "info",
          "page",
          "Notifications loaded successfully"
        );
      } catch (error) {
        console.error(error);
      }
    };

    loadNotifications();
  }, [page]);

  const filteredNotifications =
    filter === "All"
      ? topNotifications
      : topNotifications.filter(
          (item) => item.Type === filter
        );

  const markAsViewed = (id) => {
    const updatedViewed = [...viewed, id];

    setViewed(updatedViewed);

    localStorage.setItem(
      "viewed",
      JSON.stringify(updatedViewed)
    );
  };

  const getCardColor = (type) => {
    switch (type) {
      case "Placement":
        return "#e3f2fd";
      case "Result":
        return "#e8f5e9";
      case "Event":
        return "#fff3e0";
      default:
        return "#ffffff";
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Header */}
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        fontWeight="bold"
      >
        Top Notifications
      </Typography>

      {/* Filter Section */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ mb: 4 }}
      >
        <Chip
          label="All"
          color={filter === "All" ? "primary" : "default"}
          onClick={() => setFilter("All")}
        />

        <Chip
          label="Placement"
          color={filter === "Placement" ? "primary" : "default"}
          onClick={() => setFilter("Placement")}
        />

        <Chip
          label="Result"
          color={filter === "Result" ? "primary" : "default"}
          onClick={() => setFilter("Result")}
        />

        <Chip
          label="Event"
          color={filter === "Event" ? "primary" : "default"}
          onClick={() => setFilter("Event")}
        />
      </Stack>

      {/* Notifications */}
      {filteredNotifications.map((item) => (
        <Card
          key={item.ID}
          onClick={() => markAsViewed(item.ID)}
          sx={{
            mb: 3,
            borderRadius: 3,
            backgroundColor: viewed.includes(item.ID)
              ? "#f5f5f5"
              : getCardColor(item.Type),
            opacity: viewed.includes(item.ID) ? 0.7 : 1,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardContent>
            <Stack spacing={1}>
              <Typography
                variant="h5"
                color="primary"
                fontWeight="bold"
              >
                {item.Type}
              </Typography>

              <Typography variant="h6">
                {item.Message}
              </Typography>

              <Typography color="text.secondary">
                {item.Timestamp}
              </Typography>

              {viewed.includes(item.ID) && (
                <Chip
                  label="Viewed"
                  color="success"
                  size="small"
                />
              )}
            </Stack>
          </CardContent>
        </Card>
      ))}

      {/* Pagination */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={4}
        mb={4}
      >
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
      </Box>
    </Container>
  );
}

export default Notifications;