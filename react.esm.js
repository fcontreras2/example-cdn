'use client';
import React, { useState, useEffect, Fragment } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import DatePickerBase from 'react-datepicker';
import InputMaskBase from 'react-input-mask';
import Select, { components } from 'react-select';
import { Transition, Dialog, Switch as Switch$1 } from '@headlessui/react';
import { format, addDays, differenceInYears } from 'date-fns';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["size", "className"];
var IconSize = {
  xs: 'w-2 h-2',
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  base: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};
var IconAttSize = {
  xs: {
    width: '8',
    height: '8'
  },
  sm: {
    width: '12',
    height: '12'
  },
  md: {
    width: '16',
    height: '16'
  },
  base: {
    width: '20',
    height: '20'
  },
  lg: {
    width: '24',
    height: '24'
  },
  xl: {
    width: '32',
    height: '32'
  }
};
// eslint-disable-next-line no-unused-vars
var withIconSize = function withIconSize(Component) {
  return function (_ref) {
    var size = _ref.size,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);
    return React.createElement(Component, Object.assign({
      className: twMerge(clsx(size ? IconSize[size] : IconSize['md'], className))
    }, size ? IconAttSize[size] : IconAttSize['md'], props));
  };
};

var IcAddressBook = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
  }));
});

var IcApple = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 41 48",
    version: "1.1",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("title", null, "Apple"), React.createElement("desc", null, "Created with Sketch."), React.createElement("defs", null), React.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Social-Icons---Isolated",
    transform: "translate(-55.000000, -951.000000)",
    fill: "#0B0B0A"
  }, React.createElement("path", {
    d: "M82.1747352,958.792499 C83.7401771,956.771699 84.9268831,953.915484 84.497649,951 C81.9390773,951.177808 78.948466,952.814769 77.2034752,954.948463 C75.6127843,956.88177 74.3054439,959.757742 74.816036,962.549042 C77.6130711,962.636535 80.4998807,960.960061 82.1747352,958.792499 L82.1747352,958.792499 Z M96,986.217241 C94.8806249,988.712195 94.3419782,989.827022 92.8999761,992.03692 C90.8884674,995.121745 88.052156,998.962958 84.5341199,998.991182 C81.4116524,999.02505 80.6064879,996.94498 76.3674507,996.970382 C72.1284135,996.99296 71.2446963,999.030695 68.116618,998.999649 C64.6013873,998.968603 61.9137648,995.502761 59.9022561,992.417937 C54.2745205,983.79849 53.6825702,973.680377 57.1529137,968.298162 C59.6217109,964.476705 63.5156776,962.241407 67.1739863,962.241407 C70.8968204,962.241407 73.2393723,964.296075 76.3225635,964.296075 C79.3131747,964.296075 81.1339127,962.235762 85.4402807,962.235762 C88.7002153,962.235762 92.1537261,964.022307 94.6113015,967.10431 C86.5540449,971.546683 87.8585799,983.121127 96,986.217241 L96,986.217241 Z",
    id: "Apple"
  }))));
});

var IcArrowLeft = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
  }));
});

var IcArrowRight = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
  }));
});

var IcBadgeCheck = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
  }));
});

var IcBars = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
  }));
});

var IcBell = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
  }));
});

var IcBriefcase = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
  }));
});

var IcCalculator = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
  }));
});

var IcCalendar = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
  }));
});

var IcChartLine = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
  }));
});

var IcChartPie = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 576 512"
  }, props), React.createElement("path", {
    d: "M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"
  }));
});

var IcCheck = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  }));
});

var IcChevronDown = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
  }));
});

var IcChevronLeft = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 320 512"
  }, props), React.createElement("path", {
    d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
  }));
});

var IcChevronRight = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 320 512"
  }, props), React.createElement("path", {
    d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
  }));
});

var IcChevronUp = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
  }));
});

var IcCircleInfo = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
  }));
});

var IcClock = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
  }));
});

var IcClockRotateLeft = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
  }));
});

var IcCopy = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
  }));
});

var IcCreditCard = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 576 512"
  }, props), React.createElement("path", {
    d: "M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
  }));
});

var IcDollarSign = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 320 512"
  }, props), React.createElement("path", {
    d: "M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
  }));
});

var IcDownload = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
  }));
});

var IcEllipsis = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
  }));
});

var IcEmail = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
  }));
});

var IcEye = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 576 512"
  }, props), React.createElement("path", {
    d: "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
  }));
});

var IcEyeSlash = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 640 512"
  }, props), React.createElement("path", {
    d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
  }));
});

var IcFacebook = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 320 512"
  }, props), React.createElement("path", {
    d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
  }));
});

var IcFaceId = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    d: "M7 3H5C3.89543 3 3 3.89543 3 5V7",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M17 3H19C20.1046 3 21 3.89543 21 5V7",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M16 8L16 10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M8 8L8 10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M9 16C9 16 10 17 12 17C14 17 15 16 15 16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M12 8L12 13L11 13",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M7 21H5C3.89543 21 3 20.1046 3 19V17",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M17 21H19C20.1046 21 21 20.1046 21 19V17",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});

var IcFile = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
  }));
});

var IcFileExcel = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"
  }));
});

var IcFileImage = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6H216 176 128 80c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z"
  }));
});

var IcFileLines = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    fill: "currentColor"
  }, props), React.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
  }));
});

var IcFilePdf = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
  }));
});

var IcFileVideo = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z"
  }));
});

var IcFileWord = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"
  }));
});

