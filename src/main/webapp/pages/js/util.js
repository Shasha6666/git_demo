function jump_args(url, data) {
    var args = url + "?";
    for (var key in data) {
        args = args + key + "=" + data[key] + "&";
    }
    window.location.replace(args);
}

function getRequest() {
    var url = window.location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function setLocalJson(key, jsonData) {
    var data = JSON.stringify(jsonData);
    window.localStorage.setItem(key, data);
}

function getLocalJson(key) {
    var data = window.localStorage.getItem(key);
    return JSON.parse(data);
}

var api = {
    department : {
        structure: "/adminManage/department/structure",
        get: "/adminManage/department/get",
        list: "/adminManage/department/list"
    },
    user: {
        list: "/adminManage/user/list",
        detail:"/adminManage/user/detail",
        create:"/adminManage/user/create"
    }
}

function httpSyncPost(url, args, callback) {
    $.ajaxSetup({
        async : false
    });
    $.post(url, args, callback);
}
function string2ChangeLine(s) {
    //textare换行失败
    s =s.replace("↵", "/n");
    return s;
}
