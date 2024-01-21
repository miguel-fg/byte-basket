import logo from './logo.svg';
import {Grommet} from "grommet";
// import './App.css';
import Dashboard from "./dashboard/dashboard";
import CheckoutGrommet2 from './checkout/checkoutGrommet2';
import CheckoutNew from './checkout/checkout-new';
import CheckoutNew2 from './checkout/checkout-new-2';

function App() {
  return (
      <Grommet>
        {/* <Dashboard/> */}
        {/* <CheckoutGrommet2/> */}
        <CheckoutNew2/>
      </Grommet>
  );
}

export default App;