var IcFilter = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
  }));
});

var IcFingerPrint = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128v24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7V256c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256v24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8V256c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96v24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7V256c0-28.7 23.3-52 52-52s52 23.3 52 52v24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1V256c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24v24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9V256z"
  }));
});

var IcFolder = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
  }));
});

var IcGlobe = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
  }));
});

var IcGoogle = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    viewBox: "0 0 47 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("title", null, "Google"), React.createElement("desc", null, "Created with Sketch."), React.createElement("defs", null), React.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Social-Icons---Isolated",
    transform: "translate(-389.000000, -727.000000)"
  }, React.createElement("g", {
    id: "Google",
    transform: "translate(389.000000, 727.000000)"
  }, React.createElement("path", {
    d: "M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24",
    id: "Fill-1",
    fill: "#FBBC05"
  }), React.createElement("path", {
    d: "M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333",
    id: "Fill-2",
    fill: "#EA4335"
  }), React.createElement("path", {
    d: "M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667",
    id: "Fill-3",
    fill: "#34A853"
  }), React.createElement("path", {
    d: "M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24",
    id: "Fill-4",
    fill: "#4285F4"
  })))));
});

var IcIdCard = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 576 512"
  }, props), React.createElement("path", {
    d: "M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
  }));
});

var IcInstagram = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  }));
});

var IcLinkedIn = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  }));
});

var IcLocationArrow = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
  }));
});

var IcLock = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
  }));
});

var IcMagnifyingGlass = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
  }));
});

var IcMobile = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
  }));
});

var IcNoteSticky = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"
  }));
});

var IcPaperPlane = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
  }));
});

var IcPenNib = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"
  }));
});

var IcPeopleRoof = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 640 512"
  }, props), React.createElement("path", {
    d: "M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"
  }));
});

var IcPhone = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
  }));
});

var IcQrCode = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"
  }));
});

var IcQuestion = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    fill: "currentColor"
  }, props), React.createElement("path", {
    d: "M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
  }));
});

var IcRightFromBracket = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
  }));
});

var IcShareFromSquare = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 576 512"
  }, props), React.createElement("path", {
    d: "M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z"
  }));
});

var IcShieldHalved = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
  }));
});

var _excluded$1 = ["className"];
var IcSpinner = /*#__PURE__*/withIconSize(function (_ref) {
  var className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return React.createElement("svg", Object.assign({
    className: "animate-spin " + className,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), React.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
});

var IcTableColumns = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"
  }));
});

var IcThumbtack = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), React.createElement("path", {
    d: "M11.6734943,8.3307728 L14.9993074,6.09979492 L14.1213255,5.22181303 C13.7308012,4.83128874 13.7308012,4.19812376 14.1213255,3.80759947 L15.535539,2.39338591 C15.9260633,2.00286161 16.5592283,2.00286161 16.9497526,2.39338591 L22.6066068,8.05024016 C22.9971311,8.44076445 22.9971311,9.07392943 22.6066068,9.46445372 L21.1923933,10.8786673 C20.801869,11.2691916 20.168704,11.2691916 19.7781797,10.8786673 L18.9002333,10.0007208 L16.6692373,13.3265608 C16.9264145,14.2523264 16.9984943,15.2320236 16.8664372,16.2092466 L16.4344698,19.4058049 C16.360509,19.9531149 15.8568695,20.3368403 15.3095595,20.2628795 C15.0925691,20.2335564 14.8912006,20.1338238 14.7363706,19.9789938 L5.02099894,10.2636221 C4.63047465,9.87309784 4.63047465,9.23993286 5.02099894,8.84940857 C5.17582897,8.69457854 5.37719743,8.59484594 5.59418783,8.56552292 L8.79074617,8.13355557 C9.76799113,8.00149544 10.7477104,8.0735815 11.6734943,8.3307728 Z",
    fill: "currentColor"
  }), React.createElement("polygon", {
    fill: "#000000",
    opacity: "0.3",
    transform: "translate(7.050253, 17.949747) rotate(-315.000000) translate(-7.050253, -17.949747) ",
    points: "5.55025253 13.9497475 5.55025253 19.6640332 7.05025253 21.9497475 8.55025253 19.6640332 8.55025253 13.9497475"
  })));
});

var IcTrashCan = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
  }));
});

var IcTwitter = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
  }));
});

var IcUser = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
  }));
});

var IcUserGear = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 640 512"
  }, props), React.createElement("path", {
    d: "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V454.8c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"
  }));
});

var IcUserGroup = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 640 512"
  }, props), React.createElement("path", {
    d: "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
  }));
});

var IcUserShield = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 640 512"
  }, props), React.createElement("path", {
    d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"
  }));
});

var IcWhatsapp = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }, props), React.createElement("path", {
    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  }));
});

var IcXMark = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
});

var IcYoutube = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    fill: "currentColor"
  }, props), React.createElement("path", {
    d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
  }));
});

