export function regexIndexOf(string, regex, startpos) {
    var indexOf = string.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

export function regexLastIndexOf(string, regex) {
    var match = string.match(regex);
    return match ? string.lastIndexOf(match[match.length-1]) : -1;
}