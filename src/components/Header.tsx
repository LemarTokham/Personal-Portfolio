import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Chip } from '@mui/material';

function Header() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', // Ensures text within the stack is centered
      }}

    >

      <Stack spacing={2}>
        <Typography 
          variant="h2" // A large variant for your name
          component="h1" // Good for SEO
          sx={{ fontWeight: 'bold' }}
        >
         Hi, I'm <span>Lemar</span>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <Chip color='primary' label="Currently @ J.P. Morgan" />
        </Typography>
      </Stack>
    </Box>
  );
}

export default Header;