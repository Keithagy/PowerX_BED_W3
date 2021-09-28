module.exports = (service) => {
  return (req, res, next) => {
    console.log('🚀 ~ file: auth.js ~ line 3 ~ return ~ req', req.headers)
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    console.log('🚀 ~ file: auth.js ~ line 5 ~ return ~ token', token)
    if (token) {
      const uid = service.verifyToken(token)
      if (uid !== null) {
        req.uid = uid
        return next()
      }
    }
    res.status(401).send('Unauthorized')
  }
}