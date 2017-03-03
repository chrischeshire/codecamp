
function makeCounter(type) {
    var count = 0;

    function counter() {
        count += 1;
        return count + ' ' + type;
    }

    return counter;
}