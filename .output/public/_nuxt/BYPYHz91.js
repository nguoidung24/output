import{m as N,q as T,u as V,v as D,c as x,e as _,f as v,r as B,o as p,b as e,g as h,x as n,w as d,y as g,z as b,h as w,A as L,i as M,B as C}from"./DTcdeyfU.js";import{u as U}from"./Db4I_uL-.js";const j=Symbol.for("nuxt:client-only"),A=N({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(S,{slots:o,attrs:l}){const i=T(!1);return V(()=>{i.value=!0}),D(j,!0),u=>{var a;if(i.value)return(a=o.default)==null?void 0:a.call(o);const s=o.fallback||o.placeholder;if(s)return s();const k=u.fallback||u.placeholder||"",m=u.fallbackTag||u.placeholderTag||"span";return x(m,l,k)}}}),F={class:"min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden"},O={class:"bg-gray-50 dark:bg-gray-900"},E={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},I={key:0,class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},q={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},z=e("h1",{class:"text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Đăng nhập tài khoản của bạn ",-1),G={class:"space-y-4 md:space-y-6",action:"#"},K=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Số điện thoại: ",-1),Q=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Mật khẩu: ",-1),R={class:"flex items-center justify-between"},H={class:"flex items-start"},J={class:"text-sm font-light text-gray-500 dark:text-gray-400"},P=e("button",{href:"#",class:"text-sm font-medium text-gray-400 hover:underline dark:text-blue-500"}," Quên mật khẩu?",-1),W={key:1,class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},X={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},Y=e("h1",{class:"text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Đăng ký tài mới ",-1),Z={class:"space-y-4 md:space-y-6",action:"#"},$=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Số điện thoại: ",-1),ee=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Mật khẩu: ",-1),te=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Nhập lại mật khẩu: ",-1),re={class:"flex items-center justify-between"},oe={class:"flex items-start"},le={class:"text-sm font-light text-gray-500 dark:text-gray-400"},ae=e("button",{class:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Đăng Ký ",-1),de={__name:"login",setup(S){let o="",l="",i=U("isLoginForm",()=>!0);const u=(a,t)=>{const c=new Date;c.setDate(c.getDate()+7);const f={expires:c,secure:!0,sameSite:"strict"};C.set("SSID",a,f),C.set("isLogin",t,f)},s=a=>{o=a.target.value.trim(),l=a.target.value.trim()},k=a=>(a.preventDefault(),o=="1"&&l=="1"?(u("1","1"),L("/")):alert("Tài khoản hoặc mật khẩu không chính xác")),m=a=>{i.value=a};return(a,t)=>{const c=M,f=A,y=B("motion-roll-visible-top");return p(),x("div",F,[_(f,null,{default:v(()=>[e("section",O,[e("div",E,[_(c,{style:{"letter-spacing":"8px","font-weight":"888"},to:"/",class:"flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white"},{default:v(()=>[h(" SAMSENG ")]),_:1}),n(i)?d((p(),x("div",I,[e("div",q,[z,e("div",G,[e("div",null,[K,d(e("input",{onChange:t[0]||(t[0]=r=>s(r)),"onUpdate:modelValue":t[1]||(t[1]=r=>g(o)?o.value=r:o=r),autocomplete:"off",type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"84+ 987654321"},null,544),[[b,n(o)]])]),e("div",null,[Q,d(e("input",{onChange:t[2]||(t[2]=r=>s(r)),"onUpdate:modelValue":t[3]||(t[3]=r=>g(l)?l.value=r:l=r),autocomplete:"off",type:"password",placeholder:"••••••••••••••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[b,n(l)]])]),e("div",R,[e("div",H,[e("p",J,[h(" Bạn chưa có tài khoản? "),e("a",{href:"#",onClick:t[4]||(t[4]=r=>m(!1)),class:"font-medium text-blue-600 hover:underline dark:text-blue-500"}," Đăng ký ")])]),P]),e("button",{onClick:t[5]||(t[5]=r=>k(r)),class:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Đăng Nhập ")])])])),[[y]]):w("",!0),n(i)?w("",!0):d((p(),x("div",W,[e("div",X,[Y,e("div",Z,[e("div",null,[$,d(e("input",{onChange:t[6]||(t[6]=r=>s(r)),"onUpdate:modelValue":t[7]||(t[7]=r=>g(o)?o.value=r:o=r),autocomplete:"off",type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"84+ 987654321"},null,544),[[b,n(o)]])]),e("div",null,[ee,d(e("input",{onChange:t[8]||(t[8]=r=>s(r)),"onUpdate:modelValue":t[9]||(t[9]=r=>g(l)?l.value=r:l=r),autocomplete:"off",type:"password",placeholder:"••••••••••••••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[b,n(l)]])]),e("div",null,[te,d(e("input",{onChange:t[10]||(t[10]=r=>s(r)),"onUpdate:modelValue":t[11]||(t[11]=r=>g(l)?l.value=r:l=r),autocomplete:"off",type:"password",placeholder:"••••••••••••••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[b,n(l)]])]),e("div",re,[e("div",oe,[e("p",le,[h(" Bạn đã có tài khoản? "),e("a",{onClick:t[12]||(t[12]=r=>m(!0)),href:"#",class:"font-medium text-blue-600 hover:underline dark:text-blue-500"}," Đăng nhập ")])])]),ae])])])),[[y]])])])]),_:1})])}}};export{de as default};
