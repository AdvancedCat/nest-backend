import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

/**
 * @class ErrorInterceptor
 * @classdesc catch error when controller Promise rejected..
 */
@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((err) =>
        throwError(
          () =>
            new HttpException(
              {
                code: err.code || -1,
                message: err.message || '请求失败',
                result: err.result || null,
              },
              err.status || HttpStatus.OK,
            ),
        ),
      ),
    );
  }
}
