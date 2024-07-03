import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as jwksRsa from 'jwks-rsa';

@Injectable()
export class AzureEntraIdMiddleware implements NestMiddleware {
  private jwksClient: jwksRsa.JwksClient;

  constructor() {
    this.jwksClient = jwksRsa({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://login.microsoftonline.com/${process.env.AZURE_ENTRA_ID_TENANT_ID}/discovery/v2.0/keys`,
    });
  }
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }

    const getKey = (header: any, callback: any) => {
      this.jwksClient.getSigningKey(header.kid, (err, key) => {
        const signingKey = key.getPublicKey();
        callback(null, signingKey);
      });
    };

    jwt.verify(
      token,
      getKey,
      {
        audience: process.env.AZURE_ENTRA_ID_CLIENT_ID,
        issuer: `https://login.microsoftonline.com/${process.env.AZURE_ENTRA_ID_TENANT_ID}/v2.0`,
        algorithms: ['RS256'],
      },
      (err, decoded) => {
        if (err) {
          return res.status(401).send('The token is invalid');
        }
        console.log('Decoded: ', decoded);
        next();
      },
    );
  }
}
