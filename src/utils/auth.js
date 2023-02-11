import {sign,verify} from 'jsonwebtoken'


const AUTH_SECRET = 'secret'

 export const generateAccessToken = (data) => sign(data, AUTH_SECRET)

 export const verifyAcessToken = (req,res,next) =>{

  try {
    const {autorizado} = req.cookies

    if(!autorizado) throw new Error('nao_autorizado')

    const user = verify(autorizado, AUTH_SECRET)
    req.user = user
    next()
  } catch (err) {

    res.status(401).send()
    
  }
 }