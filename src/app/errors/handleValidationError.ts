import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from './error.interface';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: errorSources.map((error) => error.message).join(', '),
    errorSources,
  };
};

export default handleValidationError;