var Alert = function Alert(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'info' : _ref$variant,
    title = _ref.title,
    subtitle = _ref.subtitle,
    onClose = _ref.onClose;
  var icons = {
    success: React.createElement("svg", {
      className: "h-5 w-5 text-green-400",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, React.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd"
    })),
    danger: React.createElement("svg", {
      className: "h-5 w-5 text-red-500",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, React.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
      clipRule: "evenodd"
    })),
    warning: React.createElement("svg", {
      className: "h-5 w-5 text-yellow-400",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, React.createElement("path", {
      fillRule: "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd"
    })),
    info: React.createElement("svg", {
      className: "h-5 w-5 text-blue-400",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, React.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd"
    }))
  };
  return React.createElement("div", {
    className: clsx('w-full rounded-md  p-4 bg-opacity-20', variant === 'success' && 'bg-green-400 ', variant === 'danger' && 'bg-red-300', variant === 'warning' && 'bg-yellow-300', variant === 'info' && 'bg-blue-300')
  }, React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex-shrink-0"
  }, icons[variant]), React.createElement("div", {
    className: "ml-3"
  }, title && React.createElement("h3", {
    className: clsx('text-sm font-medium mb-2', variant === 'success' && 'text-green-800', variant === 'danger' && 'text-red-800', variant === 'warning' && 'text-yellow-800', variant === 'info' && 'text-blue-800')
  }, title), subtitle && React.createElement("div", {
    className: clsx('text-sm', variant === 'success' && 'text-green-700', variant === 'danger' && 'text-red-700', variant === 'warning' && 'text-yellow-700', variant === 'info' && 'text-blue-700')
  }, React.createElement("p", null, subtitle, " "))), onClose && React.createElement("div", {
    className: "ml-auto pl-3"
  }, React.createElement("div", {
    className: "-mx-1.5 -my-1.5"
  }, React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: clsx('inline-flex rounded-md p-1.5 text-gray-700 focus:outline-none', variant === 'success' && 'hover:bg-green-200', variant === 'danger' && 'hover:bg-red-200', variant === 'warning' && 'hover:bg-yellow-200', variant === 'info' && 'hover:bg-blue-200')
  }, React.createElement("span", {
    className: "sr-only"
  }, "Dismiss"), React.createElement(IcXMark, {
    size: "md",
    "aria-hidden": "true"
  }))))));
};

var _excluded$2 = ["children", "className", "variant", "size", "color"];
var ButtonColorValue = ['primary', 'secondary'];
// eslint-disable-next-line no-unused-vars
var ButtonVariantCss = {
  solid: function solid(color) {
    return clsx("rounded-md px-3 py-2 font-medium text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", color === 'primary' && 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:outline-primary-600', color === 'secondary' && 'bg-secondary-200 text-gray-400 hover:bg-gray-200 focus-visible:outline-secondary-600', !ButtonColorValue.includes(color) && "bg-" + color + "-500  hover:bg-" + color + "-600  focus-visible:outline-" + color + "-600");
  },
  outline: function outline(color) {
    return clsx("bg-transparent shadow-sm transition-colors border active:border-" + color + "-200", color === 'primary' && 'text-primary-500 border-primary-400 hover:border-primary-500 hover:border-primary-500', color === 'secondary' && 'text-secondary-500 border-secondary-400 hover:border-secondary-500 hover:text-secondary-600', !ButtonColorValue.includes(color) && "border-" + color + "-400 hover:border-" + color + "-500");
  },
  basic: function basic(color) {
    return clsx('bg-transparent font-medium', color === 'primary' && 'text-primary-500  hover:bg-slate-100', color === 'secondary' && 'text-gray-500  hover:bg-slate-100', !ButtonColorValue.includes(color) && "bg-transparent font-medium text-" + color + "-500 hover:text-" + color + "-600 transition-colors border-2 border-transparent active:border-" + color + "-400 hover:bg-" + color + "-50");
  }
};
var ButtonSizeCss = {
  xs: 'h-[34px] px-3 text-xs',
  sm: 'h-[38px] px-3 text-sm',
  base: 'h-10 px-5 text-sm',
  lg: 'h-11 px-5 text-base'
};
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    variant = _ref.variant,
    size = _ref.size,
    color = _ref.color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return React.createElement("button", Object.assign({
    className: twMerge(clsx('flex items-center justify-center rounded-md', !props.disabled && ButtonVariantCss[variant || 'solid'](color || 'primary'), ButtonSizeCss[size || 'xs'], props.disabled && clsx("rounded-md px-3 py-2 font-medium text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", "cursor-not-allowed  bg-gray-200 text-gray-400 border-2 border-gray-200 hover:bg-opacity-100"), className)),
    ref: ref
  }, props), children);
});

var _excluded$3 = ["children", "className", "variant", "size", "color"];
var ButtonLink = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    variant = _ref.variant,
    size = _ref.size,
    color = _ref.color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return React.createElement("a", Object.assign({
    ref: ref,
    className: twMerge(clsx('flex items-center justify-center rounded-md cursor-pointer', !props.disabled && ButtonVariantCss[variant || 'solid'](color || 'primary'), ButtonSizeCss[size || 'xs'], props.disabled && 'cursor-not-allowed  bg-gray-400 text-gray-600 border-2 border-gray-400 hover:bg-opacity-100', className))
  }, props), children);
});

var _excluded$4 = ["className", "children"];
var Card = function Card(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return React.createElement("div", Object.assign({
    className: twMerge(clsx('bg-white shadow-card border-[1px] border-secondary-200 rounded-lg', className))
  }, props), children);
};

var _excluded$5 = ["className", "error"];
var Checkbox = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    error = _ref.error,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  return React.createElement("div", {
    className: "flex h-6 items-center"
  }, React.createElement("input", Object.assign({
    type: "checkbox",
    ref: ref,
    className: twMerge(clsx('h-4 w-4 rounded border-gray-300 ', props.disabled ? 'cursor-not-allowed text-primary-300 focus:ring-primary-300' : 'text-primary-500 hover:ring-1 hover:focus:ring-primary-600 focus:ring-primary-600 transition-colors', error && ' !text-red-500', className))
  }, props)));
});

