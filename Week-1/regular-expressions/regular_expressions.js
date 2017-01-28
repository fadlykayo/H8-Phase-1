"use strict"
// Determine whether a string contains a nomor KTP
function has_ktp(string) {
  if (/(\d+)-(\d+)-(\d+)/g.test(string)) {
    console.log(`returns ${true}`);
    return true;
  }
  else {
    console.log(`returns ${false}`);
    return false;
  }
}

console.log("has_ktp returns true if it has what looks like a nomor KTP")
console.log(has_ktp("please don't share this: 234-60-1422") == true)

console.log("has_ktp returns false if it doesn't have a nomor KTP")
console.log(has_ktp("please confirm your identity: XXX-XX-1422") == false)

// Return the Social Security number from a string.
function grab_ktp(string) {
  let arr = [];
  if (/(\d+)-(\d+)-(\d+)/g.test(string)) {
    arr.push(string.match(/(\d+)-(\d+)-(\d+)/g));
    console.log(arr);
    return arr;
  }
  else {
    arr.push(null);
    console.log(arr);
    return arr;
  }
}

console.log("grab_ktp returns an nomor KTP if the string has an nomor KTP")
console.log(grab_ktp("please don't share this: 234-60-1422") == "234-60-1422")

console.log("grab_ktp returns null if it doesn't have a nomor KTP")
console.log(grab_ktp("please confirm your identity: XXX-XX-1422") == null)

// Return all of the Social Security numbers from a string.
function grab_all_nomor_ktp(string) {
  let arr = [];
  arr.push(string.match(/(\d+)-(\d+)-(\d+)/g));
  return arr;
}

console.log("grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP")
console.log(grab_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp("please confirm your identity: XXX-XX-1422"))
// return []


// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
function hide_all_nomor_ktp(string) {
  if (/(\d+)-(\d+)-/g.test(string) === true) {
    return string.replace(/(\d+)-(\d+)-/g,"XXX-XX-");
  }
  else {
    return string;
  }
}

console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)


// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
function format_nomor(string) {
  let string2 = string.split(", ");
  let string3 = [];
  let string4 = [];
  let res = "";
  let check = /(\d{3})[.-]*(\d{2})[.-]*(\d{4})/g;
  if (check.test(string)) {
    for (let i = 0; i < string2.length; i++) {
      string3.push(string2[i].replace(/(\d{3})[.-]*(\d{2})[.-]*(\d{4})/g,/$1-$2-$3/));
    }

    for (let j = 0; j < string2.length; j++) {
      string4.push(string3[j].replace(/\//g, ""));
    }
    res = string4.join(", ");
    console.log(res);
    return res;
  }
  else {
    console.log(string);
    return string;
  }
}

console.log("format_nomor finds and reformat any nomor KTP in the string")
console.log(format_nomor("234601422, 350.80.0744, 013-60-8762") == "234-60-1422, 350-80-0744, 013-60-8762")

console.log("format_nomor does not alter a string without nomor KTP in it")
string = "please confirm your identity: 44211422"
console.log(format_nomor(string) == string)
