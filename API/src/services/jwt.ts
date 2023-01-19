import bcrypt from 'bcrypt';
import config from 'config';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface JwtToken {
  id: string;
}

export class JwtService {
  public static async hashPassword(
    password: string,
    salt = 10
  ): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  public static async comparePasswords(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  public static generateToken(sub: object): string {
    return jwt.sign(sub, config.get('App.auth.key'), {
      expiresIn: config.get('App.auth.tokenExpiresIn'),
    });
  }

  public static decodeToken(token: string): JwtPayload {
    return jwt.verify(token, config.get('App.auth.key')) as JwtPayload;
  }
}