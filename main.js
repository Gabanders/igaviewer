window.onload=main;

function main()
{
    var r=new XMLHttpRequest();
    r.open("GET","https://api.imgur.com/3/album/HhmyT/images");

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            var ipoint=document.querySelector(".imgs");
            var d=JSON.parse(r.response).data;

            for (var x=0;x<d.length;x++)
            {
                ipoint.insertAdjacentHTML("beforeend",`<img src="${d[x].link}">`);
            }
        }
    };

    r.setRequestHeader("Authorization","Client-ID 28bf65f46c4de3c");
    r.send();
}
