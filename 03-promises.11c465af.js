var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=r);var o=r("iQIUW");function l(e,t){const n=Math.random()>.3;return new Promise(((r,i)=>{setTimeout((()=>{n?r(o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)):i(o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){let t=1;e.preventDefault();let n=Number(e.target.elements.delay.value);const r=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);for(i=0;i<o;i+=1)l(t,n).then().catch(),t+=1,n+=r}));
//# sourceMappingURL=03-promises.11c465af.js.map