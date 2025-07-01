const User = require('../../models/usermodel');
const errorHandler = require('../../middlewares/errorMiddleware');
const errorResponse = require('../../utils/errorResponse');
//jwt token
exports.sendToken = (user, statuscode, res) => {
    const token = User.getSignedToken(res)
    res.status(statusCode).json({
        success: true,
        token,
    });
};
//register fun
exports.registerController = async (requestAnimationFrame, res, next) => {
    try {
        const { username, email, password } = req.body;
        //existing user
        const existingEmail = await userModel.findone({ email });
        if (existingEmail) {
            return next(new errorResponse('Email is alredy register', 500));
        }
        const user = await userModel.create({ username, email, password });
        sensToken(user, 201, res);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
//Login
exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        //valiation
        if (!email || !password) {
            return next(new errorResponse('please provide email or password'));
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(new errorResponse('invalid Creation ', 401));
        }
        const ismatch = await userModel.matchPassword(password);
        if (!ismatch) {
            return next(new errorHandler('Invalid Creadition', 401));
            //res
            sendToken(user, 200, res);
        }
    } catch (error) {
        console.log(error);
        next(error);

    }

};
//logout
exports.logoutController = async (req, res) => {
    res.clearCookie('refreshToken');
    return res.status(200).json({
        success: true,
        message: 'Logout succesfully',
    });
}
exports.registerController = async () => { }
exports.loginController = async () => { };
exports.logoutController = async () => { };