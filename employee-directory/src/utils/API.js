import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getRandomPeople: function () {
        return axios.get("https://randomuser.me/api/?results=25&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us");
    }
};
