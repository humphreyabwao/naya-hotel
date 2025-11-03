// Gallery Zoom Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');
    const zoomCaption = document.getElementById('zoomCaption');
    const closeZoom = document.querySelector('.close-zoom');

    // Open zoom on image click
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imageName = this.getAttribute('data-name');
            
            zoomImage.src = img.src;
            zoomCaption.textContent = imageName;
            zoomModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close zoom modal
    function closeZoomModal() {
        zoomModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeZoom.addEventListener('click', closeZoomModal);

    // Close on background click
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            closeZoomModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
            closeZoomModal();
        }
    });
});
