import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{j as c,o as l,e as r,a as e,t as i,f,b as a,w as o}from"./app-f38dc963.js";const d={},h={class:"bg-white text-teal-500"},u={key:0,class:"text-center border-b border-teal-200 pb-4"},_=e("img",{src:"/assets/h.jpg",class:"w-32 h-32 aspect-square rounded-full mx-auto my-2 shadow-md ring ring-teal-500",alt:""},null,-1),p={class:"flex-auto self-center text-2xl text-teal-500 truncate capitalize truncate"},m=e("i",{class:"fas fa-bars self-center"},null,-1),x=e("div",{class:"flex-auto self-center"},"Dashboard",-1),g=e("i",{class:"fas fa-users self-center"},null,-1),b=e("div",{class:"flex-auto self-center"},"Users",-1),v=e("i",{class:"fas fa-home self-center"},null,-1),$=e("div",{class:"flex-auto self-center"},"Houses",-1),k=e("i",{class:"fa-solid fa-house-medical-flag self-center"},null,-1),w=e("div",{class:"flex-auto self-center"},"Add House",-1),y=e("hr",{class:"border-t border-teal-200 my-4"},null,-1),N=e("i",{class:"fa-solid fa-earth-americas self-center"},null,-1),B=e("div",{class:"flex-auto self-center"},"Website",-1);function C(s,V,j,D,H,L){const t=c("Link");return l(),r("div",h,[s.$page.props.user?(l(),r("div",u,[_,e("span",p,i(s.$page.props.user.name),1)])):f("",!0),a(t,{href:s.route("admin"),class:"flex gap-4 hover:bg-teal-100 transition p-2 text-xl"},{default:o(()=>[m,x]),_:1},8,["href"]),a(t,{href:"/admin/users/",class:"flex gap-4 hover:bg-teal-100 transition p-2 text-xl"},{default:o(()=>[g,b]),_:1}),a(t,{href:s.route("admin.houses"),class:"flex gap-4 hover:bg-teal-100 transition p-2 text-xl"},{default:o(()=>[v,$]),_:1},8,["href"]),a(t,{href:s.route("admin.house.form"),class:"flex gap-4 hover:bg-teal-100 transition p-2 text-xl"},{default:o(()=>[k,w]),_:1},8,["href"]),y,a(t,{href:s.route("home"),class:"flex gap-4 hover:bg-teal-100 transition p-2 text-xl"},{default:o(()=>[N,B]),_:1},8,["href"])])}const z=n(d,[["render",C]]);export{z as default};