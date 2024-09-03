import Grid2 from '@mui/material/Grid2';

function Layout({ children }) {
    return (
      <Grid2 container spacing={3}>
        {children}
      </Grid2>
    );
  }

export default Layout;
