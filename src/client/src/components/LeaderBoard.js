import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

const LeaderBoard = () => {
  // eslint-disable-next-line no-unused-vars -- until functionality is implemented
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from your backend
    // Example: axios.get('/api/leaderboard').then((response) => setLeaderboardData(response.data));
    const mockData = [
      { id: 1, user: "User1", commandsUsed: 10, messagesSent: 20 },
      { id: 2, user: "User2", commandsUsed: 8, messagesSent: 15 },
      { id: 3, user: "User3", commandsUsed: 12, messagesSent: 25 },
    ];
    setLeaderboardData(mockData);
  }, []);

  // eslint-disable-next-line no-unused-vars -- until functionality is implemented
  const handleEditClick = (userId) => {
    // Handle edit action, e.g., open a dialog with user details
    // Placeholder function for handling edit action
    console.log(`Edit user with ID ${userId}`);
    // Implement logic to open a dialog with user details
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Commands Used</TableCell>
            <TableCell align="right">Messages Sent</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell align="right">{row.commandsUsed}</TableCell>
              <TableCell align="right">{row.messagesSent}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleEditClick(row.id)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderBoard;
