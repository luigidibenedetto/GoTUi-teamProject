'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStrings = getStrings;
exports.replacePlaceholdersInString = replacePlaceholdersInString;
exports.md5 = md5;
function getStrings(target) {

    // if undefined, it means node is empty, so empty string
    if (!target) return '';

    // catch {0}, {1}, ]1,Inf]

    // {1} review|]1,Inf] reviews
    // {0}Il carrello è vuoto|{1}Hai 1 articolo nel carrello|]1,Inf]Hai <span class='item-count'>%count%</span> articoli nel tuo carrello

    var zero = target.match(/\{0\}[^\|]*\|?/gi),
        one = target.match(/\{1\}[^\|]*\|?/gi),
        mult = target.match(/\]1,Inf\][^\|]*\|?/gi);
    if (!(zero || one || mult)) {
        return target;
    }

    return [zero ? zero[0].replace('{0}', '').replace('|', '') : undefined, one ? one[0].replace('{1}', '').replace('|', '') : undefined, mult ? mult[0].replace(']1,Inf]', '').replace('|', '') : undefined];
}

function replacePlaceholdersInString(msg, placeholders) {
    if (!msg) {
        console.error("translate error on placeholder", placeholders);
        // if msg are not translated, set msg as empty string
        msg = '';
    }
    Object.keys(placeholders).forEach(function (key) {
        msg = msg.replace(new RegExp(['%', key, '%'].join(''), "g"), placeholders[key]);
    });
    return msg;
}

