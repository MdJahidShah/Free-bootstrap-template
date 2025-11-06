function handleDownload(e){
    e.preventDefault();
    // Replace this with your GitHub ZIP or release URL after uploading the repo.
    const repoZip = 'https://github.com/mdjahidshah/free-bootstrap-template/archive/refs/heads/main.zip';
    window.open(repoZip, '_blank');
    const dl = document.getElementById('directLink');
    dl.href = repoZip; dl.style.display = 'inline-block';
}