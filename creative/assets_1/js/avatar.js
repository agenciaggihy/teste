let scroll = 0;
let innerWidth = window.innerWidth;
let container = $(".container-inline .form_container");
let maxHeight = 0;
let containerInline = $(".container-inline");
container.map((indice, e) => {
    let hei = Number(
        $(e)
            .css("height")
            .replace("px", "")
    );
    if (hei > maxHeight) maxHeight = hei;
});
containerInline.css("height", `${maxHeight}px`);
container.map((indice, e) => {
    let left = innerWidth * indice;
    $(e)
        .css("display", "block")
        .css("left", `${left}px`);
});
$("#arrow-right").on("click", e => {
    if (scroll < container.length - 1) {
        let container = $(".container-inline .form_container");

        container.map((indice, e) => {
            let left = innerWidth * (indice - scroll - 1);
            if (indice <= scroll) {
                left = innerWidth * 2 * -1;
            }
            $(e)
                .css("display", "block")
                .css("left", `${left}px`);
        });
        scroll++;
    } else
        window.location.href = "concluido.html"
});
$("#arrow-left").on("click", e => {
    if (scroll > 0) {
        scroll--;
        let container = $(".container-inline .form_container");

        container.map((indice, e) => {
            let iLeft = Number($(e).css("left").replace("px", ''));
            let left = 0
            if (indice < scroll) {
                left = innerWidth * 2 * -1;
            }
            if (indice > scroll) {
                left = innerWidth * 2;
            }

            $(e)
                .css("display", "block")
                .css("left", `${left}px`);
        });
    }

});
$('#avatar').on('click', () => {
    window.location.href = "concluido.html"
})