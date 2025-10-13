document.getElementById('suggestion-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const repoOwner = 'mada748'; 
    const repoName = 'MinimalBrowser';      
    const title = encodeURIComponent(document.getElementById('suggestion-title').value);
    const body = encodeURIComponent(document.getElementById('suggestion-body').value);


    const url = `https://github.com/${repoOwner}/${repoName}/issues/new?title=${title}&body=${body}&labels=Suggestion`;


    window.open(url, '_blank');
});