var Container = function Container(_ref) {
  var children = _ref.children,
    className = _ref.className,
    classNameGrid = _ref.classNameGrid;
  return React.createElement("div", {
    className: twMerge(clsx('container mx-auto xl:max-w-7xl', className))
  }, React.createElement("div", {
    className: twMerge(clsx('grid grid-cols-12 px-6 lg:px-4 gap-x-5 gap-y-5', classNameGrid))
  }, children));
};

var _excluded$6 = ["className", "error", "onChange", "onKeyDownCapture"];
var parseCurrency = function parseCurrency(_ref) {
  var value = _ref.value;
  var clearValue = value.replaceAll('.', '').replaceAll(',', '');
  var zeros = '000';
  var nextValue = zeros + clearValue;
  return Number([nextValue.slice(0, nextValue.length - 2), '.', nextValue.slice(nextValue.length - 2, nextValue.length)].join('')).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  }).replace('$', '');
};
var CurrencyInput = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    error = _ref2.error,
    onChange = _ref2.onChange,
    onKeyDownCapture = _ref2.onKeyDownCapture,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded$6);
  var handleOnChange = function handleOnChange(e) {
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      e.currentTarget.value = parseCurrency({
        value: e.currentTarget.value.substring(0, e.currentTarget.value.length)
      });
    } else {
      e.currentTarget.value = parseCurrency({
        value: e.currentTarget.value
      });
    }
    if (onChange) onChange(e);
  };
  var handleOnKeyDownCapture = function handleOnKeyDownCapture(e) {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
      return;
    }
    if (onKeyDownCapture) onKeyDownCapture(e);
  };
  return React.createElement("input", Object.assign({
    type: "text",
    ref: ref,
    inputMode: "numeric",
    className: twMerge(clsx('block w-full rounded-md outline-none border-0 transition-colors py-2.5 px-3.5  text-gray-600 shadow-sm ring-1  ring-inset  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-secondary-400 sm:text-sm sm:leading-6', error ? ' ring-red-500' : 'ring-gray-300', props.disabled && 'cursor-not-allowed bg-gray-100 ring-secondary-300', className)),
    onKeyDownCapture: handleOnKeyDownCapture,
    onChange: handleOnChange
  }, props));
});

var _excluded$7 = ["className", "error"];
var TextInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    error = _ref.error,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  return React.createElement("input", Object.assign({
    type: props.type || 'text',
    ref: ref,
    className: twMerge(clsx('block w-full rounded-md outline-none border-0 transition-colors py-2.5 px-3.5  text-gray-600 shadow-sm ring-1  ring-inset  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-secondary-400 sm:text-sm sm:leading-6', error ? ' ring-red-500' : 'ring-secondary-300 hover:ring-secondary-400', props.disabled && 'cursor-not-allowed bg-gray-100 ring-gray-300', className))
  }, props));
});

var _excluded$8 = ["onClick", "className", "value"],
  _excluded2 = ["error"];
var CustomInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
    className = _ref.className,
    value = _ref.value,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  return React.createElement("div", {
    className: "w-full relative cursor-pointer",
    onClick: onClick
  }, React.createElement(IcCalendar, {
    className: "absolute bottom-3.5 left-3 text-secondary-500"
  }), React.createElement(TextInput, Object.assign({
    ref: ref,
    className: twMerge(clsx("pl-9", className)),
    value: value
  }, props)));
});
var DatePicker = function DatePicker(_ref2) {
  var error = _ref2.error,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return React.createElement(DatePickerBase, Object.assign({
    showMonthDropdown: true,
    showYearDropdown: true,
    dropdownMode: "select",
    customInput: React.createElement(CustomInput, {
      error: error
    })
  }, props));
};

var _excluded$9 = ["error", "className"];
var InputMask = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var error = _ref.error,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  return React.createElement(InputMaskBase, Object.assign({
    inputRef: ref,
    className: twMerge(clsx('block w-full rounded-md outline-none border-0 transition-colors py-2.5 px-3.5 text-gray-600 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-secondary-400 sm:text-sm sm:leading-6', error ? ' ring-red-500' : 'ring-secondary-300 hover:ring-secondary-400', props.disabled && 'cursor-not-allowed bg-gray-100 ring-gray-300', className))
  }, props));
});

var LabelError = function LabelError(_ref) {
  var className = _ref.className,
    value = _ref.value;
  return React.createElement("p", {
    className: twMerge(clsx('mt-1 text-sm text-red-500', className))
  }, value);
};

var _excluded$a = ["className", "error", "children"];
var LabelInput = function LabelInput(_ref) {
  var className = _ref.className,
    error = _ref.error,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return React.createElement("label", Object.assign({
    className: twMerge(clsx('block text-sm font-medium leading-6  mb-1.5', error ? 'text-red-500' : 'text-gray-700', className))
  }, props), children);
};

