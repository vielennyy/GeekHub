import { Response } from 'express';

export class CustomError {

  errorHandler = (
    status: number,
    message: string,
    res: Response,
    ) => {
        return res.status(status).json(message);
    
        // handle other errors
        // console.error(err);
        // res.status(500).json({ message: 'Something went wrong.' });
  };
}

export const customError = new CustomError();

// Usage:
// app.get('/api', (req, res, next) => {
//   const err = new CustomError('Not found', 404);
//   next(err);
// });
