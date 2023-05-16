import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface BizResponse<T> {
  code: number; // 0 - success; not-0 - failure
  message: string; // the subcode of specific response
  result: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, BizResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<BizResponse<T>> {
    const call$ = next.handle();

    return call$.pipe(
      map((data: any) => {
        return {
          code: 0,
          message: '请求成功',
          result: data,
        };
      }),
    );
  }
}
