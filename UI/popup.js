// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let tabs = document.getElementsByTagName('li');
document.getElementById('optionsPage_html').style.display = 'none';
document.getElementById('mainPage_html').style.display = 'none';
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (id) {
    document.getElementById('mainPage_html').style.display = 'none';
    document.getElementById('optionsPage_html').style.display = 'none';
    document.getElementById(tabs[i].id + "_html").style.display = 'block';
    document.getElementById("mainPage").className = "notselected";
    document.getElementById("optionsPage").className = "notselected";
    document.getElementById(tabs[i].id).className = "selected";
  })
}


