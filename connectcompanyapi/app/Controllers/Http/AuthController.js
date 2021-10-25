"use strict";
const { validate } = use("Validator");

const User = use("App/Models/User");
class AuthController {
  async register({ request, response, auth }) {
    const data = request.post();
    try {
      const rules = {
        email: "required|email|unique:users,email",
        code: "required",
        username: "required",
      };

      const validation = await validate(request.post(), rules);

      if (validation.fails()) {
        return response.badRequest({
          error: {
            status: 401,
            message:
              "bad request, missing some required for internship properties",
            fields: validation.messages(),
          },
        });
      }

      await User.create({
        email: data.email,
        code: data.code,
        username: data.username,
      });
      return response.status(200).json({
        message: "Successfully registered in the data",
      });
    } catch (err) {
      return response.status(500).json({
        message: "Please enter all the fields and proper details",
        err: err,
      });
    }
  }
  async login({ request, response }) {
    const userInfo = request.only(["email", "password"]);
    
    const rules = {
      email: 'required|email|unique:users,email',
      code: 'required',
    };

    const validation = await validate(userInfo, rules);


  if (validation.fails()) {
    return response.badRequest({
      error: {
        status: 401,
        message:
          "bad request, missing some required for internship properties",
        fields: validation.messages(),
      },
    });
  }

    if (!userInfo.email || !userInfo.password) {
      logger.error(
        "AuthController-login, missing required attributes: email/password"
      );
      return response.status(400).json({
        error: {
          status: 400,
          message: "bad request, email and password are required",
        },
      });
    }

    const decipher = crypto.createDecipheriv(
      algorithm,
      Securitykey,
      initVector
    );

    let decryptedData = decipher.update(userInfo.code, "base64", "utf-8");

    decryptedData += decipher.final("utf8");

    userInfo.code = decryptedData;

    const user = await User.query()
      .where("username", userinfo.username)
      .where("code", userinfo.code)
      .fetch();

    if (user.rows.length > 0) {
      return response.status(200).json({
        message: "authenticated",
        data: user,
      });
    } else {
      return response.status(500).json({
        message: "Please provide the vaild details ",
        err :err ,
      });
    }
  }
}

module.exports = AuthController;
