/*
 * Copyright (C) 2018 Yogesh Powar yogesh.powar@gmail.com
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.This program is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */
var finishTime = "4:45:0"; //hr
var bufferTime = "0:03:0";
var stopAfter = 3; //km
var startPaces = [ "0:7:15", "0:7:00", "0:6:45" ]; //mins
var waterStop = 10; //secs
var cutoff = "4:45:0";
var FM = 42; //km

console.log("---- Inputs ----");
console.log("Distance:", FM, "km");
console.log("Cutoff:", cutoff, "hrs");
console.log("Buffer time:", bufferTime, "hrs");
console.log("Water Stop after every:", stopAfter, "km");
console.log("Water Stop duration:", waterStop, "secs");
console.log("Fixed paces for 1st 3 km", startPaces);

var toString = function(secs) {
    let hr = Math.floor(secs / 3600);
    let mn = Math.floor((secs % 3600) / 60);
    let sc = (secs % 3600) % 60;

    hr = String("0" + hr).slice(-2);
    mn = String("0" + mn).slice(-2);
    sc = String("0" + sc).slice(-2);

    return (hr +  ":" + mn + ":" + sc);
}

var toSecs = function(hr) {
    var reg = /:/g;
    let _hr;

    hr += "";

    switch(hr.match(reg) && hr.match(reg).length || 0) {
    case 1:
            _hr = hr.split(":");
            return (Number(_hr[0]) * 60 +
                    Number(_hr[1]));
    case 2:
            _hr = hr.split(":");
            return (Number(_hr[0]) * 3600 +
                Number(_hr[1]) * 60 +
                Number(_hr[2])) ;

    case 0:
    default:
            return Number(hr);
    }
};

/*
console.log(toSecs("1:1:30"));
console.log(toString(3690));
*/

var time = toSecs(cutoff);
time -= toSecs(bufferTime);
time -= (FM/stopAfter) * waterStop;

for (var i = 0; i < startPaces.length; i++) {
    time -= toSecs(startPaces[i]);
}

var mp = Math.floor(time/(FM - startPaces.length) / 60);
mp += ":" + Math.floor(time/(FM - startPaces.length) % 60);

mp = "0:" + mp;

var paces = [];

console.log("\n=> Pacer map with marathon pace of", mp, "mins/km\n");

console.log("time, desc");
var time = 0;
let flag = false;
for (var i = 0; i < FM; i++) {
    let pace;
    let type;

    if (!flag && i && (i % stopAfter == 0)) {
        pace = waterStop;
        type ="secs waterStop";
        flag = true;
    } else {
        flag = false;
        if (i < startPaces.length) {
            pace = startPaces[i];
        } else {
            pace = mp;
        }
        type = "mins/km pace for km " + (i+1);
    }

    console.log(toString(time), "=>", pace, type);

    if (flag) {
        --i;
    }

    time += toSecs(pace);
}

console.log(toString(time), "=> Finish Line", );
