import { Box, Divider, TextField, Typography } from '@mui/material';
import { StyleSheet, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <>
      <Box>
        <Typography variant="h3">To Do</Typography>
        <Divider variant="middle" />
        <Task />
      </Box>
      <Box>
        <Typography variant="h3">Doing</Typography>
        <Divider variant="middle" />
      </Box>
      <Box>
        <Typography variant="h3">Done</Typography>
        <Divider variant="middle" />
      </Box>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
