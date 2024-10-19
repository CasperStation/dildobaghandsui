"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59536],{24684:function(e,t,n){n.d(t,{tX:function(){return N},Gl:function(){return w},on:function(){return T},gJ:function(){return Z}});var r=n(63956),o=n(93981),i=n(13838),s=n(9364),a=n(3011),u=n(1517),c=n(27195),l=n(8857),d=n.n(l),f=n(41144),p=n(59295),m=n(45009);var x=n(72215),v=n(25224),h=n(44495);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=(0,s.cn)({inputTokenInfo:void 0,outputTokenInfo:void 0}),y=(0,s.cn)(null),k=(0,s.cn)({isCheaper:!1,isMoreExp:!1,isWithinTwoPercent:!1,isWithinFivePercent:!1,isDanger:!1,isWarning:!1,percent:0,formattedPercent:"",rate:null,rateDiff:null,apiURL:""}),w=function(e,t,n){var r=(0,x.Bn)().getTokenInfo,s=(0,x.jB)().useWSol,u=(0,a.b9)(j),l=(0,a.b9)(y),g=(0,a.b9)(k),w=(0,x.gZ)().addressToTokenAccountMap,T=(0,o.useMemo)((function(){var e=new Map;return w.forEach((function(t,n){e.set(t.info.mint.toBase58(),t.pubkey.toBase58())})),e}),[w]),Z=(0,o.useMemo)((function(){return[t?r(t):void 0,n?r(n):void 0]}),[r,t,n]),N=Z[0],A=Z[1];(0,h.Z)((function(){u({inputTokenInfo:N,outputTokenInfo:A})}),[N,A,u]),(0,h.Z)((function(){l(e?_(e,T,!s):null)}),[e,l,T,s]);var M=function(e){var t=e.inputAmount,n=e.inputTokenInfo,r=e.outputAmount,s=e.outputTokenInfo,a=(null===n||void 0===n?void 0:n.address)||"",u=(null===s||void 0===s?void 0:s.address)||"",l=(0,o.useMemo)((function(){return"https://birdeye-proxy.jup.ag/defi/multi_price?list_address=".concat(a,",").concat(u)}),[a,u]),x=(0,m.a)([l],(0,c.Z)(d().mark((function e(){var t,n,r,o,s,c,p;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&u){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,f.ZP.get(l).json();case 5:return s=e.sent,c=s.data,p=null!==(t=c[a])&&void 0!==t&&t.value&&null!==(n=c[u])&&void 0!==n&&n.value?new i.Z(null===(r=c[a])||void 0===r?void 0:r.value).div(new i.Z(null===(o=c[u])||void 0===o?void 0:o.value)):null,e.abrupt("return",p);case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])}))),{refetchInterval:3e4,staleTime:3e4,keepPreviousData:!0}),v=(0,o.useMemo)((function(){return x.data?x.data.toNumber():null}),[x.data]),h=(0,o.useMemo)((function(){if(v&&n&&s&&t&&r){var e=(0,p.c)({inAmount:t,inputDecimal:n.decimals,outAmount:r,outputDecimal:s.decimals},!0);if(e&&v)return new i.Z(e).div(v).toDecimalPlaces(3).toNumber()}return null}),[v,t,r,n,s]);return(0,o.useMemo)((function(){return{rate:v,rateDiff:h,apiURL:l}}),[v,h,l])}({inputTokenInfo:N,outputTokenInfo:A,inputAmount:null===e||void 0===e?void 0:e.inAmount,outputAmount:null===e||void 0===e?void 0:e.outAmount}),P=(0,o.useMemo)((function(){var e=null===M||void 0===M?void 0:M.rateDiff;if("number"!==typeof e)return k.init;var t=e>=1,n=e<1,r=n?1-e<=.02:e-1<=.02,o=n?1-e<=.05:e-1<=.05,s=!t&&!r&&o,a=!t&&!o,u=n?new i.Z(1).minus(e).mul(100).toDecimalPlaces(3).toNumber():new i.Z(e).minus(1).mul(100).toDecimalPlaces(3).toNumber();return b({isCheaper:t,isMoreExp:n,isWithinTwoPercent:r,isWithinFivePercent:o,isWarning:s,isDanger:a,percent:u,formattedPercent:v.uf.format(u)},M)}),[M]);(0,h.Z)((function(){g(P)}),[g,P])},_=function(e,t,n){var r=new i.Z(e.priceImpactPct||0).mul(100).toNumber();return b({isHighImpact:r>5,isMediumImpact:r>=2&&r<=5,priceImpact:r},(0,u.rR)(e,t,new Map,n,!0))},T=function(){return(0,a.Dv)(j)},Z=function(){return(0,a.Dv)(y)},N=function(){return(0,a.Dv)(k)}},26486:function(e,t,n){var r=n(72215),o=n(25224),i=n(93981),s=n(28245),a=n(24201),u=n(29541),c=(0,i.forwardRef)((function(e,t){var n=e.address,c=e.className,l=e.children,d=(0,r.MG)().constants.CLUSTER,f=(0,r.oP)().getTokenExplorer,p=(0,i.useMemo)((function(){return{href:f(n,d),shortAddr:(0,o.Xn)(n,5)}}),[f,n,d]),m=p.href,x=p.shortAddr;return(0,u.jsx)("a",{ref:t,target:"_blank",rel:"noreferrer",href:m,className:(0,a.cn)("flex cursor-pointer items-center space-x-1 rounded bg-black/25 px-2 py-0.5 text-white/75",c),children:l||(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"text-xxs",children:x}),(0,u.jsx)(s.Z,{width:10,height:10})]})})}));t.Z=c},62348:function(e,t,n){var r=n(72215),o=n(25224),i=n(93981),s=n(28245),a=n(24201),u=n(29541),c=(0,i.forwardRef)((function(e,t){var n=e.tokenInfo,c=e.customUrl,l=e.className,d=e.children,f=(0,r.MG)().constants.CLUSTER,p=(0,r.oP)().getTokenExplorer,m=(0,i.useMemo)((function(){return c||p(n.address,f)}),[f,c,p,n.address]);return(0,u.jsx)("a",{ref:t,target:"_blank",rel:"noreferrer",className:(0,a.cn)("flex cursor-pointer items-center space-x-1 rounded bg-black/25 px-2 py-0.5 text-white/75",l),href:m,children:d||(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"text-xxs",children:(0,o.Xn)(n.address,5)}),(0,u.jsx)(s.Z,{width:10,height:10})]})})}));t.Z=c},25348:function(e,t,n){n.d(t,{J:function(){return x},y:function(){return m}});var r=n(8473),o=n(4707),i=n(13838),s=n(93981),a=n(50269),u=n(25546),c=n(85394),l=n(26486),d=n(40558),f=n(29541),p=function(e){var t=e.tooltipText,n=e.label,r=e.content;return(0,f.jsxs)("div",{className:"flex justify-between space-x-1",children:[(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsxs)("p",{className:"text-xs font-semibold text-v2-lily",children:[n,":"]}),(0,f.jsx)(d.Z,{content:t,children:(0,f.jsx)("div",{className:"ml-[6px] flex items-center fill-current text-v2-lily/50",children:(0,f.jsx)(a.Z,{height:12,width:12})})})]}),(0,f.jsx)("div",{className:"flex items-center space-x-1 text-right text-xs font-semibold text-white",children:r})]})};function m(e){var t=e.mint_extensions,n=e.token_info,r=t||{},o=r.permanent_delegate,s=r.transfer_fee_config,a=(null===s||void 0===s?void 0:s.newer_transfer_fee)||(null===s||void 0===s?void 0:s.older_transfer_fee),c=n.decimals,l=n.mint_authority,d=n.freeze_authority,f=n.symbol;return{tokenExtension:Boolean(t),transferFee:a?new i.Z(a.transfer_fee_basis_points).div(100).toFixed(2):null,maxTransferFee:a?u.uf.format(new i.Z(a.maximum_fee).div(Math.pow(10,c))):null,symbol:f,mintAuthority:l,freezeAuthority:d,permanentDelegate:null===o||void 0===o?void 0:o.delegate}}var x=function(e){var t=e.tokenInfo,n=e.dasAssets,i=e.isLoading,a=t.address,u=(0,s.useMemo)((function(){var e=null===n||void 0===n?void 0:n.find((function(e){return(null===e||void 0===e?void 0:e.id)===a}));return e?m(e):null}),[n,a]);return i?(0,f.jsx)("div",{className:"my-5 flex justify-center",children:(0,f.jsx)(c.Z,{})}):u?(0,f.jsxs)("div",{className:"mb-5 mt-3",children:[(0,f.jsx)("p",{className:"text-center text-xs text-v2-lily",children:o.ag._({id:"oWxa3R"})}),(0,f.jsx)("p",{className:"mt-2 text-center text-xs text-warning",children:o.ag._({id:"9moH07"})}),(0,f.jsxs)("div",{className:"mt-5 space-y-2 rounded-lg border border-white border-opacity-10 bg-white bg-opacity-5 px-[14px] py-3",children:[u.transferFee?(0,f.jsx)(p,{label:o.ag._({id:"Z7wpRx"}),content:"".concat(u.transferFee,"%"),tooltipText:o.ag._({id:"94Mels"})}):null,u.maxTransferFee?(0,f.jsx)(p,{label:o.ag._({id:"L8OnhS"}),content:"".concat(u.maxTransferFee," ").concat(u.symbol),tooltipText:o.ag._({id:"7QuXQ5"})}):null,(0,f.jsx)(p,{label:o.ag._({id:"L9tAvv"}),content:u.freezeAuthority?(0,f.jsx)(l.Z,{address:u.freezeAuthority}):o.ag._({id:"ocUvR+"}),tooltipText:o.ag._({id:"EViGtp"})}),(0,f.jsx)(p,{label:o.ag._({id:"yShRAc"}),content:u.permanentDelegate?(0,f.jsx)(l.Z,{address:u.permanentDelegate}):o.ag._({id:"ocUvR+"}),tooltipText:o.ag._({id:"NG7isC"})}),(0,f.jsx)(p,{label:o.ag._({id:"5G9AlW"}),content:u.mintAuthority?(0,f.jsx)(l.Z,{address:u.mintAuthority}):o.ag._({id:"ocUvR+"}),tooltipText:o.ag._({id:"Y/TbSA"})})]})]}):(0,f.jsx)("div",{className:"my-5 flex justify-center text-xs",children:(0,f.jsx)(r.cC,{id:"J/hVSQ",values:{0:o.ag._({id:"x60agV"})}})})}},81097:function(e,t,n){n.d(t,{j:function(){return c}});var r=n(27195),o=n(8857),i=n.n(o),s=n(72215),a=n(45009),u=n(93981),c=function(e){var t=(0,u.useMemo)((function(){return e.map((function(e){return e.address.toString()}))}),[e]);return(0,a.a)({queryKey:["get_asset_batch",t.join("")],queryFn:function(){var e=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s.zn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:"getAssetBatch",method:"getAssetBatch",params:{ids:t}})});case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent)||!r.result){e.next=9;break}return e.abrupt("return",r.result);case 9:return e.abrupt("return",null);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),enabled:t.length>0})}},28245:function(e,t,n){var r=n(29541);t.Z=function(e){var t=e.width,n=void 0===t?800:t,o=e.height,i=void 0===o?800:o;return(0,r.jsxs)("svg",{width:n,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("line",{x1:"10.8492",y1:"13.0606",x2:"19.435",y2:"4.47485",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M19.7886 4.12134L20.1421 8.01042",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M19.7886 4.12134L15.8995 3.76778",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M18 13.1465V17.6465C18 19.3033 16.6569 20.6465 15 20.6465H6C4.34315 20.6465 3 19.3033 3 17.6465V8.64648C3 6.98963 4.34315 5.64648 6 5.64648H10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}}}]);
//# sourceMappingURL=59536-bd3f6a191f680468.js.map