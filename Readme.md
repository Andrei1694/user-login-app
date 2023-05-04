# User Login Demo Application

## Deploy & Production and Docker

### To run the app in a container

- npm install in client and server folders just to be sure
  From the root project

```
docker-compose up --build
```

### To run without containers

```
npm run watch
```

### Scripts

- `npm run install-server`: Installs the server dependencies.
- `npm run install-client`: Installs the client dependencies.
- `npm run install`: Installs both server and client dependencies.
- `npm run server`: Starts the server.
- `npm run client`: Starts the client.
- `npm run watch`: Starts both the server and the client concurrently.
- `npm run deploy`: Builds the client and starts the server.
- `npm run deploy-cluster`: Builds the client and starts the server in cluster mode.
- `npm run test`: Runs the tests for both the server and the client concurrently.

## Backend

### User Controller /v1/users

- `registerUser`: creates a new user account
- `loginUser`: logs in an existing user
- `logoutUser`: logs out the current user
- `logoutAll`: logs out the current user from all devices
- `updateUser`: updates the current user's account details
- `deleteUser`: deletes the current user's account
- `getProfile`: retrieves the current user's account details

### Weather Controller /v1/weather

```js
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
```

### Auth Middleware

The `auth` middleware is used to authenticate requests by verifying the JWT token included in the `Authorization` header of the request.

```js
userRouter.get("/me", auth, getProfile);
```

### Schema

The `User` schema includes the following fields:

- `name` (required string): the name of the user.
- `email` (required string): the email address of the user.
- `password` (required string): the password for the user account.
- `age` (number): the age of the user.
- `tokens` (array of objects): the authentication tokens for the user.