var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
    className = _ref.className,
    totalItems = _ref.totalItems,
    pageSize = _ref.pageSize,
    onChange = _ref.onChange;
  var _useState = useState([]),
    pages = _useState[0],
    setPages = _useState[1];
  var _useState2 = useState(),
    totalPages = _useState2[0],
    setTotalPages = _useState2[1];
  useEffect(function () {
    var calculatePages = function calculatePages() {
      var nextPages = [currentPage];
      var nextTotalPages = totalItems < pageSize ? 1 : Math.ceil(totalItems / pageSize);
      setTotalPages(nextTotalPages);
      var count = 1;
      var prevLimit = currentPage - 1;
      var nextLimit = currentPage + 1;
      while (count < nextTotalPages && count < 5) {
        if (prevLimit >= 1) {
          nextPages.unshift(prevLimit);
          prevLimit--;
          count++;
        }
        if (nextLimit <= nextTotalPages) {
          nextPages.push(nextLimit);
          nextLimit++;
          count++;
        }
      }
      setPages(nextPages);
    };
    calculatePages();
  }, [currentPage, pageSize]);
  return React.createElement("div", {
    className: "flex justify-between"
  }, React.createElement("div", {
    className: twMerge(clsx('flex gap-x-1', className))
  }, React.createElement(Button, {
    className: clsx('group px-3 py-1', currentPage === 1 && '!cursor-not-allowed'),
    color: "secondary",
    variant: "basic",
    onClick: function onClick() {
      if (currentPage !== 1) onChange(currentPage - 1);
    }
  }, React.createElement(IcChevronLeft, {
    size: "sm",
    className: clsx('text-gray-400 group-hover:text-primary-500', currentPage === 1 && '!text-gray-200 !cursor-pointer')
  })), pages.map(function (page) {
    return React.createElement(Button, {
      color: "secondary",
      variant: "basic",
      key: 'pagination-' + page,
      onClick: function onClick() {
        return onChange(page);
      },
      className: clsx(' text-gray-600 !h-8', page === currentPage ? '!bg-primary-500 !text-gray-50 ' : 'hover:bg-slate-100 hover:!text-primary-800')
    }, page);
  }), React.createElement(Button, {
    color: "secondary",
    variant: "basic",
    className: clsx('group px-3 py-1', currentPage === totalPages && 'cursor-not-allowed'),
    onClick: function onClick() {
      if (currentPage !== totalPages) onChange(currentPage + 1);
    }
  }, React.createElement(IcChevronRight, {
    size: "sm",
    className: clsx('text-gray-400 group-hover:text-primary-500', currentPage === totalPages && '!text-gray-200 !cursor-pointer')
  }))));
};

var _excluded$b = ["className", "error"];
var RadioInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    error = _ref.error,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  return React.createElement("div", {
    className: "flex h-6 items-center"
  }, React.createElement("input", Object.assign({
    type: "radio",
    ref: ref,
    className: twMerge(clsx('h-4 w-4 border-gray-300  ', props.disabled ? 'cursor-not-allowed text-primary-300 focus:ring-primary-300' : 'text-primary-600 hover:ring-1 hover:ring-primary-600 focus:ring-primary-600 transition-colors', error && ' !text-red-500', className))
  }, props)));
});

var SecurityPassword = function SecurityPassword(_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? 0 : _ref$level;
  return React.createElement("div", {
    className: "flex gap-2 mt-2"
  }, Array(5).fill('').map(function (_, index) {
    return React.createElement("div", {
      key: "security-pass-" + index,
      className: clsx('h-2 w-1/4 rounded-lg ', index > level - 1 && 'bg-gray-100', level === 1 && index <= level - 1 && 'bg-red-500', level === 2 && index <= level - 1 && 'bg-red-400', level === 3 && index <= level - 1 && 'bg-yellow-500', level === 4 && index <= level - 1 && 'bg-yellow-400', level === 5 && index <= level - 1 && 'bg-green-400')
    });
  }));
};

var _excluded$c = ["children"],
  _excluded2$1 = ["children"];
var CustomValueContainer = function CustomValueContainer(props) {
  return React.createElement(components.ValueContainer, Object.assign({
    className: twMerge(clsx('!px-3.5 !py-2.5 !flex-nowrap !whitespace-nowrap border-red-500', props.className))
  }, props));
};
var CustomControl = function CustomControl(props) {
  var error = props.selectProps.error;
  return React.createElement(components.Control, Object.assign({
    className: clsx('flex w-full relative !rounded-md outline-none !border-0   transition-colors !shadow-sm ring-1  ring-inset  placeholder:text-gray-400 hover:ring-1 focus:ring-inset hover:ring-secondary-400 sm:text-sm sm:leading-6', error ? 'ring-red-500' : 'ring-secondary-300', props.isDisabled && '!cursor-not-allowed !bg-gray-100 !ring-gray-300', props.className)
  }, props));
};
var CustomClearIndicator = function CustomClearIndicator(props) {
  return React.createElement(components.ClearIndicator, Object.assign({
    className: "!px-0"
  }, props));
};
var CustomInput$1 = function CustomInput(props) {
  return React.createElement(components.Input, Object.assign({
    className: 'react-select__input !m-0 !p-0'
  }, props));
};
var CustomMenu = function CustomMenu(props) {
  return React.createElement(components.Menu, Object.assign({
    className: "!rounded-lg shadow-sm  outline-none border-0 ring-1 ring-inset ring-gray-300 mt-2 overflow-hidden"
  }, props));
};
var CustomMenuList = function CustomMenuList(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  return React.createElement(React.Fragment, null, props.isMulti && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "top-0 w-full left-0 flex justify-between"
  }, React.createElement(Button, {
    className: "w-1/2 hover:bg-primary-50 rounded-none",
    size: "sm",
    variant: "basic",
    onClick: function onClick() {
      return props.setValue(props.options, 'select-option');
    }
  }, "Select all"), ' ', React.createElement(Button, {
    className: "w-1/2 hover:bg-primary-50 rounded-none",
    size: "sm",
    variant: "basic",
    onClick: function onClick() {
      return props.clearValue();
    }
  }, "Deselect all")), React.createElement("hr", null)), React.createElement(components.MenuList, Object.assign({
    className: "custom-scroll-bar my-2"
  }, props), children));
};
var CustomMultiValue = function CustomMultiValue(_ref2) {
  var children = _ref2.children,
    index = _ref2.index,
    getValue = _ref2.getValue;
  return React.createElement("p", {
    className: clsx('mr-1')
  }, "" + children + (index !== getValue().length - 1 ? ',' : '  '));
};
var CustomOption = function CustomOption(_ref3) {
  var children = _ref3.children,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded2$1);
  return React.createElement(components.Option, Object.assign({
    className: clsx('!flex gap-x-2 py-1 px-3 !cursor-pointer !text-sm  bg-white', props.isSelected && props.isMulti && '!text-primary-600 !bg-white', props.isSelected && !props.isMulti && '!bg-primary-400 !text-white', props.isMulti && 'hover:!text-primary-500', !props.isMulti && '!text-gray-600')
  }, props), props.isMulti && React.createElement(Checkbox, {
    checked: props.isSelected
  }), children);
};
var CustomPlaceholder = function CustomPlaceholder(props) {
  return React.createElement(components.Placeholder, Object.assign({
    className: "!text-secondary-400"
  }, props));
};
var SelectInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return React.createElement(Select, Object.assign({
    ref: ref,
    components: {
      ValueContainer: CustomValueContainer,
      Control: CustomControl,
      IndicatorSeparator: null,
      ClearIndicator: CustomClearIndicator,
      Input: CustomInput$1,
      Menu: CustomMenu,
      MenuList: CustomMenuList,
      MultiValue: CustomMultiValue,
      Option: CustomOption,
      Placeholder: CustomPlaceholder
    }
  }, props));
});

