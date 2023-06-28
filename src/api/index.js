import axios from "axios";

export default class Api {
  address = "192.168.0.105";
  async save(data) {
    try {
      console.log(JSON.stringify(data));
      await axios
        .post(`http://${this.address}:3000/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        })
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  async remove(id) {
    try {
      await axios
        .delete(`http://${this.address}:3000/${id}`)
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  async read() {
    try {
      const response = await axios.get(`http://${this.address}:3000/`);
      const users = response.data.map((element) => ({
        user: element.name,
        email: element.email,
        id: element.id,
      }));
      return users;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
