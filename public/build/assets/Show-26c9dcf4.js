import{_ as c}from"./AppLayout-f0d684c7.js";import p from"./DeleteUserForm-16daa3f6.js";import l from"./LogoutOtherBrowserSessionsForm-6db9e188.js";import{S as s}from"./SectionBorder-a68fe625.js";import f from"./TwoFactorAuthenticationForm-ce988c4b.js";import u from"./UpdatePasswordForm-41916fa9.js";import _ from"./UpdateProfileInformationForm-4c4908b7.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-f38dc963.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-f9755f1f.js";import"./SectionTitle-6d7562d2.js";import"./Modal-1a6f1bc8.js";import"./DangerButton-7d5c0a65.js";import"./TextInput-bf5cd187.js";import"./SecondaryButton-df94aa17.js";import"./ActionMessage-7172e245.js";import"./PrimaryButton-72961171.js";import"./InputLabel-39cdf3ce.js";import"./FormSection-f46234d5.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};