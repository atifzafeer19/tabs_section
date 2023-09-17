window.addEventListener('load', function () {
    let testimonial_blck = [...document.querySelectorAll('.tab > .tab-cont')];
    let testimonial_subtab = [...document.querySelectorAll('.subtabs > .tab-cont')];
    let testi_btn_clck = [...document.querySelectorAll('.btn-div > .btn')];
    let testi_sub_btn_clck = [...document.querySelectorAll('.sub-btns > .btn')];
    /* manipulating parent tabs*/
    testi_btn_clck.forEach(function (elembtn, i) {
        elembtn.addEventListener('click', function () {
            elembtn.classList.add('active');
            testimonial_blck[i].parentElement.style.display = "block";
            if (testimonial_blck[i].nextElementSibling) testimonial_blck[i].style.display = "block";

            testimonial_subtab.forEach(function (clck_prnt_sub_btn_rem) {
                clck_prnt_sub_btn_rem.classList.remove('active');
                clck_prnt_sub_btn_rem.style.display = "none";
            });
            testimonial_blck[i].parentElement.classList.add('active');
            testimonial_blck.forEach(function (elem, j) {
                if (i != j) {
                    elem.parentElement.style.display = "none";
                    elem.parentElement.classList.remove('active');
                    testi_btn_clck[j].classList.remove('active');
                }
            });
            /* Removinig Sub-button active class on click of parent class*/
            testi_sub_btn_clck.forEach(function (elem) {
                if (elem.classList.contains('active')) {
                    elem.classList.remove('active');
                }
            });
            /* ---------------------------------------------------  */
        });
    });
    /* manipulating sub tabs*/
    testi_sub_btn_clck.forEach(function (elem_sub_btn, i) {
        elem_sub_btn.addEventListener('click', function () {
            elem_sub_btn.classList.add('active');
            testimonial_subtab[i].style.display = "block";
            testimonial_subtab[i].classList.add('active');
            testimonial_subtab[i].parentElement.parentElement.style.display = "block";
            if (!testimonial_subtab[i].parentElement.parentElement.classList.contains('active')) {
                testimonial_subtab[i].parentElement.parentElement.classList.add('active');
            }
            testimonial_subtab[i].parentElement.previousElementSibling.style.display = "none";
            testimonial_blck.forEach(function (elem) {
                if (!elem.nextElementSibling) {
                    elem.parentElement.style.display = "none";
                    elem.parentElement.classList.remove('active');
                }
            });
            /* displaying none and removing activeclass for siblings subtabs of active subtabs  */
            testimonial_subtab.forEach(function (elem, j) {
                if (i != j) {
                    elem.style.display = "none";
                    elem.classList.remove('active');
                    testi_sub_btn_clck[j].classList.remove('active');
                }
            });
            /* ----------------------------------------------------  */

            /*  loop for Main button */
            testi_btn_clck.forEach(function (elem_sub_btn_inner) {
                /* Removing active class from all parents except whose sub child  btn is clicked */
                if (!elem_sub_btn_inner.nextElementSibling && elem_sub_btn_inner.classList.contains('active')) elem_sub_btn_inner.classList.remove('active');
                /* ----------------------------------------------------  */

                /* Adding active class to parent whose sub child  btn is clicked  */
                if (elem_sub_btn_inner.nextElementSibling) elem_sub_btn_inner.nextElementSibling.previousElementSibling.classList.add('active');
                /* ----------------------------------------------------  */
            });
        });
    });
});
