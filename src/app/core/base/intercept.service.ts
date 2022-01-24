// // Angular
// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// // RxJS
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';
// import { LocalStorageService } from './local-storage.servcice';
// import { tap } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

// import { Store } from '@ngrx/store';

// // import { Logout } from '../../../../core/auth';
// // import { AppState } from '../../../../core/reducers';

// @Injectable()
// export class InterceptService implements HttpInterceptor {
// 	constructor(
// 		private ls: LocalStorageService,
// 		private store: Store<AppState>,
// 		private toastr: ToastrService,
// 	) { }
// 	// intercept request and add token
// 	intercept(
// 		request: HttpRequest<any>,
// 		next: HttpHandler
// 	): Observable<HttpEvent<any>> {
// 		const url = `${environment.url}${request.url}`;
// 		let contentType = 'application/json';
// 		let setContentType = true;


// 		if (request.body instanceof FormData) {
// 			setContentType = false;
// 		}

// 		if (localStorage.getItem(environment.authTokenKey)) {
//       const token: string = localStorage.getItem(environment.authTokenKey);
//       request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
// 	 }

// 	 	let requestHeaders = {
// 			'x-device-id': '1',
// 			'x-device-type': 'web',
// 			'x-app-name': 'elsa_web_dashboard',
// 			'Accept': 'application/json',
// 			'Content-Type': `${contentType}`
// 		 };

// 		if (!setContentType) {
// 			delete requestHeaders['Content-Type'];
// 		}

// 		request = request.clone(
//       {
//       	setHeaders: requestHeaders,
//         url: url
//       }
//     );
// 		return next.handle(request).pipe(
// 			tap(
// 				event => {
// 					 if (event instanceof HttpResponse) {
// 						// console.log(event);
// 					}
// 				}, (error: any) => {
// 					if (error.error.code === 1111) {
// 						this.toastr.error(error.error.message);
// 						this.store.dispatch(new Logout());
// 					}
// 					console.log('intercept error => ', error);
// 				}
// 			)
// 		);
// 	}
// }