var SlideOvers = function SlideOvers(_ref) {
  var title = _ref.title,
    open = _ref.open,
    setOpen = _ref.setOpen,
    className = _ref.className,
    classNameDialog = _ref.classNameDialog,
    position = _ref.position,
    children = _ref.children;
  return React.createElement(Transition.Root, {
    show: open,
    as: Fragment
  }, React.createElement(Dialog, {
    as: "div",
    className: clsx(classNameDialog || 'relative z-30'),
    onClose: setOpen
  }, React.createElement(Transition.Child, {
    as: Fragment,
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React.createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
  })), React.createElement("div", {
    className: "fixed inset-0 overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 overflow-hidden "
  }, React.createElement("div", {
    className: clsx('pointer-events-none fixed inset-y-0 flex max-w-full ', position !== 'right' ? 'pr-10 left-0' : 'pl-0 right-0')
  }, React.createElement(Transition.Child, Object.assign({
    as: Fragment,
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    leave: "transform transition ease-in-out duration-500 sm:duration-700"
  }, position !== 'right' ? {
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full'
  } : {
    enterFrom: 'translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: 'translate-x-full'
  }), React.createElement(Dialog.Panel, {
    className: "pointer-events-auto w-screen max-w-md"
  }, React.createElement("div", {
    className: "flex h-full flex-col overflow-y-scroll custom-scroll-bar bg-white py-6 shadow-xl"
  }, React.createElement("div", {
    className: "px-4 sm:px-6"
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, React.createElement(Dialog.Title, {
    className: "text-base font-semibold leading-6 text-gray-700"
  }, title), React.createElement("div", {
    className: "ml-3 flex h-7 items-center"
  }, React.createElement("button", {
    type: "button",
    className: "relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:ring-offset-1",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, React.createElement("span", {
    className: "absolute -inset-2.5"
  }), React.createElement("span", {
    className: "sr-only"
  }, "Close panel"), React.createElement(IcXMark, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))))), React.createElement("div", {
    className: clsx('relative mt-6 flex-1 px-4 sm:px-6 flex flex-col', className)
  }, children)))))))));
};

var SwitchBgSizeCss = {
  sm: 'h-3.5 w-[27px]',
  md: 'h-[18px] w-[35px]',
  base: 'h-[20px] w-[39px]'
};
var SwitchCircleSizeCss = {
  sm: 'h-[12px] w-[12px]',
  md: 'h-[16px] w-[16px]',
  base: 'h-[18px] w-[18px] '
};
var Switch = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var checked = _ref.checked,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    className = _ref.className,
    size = _ref.size;
  var handleClick = function handleClick() {
    if (!disabled && onChange) onChange(!checked);
  };
  return React.createElement(Switch$1, {
    ref: ref,
    checked: checked,
    onClick: handleClick,
    className: twMerge(clsx(checked ? 'bg-primary-500' : 'bg-gray-200', 'relative inline-flex items-center flex-shrink-0  rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2', disabled ? 'cursor-not-allowed bg-gray-300' : 'cursor-pointer', SwitchBgSizeCss[size || 'base'], className))
  }, React.createElement("span", {
    "aria-hidden": "true",
    className: clsx(checked ? 'translate-x-full' : '-translate-x-[1px]', 'absolute pointer-events-none transform rounded-full  shadow ring-0 transition duration-200 ease-in-out', disabled ? 'bg-gray-100' : 'bg-white', SwitchCircleSizeCss[size || 'base'])
  }));
});

var IcArrowDownLong = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
  }));
});

