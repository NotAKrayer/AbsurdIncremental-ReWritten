function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function openSubTab(subTabName) {
    let subTabs = document.getElementsByClassName("sub-tab-content");
    for (let subTab of subTabs) {
        subTab.style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    openTab('matter');
    openSubTab('matterUpgrades');
});

let player = {
    matter: new Decimal(0),
    tickspeed: 1000
}
let matterUpgrade = [upgrade1 = {cost: 10, amount: 0, effect: 0, power: 1}];

function matterUpgradeBuy(id) {
    if (player.matter.gte(matterUpgrade[id - 1].cost)) {
        player.matter = player.matter.minus(matterUpgrade[id - 1].cost);
        if (id = 1) {
            matterUpgrade[id - 1].effect = new Decimal(matterUpgrade[id - 1].effect).plus(matterUpgrade[id - 1].power)
            matterUpgrade[id - 1].cost = new Decimal(matterUpgrade[id - 1].cost).mul(1.5);
        } else if (id = 2) {

        } else {
            
        }
        document.getElementById("matterCurrency").innerHTML = player.matter.toPrecision(3);
        document.getElementById("matterUpgrade1Cost").innerHTML = matterUpgrade[id - 1].cost.toPrecision(3);
        document.getElementById("matterUpgrade1Effect").innerHTML = matterUpgrade[id - 1].effect.toPrecision(3);
    }
}

function matterGainLoop() {
    let e = new Decimal(0);
    e = e.plus(1);
    e = e.plus(matterUpgrade[0].effect)
    player.matter = (player.matter).plus(e)
    document.getElementById("matterCurrency").innerHTML = player.matter.toPrecision(3);
}
 
setInterval(() => {
    matterGainLoop();
}, player.tickspeed);