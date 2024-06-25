import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Carousel from "react-material-ui-carousel";
import {
  Grid,
  Chip,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const events = [
  {
    title: "NCC (National cadet corps)",
    date: "26th Jan 2023",
    image: "/images/NCC.png",
  },
  {
    title: "Science exhibition",
    date: "20th Mar 2023",
    image: "/images/science.png",
  },
  {
    title: "Alumni association",
    date: "30th Mar 2023",
    image: "/images/alumini.png",
  },
  {
    title: "Cleanliness drive",
    date: "30th Apr 2023",
    image: "/images/cleanliness day.png",
  },
  {
    title: "Plantation day",
    date: "28th Jun 2023",
    image: "/images/plantation day.png",
  },
  {
    title: "Annual day",
    date: "25th Feb 2023",
    image: "/images/annual day.png",
  },
];

const EventCard = ({ event, onClick }) => (
  <Card onClick={() => onClick(event)}>
    <CardMedia
      component="img"
      height="200"
      image={event.image}
      alt={event.title}
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {event.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {event.date}
      </Typography>
    </CardContent>
  </Card>
);

const Main = () => {
  const [selectedChip, setSelectedChip] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleChipClick = (chip) => {
    setSelectedChip(chip);
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const filteredEvents =
    selectedChip === "All"
      ? events
      : events.filter((event) => event.title === selectedChip);

  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "1rem 15rem" }}>
        <Chip
          label="All"
          onClick={() => handleChipClick("All")}
          color={selectedChip === "All" ? "primary" : "default"}
          sx={{ m: 0.5 }}
        />
        {events.map((event, index) => (
          <Chip
            key={index}
            label={event.title}
            onClick={() => handleChipClick(event.title)}
            color={selectedChip === event.title ? "primary" : "default"}
            sx={{ m: 0.5 }}
          />
        ))}
      </Box>
      <Grid container spacing={4}>
        {filteredEvents.map((event) => (
          <Grid item key={event.title} xs={12} sm={6} md={6}>
            <EventCard event={event} onClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ justifyContent: "center" }} variant="outlined">
          View more
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        PaperProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent style={{ padding: 0 }}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#fff",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Carousel>
            {events.map((event, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  color: "#fff",
                  position: "relative",
                }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    // position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    mr={"8rem"}
                    sx={{ color: "#FFF" }}
                    gutterBottom
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#FFF" }}>
                    {event.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Main;
