window.onload = () => {
    const content = document.getElementById('content');
    const loader = document.getElementById('content-skeleton-loader');
    
    loader.style.display = 'block';
    content.style.display = 'none';

    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
};




