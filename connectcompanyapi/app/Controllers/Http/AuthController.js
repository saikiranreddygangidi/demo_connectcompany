"use strict";

const User = use("App/Models/User");
class AuthController {
  async register({ request, response, auth }) {
    const data = request.post();
    try {
      await User.create({
        email: data.email,
        password: data.password,
        username: data.username,
      });
      return response.status(200).json({
        message: "Successfully registed",
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
      .andWhere("password", userinfo.password)
      .fetch();
    if (user.length > 0) {
      return response.status(200).json({
        message: "authenticated",
        data: user,
      });
    } else {
      return response.status(500).json({
        message: "unauthecated user",
      });
    }
  }
}

module.exports = AuthController;
