import Dashboard from "../components/dashboard/dashboard";
import { Grommet } from "grommet";

const customTheme = {
  global: {
    colors: {
      brand: "#F18825",
    },
  },
  button: {
      primary:`
        background-color: #F18825;
        border: 1px solid #F18825;
        color: white;
        &:hover {
          background-color: #F18825;
          border: 1px solid #F18825;
          color: white;
        }
      `,
  },
};

const theme = { ...Grommet, ...customTheme };

const DashboardPage = () => {
  return (
    <Grommet theme={theme}>
      <Dashboard />
    </Grommet>
  );
};

export default DashboardPage;
