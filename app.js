// Wallet Connection Simulator / Injective Integration Hook
function connectWallet() {
    const btn = document.getElementById('connectWalletBtn');
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i>Connecting...`;
    
    setTimeout(() => {
        const dummyAddress = "inj1" + Math.random().toString(36).substring(2, 10) + "...";
        btn.innerHTML = `<i class="fa-solid fa-circle-check text-green-400 mr-2"></i>${dummyAddress}`;
        btn.classList.remove('bg-gradient-to-r', 'from-cyan-400', 'to-blue-500', 'text-black');
        btn.classList.add('bg-injDark', 'border', 'border-cyan-500/50', 'text-injNeon');
        alert("Wallet connected successfully to Injective Network!");
    }, 1000);
}

// Handler Pembuatan Token Baru
function handleCreateToken(event) {
    event.preventDefault();
    
    const name = document.getElementById('tokenName').value;
    const ticker = document.getElementById('tokenTicker').value;

    if(!name || !ticker) {
        alert("Please fill out required fields!");
        return;
    }

    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-2"></i>Deploying on Injective...`;

    setTimeout(() => {
        alert(`Success! Token ${name} ($${ticker}) has been queued for launch on Injective L1 network.`);
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Launch Token ($WALK Engine)`;
        document.getElementById('createTokenForm').reset();
        document.getElementById('tokenTicker').value = 'WALK';
    }, 2000);
}

