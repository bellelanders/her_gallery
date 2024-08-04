window.onload=function(){
    const location=window.location.href;
    const url=new URL(location);
    const search_params=new URLSearchParams(url.search);

    if(!search_params.has('id')||search_params.get('id')==""){

    }
    fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_key}`).then(convert_to_json)
    .then(function(data){
        loaddetail(data)

        document.getElementById('image_id').innerText=search_params.get(`id`);
    })
};

function loaddetail(data){
    console.log(data);
    document.getElementById('detail_img').src=data.urls.regular;
    document.getElementById('detail_img').style.borderColor=data.color;
    document.getElementById('description_text').innerText=data.description;
    document.getElementById('username').innerText=data.user.username;
    document.getElementById('like_count').innerText=data.likes;
    document.getElementById('view_count').innerText=data.views;
    document.getElementById('alt_description').innerText=data.alt_description;
    document.getElementById('img_color').style.backgroundColor=data.color;
    document.getElementById('color_text').innerText=data.color;
    document.getElementById('download_link').href=data.links.download;



    const date=new Date(data.created_at);
    const upload_date=`${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}`;
    document.getElementById('upload_date').innerText=upload_date;
}