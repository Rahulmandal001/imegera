import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  // console.log('userAuth - token header:', token);

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log('userAuth - decoded token:', tokenDecode);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
    } else {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    next();
  } catch (error) {
    // console.log('userAuth - verify error:', error.message);
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;   // ✅ Must be default export
