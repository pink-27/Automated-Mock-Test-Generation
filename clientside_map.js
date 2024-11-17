// Parse command-line argument as JSON
const args = process.argv.slice(2);
const paths = JSON.parse(args[0]); // Expecting paths as a JSON string passed from command line
// Initial state

// Declare variables outside the switch block
let u, p, signupResult, loginResult;

for (let path of paths) {
  let state = "NOTSIGNEDUP";
  console.log(
    `---------------------------------------------------------------------------------------------------------`
  );
  console.log(
    `Processing path with username: ${path.username}, password: ${path.password}`
  );
  while (1) {
    switch (state) {
      case "NOTSIGNEDUP":
        // Use the username and password from the path for signup
        u = path.username;
        p = path.password;
        signupResult = path.signup_result;

        console.log(`Signing up with username: ${u}, password: ${p}`);

        // Simulate the signup process based on the provided result
        if (signupResult === "OK") {
          console.log("Signup successful");
          state = "SIGNEDUP";
          continue;
        } else {
          console.log("Signup failed");
        }
        break;

      case "SIGNEDUP":
        // Use the username and password from the path for login
        u = path.username;
        p = path.password;
        loginResult = path.login_result;

        console.log(`Logging in with username: ${u}, password: ${p}`);

        // Simulate the login process based on the provided result
        if (loginResult === "OK") {
          console.log("Login successful");
          state = "LOGGEDIN";
          continue;
        } else {
          console.log("Login failed");
        }
        break;

      case "LOGGEDIN":
        console.log("User is fully logged in");
      // break;
    }
    break;
  }
}

// Example command to run this script:
// node clientside_map.js '[{"_bound":0,"username":"symbolic_username","password":"symbolic_password","signup_result":"symbolic_signup_result"},{"username":"","password":"þ","signup_result":"","_bound":6},{"username":"Á","password":"85DO9Koo","signup_result":"","_bound":12},{"username":"2EwEw0??","password":";0wY7F7o","signup_result":"OK","_bound":17,"login_result":"symbolic_login_result"},{"username":"2EwEw0??","password":"O1w`j72w","signup_result":"OK","login_result":"OK","_bound":22},{"username":"_0sED?F1","password":"CF29A<8x","signup_result":"OK","login_result":"","_bound":18},{"username":"_0sED?F1","password":"v8<x6>^p","signup_result":"O