var IcArrowUpLong = /*#__PURE__*/withIconSize(function (props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 384 512"
  }, props), React.createElement("path", {
    d: "M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
  }));
});

var _excluded$d = ["head", "className", "children"],
  _excluded2$2 = ["className", "children", "head"],
  _excluded3 = ["className", "children"],
  _excluded4 = ["className", "children"],
  _excluded5 = ["className", "children"];
var TableSort = function TableSort(_ref) {
  var active = _ref.active,
    className = _ref.className,
    classNameAsc = _ref.classNameAsc,
    classNameDesc = _ref.classNameDesc,
    onClick = _ref.onClick;
  return React.createElement("button", {
    className: "flex group p-1.5",
    onClick: onClick
  }, React.createElement(IcArrowUpLong, {
    className: clsx(className || 'text-gray-400 group-hover:text-primary-500', active === 'asc' && (classNameAsc || 'text-gray-600')),
    size: "xs"
  }), React.createElement(IcArrowDownLong, {
    className: clsx(className || 'text-gray-400 group-hover:text-primary-500', active === 'desc' && (classNameDesc || 'text-gray-600')),
    size: "xs"
  }));
};
var TableCell = function TableCell(_ref2) {
  var head = _ref2.head,
    className = _ref2.className,
    children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded$d);
  return head ? React.createElement("th", Object.assign({
    className: clsx('px-3 py-3.5 text-left text-sm font-medium  text-gray-700', className)
  }, props), children) : React.createElement("td", Object.assign({
    className: clsx('whitespace-nowrap px-3 py-4 text-xs text-gray-700', className)
  }, props), children);
};
var TableRow = function TableRow(_ref3) {
  var className = _ref3.className,
    children = _ref3.children,
    head = _ref3.head,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded2$2);
  return React.createElement("tr", Object.assign({
    className: clsx(!head && ' hover:bg-slate-50 ', className)
  }, props), children);
};
var TableBody = function TableBody(_ref4) {
  var className = _ref4.className,
    children = _ref4.children,
    props = _objectWithoutPropertiesLoose(_ref4, _excluded3);
  return React.createElement("tbody", Object.assign({
    className: clsx('divide-y divide-gray-200', className)
  }, props), children);
};
var TableHead = function TableHead(_ref5) {
  var className = _ref5.className,
    children = _ref5.children,
    props = _objectWithoutPropertiesLoose(_ref5, _excluded4);
  return React.createElement("thead", Object.assign({
    className: clsx('text-left', className)
  }, props), children);
};
var Table = function Table(_ref6) {
  var className = _ref6.className,
    children = _ref6.children,
    props = _objectWithoutPropertiesLoose(_ref6, _excluded5);
  return React.createElement("table", Object.assign({
    className: clsx('min-w-full divide-y divide-gray-300 text-sm', className)
  }, props), children);
};

var _excluded$e = ["className", "error"];
var TextArea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    error = _ref.error,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  return React.createElement("textarea", Object.assign({
    ref: ref,
    rows: 4,
    className: twMerge(clsx('block w-full rounded-md outline-none border-0 transition-colors py-2.5 px-3.5 text-gray-900 shadow-sm ring-1  ring-inset  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-secondary-400 sm:text-sm sm:leading-6', error ? ' ring-red-500' : 'ring-gray-300 hover:ring-1 hover:ring-secondary-400', props.disabled && 'cursor-not-allowed bg-gray-100 ring-gray-300', className))
  }, props));
});

var perPageOptions = [{
  label: '25',
  value: '25'
}, {
  label: '50',
  value: '50'
}, {
  label: '100',
  value: '100'
}, {
  label: '500',
  value: '500'
}];

/* eslint-disable */
var PaginationSort;
(function (PaginationSort) {
  PaginationSort["desc"] = "desc";
  PaginationSort["asc"] = "asc";
})(PaginationSort || (PaginationSort = {}));
var Gender;
(function (Gender) {
  Gender["MALE"] = "M";
  Gender["FEMALE"] = "F";
  Gender["OTHER"] = "O";
})(Gender || (Gender = {}));
var PreferredLanguage;
(function (PreferredLanguage) {
  PreferredLanguage["EN"] = "en";
  PreferredLanguage["ES"] = "es";
})(PreferredLanguage || (PreferredLanguage = {}));
/* eslint-enable */

var usePagination = function usePagination(_ref) {
  var initialOrderBy = _ref.initialOrderBy,
    _ref$pageSize = _ref.pageSize,
    initialPageSize = _ref$pageSize === void 0 ? 10 : _ref$pageSize,
    _ref$enableScroll = _ref.enableScroll,
    enableScroll = _ref$enableScroll === void 0 ? true : _ref$enableScroll;
  var _useState = useState(0),
    start = _useState[0],
    setStart = _useState[1];
  var _useState2 = useState(initialPageSize),
    pageSize = _useState2[0];
  var _useState3 = useState(1),
    page = _useState3[0],
    setPage = _useState3[1];
  var _useState4 = useState(PaginationSort.asc),
    order = _useState4[0],
    setOrder = _useState4[1];
  var _useState5 = useState(initialOrderBy),
    orderBy = _useState5[0],
    setOrderBy = _useState5[1];
  var scrollToTop = function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  var handlePagination = function handlePagination(nextPage) {
    setStart(pageSize * (nextPage - 1));
    setPage(nextPage);
    if (enableScroll) scrollToTop();
  };
  var handleSort = function handleSort(nextOrderBy) {
    if (nextOrderBy === orderBy) {
      setOrder(order === PaginationSort.asc ? PaginationSort.desc : PaginationSort.asc);
    } else {
      setOrder(PaginationSort.asc);
    }
    setOrderBy(nextOrderBy);
    setStart(0);
  };
  return {
    handlePagination: handlePagination,
    handleSort: handleSort,
    order: order,
    orderBy: orderBy,
    page: page,
    pageSize: pageSize,
    start: start
  };
};

