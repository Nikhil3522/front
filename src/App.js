import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
    const onSubmit = async () => {
      let data = JSON.stringify({
          "email": 'a@gmail.com',
          "password": 'Anurag1'
      });

      let config = {
          method: 'POST',
          maxBodyLength: Infinity,
          url: 'https://dating-backend-production-f622.up.railway.app/login',
          withCredentials: true,
          headers: {
              'Content-Type': 'application/json'
          },
          data: data
      }

      axios.request(config)
      .then(async (response) => {

          console.log("response", response);
          // if(response.data.message === "User LoggedIN!"){
          //     await localForage.setItem('userLogin', {id: Date.now(), value: true});
          //     navigate('/home');
          // }else if(response.data.message === "Wrong Email or Passwod!" ){
          //     setAlert("Wrong Email or Password");
          // }else{
          //     setAlert("Something went wrong! Please try again after sometime.");
          // }
      })
      .catch((error) => {
          console.log(error);
      });
    }


    const mydetail = () => {
      let config = {
        methid: 'get',
        maxBodyLength: Infinity,
        url: 'https://dating-backend-production-f622.up.railway.app/mydetails',
        withCredentials: true,
  
      }
  
      axios.request(config)
        .then((res) => {
          console.log("res mydetails", res);
        })
        .catch((error) => {
          console.log("error mydetails", error)
        })
    }
  return (
    <div className="App">
      <button onClick={onSubmit}>Submit</button>

      <button onClick={mydetail}>mydetails</button>

    </div>
  );
}

export default App;
