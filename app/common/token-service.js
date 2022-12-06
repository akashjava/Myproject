import jwt from "react-native-pure-jwt";
const SharedPreferences = require("react-native-shared-preferences");

var TOKEN = null;
var isTokenLoaded = false;

export default async function getToken() {
  return new Promise((rsl, err) => {
    if (isTokenLoaded) {
      rsl(TOKEN);
    } else {
      SharedPreferences.getItem("token", function(token) {
        isTokenLoaded = true;
        TOKEN = token;
        rsl(token);
      });
    }
  });
}
export async function tokenDetails() {
    var token = await getToken();
    return jwt.decode(token, "my-secret", {
      skipValidation: true
    });
  }
  export function setToken(token) {
    SharedPreferences.setItem("token",token);
  }
  
 
