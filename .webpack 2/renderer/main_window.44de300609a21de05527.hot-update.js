"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateintracom_06_2024"](
  "main_window",
  {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/components/settings-dropdown/settings.css":
      /*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/settings-dropdown/settings.css ***!
  \*********************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.container {\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.section {\n  margin-bottom: 20px;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n.fetched {\n  width: 100%;\n  height: 30px;\n  /* background-color: #f1f1f1; */\n  border: 1px dashed #ccc;\n  font-size: 16px;\n  color: #333;\n  text-align: center;\n  margin: 10px;\n  padding: 5px;\n}\n\n.testEmailSection {\n  margin-bottom: 20px;\n}\n\n.actionButtons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.actionButtons button {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #dededf;\n  color: black;\n  cursor: pointer;\n}\n\n.actionButtons button:hover {\n  background-color: #0056b3;\n}\n\n/* EMAIL-CONFIGURATION CSS */\n.email-settings {\n  width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  /* border: 1px solid #ccc; */\n  text-align: left;\n\n  /* background-color: #f9f9f9; */\n  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\n}\n\n.email-settings h1 {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.email-settings p {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.error-message {\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #dc3545;\n  border-radius: 5px;\n  background-color: #f8d7da;\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.form-group label {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n\n  padding-left: 1px;\n  font-size: 14px;\n}\n\n.form-group input {\n  width: 90%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.security-type {\n  width: 95%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.form-group input[type="password"] {\n  font-family: inherit;\n}\n\n.form-group button {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background-color: #e8edf1;\n  color: black;\n  font-weight: bold;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.form-group button:hover {\n  background-color: #c5dbf3;\n}\n/* .success-from{\n  width: 100%;\n} */\n\n.success-message {\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #4caf50;\n  border-radius: 5px;\n  background-color: #dff0d8;\n}\n\n.success-message p {\n  margin: 0;\n  font-weight: bold;\n}\n\n.buttons {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  gap: 10px;\n}\n\n.buttons button {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.buttons button:first-child {\n  background-color: #f8fafc;\n  color: black;\n  font-weight: bold;\n  border: 1px solid #ccc;\n}\n\n.buttons button:last-child {\n  background-color: #187fe3;\n  color: white;\n  font-weight: bold;\n}\n\n.buttons button:hover {\n  opacity: 0.9;\n  background-color: #c5dbf3;\n}\n\n/* Adjustments for tablets */\n@media (max-width: 768px) {\n  .email-settings {\n    width: 90%; /* More width for smaller devices */\n  }\n\n  .email-settings h1 {\n    font-size: 20px; /* Slightly smaller font size */\n  }\n\n  .email-settings p,\n  .form-group label,\n  .success-message p {\n    font-size: 13px; /* Adjust font size for readability */\n  }\n}\n\n/* Adjustments for mobile phones */\n@media (max-width: 480px) {\n  .email-settings {\n    width: 95%; /* Use almost full width for very small devices */\n    padding: 15px; /* Slightly reduce padding */\n  }\n\n  .email-settings h1 {\n    font-size: 18px; /* Further reduce font size for small screens */\n  }\n\n  .form-group button,\n  .buttons button {\n    padding: 8px 10px; /* Adjust button padding for smaller screens */\n  }\n\n  .buttons {\n    flex-direction: column; /* Stack buttons vertically on small screens */\n    gap: 10px; /* Add space between stacked buttons */\n  }\n}\n\n/* New approach >>>>>>>>>>>*/\n.container {\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  margin: 0 auto;\n  font-family: Arial, sans-serif;\n}\n\n.heading {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.subHeading {\n  color: #666;\n  margin-bottom: 20px;\n}\n\n.section {\n  margin-bottom: 20px;\n}\n\n.infoRow {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  border: 1px dashed #ccc;\n  font-size: 16px;\n  width: 100%;\n  height: 30px;\n}\n\n.label {\n  font-weight: bold;\n}\n\n.value {\n  color: #333;\n}\n\n.emailSettings {\n  margin-top: 20px;\n}\n\n.editButton {\n  display: inline-block;\n\n  margin-right: 1px;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.editButton:hover {\n  background-color: #0056b3;\n}\n`, "",{"version":3,"sources":["webpack://./src/components/settings-dropdown/settings.css"],"names":[],"mappings":"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","sourcesContent":[".container {\\n  padding: 20px;\\n  background-color: #fff;\\n  border-radius: 8px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  max-width: 600px;\\n  margin: 0 auto;\\n}\\n\\n.section {\\n  margin-bottom: 20px;\\n}\\n\\n.formGroup {\\n  margin-bottom: 15px;\\n}\\n.fetched {\\n  width: 100%;\\n  height: 30px;\\n  /* background-color: #f1f1f1; */\\n  border: 1px dashed #ccc;\\n  font-size: 16px;\\n  color: #333;\\n  text-align: center;\\n  margin: 10px;\\n  padding: 5px;\\n}\\n\\n.testEmailSection {\\n  margin-bottom: 20px;\\n}\\n\\n.actionButtons {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.actionButtons button {\\n  padding: 10px 20px;\\n  border: none;\\n  border-radius: 4px;\\n  background-color: #dededf;\\n  color: black;\\n  cursor: pointer;\\n}\\n\\n.actionButtons button:hover {\\n  background-color: #0056b3;\\n}\\n\\n/* EMAIL-CONFIGURATION CSS */\\n.email-settings {\\n  width: 400px;\\n  margin: 0 auto;\\n  padding: 20px;\\n  /* border: 1px solid #ccc; */\\n  text-align: left;\\n\\n  /* background-color: #f9f9f9; */\\n  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\\n}\\n\\n.email-settings h1 {\\n  font-size: 24px;\\n  margin-bottom: 10px;\\n}\\n\\n.email-settings p {\\n  font-size: 14px;\\n  margin-bottom: 20px;\\n}\\n.error-message {\\n  margin-top: 20px;\\n  padding: 10px;\\n  border: 1px solid #dc3545;\\n  border-radius: 5px;\\n  background-color: #f8d7da;\\n}\\n\\n.form-group {\\n  margin-bottom: 15px;\\n}\\n\\n.form-group label {\\n  display: block;\\n  font-weight: bold;\\n  margin-bottom: 10px;\\n\\n  padding-left: 1px;\\n  font-size: 14px;\\n}\\n\\n.form-group input {\\n  width: 90%;\\n  padding: 8px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n}\\n.security-type {\\n  width: 95%;\\n  padding: 8px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n}\\n\\n.form-group input[type=\\"password\\"] {\\n  font-family: inherit;\\n}\\n\\n.form-group button {\\n  margin-top: 10px;\\n  padding: 8px 12px;\\n  background-color: #e8edf1;\\n  color: black;\\n  font-weight: bold;\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.form-group button:hover {\\n  background-color: #c5dbf3;\\n}\\n/* .success-from{\\n  width: 100%;\\n} */\\n\\n.success-message {\\n  margin-top: 20px;\\n  padding: 10px;\\n  border: 1px solid #4caf50;\\n  border-radius: 5px;\\n  background-color: #dff0d8;\\n}\\n\\n.success-message p {\\n  margin: 0;\\n  font-weight: bold;\\n}\\n\\n.buttons {\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-top: 20px;\\n  gap: 10px;\\n}\\n\\n.buttons button {\\n  padding: 10px 20px;\\n  border: none;\\n  border-radius: 10px;\\n  cursor: pointer;\\n}\\n\\n.buttons button:first-child {\\n  background-color: #f8fafc;\\n  color: black;\\n  font-weight: bold;\\n  border: 1px solid #ccc;\\n}\\n\\n.buttons button:last-child {\\n  background-color: #187fe3;\\n  color: white;\\n  font-weight: bold;\\n}\\n\\n.buttons button:hover {\\n  opacity: 0.9;\\n  background-color: #c5dbf3;\\n}\\n\\n/* Adjustments for tablets */\\n@media (max-width: 768px) {\\n  .email-settings {\\n    width: 90%; /* More width for smaller devices */\\n  }\\n\\n  .email-settings h1 {\\n    font-size: 20px; /* Slightly smaller font size */\\n  }\\n\\n  .email-settings p,\\n  .form-group label,\\n  .success-message p {\\n    font-size: 13px; /* Adjust font size for readability */\\n  }\\n}\\n\\n/* Adjustments for mobile phones */\\n@media (max-width: 480px) {\\n  .email-settings {\\n    width: 95%; /* Use almost full width for very small devices */\\n    padding: 15px; /* Slightly reduce padding */\\n  }\\n\\n  .email-settings h1 {\\n    font-size: 18px; /* Further reduce font size for small screens */\\n  }\\n\\n  .form-group button,\\n  .buttons button {\\n    padding: 8px 10px; /* Adjust button padding for smaller screens */\\n  }\\n\\n  .buttons {\\n    flex-direction: column; /* Stack buttons vertically on small screens */\\n    gap: 10px; /* Add space between stacked buttons */\\n  }\\n}\\n\\n/* New approach >>>>>>>>>>>*/\\n.container {\\n  padding: 20px;\\n  background-color: #fff;\\n  border-radius: 8px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  max-width: 800px;\\n  margin: 0 auto;\\n  font-family: Arial, sans-serif;\\n}\\n\\n.heading {\\n  font-size: 24px;\\n  font-weight: bold;\\n  margin-bottom: 10px;\\n}\\n\\n.subHeading {\\n  color: #666;\\n  margin-bottom: 20px;\\n}\\n\\n.section {\\n  margin-bottom: 20px;\\n}\\n\\n.infoRow {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 10px;\\n  border: 1px dashed #ccc;\\n  font-size: 16px;\\n  width: 100%;\\n  height: 30px;\\n}\\n\\n.label {\\n  font-weight: bold;\\n}\\n\\n.value {\\n  color: #333;\\n}\\n\\n.emailSettings {\\n  margin-top: 20px;\\n}\\n\\n.editButton {\\n  display: inline-block;\\n\\n  margin-right: 1px;\\n  padding: 10px 20px;\\n  background-color: #007bff;\\n  color: #fff;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\n.editButton:hover {\\n  background-color: #0056b3;\\n}\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL3NldHRpbmdzLWRyb3Bkb3duL3NldHRpbmdzLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUEsZ0NBQWdDO0FBQ2hDLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUE4QixHQUFHLDhEQUE4RCxxQkFBcUIsa0JBQWtCLHlDQUF5QywwQkFBMEIsdUJBQXVCLHFDQUFxQyxzRUFBc0UsdUJBQXVCLDJDQUEyQyxHQUFHLG9FQUFvRSxxQkFBcUIsa0JBQWtCLHVFQUF1RSxrQ0FBa0MsMEJBQTBCLHVCQUF1QixxREFBcUQsOENBQThDLHlCQUF5QixvREFBb0QsZ0JBQWdCLDhCQUE4QixnRUFBZ0UsNENBQTRDLEdBQUcsK0NBQStDLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDZDQUE2QyxxQkFBcUIsbUJBQW1CLG1DQUFtQyxHQUFHLGNBQWMsb0JBQW9CLHNCQUFzQix3QkFBd0IsR0FBRyxpQkFBaUIsZ0JBQWdCLHdCQUF3QixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0IsbUNBQW1DLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyxZQUFZLHNCQUFzQixHQUFHLFlBQVksZ0JBQWdCLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQiwwQkFBMEIsd0JBQXdCLHVCQUF1Qiw4QkFBOEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHFCQUFxQjtBQUN2K047QUFDQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJhY29tLTA2LTIwMjQvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy1kcm9wZG93bi9zZXR0aW5ncy5jc3M/YjI1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm1Hcm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZmV0Y2hlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7ICovXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGVzdEVtYWlsU2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hY3Rpb25CdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmFjdGlvbkJ1dHRvbnMgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZjtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb25CdXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG5cbi8qIEVNQUlMLUNPTkZJR1VSQVRJT04gQ1NTICovXG4uZW1haWwtc2V0dGluZ3Mge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7ICovXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cbn1cblxuLmVtYWlsLXNldHRpbmdzIGgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZW1haWwtc2V0dGluZ3MgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2VjdXJpdHktdHlwZSB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVkZjE7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLWdyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWRiZjM7XG59XG4vKiAuc3VjY2Vzcy1mcm9te1xuICB3aWR0aDogMTAwJTtcbn0gKi9cblxuLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5idXR0b25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4N2ZlMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVkYmYzO1xufVxuXG4vKiBBZGp1c3RtZW50cyBmb3IgdGFibGV0cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5lbWFpbC1zZXR0aW5ncyB7XG4gICAgd2lkdGg6IDkwJTsgLyogTW9yZSB3aWR0aCBmb3Igc21hbGxlciBkZXZpY2VzICovXG4gIH1cblxuICAuZW1haWwtc2V0dGluZ3MgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDsgLyogU2xpZ2h0bHkgc21hbGxlciBmb250IHNpemUgKi9cbiAgfVxuXG4gIC5lbWFpbC1zZXR0aW5ncyBwLFxuICAuZm9ybS1ncm91cCBsYWJlbCxcbiAgLnN1Y2Nlc3MtbWVzc2FnZSBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7IC8qIEFkanVzdCBmb250IHNpemUgZm9yIHJlYWRhYmlsaXR5ICovXG4gIH1cbn1cblxuLyogQWRqdXN0bWVudHMgZm9yIG1vYmlsZSBwaG9uZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZW1haWwtc2V0dGluZ3Mge1xuICAgIHdpZHRoOiA5NSU7IC8qIFVzZSBhbG1vc3QgZnVsbCB3aWR0aCBmb3IgdmVyeSBzbWFsbCBkZXZpY2VzICovXG4gICAgcGFkZGluZzogMTVweDsgLyogU2xpZ2h0bHkgcmVkdWNlIHBhZGRpbmcgKi9cbiAgfVxuXG4gIC5lbWFpbC1zZXR0aW5ncyBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBGdXJ0aGVyIHJlZHVjZSBmb250IHNpemUgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgfVxuXG4gIC5mb3JtLWdyb3VwIGJ1dHRvbixcbiAgLmJ1dHRvbnMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDsgLyogQWRqdXN0IGJ1dHRvbiBwYWRkaW5nIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBidXR0b25zIHZlcnRpY2FsbHkgb24gc21hbGwgc2NyZWVucyAqL1xuICAgIGdhcDogMTBweDsgLyogQWRkIHNwYWNlIGJldHdlZW4gc3RhY2tlZCBidXR0b25zICovXG4gIH1cbn1cblxuLyogTmV3IGFwcHJvYWNoID4+Pj4+Pj4+Pj4+Ki9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1YkhlYWRpbmcge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5mb1JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52YWx1ZSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZW1haWxTZXR0aW5ncyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5lZGl0QnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWRpdEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzLWRyb3Bkb3duL3NldHRpbmdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VB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QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5mZXRjaGVkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgKi9cXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50ZXN0RW1haWxTZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hY3Rpb25CdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWN0aW9uQnV0dG9ucyBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGlvbkJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi8qIEVNQUlMLUNPTkZJR1VSQVRJT04gQ1NTICovXFxuLmVtYWlsLXNldHRpbmdzIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgKi9cXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cXG59XFxuXFxuLmVtYWlsLXNldHRpbmdzIGgxIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5lbWFpbC1zZXR0aW5ncyBwIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VjdXJpdHktdHlwZSB7XFxuICB3aWR0aDogOTUlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVkZjE7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWRiZjM7XFxufVxcbi8qIC5zdWNjZXNzLWZyb217XFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLnN1Y2Nlc3MtbWVzc2FnZSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xcbn1cXG5cXG4uc3VjY2Vzcy1tZXNzYWdlIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3ZmUzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVkYmYzO1xcbn1cXG5cXG4vKiBBZGp1c3RtZW50cyBmb3IgdGFibGV0cyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmVtYWlsLXNldHRpbmdzIHtcXG4gICAgd2lkdGg6IDkwJTsgLyogTW9yZSB3aWR0aCBmb3Igc21hbGxlciBkZXZpY2VzICovXFxuICB9XFxuXFxuICAuZW1haWwtc2V0dGluZ3MgaDEge1xcbiAgICBmb250LXNpemU6IDIwcHg7IC8qIFNsaWdodGx5IHNtYWxsZXIgZm9udCBzaXplICovXFxuICB9XFxuXFxuICAuZW1haWwtc2V0dGluZ3MgcCxcXG4gIC5mb3JtLWdyb3VwIGxhYmVsLFxcbiAgLnN1Y2Nlc3MtbWVzc2FnZSBwIHtcXG4gICAgZm9udC1zaXplOiAxM3B4OyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciByZWFkYWJpbGl0eSAqL1xcbiAgfVxcbn1cXG5cXG4vKiBBZGp1c3RtZW50cyBmb3IgbW9iaWxlIHBob25lcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmVtYWlsLXNldHRpbmdzIHtcXG4gICAgd2lkdGg6IDk1JTsgLyogVXNlIGFsbW9zdCBmdWxsIHdpZHRoIGZvciB2ZXJ5IHNtYWxsIGRldmljZXMgKi9cXG4gICAgcGFkZGluZzogMTVweDsgLyogU2xpZ2h0bHkgcmVkdWNlIHBhZGRpbmcgKi9cXG4gIH1cXG5cXG4gIC5lbWFpbC1zZXR0aW5ncyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogRnVydGhlciByZWR1Y2UgZm9udCBzaXplIGZvciBzbWFsbCBzY3JlZW5zICovXFxuICB9XFxuXFxuICAuZm9ybS1ncm91cCBidXR0b24sXFxuICAuYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDsgLyogQWRqdXN0IGJ1dHRvbiBwYWRkaW5nIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gIH1cXG5cXG4gIC5idXR0b25zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgYnV0dG9ucyB2ZXJ0aWNhbGx5IG9uIHNtYWxsIHNjcmVlbnMgKi9cXG4gICAgZ2FwOiAxMHB4OyAvKiBBZGQgc3BhY2UgYmV0d2VlbiBzdGFja2VkIGJ1dHRvbnMgKi9cXG4gIH1cXG59XFxuXFxuLyogTmV3IGFwcHJvYWNoID4+Pj4+Pj4+Pj4+Ki9cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc3ViSGVhZGluZyB7XFxuICBjb2xvcjogIzY2NjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5pbmZvUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udmFsdWUge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5lbWFpbFNldHRpbmdzIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gIG1hcmdpbi1yaWdodDogMXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/components/settings-dropdown/settings.css\n',
        );

        /***/
      },
  },
  /******/ function (__webpack_require__) {
    // webpackRuntimeModules
    /******/ /* webpack/runtime/getFullHash */
    /******/ (() => {
      /******/ __webpack_require__.h = () => "18a9df63279c1fa9d76d";
      /******/
    })();
    /******/
    /******/
  },
);
