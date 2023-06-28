import axios from "axios";

export default class Api {
  address = "192.168.0.105";
  async save(data) {
    try {
      console.log(JSON.stringify(data));
      await axios
        .post(`http://${this.address}:3000/user`, data, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        })
        .then((response) => {
          console.log(response.data);
          return response;
        });
    } catch (error) {
      console.log(error);
    }
  }
  async validate(data) {
    try {
      console.log(JSON.stringify(data));
      const response = await axios.post(
        `http://${this.address}:3000/user/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        }
      );
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