var useToggle = function useToggle(props) {
  var _ref;
  var _useState = useState(typeof props === 'string' ? (_ref = {}, _ref[props] = false, _ref) : props),
    toggles = _useState[0],
    setToggles = _useState[1];
  var handleToggle = function handleToggle(value) {
    setToggles(function (prev) {
      var _extends2;
      return _extends({}, prev, (_extends2 = {}, _extends2[value] = !prev[value], _extends2));
    });
  };
  return {
    toggles: toggles,
    handleToggle: handleToggle
  };
};

var arrayOf = function arrayOf(quantity) {
  return Array.from(Array(quantity).keys());
};

var browserName = function browserName() {
  var browserName = 'Unknow browser';
  if (navigator.userAgent.match(/opr\//i)) {
    browserName = 'Opera';
  } else if (navigator.userAgent.match(/edg/i)) {
    browserName = 'Microsoft Edge';
  } else if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'Google Chrome';
  } else if (navigator.userAgent.match(/firefox|fxios/i)) {
    browserName = 'Mozilla Firefox';
  } else if (navigator.userAgent.match(/safari/i)) {
    browserName = 'Apple Safari';
  } else if (navigator.userAgent.match(/trident/i)) {
    browserName = 'Microsoft Internet Explorer';
  } else if (navigator.userAgent.match(/ucbrowser/i)) {
    browserName = 'UC Browser';
  } else if (navigator.userAgent.match(/samsungbrowser/i)) {
    browserName = 'Samsung Browser';
  }
  return browserName;
};
var OSName = function OSName() {
  var OSName = 'Unknown OS';
  if (navigator.userAgent.match(/Windows/i)) OSName = 'Windows';else if (navigator.userAgent.match(/Mac/i)) OSName = 'MacOS';else if (navigator.userAgent.match(/UNIX/i)) OSName = 'UNIX';else if (navigator.userAgent.match(/Linux/i)) OSName = 'Linux';
  return OSName;
};
var isMobile = function isMobile() {
  return Boolean(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i));
};
var getBrowserData = function getBrowserData() {
  return {
    browser: browserName(),
    os: OSName(),
    is_mobile: isMobile()
  };
};

var getDateFormated = function getDateFormated(date, time) {
  return date ? format(addDays(new Date(date), 1), 'MMM dd, yyyy' + (time ? " - h:mm a" : '')) : '';
};
var getAge = function getAge(date) {
  return date ? differenceInYears(new Date(), addDays(new Date(date), 1)) : '';
};

var formatToCurrency = function formatToCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

var getTimeOptions = function getTimeOptions(minutes) {
  if (minutes === void 0) {
    minutes = 30;
  }
  var TOTAL_MINUTES_BY_DAY = 1440;
  var MAX_ITERATION = TOTAL_MINUTES_BY_DAY / minutes;
  var currentTime = new Date(new Date().setHours(0, 0, 0, 0));
  var response = [];
  for (var i = 0; i < MAX_ITERATION; i++) {
    var time = currentTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    response.push({
      value: time,
      label: time
    });
    currentTime.setMinutes(currentTime.getMinutes() + minutes);
  }
  return response;
};

export { Alert, Button, ButtonLink, Card, Checkbox, Container, CurrencyInput, DatePicker, Gender, IcAddressBook, IcApple, IcArrowLeft, IcArrowRight, IcBadgeCheck, IcBars, IcBell, IcBriefcase, IcCalculator, IcCalendar, IcChartLine, IcChartPie, IcCheck, IcChevronDown, IcChevronLeft, IcChevronRight, IcChevronUp, IcCircleInfo, IcClock, IcClockRotateLeft, IcCopy, IcCreditCard, IcDollarSign, IcDownload, IcEllipsis, IcEmail, IcEye, IcEyeSlash, IcFaceId, IcFacebook, IcFile, IcFileExcel, IcFileImage, IcFileLines, IcFilePdf, IcFileVideo, IcFileWord, IcFilter, IcFingerPrint, IcFolder, IcGlobe, IcGoogle, IcIdCard, IcInstagram, IcLinkedIn, IcLocationArrow, IcLock, IcMagnifyingGlass, IcMobile, IcNoteSticky, IcPaperPlane, IcPenNib, IcPeopleRoof, IcPhone, IcQrCode, IcQuestion, IcRightFromBracket, IcShareFromSquare, IcShieldHalved, IcSpinner, IcTableColumns, IcThumbtack, IcTrashCan, IcTwitter, IcUser, IcUserGear, IcUserGroup, IcUserShield, IcWhatsapp, IcXMark, IcYoutube, InputMask, LabelError, LabelInput, OSName, Pagination, PaginationSort, PreferredLanguage, RadioInput, SecurityPassword, SelectInput, SlideOvers, Switch, Table, TableBody, TableCell, TableHead, TableRow, TableSort, TextArea, TextInput, arrayOf, browserName, formatToCurrency, getAge, getBrowserData, getDateFormated, getTimeOptions, isMobile, perPageOptions, usePagination, useToggle };
//# sourceMappingURL=react.esm.js.map
