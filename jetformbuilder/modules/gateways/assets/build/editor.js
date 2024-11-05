(()=>{"use strict";const e=window.React,{compose:t}=wp.compose,{withSelect:a,withDispatch:n}=wp.data,{__:l}=wp.i18n,{TextControl:o,SelectControl:s,withNotices:i}=wp.components,{useEffect:c}=wp.element,{renderGateway:r}=JetFBActions,{withSelectGateways:w,withDispatchGateways:m}=JetFBHooks,{ToggleControl:y}=JetFBComponents,p=t(a(w),n(m),i)((function({setGatewayRequest:t,gatewaySpecific:a,setGatewaySpecific:n,gatewayScenario:i,setGatewayScenario:w,getSpecificOrGlobal:m,additionalSourceGateway:p,specificGatewayLabel:u,noticeOperations:d,noticeUI:g}){const{id:_="PAY_NOW"}=i;return c((()=>{t({id:_})}),[_]),c((()=>{t({id:_})}),[]),(0,e.createElement)(e.Fragment,null,g,(0,e.createElement)(y,{checked:a.use_global,onChange:e=>n({use_global:e})},l("Use","jet-form-builder")+" ",(0,e.createElement)("a",{href:JetFormEditorData.global_settings_url+"#payments-gateways__paypal"},l("Global Settings","jet-form-builder"))),(0,e.createElement)(o,{label:u("client_id"),key:"paypal_client_id_setting",value:m("client_id"),onChange:e=>n({client_id:e}),disabled:a.use_global}),(0,e.createElement)(o,{label:u("secret"),key:"paypal_secret_setting",value:m("secret"),onChange:e=>n({secret:e}),disabled:a.use_global}),(0,e.createElement)(s,{labelPosition:"side",label:u("gateway_type"),value:_,onChange:e=>{w({id:e})},options:p.scenarios}),r("paypal",{noticeOperations:d},_))})),{compose:u}=wp.compose,{withSelect:d,withDispatch:g}=wp.data,{TextControl:_,SelectControl:f,BaseControl:h,RadioControl:b}=wp.components,{withSelectFormFields:E,withSelectGateways:G,withDispatchGateways:S,withSelectActionsByType:C}=JetFBHooks,{GatewayFetchButton:F}=JetFBComponents,k=u(d(((...e)=>({...E([],"--")(...e),...G(...e)}))),g(((...e)=>({...S(...e)}))))((function({gatewayGeneral:t,gatewaySpecific:a,setGateway:n,setGatewaySpecific:l,formFields:o,getSpecificOrGlobal:s,loadingGateway:i,scenarioSource:c,noticeOperations:r,scenarioLabel:w,globalGatewayLabel:m}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(h,{label:w("fetch_button_label")},(0,e.createElement)("div",{className:"jet-user-fields-map__list"},!i.success&&!i.loading&&(0,e.createElement)("span",{className:"description-controls"},w("fetch_button_help")),(0,e.createElement)(F,{initialLabel:w("fetch_button"),label:w("fetch_button_retry"),apiArgs:{...c.fetch,data:{client_id:s("client_id"),secret:s("secret")}},onFail:e=>{r.removeNotice(t.gateway),r.createNotice({status:"error",content:e.message,id:t.gateway})}}))),i.success&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(_,{label:w("currency"),key:"paypal_currency_code_setting",value:a.currency,onChange:e=>l({currency:e})}),(0,e.createElement)(f,{label:m("price_field"),key:"form_fields_price_field",value:t.price_field,labelPosition:"side",onChange:e=>{n({price_field:e})},options:o})))})),{gatewayAttr:v,renderGateway:j,renderGatewayWithPlaceholder:B}=JetFBActions,{__:N}=wp.i18n,{TextareaControl:A,BaseControl:J}=wp.components,{withSelect:R,withDispatch:D}=wp.data,{compose:O}=wp.compose,{withSelectGateways:T,withDispatchGateways:I}=JetFBHooks,L=v(),P=v("labels"),U=O(R(((...e)=>({...T(...e)}))),D(I))((function({gatewayGeneral:t,setGatewayInner:a,loadingGateway:n,gatewayRequest:l,CURRENT_SCENARIO:o,currentScenario:s}){const i=(e,t,n)=>{a({key:e,value:{[t]:n}})},c=(e,a,n=!1)=>t[e]&&t[e][a]?t[e][a]:n,r=(e,t)=>{i("messages",e,t)},w=e=>c("messages",e,L.messages[e]),m=(0,e.createElement)(e.Fragment,null,B(t.gateway,{gatewayGeneral:t,CURRENT_SCENARIO:o,currentScenario:s},"macrosList",(0,e.createElement)(J,{key:"payment_result_macros_base_control"},(0,e.createElement)("h4",null,N("Available macros list: ","jet-form-builder"),(0,e.createElement)("br",null),N("%gateway_amount% - payment amount returned from gateway template;","jet-form-builder"),(0,e.createElement)("br",null),N("%gateway_status% - payment status returned from payment gateway;","jet-form-builder"),(0,e.createElement)("br",null),N('%field_name% - replace "field_name" with any field name from the form;',"jet-form-builder"),(0,e.createElement)("br",null)))),(0,e.createElement)(A,{key:"payment_result_message_success",label:P("message_success"),value:w("success"),onChange:e=>r("success",e)}),(0,e.createElement)(A,{key:"payment_result_message_failed",label:P("message_failed"),value:w("failed"),onChange:e=>r("failed",e)}));return(0,e.createElement)(e.Fragment,null,j(t.gateway,{setValueInObject:i,getNotifications:c}),(-1===l.id||n.success||!l.id.includes(t.gateway))&&m)})),{RadioControl:H,Button:q}=wp.components,{withDispatch:x,withSelect:W}=wp.data,{useState:M,useEffect:Y}=wp.element,{__:V}=wp.i18n,{compose:$}=wp.compose,{ActionModal:z}=JetFBComponents,{withDispatchGateways:K,withSelectGateways:Q,useMetaState:X}=JetFBHooks,Z=window.JetFormEditorData.gateways,ee=$(x(K),W(Q))((function(t){var a;const{setGateway:n,setGatewayScenario:l,clearGateway:o,clearScenario:s,gatewayGeneral:i,gatewayScenario:c}=t,[r,w]=X("_jf_gateways"),[m,y]=M(!1);Y((()=>{m?(n(r),l(r[r.gateway]?.scenario)):(o(),s())}),[m]);const p=(e=!1)=>{!1!==e&&w(e),y(!1)};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(H,{key:"gateways_radio_control",selected:null!==(a=r.gateway)&&void 0!==a?a:"none",options:[{label:"None",value:"none"},...Z.list],onChange:e=>{w({...r,gateway:e})}}),"none"!==r.gateway&&r.gateway&&(0,e.createElement)(q,{onClick:()=>y(!0),icon:"admin-tools",style:{margin:"1em 0"},isSecondary:!0},V("Edit","jet-form-builder")),m&&(0,e.createElement)(z,{classNames:["width-60"],onRequestClose:()=>p(),onCancelClick:()=>p(),onUpdateClick:()=>p({...i,[i.gateway]:{...i[i.gateway]||{},scenario:c}}),title:`Edit ${u=r.gateway,Z.list.find((e=>e.value===u)).label} Settings`},(0,e.createElement)(U,null)));var u})),{__:te}=wp.i18n,ae={base:{name:"jf-gateways-panel",title:te("Gateways Settings","jet-form-builder")},settings:{render:ee,icon:"money-alt"}},{registerGateway:ne}=JetFBActions,{addFilter:le}=wp.hooks,{__:oe}=wp.i18n,se="paypal";ne(se,p),ne(se,k,"PAY_NOW"),le("jet.fb.register.plugin.jf-validation-panel.after","jet-form-builder/gateways",(function(e){return e.push(ae),e}))})();