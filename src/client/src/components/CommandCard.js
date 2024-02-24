import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import "./CommandCard.css";

const CommandCard = ({
  command,
  children,
  onExecute = () => {},
  onLearnMore = () => {},
  ...props
}) => {
  return (
    <Card className="command-card" {...props}>
      <CardContent>
        <Typography
          data-testid="commandList-card-h5"
          variant="h5"
          component="div"
        >
          {command}
        </Typography>
        <Typography data-testid="commandList-card-body2" variant="body2">
          {children}
        </Typography>
        <Box className="card-action-row">
          <Button
            variant="contained"
            startIcon={<InfoOutlined />}
            onClick={onLearnMore}
          >
            Info
          </Button>
          <Button variant="contained" onClick={onExecute}>
            Execute
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommandCard;


