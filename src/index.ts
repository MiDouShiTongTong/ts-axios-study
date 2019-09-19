import axios, { AxiosError, AxiosResponse, AxiosTransform, CancelHandler } from './axios';
import qs from 'qs';

// params test
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     favoriteList: ['qqq', 'www', 'eee']
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     person: {
//       name: 'qqq'
//     }
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     date: new Date()
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     qqq: '@$),+'
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     name: 'Andy'
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     age: 23
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1?qqq=2#qwe',
//   params: {
//     name: 'Andy'
//   }
// });

// data test
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data:{
//     q: [
//       '123',
//       '222',
//       '333'
//     ]
//   }
// });

// headers test
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: {
//     q: 123,
//     w: 231,
//     e: 123
//   },
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json, text/plain, */*'
//   }
// });
//
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data: qs.stringify({
//     q: 123,
//     w: 231,
//     e: 123
//   })
// });

// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: new URLSearchParams('q=1&w=5')
// });

// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: {
//     a: 1,
//     b: 2
//   }
// }).then((res: AxiosResponse) => {
//   console.log(res);
// });

// response status code test
// axios({
//   method: 'get',
//   url: 'http://127.0.0.1'
// }).then((res: AxiosResponse) => {
//   console.log(res);
// }).catch(e => {
//   console.error(e);
// });

// timeout test
// axios({
//   method: 'get',
//   url: 'http://127.0.0.1',
//   params: {
//     q: 2
//   }
// }).then((res: AxiosResponse) => {
//   console.log(res);
// }).catch(e => {
//   console.error(e);
// });

// network test
// setTimeout(() => {
//   axios({
//     method: 'get',
//     url: 'http://127.0.0.1',
//     params: {
//       q: 2
//     }
//   }).then((res: AxiosResponse) => {
//     console.log(res);
//   }).catch((e: AxiosError) => {
//     console.error(e.message);
//     console.error(e.isError);
//     console.error(e.config);
//     console.error(e.code);
//     console.error(e.request);
//     console.error(e.response);
//   });
// }, 3000);

// extend tests
// axios.get('http://127.0.0.1', {w: 55});
// axios.options('http://127.0.0.1');
// axios.head('http://127.0.0.1');
// axios.delete('http://127.0.0.1');
// axios.post('http://127.0.0.1', {q: 11});
// axios.put('http://127.0.0.1', {q: 11});
// axios.patch('http://127.0.0.1', {q: 11});

// override test
// axios('http://127.0.0.1', {
//   method: 'get',
//   params: {
//     q: 1
//   }
// });
//
// axios('http://127.0.0.1', {
//   method: 'post',
//   data: {
//     q: 1
//   }
// });

// generic test
// interface ResponseData<T = any> {
//   code: number;
//   message: string;
//   result: T;
// }
//
// interface User {
//   name: string;
//   age: number;
// }
//
// const getUser = <T>() => {
//   return axios<ResponseData<T>>('http://127.0.0.1?q=1')
//     .then((res: any) => res.data)
//     .catch((err: any) => console.log(err));
// };
//
// const test = async () => {
//   const user: ResponseData = await getUser<User>();
//   if (user) {
//     console.log(user.result.nam);
//   }
// };

// test();

// interceptor test
// axios.interceptors.request.use(config => {
//   config.headers.test = '1';
//   return config;
// });
//
// axios.interceptors.response.use(response => {
//   return response;
// });
//
// axios({
//   method: 'get',
//   url: 'http://127.0.0.1',
//   headers: {
//     q: '1'
//   }
// })
//   .then(res => console.log(res));

// axios.defaults.headers.common['test1'] = 1;
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   headers: {
//     q: '1'
//   },
//   data: qs.stringify({
//     a: 1
//   })
// });

// transform test
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: {
//     q: 1
//   },
//   transformRequest: [
//     (data) => {
//       return qs.stringify(data);
//     },
//     ...axios.defaults.transformRequest as AxiosTransform[]
//   ],
//   transformResponse: [
//     ...axios.defaults.transformResponse as AxiosTransform[],
//     (data) => {
//       if (typeof data === 'object') {
//         data.b = 2;
//       }
//       return data;
//     }
//   ]
// }).then(res => console.log(res));

// instance test
// const instance = axios.create({
//   transformRequest: [
//     (data) => {
//       return qs.stringify(data);
//     },
//     ...axios.defaults.transformRequest as AxiosTransform[]
//   ],
//   transformResponse: [
//     ...axios.defaults.transformResponse as AxiosTransform[],
//     (data) => {
//       if (typeof data === 'object') {
//         data.b = 2;
//       }
//       return data;
//     }
//   ]
// });
//
// instance({
//   url: 'http://127.0.0.1',
//   method: 'post',
//   data: {
//     q: 1
//   }
// }).then(res => console.log(res));
//
// axios({
//   url: 'http://127.0.0.1',
//   method: 'post',
//   data: qs.stringify({
//     q: 2
//   }),
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }).then(res => console.log(res));

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
// axios({
//   url: 'http://127.0.0.1',
//   cancelToken: source.token
// }).catch(e => {
//   if (axios.isCancel(e)) {
//     console.log(e);
//   }
// });
//
// setTimeout(() => {
//   source.cancel('取消请求');
//   axios({
//     url: 'http://127.0.0.1',
//     method: 'post',
//     data: qs.stringify({
//       a: 1
//     }),
//     cancelToken: source.token
//   }).catch(e => {
//     if (axios.isCancel(e)) {
//       console.log(e);
//     }
//   });
// }, 1000);
//
// let cancelHandler: CancelHandler;
// axios({
//   url: 'http://127.0.0.1',
//   method: 'get',
//   cancelToken: new CancelToken(c => {
//     cancelHandler = c;
//   })
// }).catch(e => {
//   if (axios.isCancel(e)) {
//     console.log(e);
//   }
// });
//
// setTimeout(() => {
//   cancelHandler('取消请求');
// }, 1100);

// 跨域 cookie test
// axios({
//   method: 'get',
//   url: 'http://127.0.0.1',
//   withCredentials: true
// });

// 跨域请求伪造
axios({
  method: 'get',
  url: 'http://127.0.0.1',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN-1',
  xsrfHeaderName: 'X-XSRF-TOKEN-1'
});
