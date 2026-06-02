// java.js
document.addEventListener('DOMContentLoaded', () => { 
    // Tüm HTML yüklendikten sonra (görseller hariç) 1 saniye bekle
    setTimeout(() => {
        // body elementinden "not-loaded" sınıfını kaldır ve CSS animasyonlarını başlat
        document.body.classList.remove("not-loaded");
    }, 1000); 
});
// java.js
document.addEventListener('DOMContentLoaded', () => { 
    // Tüm HTML yüklendikten sonra 1 saniye bekle ve çiçek animasyonlarını başlat
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000); 

    // ÇİÇEKLER AÇTIKTAN SONRA: 10. saniyede Ceylin'e özel bildirim gelsin
    setTimeout(() => {
        const notif = document.getElementById('notificationBox');
        if (notif) {
            // Kutuyu ekranın sağ köşesinden içeri kaydırır
            notif.classList.add('show');
            
            // Kutu geldikten 600ms sonra kendi kendine zarf gibi açılsın
            setTimeout(() => {
                notif.classList.add('open');
            }, 600);
        }
    }, 10000); // 10 saniye (10000 milisaniye) bekletme süresi
});