function md5(r) {
    function n(r, n) {
        return r << n | r >>> 32 - n;
    }function t(r, n) {
        var t = 1073741824 & r,
            o = 1073741824 & n,
            e = 2147483648 & r,
            u = 2147483648 & n,
            f = (1073741823 & r) + (1073741823 & n);return t & o ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u;
    }function o(r, n, t) {
        return r & n | ~r & t;
    }function e(r, n, t) {
        return r & t | n & ~t;
    }function u(r, n, t) {
        return r ^ n ^ t;
    }function f(r, n, t) {
        return n ^ (r | ~t);
    }function i(r, e, u, f, i, a, c) {
        return r = t(r, t(t(o(e, u, f), i), c)), t(n(r, a), e);
    }function a(r, o, u, f, i, a, c) {
        return r = t(r, t(t(e(o, u, f), i), c)), t(n(r, a), o);
    }function c(r, o, e, f, i, a, c) {
        return r = t(r, t(t(u(o, e, f), i), c)), t(n(r, a), o);
    }function C(r, o, e, u, i, a, c) {
        return r = t(r, t(t(f(o, e, u), i), c)), t(n(r, a), o);
    }function g(r) {
        for (var n = '', t = '', o = 0; o < 4; o++) {
            n += (t = '0' + (r >>> 8 * o & 255).toString(16)).substr(t.length - 2, 2);
        }return n;
    }for (var h, d, v, S, m = function (r) {
        var n,
            t,
            o = r.length,
            e = o + 8,
            u = 16 * ((e - e % 64) / 64 + 1),
            f = Array(u - 1),
            i = 0;for (t = 0; t < o; t++) {
            i = t % 4 * 8, f[n = (t - t % 4) / 4] = f[n] | r.charCodeAt(t) << i;
        }return n = (t - t % 4) / 4, i = t % 4 * 8, f[n] = f[n] | 128 << i, f[u - 2] = o << 3, f[u - 1] = o >>> 29, f;
    }(function (r) {
        var n,
            t = '';r = r.replace(/\r\n/g, '\n');for (var o = 0; o < r.length; o++) {
            (n = r.charCodeAt(o)) < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128));
        }return t;
    }(r)), l = 1732584193, s = 4023233417, A = 2562383102, b = 271733878, p = 0; p < m.length; p += 16) {
        h = l, d = s, v = A, S = b, s = C(s = C(s = C(s = C(s = c(s = c(s = c(s = c(s = a(s = a(s = a(s = a(s = i(s = i(s = i(s = i(s, A = i(A, b = i(b, l = i(l, s, A, b, m[p + 0], 7, 3614090360), s, A, m[p + 1], 12, 3905402710), l, s, m[p + 2], 17, 606105819), b, l, m[p + 3], 22, 3250441966), A = i(A, b = i(b, l = i(l, s, A, b, m[p + 4], 7, 4118548399), s, A, m[p + 5], 12, 1200080426), l, s, m[p + 6], 17, 2821735955), b, l, m[p + 7], 22, 4249261313), A = i(A, b = i(b, l = i(l, s, A, b, m[p + 8], 7, 1770035416), s, A, m[p + 9], 12, 2336552879), l, s, m[p + 10], 17, 4294925233), b, l, m[p + 11], 22, 2304563134), A = i(A, b = i(b, l = i(l, s, A, b, m[p + 12], 7, 1804603682), s, A, m[p + 13], 12, 4254626195), l, s, m[p + 14], 17, 2792965006), b, l, m[p + 15], 22, 1236535329), A = a(A, b = a(b, l = a(l, s, A, b, m[p + 1], 5, 4129170786), s, A, m[p + 6], 9, 3225465664), l, s, m[p + 11], 14, 643717713), b, l, m[p + 0], 20, 3921069994), A = a(A, b = a(b, l = a(l, s, A, b, m[p + 5], 5, 3593408605), s, A, m[p + 10], 9, 38016083), l, s, m[p + 15], 14, 3634488961), b, l, m[p + 4], 20, 3889429448), A = a(A, b = a(b, l = a(l, s, A, b, m[p + 9], 5, 568446438), s, A, m[p + 14], 9, 3275163606), l, s, m[p + 3], 14, 4107603335), b, l, m[p + 8], 20, 1163531501), A = a(A, b = a(b, l = a(l, s, A, b, m[p + 13], 5, 2850285829), s, A, m[p + 2], 9, 4243563512), l, s, m[p + 7], 14, 1735328473), b, l, m[p + 12], 20, 2368359562), A = c(A, b = c(b, l = c(l, s, A, b, m[p + 5], 4, 4294588738), s, A, m[p + 8], 11, 2272392833), l, s, m[p + 11], 16, 1839030562), b, l, m[p + 14], 23, 4259657740), A = c(A, b = c(b, l = c(l, s, A, b, m[p + 1], 4, 2763975236), s, A, m[p + 4], 11, 1272893353), l, s, m[p + 7], 16, 4139469664), b, l, m[p + 10], 23, 3200236656), A = c(A, b = c(b, l = c(l, s, A, b, m[p + 13], 4, 681279174), s, A, m[p + 0], 11, 3936430074), l, s, m[p + 3], 16, 3572445317), b, l, m[p + 6], 23, 76029189), A = c(A, b = c(b, l = c(l, s, A, b, m[p + 9], 4, 3654602809), s, A, m[p + 12], 11, 3873151461), l, s, m[p + 15], 16, 530742520), b, l, m[p + 2], 23, 3299628645), A = C(A, b = C(b, l = C(l, s, A, b, m[p + 0], 6, 4096336452), s, A, m[p + 7], 10, 1126891415), l, s, m[p + 14], 15, 2878612391), b, l, m[p + 5], 21, 4237533241), A = C(A, b = C(b, l = C(l, s, A, b, m[p + 12], 6, 1700485571), s, A, m[p + 3], 10, 2399980690), l, s, m[p + 10], 15, 4293915773), b, l, m[p + 1], 21, 2240044497), A = C(A, b = C(b, l = C(l, s, A, b, m[p + 8], 6, 1873313359), s, A, m[p + 15], 10, 4264355552), l, s, m[p + 6], 15, 2734768916), b, l, m[p + 13], 21, 1309151649), A = C(A, b = C(b, l = C(l, s, A, b, m[p + 4], 6, 4149444226), s, A, m[p + 11], 10, 3174756917), l, s, m[p + 2], 15, 718787259), b, l, m[p + 9], 21, 3951481745), l = t(l, h), s = t(s, d), A = t(A, v), b = t(b, S);
    }return (g(l) + g(s) + g(A) + g(b)).toLowerCase();
}