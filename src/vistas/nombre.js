import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import MapIcon from '@material-ui/icons/Map';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';


function App() {
  // Declare a new state variable, which we'll call "count"
  const [state, setState] = useState({
    name: "",
    latitude: "",
    longitude: ""

  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);


  const handleData = async (e) => {
    console.log(state)
    valide();
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))

  }

  const valide = () => {
    const payload = {
      "nombre": state.name,
      "latitude": state.latitude,
      "longitude": state.longitude,

    }

    console.log(payload)
    axios.post('https://apiradar.herokuapp.com/api/data', payload)
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          alert("Se agrego correctamente");
        }
        else if (response.status === 202) {
          alert("Algo salio mal ");

        }

      })
  }

  return (
    <Container>
      <IconButton variant="contained" color="black" href="/mapa" style={{ bottom: 10, left: -200 }}>
        <MapIcon style={{ fontSize: 50 }} color="lightBlue" />
        <FormHelperText id="standard-weight-helper-text">Mapa</FormHelperText>
      </IconButton>
      <Box>
        <br />
        <br />
        <h1
          align='center'
        >GeoLand </h1>
        <br />
        <br />
        <br />
        <br />
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          defaultValue={state.name}
          onChange={handleChange}
          helperText="Con este nombre apareceras en el mapa"
        />
        <h1>{state.name} </h1>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => handleData(state)}
        >
          iniciar
        </Button>
      </Box>
    </Container>
  );
}
export default App;
