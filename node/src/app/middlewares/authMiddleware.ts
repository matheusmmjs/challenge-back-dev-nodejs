import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: string;
  exp: string;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: 'Authorization not declared',
    });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'secret');

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    return res.status(401).json({
      success: false,
      message: 'Error verification token',
    });
  }
}
