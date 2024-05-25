import{d as w}from"./DghRfAad.js";import{_ as P,j as F,o as n,c as o,b as t,n as u,F as m,d as y,t as c,C as k,k as $,h as d,s as L,l as z,g as _,a as S,e as x}from"./DTcdeyfU.js";import{u as D}from"./DY9JMPbd.js";import{u as T}from"./Db4I_uL-.js";import{u as B}from"./CXgV_8gr.js";import{_ as N}from"./CkuYwiky.js";import{a as R}from"./DQtOOeJr.js";const j=[{color_id:"1",code:"#000",name:"Black"},{color_id:"2",code:"blue",name:"Blue"},{color_id:"3",code:"#fff",name:"White"},{color_id:"4",code:"yellow",name:"Yellow"},{color_id:"5",code:"gray",name:"Gray"},{color_id:"6",code:"green",name:"Green"},{color_id:"7",code:"brown",name:"Brown"},{color_id:"8",code:"Pink",name:"Pink"},{color_id:"9",code:"Orange",name:"Orange"}],M=[{text:"Dưới 5 triệu",value:"0->5000000"},{text:"Từ 5 triệu đến 10 triệu",value:"5000000->10000000"},{text:"Từ 10 triệu đến 20 triệu",value:"10000000->20000000"},{text:"Từ 20 triệu đến 50 triệu",value:"30000000->50000000"},{text:"Trên 50 triệu",value:"50000000->9999999999999999999999999999"}],V=[1,2,3,4,5],I=w({props:["index","handleChangeFilters","data"],data(){return{dataColors:j,dataPrices:M,dataRating:V}},methods:{handleChange(e,s){this.handleChangeFilters(e,s)}},created(){}},"$0QAQ5H1x97"),U={class:""},G={class:"border-gray-200 pb-4"},K=t("legend",{class:"w-full px-2"},[t("button",{type:"button",class:"flex w-full items-center justify-between p-2 text-gray-400 hover","aria-controls":"filter-section-0","aria-expanded":"false"},[t("span",{class:"text-base font-semibold text-gray-900"},"Theo giá")])],-1),q={class:"px-4 pb-2 pt-4",id:"filter-section-0"},O={class:"space-y-3"},W={class:"flex items-center"},A=["checked"],E=["onChange","checked","id"],Y=["for"],H={class:"border-gray-200 pb-4"},J=t("legend",{class:"w-full px-2"},[t("button",{type:"button",class:"flex w-full items-center justify-between p-2 text-gray-400 hover","aria-controls":"filter-section-0","aria-expanded":"false"},[t("span",{class:"text-base font-semibold text-gray-900"},"Màu Sắc")])],-1),Z={class:"px-4 pb-2 pt-4",id:"filter-section-0"},X={class:"space-y-3"},Q={class:"flex items-center"},ee=["checked"],te=["onChange","checked","id"],se=["for"],ae={class:"border-t border-gray-200 pb-4 pt-4"},ne=t("legend",{class:"w-full px-2"},[t("button",{type:"button",class:"flex w-full items-center justify-between p-2 text-gray-400 hover","aria-controls":"filter-section-1","aria-expanded":"false"},[t("span",{class:"text-base font-semibold text-gray-900"},"Khoảng giá")])],-1),oe={class:"px-4 pb-2 pt-4",id:"filter-section-1"},ie={class:"space-y-3"},re={class:"flex items-center"},le=["checked"],de=["id","checked","onChange"],ce=["for"],ge={class:"border-t border-gray-200 pb-4 pt-4"},ue=t("legend",{class:"w-full px-2"},[t("button",{type:"button",class:"flex w-full items-center justify-between p-2 text-gray-400 hover","aria-controls":"filter-section-1","aria-expanded":"false"},[t("span",{class:"text-base font-semibold text-gray-900"},"Đánh giá")])],-1),he={class:"px-4 pb-2 pt-4",id:"filter-section-1"},pe={class:"space-y-3"},fe={class:"flex items-center"},me=["checked"],ye=["id","checked","onChange"],be=["for"];function _e(e,s,r,b,v,f){const h=F("v-icon");return n(),o("form",U,[t("div",G,[t("fieldset",null,[K,t("div",q,[t("div",O,[t("div",W,[t("input",{onChange:s[0]||(s[0]=a=>e.handleChange("sort",0)),checked:e.data.sort==null,id:"sort-0-0-0",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,40,A),t("label",{for:"sort-0-0-0",class:u((e.data.sort==null?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")}," Không chọn ",2)]),(n(),o(m,null,y([{id:1,text:"Tăng dần",value:"asc"},{id:2,text:"Giảm dần",value:"desc"}],(a,i)=>t("div",{class:"flex items-center",key:i},[t("input",{onChange:p=>e.handleChange("sort",a.value),checked:e.data.sort==a.value,id:`sort-${e.index}-${a.id}`,name:"color[]",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,40,E),t("label",{for:`sort-${e.index}-${a.id}`,class:u((e.data.sort==a.value?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")},c(a.text),11,Y)])),64))])])])]),t("div",H,[t("fieldset",null,[J,t("div",Z,[t("div",X,[t("div",Q,[t("input",{onChange:s[1]||(s[1]=a=>e.handleChange("color_id",0)),checked:e.data.color_id==null,id:"color-0",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500",style:"background-color: rgba(0,0,0,.05); border-color:gray"},null,40,ee),t("label",{for:"color-0",class:u((e.data.color_id==null?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")}," Không chọn ",2)]),(n(!0),o(m,null,y(e.dataColors,(a,i)=>(n(),o("div",{class:"flex items-center",key:i},[t("input",{onChange:p=>e.handleChange("color_id",a.color_id),checked:e.data.color_id==a.color_id,id:`color-${e.index}-${a.color_id}`,name:"color[]",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500",style:k(`background-color: ${a.code}; border-color:gray`)},null,44,te),t("label",{for:`color-${e.index}-${a.color_id}`,class:u((e.data.color_id==a.color_id?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")},c(a.name),11,se)]))),128))])])])]),t("div",ae,[t("fieldset",null,[ne,t("div",oe,[t("div",ie,[t("div",re,[t("input",{id:"prices-0-0-0",checked:e.data.range==0||e.data.range==null,onChange:s[2]||(s[2]=a=>e.handleChange("range",0)),name:"range[]",value:"new-arrivals",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,40,le),t("label",{for:"prices-0-0-0",class:u((e.data.range==0||e.data.range==null?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")}," Không chọn ",2)]),(n(!0),o(m,null,y(e.dataPrices,(a,i)=>(n(),o("div",{class:"flex items-center",key:i},[t("input",{id:`prices-${e.index}-${i}`,checked:e.data.range==a.value,onChange:p=>e.handleChange("range",a.value),name:"range[]",value:"new-arrivals",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,40,de),t("label",{for:`prices-${e.index}-${i}`,class:u((e.data.range==a.value?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")},c(a.text),11,ce)]))),128))])])])]),t("div",ge,[t("fieldset",null,[ue,t("div",he,[t("div",pe,[t("div",fe,[t("input",{id:"rating-0-0-0",checked:e.data.rating==0||e.data.rating==null,onChange:s[3]||(s[3]=a=>e.handleChange("rating",e.value)),name:"rating[]",value:"new-arrivals",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,40,me),t("label",{for:"rating-0-0-0",class:u((e.data.rating==0||e.data.rating==null?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")}," Không chọn ",2)]),(n(!0),o(m,null,y(e.dataRating,(a,i)=>(n(),o("div",{class:"flex items-center",key:i},[t("input",{id:`rating-0-${a}`,checked:e.data.rating==a,onChange:p=>e.handleChange("rating",a),name:"rating[]",value:"new-arrivals",type:"radio",class:"size-[18px] rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,40,ye),t("label",{for:`rating-0-${a}`,class:u((e.data.rating==a?"font-bold underline italic ":" ")+" ml-3 text-sm hover:cursor-pointer")},[(n(),o(m,null,y([0,0,0,0,0],(p,g)=>t("span",{key:g},[g<a?(n(),$(h,{key:0,name:"io-star",color:"#e1e115"})):d("",!0),g>=a?(n(),$(h,{key:1,name:"fa-regular-star",color:"#e1e115"})):d("",!0)])),64))],10,be)]))),128))])])])])])}const ve=P(I,[["render",_e]]),$e=async()=>{const e=(await D()).value.baseURL,s=B(),{webData:r}=L(s);let b=null;const v={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"getById",menu_id:"2"})};return s.getWebData("listCategories")==null&&(await fetch(e+"Menu",v).then(f=>f.json()).then(f=>b=f),s.setWebData({key:"listCategories",value:b})),T("listCategories",()=>r)},Ce=w({props:["handleChangeFilters","filters"],data(){return{data:null}},async created(){var s,r;const e=(await $e()).value;this.data=(r=(s=e.listCategories)==null?void 0:s.data[0])==null?void 0:r.menu},async setup(){let e,s;return{baseImageURL:([e,s]=z(()=>D()),e=await e,s(),e).value.baseURLImage}}},"$Z1R2bBm68Y"),xe={class:"text-[12.5px]"},ke={class:"lg:col-span-full"},we={key:0,class:"grid grid-cols-3 md:grid-cols-7 gap-x-2 gap-y-2 px-2"},Pe=S('<svg fill="#000000" viewBox="0 0 32 32" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>border-all</title><path d="M29 2.25h-26c-0.414 0-0.75 0.336-0.75 0.75v0 26c0 0.414 0.336 0.75 0.75 0.75h26c0.414-0 0.75-0.336 0.75-0.75v0-26c-0-0.414-0.336-0.75-0.75-0.75v0zM28.25 15.25h-11.5v-11.5h11.5zM15.25 3.75v11.5h-11.5v-11.5zM3.75 16.75h11.5v11.5h-11.5zM16.75 28.25v-11.5h11.5v11.5z"></path></g></svg>',1),Fe=t("span",null," Tất cả ",-1),De=["onClick"],Le=["src"],ze={class:"me-auto"};function Se(e,s,r,b,v,f){var h,a;return n(),o("div",xe,[t("div",ke,[e.data?(n(),o("div",we,[t("p",{style:k(((h=e.filters)==null?void 0:h.category_id)==null||((a=e.filters)==null?void 0:a.category_id)==0?"border-color:rgba(0,0,0,.5); font-weight:bold; text-decoration: underline;":""),onClick:s[0]||(s[0]=i=>e.handleChangeFilters("category_id",0)),class:"hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2"},[Pe,_(),Fe],4),(n(!0),o(m,null,y(e.data,(i,p)=>{var g;return n(),o("p",{key:p,onClick:C=>e.handleChangeFilters("category_id",i.category_id),style:k(((g=e.filters)==null?void 0:g.category_id)==i.category_id?"border-color:rgba(0,0,0,.5); font-weight:bold; text-decoration: underline;":""),class:u("hover:cursor-pointer border rounded-lg py-2 flex items-center justify-center font-lg gap-x-2")},[t("img",{src:e.baseImageURL+i.thumbnail,alt:"",class:"size-6 ms-auto"},null,8,Le),t("span",ze,c(i.category_name),1)],12,De)}),128))])):d("",!0)])])}const Te=P(Ce,[["render",Se]]),Be=w({data(){return{title:"Tất cả sản phẩm",showChangePage:!1,displayCategory:!0,displayFilter:!1,listProducts:null,selectPage:null,isLoading:!0,totalPage:null,nextPage:null,prePage:null,filters:{},page:1}},watch:{"$route.query":{handler(e,s){e!=null&&e.search?(this.handleChangeFilters("keywords",e.search),this.title=`Tìm kiếm: "${e.search}"`):(this.handleChangeFilters("keywords",0),this.title="Tất cả sản phẩm")},immediate:!0,deep:!0}},async created(){var e,s,r;(e=this.$route.query)!=null&&e.search&&(this.handleChangeFilters("keywords",(s=this.$route.query)==null?void 0:s.search),this.title=`Tìm kiếm: "${(r=this.$route.query)==null?void 0:r.search}"`),await this.getData(),this.isLoading=!1},methods:{handleDisplayFilter(){return this.displayFilter=!this.displayFilter},handleDisplayCategory(){return this.displayCategory=!this.displayCategory},async handleChangeFilters(e,s){if(this.isLoading=!0,Number(s)==0){delete this.filters[e],await this.getData();return}this.filters[e]=s,await this.getData(),this.isLoading=!1},async getData(e=1){if(!Number(e))return alert("Page not found");this.isLoading=!0,this.listProducts=null;const s=await R(this.filters,e);this.listProducts=await(s==null?void 0:s.data),this.totalPage=s.totalPage,this.nextPage=s.nextPage,this.prePage=s.prePage,this.page=s.page,this.isLoading=!1,this.showChangePage=!1},displayChangePage(){this.showChangePage=!this.showChangePage},handleChangePageValue(e){const s=e.target.value;if(!Number(s))return this.selectPage="Fail";if(!this.isInteger(s))return this.selectPage="Fail";if(Number(s)<1||Number(s)>this.totalPage)return this.selectPage="Fail";this.selectPage=e.target.value},isInteger(e){return Math.round(Number(e))-e==0}}},"$r3tsCnllQe"),Ne={class:"bg-white"},Re={key:0,class:"relative z-40 lg:hidden",role:"dialog","aria-modal":"true"},je=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Me={class:"fixed inset-0 z-40 flex"},Ve={class:"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"},Ie={class:"flex items-center justify-between px-4 border-b pb-4 mb-4"},Ue=t("h2",{class:"text-lg font-medium text-gray-900"}," Bộ lọc sản phẩm ",-1),Ge=t("span",{class:"sr-only"},"Close menu",-1),Ke=t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),qe=[Ge,Ke],Oe={class:"mx-auto px-5 lg:px-32"},We={class:"text-center pb-6 text-xl font-medium"},Ae={class:"pt-6 border-t lg:grid lg:grid-cols-5 lg:gap-x-8 xl:grid-cols-6"},Ee=t("h2",{class:"sr-only"},"Bộ lọc sản phẩm",-1),Ye={class:"text-sm font-medium text-gray-700"},He={class:"text-gray-400 ms-0"},Je={class:"text-sm font-medium text-gray-700"},Ze={class:"text-gray-400 ms-0"},Xe={class:"hidden lg:block"},Qe={class:"mt-6 lg:border-l lg:ps-5 lg:col-span-4 lg:mt-0 xl:col-span-5"},et={key:1},tt={class:"text-sm font-medium text-gray-700"},st={class:"text-gray-400 ms-0"},at={key:3,class:"mt-3"},nt={key:4,class:"mt-3"},ot={key:5,class:"mt-20"},it={class:"text-center relative"},rt={key:0,class:"absolute flex -top-[191%] left-2/4 -translate-x-2/4"},lt={class:"flex justify-center gap-x-3 mt-2"},dt=["disabled"],ct=["disabled"],gt=["disabled"],ut=["disabled"];function ht(e,s,r,b,v,f){var g,C;const h=ve,a=Te,i=N,p=F("v-icon");return n(),o("div",null,[t("div",Ne,[t("div",null,[e.displayFilter?(n(),o("div",Re,[je,t("div",Me,[t("div",Ve,[t("div",Ie,[Ue,t("button",{type:"button",onClick:s[0]||(s[0]=l=>e.handleDisplayFilter()),class:"-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"},qe)]),x(h,{data:e.filters,handleChangeFilters:e.handleChangeFilters,index:"1"},null,8,["data","handleChangeFilters"])])])])):d("",!0),t("main",Oe,[t("h2",We,c(e.title),1),t("div",Ae,[t("aside",null,[Ee,t("button",{type:"button",class:"inline-flex items-center lg:hidden",onClick:s[1]||(s[1]=l=>e.handleDisplayFilter())},[t("span",Ye,[_(" Bộ lọc sản phẩm "),t("span",He,c(e.displayFilter?"-":"+"),1)])]),t("button",{type:"button",class:"inline-flex ms-5 items-center lg:hidden",onClick:s[2]||(s[2]=l=>e.handleDisplayCategory())},[t("span",Je,[_(" Danh mục sản phẩm "),t("span",Ze,c(e.displayCategory?"-":"+"),1)])]),t("div",Xe,[x(h,{data:e.filters,handleChangeFilters:e.handleChangeFilters,index:"2"},null,8,["data","handleChangeFilters"])])]),t("div",Qe,[e.displayCategory?(n(),$(a,{key:0,filters:e.filters,handleChangeFilters:e.handleChangeFilters},null,8,["filters","handleChangeFilters"])):d("",!0),e.displayCategory?d("",!0):(n(),o("div",et,[t("button",{type:"button",class:"lg:inline-flex ms-5 items-center hidden",onClick:s[3]||(s[3]=l=>e.handleDisplayCategory())},[t("span",tt,[_(" Danh mục sản phẩm "),t("span",st,c(e.displayCategory?"-":"+"),1)])])])),e.isLoading?d("",!0):(n(),$(i,{key:2,itemsRow:4,dataSuggestedProducts:e.listProducts},null,8,["dataSuggestedProducts"])),e.isLoading?(n(),o("div",at," Loading.. ")):d("",!0),!e.isLoading&&((g=e.listProducts)==null?void 0:g.length)==0?(n(),o("div",nt," Không có sản phẩm nào hợp lệ ")):d("",!0),!e.isLoading&&((C=e.listProducts)==null?void 0:C.length)!=0?(n(),o("div",ot,[t("div",it,[_(" Trang "+c(e.page)+" / "+c(e.totalPage)+" ",1),e.showChangePage?(n(),o("div",rt,[t("input",{onChange:s[4]||(s[4]=l=>e.handleChangePageValue(l)),type:"number",class:"pe-12 w-32 rounded-xl"},null,32),t("button",{onClick:s[5]||(s[5]=l=>e.getData(e.selectPage)),class:"absolute border-gray-400 border-l ps-1 right-2 top-2/4 -translate-y-2/4"}," xem ")])):d("",!0)]),t("div",lt,[t("button",{disabled:e.page==1,class:"border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl",onClick:s[6]||(s[6]=l=>e.getData(1))}," Đầu tiên ",8,dt),t("button",{disabled:e.page==1,class:"border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl",onClick:s[7]||(s[7]=l=>e.getData(Number(e.page)-1))}," Trước ",8,ct),t("button",{class:"border px-3 bg-gray-200 font-medium py-2 rounded-xl",onClick:s[8]||(s[8]=l=>e.displayChangePage())},[x(p,{name:"gi-archive-research",scale:"1.3"})]),t("button",{disabled:e.page==e.totalPage,class:"border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl",onClick:s[9]||(s[9]=l=>e.getData(Number(e.page)+1))}," Sau ",8,gt),t("button",{disabled:e.page==e.totalPage,class:"border disabled:bg-gray-50 disabled:text-gray-400 px-3 bg-gray-200 font-medium py-2 rounded-xl",onClick:s[10]||(s[10]=l=>e.getData(e.totalPage))}," Cuối cùng ",8,ut)])])):d("",!0)])])])])])])}const $t=P(Be,[["render",ht]]);export{$t as default};
