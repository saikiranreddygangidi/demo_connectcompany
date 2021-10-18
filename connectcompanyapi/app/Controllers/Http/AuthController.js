"use strict";

const User = use("App/Models/User");
class AuthController {
  async register({ request, response, auth }) {
    const data = request.post();
    try {
      await User.create({
        email: data.email,
        code: data.code,
        username: data.username,
      });
      return response.status(200).json({
        message: "Successfully registed in the data",
      });
    } catch (err) {
      return response.status(500).json({
        message: err,
      });
    }
  }
  async login({ request, response }) {
    const userinfo = request.post();
    const user = await User.query()
      .where("username", userinfo.username)
      .where("code", userinfo.code)
      .fetch();

    console.log(user);
    if (user.rows.length > 0) {
      return response.status(200).json({
        message: "authenticated",
        data: user,
      });
    } else {
      return response.status(500).json({
        message: "unauthenticated user",
      });
    }
  }
}

module.exports = AuthController;
