window.onload=function(){
    const location=window.location.href;
    const url=new URL(location);
    const search_params=new URLSearchParams(url.search);

    if(search_params.has('q')||search_params.get('q')=="")[  
        // window.location.href="C:\Users\SYED SHEHANAZ\OneDrive\New folder\webdevelopment\Gfgscript\search.html";
        // window.location.href="./";
         //window.location.href="///C:/Users/SYED%20SHEHANAZ/OneDrive/New%20folder/webdevelopment/Gfgscript/search.html";

    ]

    fetch(`https://api.unsplash.com/search/photos?per_page=25&query=${search_params.get('q')}&client_id=${API_key}`).then(convert_to_json)
    .then(function(data){
        generatecard(data.results);


        document.getElementsByName('q')[0].value=search_params.get('q');
        document.getElementById('search_query').innerText=search_params.get('q');
    })
};

function generatecard(data){
    console.log(data);
    const container=document.getElementById('result_container')
    for(let i=0;i<data.length;i++){
        const single_item=data[i];
        const card=document.createElement("div");
        const anchor=document.createElement("a");
        const Img=document.createElement("Img");

        card.classList.add('item');
        anchor.href=`./detail.html?id=${single_item.id}`;
        card.style.backgroundColor = single_item.color;
        Img.src = single_item.urls.thumb;
        
        anchor.appendChild(Img);
        card.appendChild(anchor);
        container.appendChild(card);

    }
}