"use strict";(self.webpackChunk_prateeksrivastava1_nahi_aati_css=self.webpackChunk_prateeksrivastava1_nahi_aati_css||[]).push([[539],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/Components/Dropdown/Dropdown.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiSelect:function(){return MultiSelect},SingleSelect:function(){return SingleSelect},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Dropdown_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_SingleSelect$paramet,_SingleSelect$paramet2,_SingleSelect$paramet3,_MultiSelect$paramete,_MultiSelect$paramete2,_MultiSelect$paramete3,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n"]))),DropdownButton=styled_components_browser_esm.ZP.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),DropdownTitle=styled_components_browser_esm.ZP.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  margin-right: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n"]))),DropdownList=styled_components_browser_esm.ZP.ul(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 4px 0;\n  list-style: none;\n  border: 1px solid #ccc;\n  background-color: #fff;\n\n  @media (max-width: 768px) {\n    max-height: 150px;\n  }\n"]))),DropdownItem=styled_components_browser_esm.ZP.li(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  padding: 4px 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]))),Checkbox=styled_components_browser_esm.ZP.input.attrs({type:"checkbox"})(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  margin-right: 8px;\n"]))),Dropdown=function Dropdown(_ref){var options=_ref.options,kind=_ref.kind,onSelectChange=_ref.onSelectChange,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),selectedOptions=_useState4[0],setSelectedOptions=_useState4[1];(0,react.useEffect)((function(){onSelectChange&&onSelectChange(selectedOptions)}),[selectedOptions,onSelectChange]);var handleCheckboxChange=function handleCheckboxChange(event){var _event$target=event.target,value=_event$target.value,updatedOptions=_event$target.checked?[].concat(_toConsumableArray(selectedOptions),[value]):selectedOptions.filter((function(selectedOption){return selectedOption!==value}));setSelectedOptions(updatedOptions)};return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(DropdownButton,{onClick:function toggleDropdown(){setIsOpen(!isOpen)},children:[(0,jsx_runtime.jsx)(DropdownTitle,{children:function getDropdownTitle(){return 0===selectedOptions.length?"Select an option":"isMultiSelect"===kind?1===selectedOptions.length?selectedOptions[0]:"".concat(selectedOptions.length," options selected"):selectedOptions[0]}()}),isOpen?"▲":"▼"]}),isOpen&&(0,jsx_runtime.jsx)(DropdownList,{children:null==options?void 0:options.map((function(option){return(0,jsx_runtime.jsxs)(DropdownItem,{onClick:function onClick(){return function handleItemClick(option){if("isMultiSelect"===kind){var updatedOptions=selectedOptions.includes(option)?selectedOptions.filter((function(selectedOption){return selectedOption!==option})):[].concat(_toConsumableArray(selectedOptions),[option]);setSelectedOptions(updatedOptions)}else setSelectedOptions([option]),setIsOpen(!1)}(option)},children:["isMultiSelect"===kind&&(0,jsx_runtime.jsx)(Checkbox,{value:option,checked:selectedOptions.includes(option),onChange:handleCheckboxChange}),option]},option)}))})]})},Dropdown_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},kind:{defaultValue:null,description:"",name:"kind",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!1,type:{name:"((selectedOptions: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/Components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var Dropdown_stories={title:"Components/Dropdown",component:Dropdown_Dropdown,tags:["autodocs"]},SingleSelect={args:{kind:"isSingleSelect",options:[]}},MultiSelect={args:{kind:"isMultiSelect",options:[]}};SingleSelect.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},SingleSelect.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_SingleSelect$paramet=SingleSelect.parameters)||void 0===_SingleSelect$paramet?void 0:_SingleSelect$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    kind: 'isSingleSelect',\n    options: []\n  }\n}"},null===(_SingleSelect$paramet2=SingleSelect.parameters)||void 0===_SingleSelect$paramet2||null===(_SingleSelect$paramet3=_SingleSelect$paramet2.docs)||void 0===_SingleSelect$paramet3?void 0:_SingleSelect$paramet3.source)})}),MultiSelect.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MultiSelect.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_MultiSelect$paramete=MultiSelect.parameters)||void 0===_MultiSelect$paramete?void 0:_MultiSelect$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    kind: 'isMultiSelect',\n    options: []\n  }\n}"},null===(_MultiSelect$paramete2=MultiSelect.parameters)||void 0===_MultiSelect$paramete2||null===(_MultiSelect$paramete3=_MultiSelect$paramete2.docs)||void 0===_MultiSelect$paramete3?void 0:_MultiSelect$paramete3.source)})});var __namedExportsOrder=["SingleSelect","MultiSelect"]}}]);