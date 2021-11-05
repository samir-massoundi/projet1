const openInAppBrowser = (link) => {
    cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
};

const toogleModalOffline = (show) => {
    const modal = document.getElementById("modal-unconnect");
    modal.className = show ? "show" : "";
};

function onBatteryStatus(status) {
    console.log("Battery Level : " + status.level + "%");
    alert("Battery Level :" + status.level + "%");
  }

const deviceReady = () => {
    window.screen.orientation.lock("portrait");
    window.addEventListener("batterystatus", onBatteryStatus, false);
    document.addEventListener("offline", () => toogleModalOffline(true), false);
    document.addEventListener("online", () => toogleModalOffline(false), false);
};