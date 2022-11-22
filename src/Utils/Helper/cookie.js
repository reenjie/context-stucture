import React from "react";
import Cookies from "js-cookie";

export function setCookie(user) {
  var expiry = 1 / 12; //2hrs
  Cookies.set("user", JSON.stringify(user), {
    expires: expiry,
  });
}

export function clearCookie() {
  Cookies.remove("user");
}

export function getCookie() {
  return Cookies.get("user") ? JSON.parse(Cookies.get("user")) : "";
}
