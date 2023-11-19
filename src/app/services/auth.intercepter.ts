// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Token } from "@angular/compiler";
// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Observable } from "rxjs";
// import { LoginService } from "./login.service";


// @Injectable()
// export class AuthIntercepter implements HttpInterceptor
// {
  
//     constructor(private loginService:LoginService,private router:Router)
//     {
//         console.log("call interceptor");
//     }
    

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
//     {
//         var newReq=req;
//         console.log(newReq);
         
//         var token=this.loginService.getToken();
          
//         console.log("INTERCEPTER token",token);

//         if(token != null)
//         {
             
//             console.log(req);
//              if(!req.url.includes('/login'))
//               {

//                newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
               
//             } 
//             }    
//             return next.handle(newReq);
   
//      //   this.router.navigate(['/admin'])
        
      
  




// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Token } from "@angular/compiler";
// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { catchError, Observable, throwError } from "rxjs";
// import { LoginService } from "./login.service";



import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Token } from "@angular/compiler";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class AuthIntercepter implements HttpInterceptor
{
    constructor(private loginService:LoginService,private router:Router)
    {
        console.log("call interceptor");
    }
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
        {
             var newReq=request;
            
            var  token= this.loginService.getToken();
            if (token) {
                // If we have a token, we set it to the header
                 if(request.url.startsWith('/login') ){
                request = request.clone({
                   setHeaders: {Authorization: `Bearer ${token}`}
                });
            }
             }
             return next.handle(request).pipe(
                 catchError((err) => {
                   if (err instanceof HttpErrorResponse) {
                       if (err.status === 401) {
                       // redirect user to the logout page
                    }
                 }
                 return throwError(err);
               })
              )
             }
    }







































































































































































































