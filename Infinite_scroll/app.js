let limit = 5;
let page = 1;

function showPosts() {
    $.ajax({
        url: `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
        method: 'GET',
        datatype: 'json',
        success: function (posts) {
            console.log(posts);
            $.each(posts, function (index, post) {
                const postEl = $("<div>").addClass("post");
                postEl.html(`
                    <p class="post-number">${post.id}</p>
                    <div class="post-content">
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-description">${post.body}</p>
                    </div>
                `);
                $(".post-container").append(postEl);
            });
        }
    });
}

showPosts();


function filterPosts() {
    const term = $("input").val().toLowerCase();
    $(".post").css("display", "none");
    $(`.post:contains('${term}')`).css("display", "flex");
}

$("input").on("input", function () {
    filterPosts();
});

function showLoading() {
    $(".loader").addClass("show");
    setTimeout(() => {
        $(".loader").removeClass("show");
        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
}

$(window).scroll(function () {
    if ($(document).scrollTop() + $(window).height() > $(document).height() - 5) {
        showLoading();
    }
});