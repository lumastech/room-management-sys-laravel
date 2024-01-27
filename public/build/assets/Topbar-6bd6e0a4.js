import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{d as f,j as h,o as n,e as d,a as o,b as a,w as l,k as x,g as s}from"./app-f38dc963.js";const g={setup(){const e=f(null),r=f(null);return{sidenav:r,sidenavcont:e,toggleSidenav:()=>{e.value.classList.contains("-translate-x-full")?(e.value.classList.remove("delay-300"),e.value.classList.remove("-translate-x-full"),r.value.classList.remove("-translate-x-full")):(e.value.classList.add("delay-300"),r.value.classList.add("-translate-x-full"),e.value.classList.add("-translate-x-full"))}}}},v={class:"bg-white shadow fixed w-full top-0 z-40"},b={class:"max-w-7xl mx-auto relative flex gap-4 md:p-4 px-1"},_=x('<a href="/" class="flex-auto md:flex-none text-teal-500 text-4xl font-bold py-1">RMS</a><div class="hidden md:inline flex-auto capitalize text-right py-1"><a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">home</a><a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">rent</a><a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">buy</a><a href="/" class="uppercase bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">sell</a></div>',2),m={key:0,class:"flex py-1"},y={key:1,class:"flex py-1"},k=o("i",{class:"fas fa-lock"},null,-1),w={class:"flex md:hidden gap-2 py-1"},L=o("i",{class:"fa-solid fa-bars text-teal-500 text-2xl"},null,-1),S=[L],C={ref:"sidenav",class:"fixed h-full w-3/4 left-0 bg-teal-500 transition -translate-x-full"},N={class:"border-b"},V={key:0,class:""},z={key:1,class:""},B=o("i",{class:"fas fa-lock mr-2"},null,-1);function D(e,r,u,i,T,$){const t=h("Link");return n(),d("nav",v,[o("div",b,[_,e.$page.props.user?(n(),d("div",y,[a(t,{href:"/dashboard",class:"py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md"},{default:l(()=>[s("Dashboard")]),_:1}),a(t,{href:e.route("logout"),method:"post",as:"button",class:"text-teal-500 p-2 bg-red-50 rounded-full"},{default:l(()=>[k]),_:1},8,["href"])])):(n(),d("div",m,[a(t,{href:e.route("login"),class:"py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md"},{default:l(()=>[s("Login")]),_:1},8,["href"]),a(t,{href:e.route("register"),class:"py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md"},{default:l(()=>[s("Sign-up")]),_:1},8,["href"])])),o("div",w,[o("button",{onClick:r[0]||(r[0]=(...c)=>i.toggleSidenav&&i.toggleSidenav(...c)),class:"rounded"},S)])]),o("div",{ref:"sidenavcont",onClick:r[1]||(r[1]=(...c)=>i.toggleSidenav&&i.toggleSidenav(...c)),class:"fixed w-full top-0 h-full bg-black/50 z-50 -translate-x-full"},[o("div",C,[o("div",N,[a(t,{href:"/",class:"block w-full uppercase mr-4 py-1 px-3 text-teal-50 transition hover:bg-teal-600"},{default:l(()=>[s("home")]),_:1}),a(t,{href:"/",class:"block w-full uppercase mr-4 py-1 px-3 text-teal-50 transition hover:bg-teal-600"},{default:l(()=>[s("rent")]),_:1}),a(t,{href:"/",class:"block w-full uppercase mr-4 py-1 px-3 text-teal-50 transition hover:bg-teal-600"},{default:l(()=>[s("buy")]),_:1}),a(t,{href:"/",class:"block w-full uppercase py-1 px-3 text-teal-50 transition hover:bg-teal-700"},{default:l(()=>[s("sell")]),_:1})]),e.$page.props.user?(n(),d("div",z,[a(t,{href:"/dashboard",class:"block w-full py-1 px-2 text-xl text-white transition hover:bg-teal-600"},{default:l(()=>[s("Dashboard")]),_:1}),a(t,{href:e.route("logout"),method:"post",as:"button",class:"block w-full text-white p-2 hover:bg-teal-600 transition text-left"},{default:l(()=>[B,s("Log out")]),_:1},8,["href"])])):(n(),d("div",V,[a(t,{href:e.route("login"),class:"block text-white py-1 px-4 transition hover:bg-teal-600"},{default:l(()=>[s("Login")]),_:1},8,["href"]),a(t,{href:e.route("register"),class:"block text-white py-1 px-4 transition hover:bg-teal-600"},{default:l(()=>[s("Sign-up")]),_:1},8,["href"])]))],512)],512)])}const M=p(g,[["render",D]]);export{M as default};