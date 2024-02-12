import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from your backend
    // Example: axios.get('/api/leaderboard').then((response) => setLeaderboardData(response.data));
  }, []);

  const handleEditClick = (userId) => {
    // Handle edit action, e.g., open a dialog with user details
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
              <TableCell component="th" scope="row">{row.user}</TableCell>
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