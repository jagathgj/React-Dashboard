import axios from "axios";

const url = "https://covid-kerala.herokuapp.com/v1/confirmedList";

export const fetchData = () => {
    axios
      .get(url)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
