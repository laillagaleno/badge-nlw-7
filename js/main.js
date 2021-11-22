
const linksSocialMedia={
    name:'Lailla Galeno',
    github:'laillagaleno',
    youtube: 'jakelinygracielly',
    facebook:'lailla.galeno.9',
    instagram:'lailla_ga',
    twitter:''
}
function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class');
        li.children[0].href= `https://${social}.com/${linksSocialMedia[social]}` 
    }
    //document.getElementById('userName').textContent = linksSocialMedia.name;
    //userName.textContent = linksSocialMedia.name;
}

changeSocialMediaLinks();

function getGitHybProfileInfos(){
    const url =`https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = data.name;
        userLogin.textContent = data.login;
        userLike.href = data.html_url;
        userBio.textContent = data.bio;
        userImage.src=data.avatar_url;
    })

    //promise- pega respostas de alguma coisa
}

getGitHybProfileInfos();

function toastNotificationShowMessage(msgText){
    $("#msgToast").text(msgText);
    $("#toast").addClass("show");
    setTimeout(function(){
        $("#toast").removeClass('show');
    }, 3000);
}

document.getElementById('userName').addEventListener('click', copyToClipboard);
async function copyToClipboard(){
    let content = document.getElementById('userName').innerHTML;
    await navigator.clipboard.writeText(content);
    toastNotificationShowMessage("Copiado!");
}
       
