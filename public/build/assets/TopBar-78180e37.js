import i from"./Dropdown-a470a432.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{j as r,o as c,e as d,b as t,w as s,f as u,a as e,g as a}from"./app-f38dc963.js";const _={setup(){return{nav:()=>{}}},components:{Dropdown:i}},h={class:"flex gap-2 px-2 shadow-md py-2 text-gray-500 z-50"},g=e("button",{class:"bg-teal-100 rounded-full pr-2 py-1 w-16 self-center"},[e("i",{class:"fa-solid fa-search text-teal-500 text-xl"})],-1),m=e("div",{class:"flex-auto"},null,-1),x={key:0,class:"flex gap-1 self-center"},b=e("img",{src:"/assets/h.jpg",class:"w-7 h-7 rounded-full shadow ring ring-teal-500 mr-2",alt:""},null,-1),v={class:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownDefaultButton"},k={class:"border-t border-teal-400"},w=e("i",{class:"fas fa-lock mr-2"},null,-1),y=e("i",{class:"fa-solid fa-bars text-teal-500 text-2xl"},null,-1),$=[y];function B(o,n,D,N,C,V){const l=r("Link"),p=r("Dropdown");return c(),d("nav",h,[t(l,{href:"/vendor",class:"text-2xl text-teal-500 self-center md:w-72"},{default:s(()=>[a("RMS")]),_:1}),g,m,o.$page.props.user?(c(),d("div",x,[b,t(p,{title:o.$page.props.user.name.split(" ")[0]},{default:s(()=>[e("ul",v,[e("li",null,[t(l,{href:"/dashboard",class:"block px-4 py-2 hover:bg-teal-600"},{default:s(()=>[a("Dashboard")]),_:1})]),e("li",null,[t(l,{href:"#",class:"block px-4 py-2 hover:bg-teal-600"},{default:s(()=>[a("Settings")]),_:1})]),e("li",null,[t(l,{href:"/vendor/comingsoon",class:"block px-4 py-2 hover:bg-teal-600"},{default:s(()=>[a("Earnings")]),_:1})]),e("li",k,[t(l,{href:o.route("logout"),method:"post",as:"button",class:"block w-full px-4 py-2 hover:bg-teal-600"},{default:s(()=>[w,a(" Sign out")]),_:1},8,["href"])])])]),_:1},8,["title"])])):u("",!0),e("button",{onClick:n[0]||(n[0]=S=>o.$emit("toggleNav")),class:"self-center"},$)])}const T=f(_,[["render",B]]);export{T as default};