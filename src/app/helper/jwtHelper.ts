import jwt, { Secret, SignOptions } from "jsonwebtoken";

const jwtTokenCreate = (payload: any, secret: Secret, expiresIn: string) => {
  return jwt.sign(payload, secret, { expiresIn } as SignOptions);
};

const verifyToken = (token: string, secret: Secret) =>
  jwt.verify(token, secret);

export const jwtHelper = {
  jwtTokenCreate,
  verifyToken,
};
