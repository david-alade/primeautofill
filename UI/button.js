// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let toggleStatus = document.getElementById('toggleStatus');
let options = document.getElementById('options');
let status = false; //false = off, starts by default
  chrome.storage.local.get('color', function(data) {

    // toggleStatus.innerHTML = "Autofill Off";
    // toggleStatus.setAttribute('value', data.color);
    // console.log(chrome.runtime.getURL("options.html"));
    // console.log("FUCKING WORK DUMB SLUT");
  });

  toggleStatus.onclick = function(element) {
    console.log("clicked");
    if (status) { //if true, on state
      status = false;
      toggleStatus.innerHTML = "Autofill <br> <span style ='color:red';> Off </span>";
    }
    else {
      status = true;
      toggleStatus.innerHTML = "Autofill <br> <span style ='color:green';> On </span>";
    }


  };