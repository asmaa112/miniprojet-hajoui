"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99551],{521262:(e,t,i)=>{i.d(t,{YS:()=>l,eF:()=>s,m_:()=>a});var r=i(40660),n=i(78309);function a(e,t,i,r){let a=new URLSearchParams,l=null!=e?e:"0";return a.append(n.NR.SOURCE_EVENT_ID,l),a.append(n.NR.DESTINATION,function(e){let t;try{t=decodeURIComponent(e)}catch(i){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(r){let i=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(i&&i.length>1)return i[1];return e}}(t)||""),a.append(n.NR.EXPIRY,i?n.uV:n.ug),a.append(n.NR.PRIORITY,i?n.NR.CLICK_PRIORITY:n.NR.VIEW_PRIORITY),r&&a.append(n.NR.CAMPAIGN_ID,r),a.append(n.NR.SOURCE_EVENT_TYPE,i?n.bC:n.Cu),"/attribution_source/?"+a.toString()}async function l(e,t,i,n,l,s){let{appType:o,osType:d}=s||{};if(["Pin","pinImpressions"].includes(e)&&t&&n){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"start",appType:o,osType:d});try{var u;if(!(null!==(u=window.document.featurePolicy)&&void 0!==u&&u.allowsFeature("attribution-reporting"))){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"skipped",message:"attribution-reporting is not enabled",appType:o,osType:d});return}let e=a(i,n||"",!1,l),t=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!t.ok)throw Error("server request failed.");r.Z.increment("webapp.arapi.view.funnel",.1,{status:"success",appType:o,osType:d})}catch(e){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"failed",error:e.name,appType:o,osType:d})}}else r.Z.increment("webapp.arapi.view.funnel",.1,{status:"missing_param",appType:o,osType:d})}function s(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},354428:(e,t,i)=>{i.d(t,{Se:()=>f,iw:()=>w,gV:()=>h,G3:()=>P,Gj:()=>b,Jd:()=>_,$3:()=>g});var r=i(965533),n=i(457628),a=i(791045),l=i(970588),s=i(250307);let o=e=>"string"!=typeof e&&e?e.state:null;var d=i(845098),u=i(48040),c=i(957733),p=i(625168),m=i(795142);let _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),g=({location:e,pinId:t,surface:i})=>!!i&&!m.ZF.includes(i)||e.pathname.includes(t),f=(e,t)=>{var i,r;let l=Math.round(1e3*Math.random())+"",s=Math.round(1e3*Math.random())+"";n.t8((0,a.GS)(l),s);let o={token:`${l}-${s}`,url:e,...t&&!t.params?t.queryParams:(null==t?void 0:t.params)&&{pin:null!==(i=t.params.pinId)&&void 0!==i?i:void 0,isThirdPartyAd:null!==(r=t.params.isThirdPartyAd)&&void 0!==r?r:void 0,csr:t.params.csrId&&!t.params.pinId?t.params.csrId:void 0,client_tracking_params:t.params.clientTrackingParams,aux_data:t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(o)}`},b=(e,t)=>{(0,r.Z)(f(e,t),!0,null==t?void 0:t.features)},w=async({clientTrackingParams:e,href:t,isMounted:i,pinId:r,spamCheckCallback:n})=>{let a=await (0,l.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:t}});if(!a.resource_response.error&&i){let e=a.resource_response.data||{},{message:t,redirect_status:i,url:r}=e,l=["blocked","suspicious","porn"].includes(i);n({blocked:l,message:t,redirectStatus:i,sanitized_url:r})}},P=({event:e,onHistoryChange:t,href:i,history:n,target:a})=>{let l=(0,s.Z)(i),d=o(i),m=(0,u.Z)(l);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,r.Z)(l,"blank"===a):n&&m===p.Z.SAME_ORIGIN&&(n.push((0,c.Z)({url:l}),null!=d?d:{}),t&&t({event:e}))}},599551:(e,t,i)=>{i.d(t,{Z:()=>p,p:()=>m});var r=i(667294),n=i(616550),a=i(946618),l=i(354428),s=i(300657),o=i(250307),d=i(28630),u=i(554318),c=i(935340);function p(e){var t,i,p;let{externalData:m,href:_,onHistoryChange:h,target:g}=e,[f,b]=(0,r.useState)(null),[w,P]=(0,r.useState)(!1),k=(0,n.useHistory)(),v=(0,n.useLocation)(),y=(0,o.Z)(_),I=(0,d.Z)({url:y}),{showWarning:S}=null!==(t=(0,u.s)())&&void 0!==t?t:{},{pin:A,surface:x}=m||{},R=A?(0,a.Z)({boardUrl:null===(i=A.board)||void 0===i?void 0:i.url,location:v,pinId:A.entityId,pinnerUserName:null===(p=A.pinner)||void 0===p?void 0:p.username,storyPinDataId:A.storyPinDataId,trackingParams:A.trackingParams,trackingParamsMap:A.trackingParamsMap}):null,Z=(0,s.Z)();return(0,r.useEffect)(()=>(P(!0),()=>{P(!1)}),[]),(0,r.useEffect)(()=>{I&&A&&null===f&&w&&(!A.promoter||A.isDownstreamPromotion)&&(0,l.$3)({location:v,pinId:A.entityId,surface:x})&&(0,l.iw)({clientTrackingParams:R,isMounted:w,pinId:A.entityId,spamCheckCallback:e=>b(e),href:y})},[R,A,x,y,I,w,v,f]),({event:e})=>{if(!(0,l.gV)({isOffsiteUrl:I,event:e})){if(e.preventDefault(),!_||"string"==typeof _&&_.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:v.pathname,href:_}});return}if(I||null!=m&&m.dangerouslyForceOffsiteUrl){var t;Z({auxData:null==m?void 0:m.auxData,clientTrackingParams:R,pin:(null==m?void 0:m.pin)&&{attributionSourceId:m.pin.attributionSourceId,campaignId:m.pin.campaignId,isPromoted:m.pin.isPromoted,pinPromotionId:m.pin.pinPromotionId,isThirdPartyAd:m.pin.isThirdPartyAd},pinId:null==m?void 0:null===(t=m.pin)||void 0===t?void 0:t.entityId,queryParams:null==m?void 0:m.queryParams,showWarning:S,spamCheck:f,url:y})}else(0,l.G3)({event:e,href:_,history:k,onHistoryChange:h,target:"blank"===g?"blank":null})}}}let m=({children:e,...t})=>{let i=p(t);return e({handleClick:i})}},300657:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(758579),n=i(78309),a=i(521262),l=i(969327),s=i(388011),o=i(354428),d=i(204926);let u=(e,t,i)=>{let r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(n.$N.ATTRIBUTE_DESTINATION,i),r.setAttribute(n.$N.ATTRIBUTE_ON,i),r.click()},c=(e,t,i,r)=>{let l=(0,a.m_)(e,i,!0,r),s=document.createElement("a");s.setAttribute("href",t),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener nofollow noreferrer"),s.style.cursor="pointer",s.style.display="block",s.setAttribute(n.NR.SOURCE,l),s.click()},p=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:t,auxData:i,campaignId:n,clientTrackingParams:a,href:s,isPromoted:d,pinId:p,pinPromotionId:m,isThirdPartyAd:_})=>{var h,g,f;if(!d)return!1;let b=(0,r.Z)(),w=(0,o.Se)(s,{params:{pinId:p,csrId:null,clientTrackingParams:a,auxData:i,isThirdPartyAd:_}}),P=null!==(h=null==b?void 0:b.userAgent.browserName)&&void 0!==h?h:"";if((0,l.G6)(P)){let{group:i}=null!==(g=null==b?void 0:b.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==g?g:{},r=null!=b&&b.userAgent.browserVersion?b.userAgent.browserVersion:"0.0",l=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(t&&l>=14.1&&["enabled_safari"].includes(i))return u(t,w,s),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_pcm:!0,attribution_source_id:t,page_url:s}}),!0}else if((0,l.i7)(P)&&null!==(f=window.document.featurePolicy)&&void 0!==f&&f.allowsFeature("attribution-reporting"))return c(t,w,s,n),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_arapi:!0,attribution_source_id:t,page_url:s}}),!0;return!1}},m=e=>{let t=p();return({auxData:i,clientTrackingParams:r,pin:n,pinId:a,queryParams:l,showWarning:s,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:r,pinId:a,hasPin:!!n,auxData:i,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd});return}if(!n&&!(null!=e&&e.isFromClickthroughLink)){(0,o.Gj)(c,l?{queryParams:l}:{params:{pinId:a}});return}if(null!=u&&u.blocked){null==s||s(u);return}n&&t({attributionSourceId:n.attributionSourceId,auxData:i,campaignId:n.campaignId?String(n.campaignId):null,clientTrackingParams:r,href:c,isPromoted:n.isPromoted,pinId:a,pinPromotionId:n.pinPromotionId?String(n.pinPromotionId):null,isThirdPartyAd:n.isThirdPartyAd})||(0,o.Gj)(c,{params:{clientTrackingParams:r,auxData:i,pinId:a,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd}})}}},250307:(e,t,i)=>{i.d(t,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},957733:(e,t,i)=>{i.d(t,{Z:()=>a});let r=(e,t)=>0===e.lastIndexOf(t,0);var n=i(17330);let a=({url:e})=>{let t=(0,n.Z)("/");return r(e,t)?e.substr(t.length-1):e}},204926:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(970588),n=i(354428);function a(e,t){let{auxData:i,clientTrackingParams:a,hasPin:l,pinId:s,isThirdPartyAd:o}=t||{},d={pin_id:s,check_only:!0,client_tracking_params:l?a:void 0,url:e,aux_data:JSON.stringify(i)};o&&(d.third_party_ad=s,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:i,url:r}=e.data,n=["blocked","suspicious","porn"].includes(i);if(!n){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Gj)(e,{params:l?{pinId:s,clientTrackingParams:a,auxData:i,isThirdPartyAd:o}:{pinId:s}})})}},795142:(e,t,i)=>{i.d(t,{UP:()=>s,Wv:()=>n,ZF:()=>r,zI:()=>a,zl:()=>l});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],l=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],s=["BaseBoardPinGrid"]},554318:(e,t,i)=>{i.d(t,{Z:()=>g,s:()=>h});var r=i(667294),n=i(583592),a=i(608575),l=i(883119),s=i(88622),o=i(536042),d=i(630089),u=i(785893);let c=()=>{var e;let t=(0,o.ZP)(),{dismissWarning:i}=null!==(e=h())&&void 0!==e?e:{};return(0,u.jsx)(l.xu,{paddingX:3,children:(0,u.jsx)(l.zx,{fullWidth:!0,color:"red",onClick:i,text:t.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,o.ZP)();return(0,u.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(l.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("Learn more", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:t})=>{var i;let r=(0,o.ZP)(),{dismissWarning:n}=null!==(i=h())&&void 0!==i?i:{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:r.bt("We have blocked this link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:n,heading:r.bt("Heads up!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,u.jsx)(c,{}),children:(0,u.jsxs)(l.xu,{padding:6,children:[(0,u.jsx)(l.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(l.xu,{marginEnd:3,children:(0,u.jsx)(l.JO,{accessibilityLabel:r.bt("Blocked link address", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){let[t,i]=(0,r.useState)(null),n=(0,r.useCallback)(()=>{i(null)},[i]),a=(0,r.useCallback)(e=>{i(e)},[i]),l=(0,r.useMemo)(()=>({dismissWarning:n,showWarning:a}),[n,a]);return(0,u.jsxs)(_,{value:l,children:[t&&(0,u.jsx)(m,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99551.en_GB-ba3fcc23f8459a9f.mjs.map