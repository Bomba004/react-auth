import{n as B}from"./index-gbR1Eooi.js";var fe=e=>e.type==="checkbox",ee=e=>e instanceof Date,L=e=>e==null;const Ge=e=>typeof e=="object";var w=e=>!L(e)&&!Array.isArray(e)&&Ge(e)&&!ee(e),gr=e=>w(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vr=(e,s)=>e.has(hr(s)),_r=e=>{const s=e.constructor&&e.constructor.prototype;return w(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const t=Array.isArray(e),l=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||l))&&(t||w(e)))if(s=t?[]:{},!t&&!_r(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=M(e[u]));else return e;return s}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,d=(e,s,t)=>{if(!s||!w(e))return t;const l=Ae(s.split(/[,[\].]+?/)).reduce((u,n)=>L(u)?u:u[n],e);return D(l)||l===e?D(e[s])?t:e[s]:l},W=e=>typeof e=="boolean",pe=e=>/^\w*$/.test(e),er=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,s,t)=>{let l=-1;const u=pe(s)?[s]:er(s),n=u.length,y=n-1;for(;++l<n;){const g=u[l];let O=t;if(l!==y){const q=e[g];O=w(q)||Array.isArray(q)?q:isNaN(+u[l+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=O,e=e[g]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};B.createContext(null);var br=(e,s,t,l=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const y=n;return s._proxyFormState[y]!==P.all&&(s._proxyFormState[y]=!l||P.all),e[y]}});return u},C=e=>w(e)&&!Object.keys(e).length,Fr=(e,s,t,l)=>{t(e);const{name:u,...n}=e;return C(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(y=>s[y]===P.all)},he=e=>Array.isArray(e)?e:[e];function Ar(e){const s=B.useRef(e);s.current=e,B.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var $=e=>typeof e=="string",Vr=(e,s,t,l,u)=>$(e)?(l&&s.watch.add(e),d(t,e,u)):Array.isArray(e)?e.map(n=>(l&&s.watch.add(n),d(t,n))):(l&&(s.watchAll=!0),t),xr=(e,s,t,l,u)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[l]:u||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),je=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const oe=(e,s,t,l)=>{for(const u of t||Object.keys(e)){const n=d(e,u);if(n){const{_f:y,...g}=n;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],u)&&!l)return!0;if(y.ref&&s(y.ref,y.name)&&!l)return!0;if(oe(g,s))break}else if(w(g)&&oe(g,s))break}}};var wr=(e,s,t)=>{const l=he(d(e,t));return V(l,"root",s[t]),V(e,t,l),e},Le=e=>e.type==="file",H=e=>typeof e=="function",_e=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>$(e),Oe=e=>e.type==="radio",be=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},ze={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ke}return Ke};const Ye={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Ye):Ye;function Je(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||W(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var se=e=>w(e)&&!be(e)?e:{value:e,message:""},Qe=async(e,s,t,l,u,n)=>{const{ref:y,refs:g,required:O,maxLength:q,minLength:x,min:b,max:ce,pattern:de,validate:j,name:U,valueAsNumber:K,mount:Q}=e._f,F=d(t,U);if(!Q||s.has(U))return{};const z=g?g[0]:y,Y=_=>{u&&z.reportValidity&&(z.setCustomValidity(W(_)?"":_||""),z.reportValidity())},m={},re=Oe(y),ye=fe(y),G=re||ye,te=(K||Le(y))&&D(y.value)&&D(F)||_e(y)&&y.value===""||F===""||Array.isArray(F)&&!F.length,N=xr.bind(null,U,l,m),ge=(_,A,k,p=J.maxLength,I=J.minLength)=>{const R=_?A:k;m[U]={type:_?p:I,message:R,ref:y,...N(_?p:I,R)}};if(n?!Array.isArray(F)||!F.length:O&&(!G&&(te||L(F))||W(F)&&!F||ye&&!rr(g).isValid||re&&!tr(g).isValid)){const{value:_,message:A}=ve(O)?{value:!!O,message:O}:se(O);if(_&&(m[U]={type:J.required,message:A,ref:z,...N(J.required,A)},!l))return Y(A),m}if(!te&&(!L(b)||!L(ce))){let _,A;const k=se(ce),p=se(b);if(!L(F)&&!isNaN(F)){const I=y.valueAsNumber||F&&+F;L(k.value)||(_=I>k.value),L(p.value)||(A=I<p.value)}else{const I=y.valueAsDate||new Date(F),R=le=>new Date(new Date().toDateString()+" "+le),ie=y.type=="time",ae=y.type=="week";$(k.value)&&F&&(_=ie?R(F)>R(k.value):ae?F>k.value:I>new Date(k.value)),$(p.value)&&F&&(A=ie?R(F)<R(p.value):ae?F<p.value:I<new Date(p.value))}if((_||A)&&(ge(!!_,k.message,p.message,J.max,J.min),!l))return Y(m[U].message),m}if((q||x)&&!te&&($(F)||n&&Array.isArray(F))){const _=se(q),A=se(x),k=!L(_.value)&&F.length>+_.value,p=!L(A.value)&&F.length<+A.value;if((k||p)&&(ge(k,_.message,A.message),!l))return Y(m[U].message),m}if(de&&!te&&$(F)){const{value:_,message:A}=se(de);if(be(_)&&!F.match(_)&&(m[U]={type:J.pattern,message:A,ref:y,...N(J.pattern,A)},!l))return Y(A),m}if(j){if(H(j)){const _=await j(F,t),A=Je(_,z);if(A&&(m[U]={...A,...N(J.validate,A.message)},!l))return Y(A.message),m}else if(w(j)){let _={};for(const A in j){if(!C(_)&&!l)break;const k=Je(await j[A](F,t),z,A);k&&(_={...k,...N(A,k.message)},Y(k.message),l&&(m[U]=_))}if(!C(_)&&(m[U]={ref:z,..._},!l))return m}}return Y(!0),m};function Dr(e,s){const t=s.slice(0,-1).length;let l=0;for(;l<t;)e=D(e)?l++:e[s[l++]];return e}function mr(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:pe(s)?[s]:er(s),l=t.length===1?e:Dr(e,t),u=t.length-1,n=t[u];return l&&delete l[n],u!==0&&(w(l)&&C(l)||Array.isArray(l)&&mr(l))&&S(e,t.slice(0,-1)),e}var me=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},Ee=e=>L(e)||!Ge(e);function Z(e,s){if(Ee(e)||Ee(s))return e===s;if(ee(e)&&ee(s))return e.getTime()===s.getTime();const t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(const u of t){const n=e[u];if(!l.includes(u))return!1;if(u!=="ref"){const y=s[u];if(ee(n)&&ee(y)||w(n)&&w(y)||Array.isArray(n)&&Array.isArray(y)?!Z(n,y):n!==y)return!1}}return!0}var sr=e=>e.type==="select-multiple",kr=e=>Oe(e)||fe(e),ke=e=>_e(e)&&e.isConnected,ir=e=>{for(const s in e)if(H(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(w(e)||t)for(const l in e)Array.isArray(e[l])||w(e[l])&&!ir(e[l])?(s[l]=Array.isArray(e[l])?[]:{},Fe(e[l],s[l])):L(e[l])||(s[l]=!0);return s}function ar(e,s,t){const l=Array.isArray(e);if(w(e)||l)for(const u in e)Array.isArray(e[u])||w(e[u])&&!ir(e[u])?D(s)||Ee(t[u])?t[u]=Array.isArray(e[u])?Fe(e[u],[]):{...Fe(e[u])}:ar(e[u],L(s)?{}:s[u],t[u]):t[u]=!Z(e[u],s[u]);return t}var ne=(e,s)=>ar(e,s,Fe(s)),lr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:l})=>D(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):l?l(e):e;function Se(e){const s=e.ref;return Le(s)?s.files:Oe(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?rr(e.refs).value:lr(D(s.value)?e.ref.value:s.value,e)}var Sr=(e,s,t,l)=>{const u={};for(const n of e){const y=d(s,n);y&&V(u,n,y._f)}return{criteriaMode:t,names:[...e],fields:u,shouldUseNativeValidation:l}},ue=e=>D(e)?e:be(e)?e.source:w(e)?be(e.value)?e.value.source:e.value:e;const Xe="AsyncFunction";var Er=e=>!!e&&!!e.validate&&!!(H(e.validate)&&e.validate.constructor.name===Xe||w(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Xe)),Tr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,s,t){const l=d(e,t);if(l||pe(t))return{error:l,name:t};const u=t.split(".");for(;u.length;){const n=u.join("."),y=d(s,n),g=d(e,n);if(y&&!Array.isArray(y)&&t!==n)return{name:t};if(g&&g.type)return{name:n,error:g};u.pop()}return{name:t}}var pr=(e,s,t,l,u)=>u.isOnAll?!1:!t&&u.isOnTouch?!(s||e):(t?l.isOnBlur:u.isOnBlur)?!e:(t?l.isOnChange:u.isOnChange)?e:!0,Lr=(e,s)=>!Ae(d(e,s)).length&&S(e,s);const Or={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Cr(e={}){let s={...Or,...e},t={submitCount:0,isDirty:!1,isLoading:H(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},u=w(s.defaultValues)||w(s.values)?M(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:M(u),y={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},O,q=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:me(),array:me(),state:me()},ce=$e(s.mode),de=$e(s.reValidateMode),j=s.criteriaMode===P.all,U=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},K=async r=>{if(!s.disabled&&(x.isValid||r)){const i=s.resolver?C((await G()).errors):await N(l,!0);i!==t.isValid&&b.state.next({isValid:i})}},Q=(r,i)=>{!s.disabled&&(x.isValidating||x.validatingFields)&&((r||Array.from(g.mount)).forEach(a=>{a&&(i?V(t.validatingFields,a,i):S(t.validatingFields,a))}),b.state.next({validatingFields:t.validatingFields,isValidating:!C(t.validatingFields)}))},F=(r,i=[],a,c,f=!0,o=!0)=>{if(c&&a&&!s.disabled){if(y.action=!0,o&&Array.isArray(d(l,r))){const h=a(d(l,r),c.argA,c.argB);f&&V(l,r,h)}if(o&&Array.isArray(d(t.errors,r))){const h=a(d(t.errors,r),c.argA,c.argB);f&&V(t.errors,r,h),Lr(t.errors,r)}if(x.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const h=a(d(t.touchedFields,r),c.argA,c.argB);f&&V(t.touchedFields,r,h)}x.dirtyFields&&(t.dirtyFields=ne(u,n)),b.state.next({name:r,isDirty:_(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else V(n,r,i)},z=(r,i)=>{V(t.errors,r,i),b.state.next({errors:t.errors})},Y=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},m=(r,i,a,c)=>{const f=d(l,r);if(f){const o=d(n,r,D(a)?d(u,r):a);D(o)||c&&c.defaultChecked||i?V(n,r,i?o:Se(f._f)):p(r,o),y.mount&&K()}},re=(r,i,a,c,f)=>{let o=!1,h=!1;const v={name:r};if(!s.disabled){const E=!!(d(l,r)&&d(l,r)._f&&d(l,r)._f.disabled);if(!a||c){x.isDirty&&(h=t.isDirty,t.isDirty=v.isDirty=_(),o=h!==v.isDirty);const T=E||Z(d(u,r),i);h=!!(!E&&d(t.dirtyFields,r)),T||E?S(t.dirtyFields,r):V(t.dirtyFields,r,!0),v.dirtyFields=t.dirtyFields,o=o||x.dirtyFields&&h!==!T}if(a){const T=d(t.touchedFields,r);T||(V(t.touchedFields,r,a),v.touchedFields=t.touchedFields,o=o||x.touchedFields&&T!==a)}o&&f&&b.state.next(v)}return o?v:{}},ye=(r,i,a,c)=>{const f=d(t.errors,r),o=x.isValid&&W(i)&&t.isValid!==i;if(s.delayError&&a?(O=U(()=>z(r,a)),O(s.delayError)):(clearTimeout(q),O=null,a?V(t.errors,r,a):S(t.errors,r)),(a?!Z(f,a):f)||!C(c)||o){const h={...c,...o&&W(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...h},b.state.next(h)}},G=async r=>{Q(r,!0);const i=await s.resolver(n,s.context,Sr(r||g.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return Q(r),i},te=async r=>{const{errors:i}=await G(r);if(r)for(const a of r){const c=d(i,a);c?V(t.errors,a,c):S(t.errors,a)}else t.errors=i;return i},N=async(r,i,a={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...h}=f;if(o){const v=g.array.has(o.name),E=f._f&&Er(f._f);E&&x.validatingFields&&Q([c],!0);const T=await Qe(f,g.disabled,n,j,s.shouldUseNativeValidation&&!i,v);if(E&&x.validatingFields&&Q([c]),T[o.name]&&(a.valid=!1,i))break;!i&&(d(T,o.name)?v?wr(t.errors,T,o.name):V(t.errors,o.name,T[o.name]):S(t.errors,o.name))}!C(h)&&await N(h,i,a)}}return a.valid},ge=()=>{for(const r of g.unMount){const i=d(l,r);i&&(i._f.refs?i._f.refs.every(a=>!ke(a)):!ke(i._f.ref))&&Ve(r)}g.unMount=new Set},_=(r,i)=>!s.disabled&&(r&&i&&V(n,r,i),!Z(Ce(),u)),A=(r,i,a)=>Vr(r,g,{...y.mount?n:D(i)?u:$(r)?{[r]:i}:i},a,i),k=r=>Ae(d(y.mount?n:u,r,s.shouldUnregister?d(u,r,[]):[])),p=(r,i,a={})=>{const c=d(l,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&V(n,r,lr(i,o)),f=_e(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(v=>v===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...n}})))}(a.shouldDirty||a.shouldTouch)&&re(r,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&le(r)},I=(r,i,a)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,h=d(l,o);(g.array.has(r)||w(f)||h&&!h._f)&&!ee(f)?I(o,f,a):p(o,f,a)}},R=(r,i,a={})=>{const c=d(l,r),f=g.array.has(r),o=M(i);V(n,r,o),f?(b.array.next({name:r,values:{...n}}),(x.isDirty||x.dirtyFields)&&a.shouldDirty&&b.state.next({name:r,dirtyFields:ne(u,n),isDirty:_(r,o)})):c&&!c._f&&!L(o)?I(r,o,a):p(r,o,a),je(r,g)&&b.state.next({...t}),b.values.next({name:y.mount?r:void 0,values:{...n}})},ie=async r=>{y.mount=!0;const i=r.target;let a=i.name,c=!0;const f=d(l,a),o=()=>i.type?Se(f._f):gr(r),h=v=>{c=Number.isNaN(v)||ee(v)&&isNaN(v.getTime())||Z(v,d(n,a,v))};if(f){let v,E;const T=o(),X=r.type===He.BLUR||r.type===He.FOCUS_OUT,cr=!Tr(f._f)&&!s.resolver&&!d(t.errors,a)&&!f._f.deps||pr(X,d(t.touchedFields,a),t.isSubmitted,de,ce),we=je(a,g,X);V(n,a,T),X?(f._f.onBlur&&f._f.onBlur(r),O&&O(0)):f._f.onChange&&f._f.onChange(r);const De=re(a,T,X,!1),dr=!C(De)||we;if(!X&&b.values.next({name:a,type:r.type,values:{...n}}),cr)return x.isValid&&(s.mode==="onBlur"&&X?K():X||K()),dr&&b.state.next({name:a,...we?{}:De});if(!X&&we&&b.state.next({...t}),s.resolver){const{errors:qe}=await G([a]);if(h(T),c){const yr=Ze(t.errors,l,a),We=Ze(qe,l,yr.name||a);v=We.error,a=We.name,E=C(qe)}}else Q([a],!0),v=(await Qe(f,g.disabled,n,j,s.shouldUseNativeValidation))[a],Q([a]),h(T),c&&(v?E=!1:x.isValid&&(E=await N(l,!0)));c&&(f._f.deps&&le(f._f.deps),ye(a,E,v,De))}},ae=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let a,c;const f=he(r);if(s.resolver){const o=await te(D(r)?r:f);a=C(o),c=r?!f.some(h=>d(o,h)):a}else r?(c=(await Promise.all(f.map(async o=>{const h=d(l,o);return await N(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!c&&!t.isValid)&&K()):c=a=await N(l);return b.state.next({...!$(r)||x.isValid&&a!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:a}:{},errors:t.errors}),i.shouldFocus&&!c&&oe(l,ae,r?f:g.mount),c},Ce=r=>{const i={...y.mount?n:u};return D(r)?i:$(r)?d(i,r):r.map(a=>d(i,a))},Ue=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),nr=r=>{r&&he(r).forEach(i=>S(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ne=(r,i,a)=>{const c=(d(l,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:h,type:v,...E}=f;V(t.errors,r,{...E,...i,ref:c}),b.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&c&&c.focus&&c.focus()},ur=(r,i)=>H(r)?b.values.subscribe({next:a=>r(A(void 0,i),a)}):A(r,i,!0),Ve=(r,i={})=>{for(const a of r?he(r):g.mount)g.mount.delete(a),g.array.delete(a),i.keepValue||(S(l,a),S(n,a)),!i.keepError&&S(t.errors,a),!i.keepDirty&&S(t.dirtyFields,a),!i.keepTouched&&S(t.touchedFields,a),!i.keepIsValidating&&S(t.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&S(u,a);b.values.next({values:{...n}}),b.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&K()},Re=({disabled:r,name:i,field:a,fields:c})=>{(W(r)&&y.mount||r||g.disabled.has(i))&&(r?g.disabled.add(i):g.disabled.delete(i),re(i,Se(a?a._f:d(c,i)._f),!1,!1,!0))},xe=(r,i={})=>{let a=d(l,r);const c=W(i.disabled)||W(s.disabled);return V(l,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...i}}),g.mount.add(r),a?Re({field:a,disabled:W(i.disabled)?i.disabled:s.disabled,name:r}):m(r,!0,i.value),{...c?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(r,i),a=d(l,r);const o=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=kr(o),v=a._f.refs||[];if(h?v.find(E=>E===o):o===a._f.ref)return;V(l,r,{_f:{...a._f,...h?{refs:[...v.filter(ke),o,...Array.isArray(d(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),m(r,!1,void 0,o)}else a=d(l,r,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vr(g.array,r)&&y.action)&&g.unMount.add(r)}}},Me=()=>s.shouldFocusError&&oe(l,ae,g.mount),or=r=>{W(r)&&(b.state.next({disabled:r}),oe(l,(i,a)=>{const c=d(l,a);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Be=(r,i)=>async a=>{let c;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let f=M(n);if(g.disabled.size)for(const o of g.disabled)V(f,o,void 0);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await G();t.errors=o,f=h}else await N(l);if(S(t.errors,"root"),C(t.errors)){b.state.next({errors:{}});try{await r(f,a)}catch(o){c=o}}else i&&await i({...t.errors},a),Me(),setTimeout(Me);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(l,r)&&(D(i.defaultValue)?R(r,M(d(u,r))):(R(r,i.defaultValue),V(u,r,M(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,M(d(u,r))):_()),i.keepError||(S(t.errors,r),x.isValid&&K()),b.state.next({...t}))},Ie=(r,i={})=>{const a=r?M(r):u,c=M(a),f=C(r),o=f?u:c;if(i.keepDefaultValues||(u=a),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(ne(u,n))]);for(const v of Array.from(h))d(t.dirtyFields,v)?V(o,v,d(n,v)):R(v,d(o,v))}else{if(Te&&D(r))for(const h of g.mount){const v=d(l,h);if(v&&v._f){const E=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(_e(E)){const T=E.closest("form");if(T){T.reset();break}}}}l={}}n=s.shouldUnregister?i.keepDefaultValues?M(u):{}:M(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Z(r,u)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&n?ne(u,n):t.dirtyFields:i.keepDefaultValues&&r?ne(u,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(r,i)=>Ie(H(r)?r(n):r,i);return{control:{register:xe,unregister:Ve,getFieldState:Ue,handleSubmit:Be,setError:Ne,_executeSchema:G,_getWatch:A,_getDirty:_,_updateValid:K,_removeUnmounted:ge,_updateFieldArray:F,_updateDisabledField:Re,_getFieldArray:k,_reset:Ie,_resetDefaultValues:()=>H(s.defaultValues)&&s.defaultValues().then(r=>{Pe(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:b,_proxyFormState:x,_setErrors:Y,get _fields(){return l},get _formValues(){return n},get _state(){return y},set _state(r){y=r},get _defaultValues(){return u},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:xe,handleSubmit:Be,watch:ur,setValue:R,getValues:Ce,reset:Pe,resetField:fr,clearErrors:nr,unregister:Ve,setError:Ne,setFocus:(r,i={})=>{const a=d(l,r),c=a&&a._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&H(f.select)&&f.select())}},getFieldState:Ue}}function Br(e={}){const s=B.useRef(void 0),t=B.useRef(void 0),[l,u]=B.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Cr(e),formState:l});const n=s.current.control;return n._options=e,Ar({subject:n._subjects.state,next:y=>{Fr(y,n._proxyFormState,n._updateFormState)&&u({...n._formState})}}),B.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),B.useEffect(()=>{if(n._proxyFormState.isDirty){const y=n._getDirty();y!==l.isDirty&&n._subjects.state.next({isDirty:y})}},[n,l.isDirty]),B.useEffect(()=>{e.values&&!Z(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,u(y=>({...y}))):n._resetDefaultValues()},[e.values,n]),B.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),B.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),B.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=br(l,n),s.current}export{xr as a,d as g,V as s,Br as u};
