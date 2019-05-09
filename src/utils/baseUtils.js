// cookie 缓存

const cookie = {
    get(name) {
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        let arr = document.cookie.match(reg)
        if (document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },
    set(name, value, expiredays) {
        let exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = name + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
    }
};


// sessionStorage缓存
const ss = {
    get(name) {
        return sessionStorage.getItem(name);
    },
    set(name, data) {
        sessionStorage.setItem(name, data);
    },
    remove(name) {
        sessionStorage.removeItem(name);
    }
};

// localStorage缓存
const ls = {
    get(name) {
        return localStorage.getItem(name);
    },
    set(name, data) {
        localStorage.setItem(name, data);
    },
    remove(name) {
        localStorage.removeItem(name);
    }
};


const date = {
    timestamp2date(timestamp){
        var date = new Date(parseInt(timestamp) * 1000);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate());
        return(Y + M + D);
    }
}


export default{
    cookie,
    ss,
    ls,
    date
}