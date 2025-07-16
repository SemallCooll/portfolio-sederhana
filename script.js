// Animasi sederhana saat tombol diklik
document.getElementById('btn-kirim').addEventListener('click', function() {
    this.textContent = 'Mengirim...';
    
    setTimeout(() => {
        this.textContent = 'Terkirim! ✓';
        this.style.background = '#4CAF50';
    }, 1000);
});
