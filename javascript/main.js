var last = 0;
var act = 0;

function addEnable(id) {
    if (last !== 0) {
        desable(last);
    }

    last = id;
    act = id;

    document.getElementById(id).classList.add("enable");
    document.getElementById(id).classList.remove("disable");
}
function desable(id) {
    document.getElementById(id).classList.add("disable");
    document.getElementById(id).classList.remove("enable");
}

function rating(id) {
    if (document.getElementById(last) === document.getElementById(id)) {
        last = 0;
        desable(id);
        return;
    } else if (
        !!document.getElementById(last) &&
        document.getElementById(last).classList.contains("enable")
    ) {
        document.getElementById(last).classList.remove("enable");
        addEnable(id);
    } else {
        addEnable(id);
    }
}

function submit() {
    if (act === 0) {
        return alert("Por favor, dê-nos uma classificação.");
    };

    document.getElementById("spn-1").classList.add("hide");
    setTimeout(() => {
        document.getElementById("spn-2").classList.remove("hide");
    }, 1200);
}
