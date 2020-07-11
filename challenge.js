let form = qs("#comment-form");
let pause_btn = qs("#pause");
let plus_btn = qs("[id='+']");
let min_btn = qs("[id='-']");
let heart_btn = qs("[id='<3']");
let is_paused = false;
var counter = setInterval(() => {
    if (!is_paused){
        update_time(Number(get_current_time()) + 1)
    }
}, 1000);

form.addEventListener("submit", () => {
    event.preventDefault();

    let comments = qs("#list");

    let h2 = ce("h4");
    h2.innerText = event.target[0].value;

    comments.append(h2);
})

plus_btn.addEventListener("click", () => {
    update_time(Number(get_current_time()) + 1)
})

min_btn.addEventListener("click", () => {
    update_time(Number(get_current_time()) - 1)
})
pause_btn.addEventListener("click", () => {
    plus_btn.disabled = !plus_btn.disabled;
    min_btn.disabled = !min_btn.disabled;
    heart_btn.disabled = !heart_btn.disabled;
    is_paused = !is_paused;
})

heart_btn.addEventListener("click", () => {
    let ul = qs(".likes");
    let time = get_current_time()
    let likes;
    try{
        likes = qs(`[id='${time}']`)
        likes.querySelector("span").innerText = Number(get_num_likes(likes)) + 1;
    }catch {
        likes = ce("li");
        likes.id = time;
        likes.innerHTML = `${time} has been liked <span> ${1} </span> times!`;
    }

    ul.append(likes);
})
function get_current_time(){
    let time = qs("#counter")
    return time.innerText;
}

function update_time(new_time){
    let time = qs("#counter")
    time.innerText = new_time;
}

function get_num_likes(li_tag){
    return li_tag.querySelector("span").innerText;
}



function qs(item){
    return document.querySelector(item);
}

function ce(item){
    return document.createElement(item);
}