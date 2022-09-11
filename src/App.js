import Axios from "axios"
import { useState } from 'react';
import './App.css'

function App() {
  const [customerData, setCustomerData] = useState([]);
  const [time, setTime] = useState(0);
  const getUserData = async () => {
    try {
      var start = new Date().getTime();
      let customerDataResp = await Axios.get('http://localhost:8000/customers');
      var end = new Date().getTime();
      setTime(end - start);
      console.log(customerDataResp)
      setCustomerData(customerDataResp.data);
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="App">
      <button style={{ marginTop: "10%" }} onClick={() => getUserData()}>Fetch Customer Info</button> <br /> <br />
      <h3>Request time: {time} ms</h3>
      <table>
        <tr>
          <th>
            Balance
          </th>
          <th>
            Email
          </th>
          <th>
            Phone
          </th>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
        </tr>
        {customerData.map((ele, index) => <tr>
          <td>
            {ele.customer_balance}
          </td>
          <td>
            {ele.customer_email}
          </td>
          <td>
            {ele.customer_phone}
          </td>
          <td>
            {ele.first_name}
          </td>
          <td>
            {ele.last_name}
          </td>
        </tr>)}
      </table>
    </div>
  );
}

export default App;
