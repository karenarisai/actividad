import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export const authInterceptor : HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = authService.getToken() ?? "";
    
    let clonnedReq = req;

    
    
    if (token) {
        clonnedReq = req.clone({
            setHeaders: {
                'Authorization': token
            }
        })
        
    }

    return next(clonnedReq).pipe(
        catchError((error:HttpErrorResponse) => {
            if(error.status === 401){
                authService.logout();
            }
            return throwError(() => error);
        })
    );
}