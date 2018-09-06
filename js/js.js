window.onload = function () {
    /***************videos****************/
    var vidconter = document.querySelectorAll('.videos-container');
    var vidplay = document.querySelectorAll('.video ul a');
    var vidoff = document.querySelectorAll('.videos .videos-header p');
    var videosplay = document.querySelectorAll('.videos-container .videosplay');
    var video1 = document.querySelectorAll('.videos-container .video1');
    var videosimg = document.querySelectorAll('.videos-container img');
    console.log(videosimg)
    for (var i = 0; i < 4; i++) {
        vidplay[i].index = i;
        vidplay[i].onclick = function () {
            vidconter[this.index].style.display = 'block';
        }
    }
    for (var j = 0; j < 4; j++) {
        vidoff[j].index = j;
        vidoff[j].onclick = function () {
            vidconter[this.index].style.display = '';
            video1[this.index].pause();
        }
    }
    for (var k = 0; k < 4; k++) {
        videosplay[k].index = k;
        videosplay[k].onclick = function () {
            videosimg[this.index].style.display = 'none';
            video1[this.index].style.display = 'block';
            video1[this.index].play();
            this.style.display = 'none';
        }

    }
    /***************购物车***************/
    var right1A = document.querySelector('.nav .right1 a');
    var right1ASpan = document.querySelector('.nav .right1 a span');
    var carHide = document.querySelector('.car-hide');
    right1A.onmouseover = function () {
        carHide.style.display = 'block';
        right1A.style.color = '#ff6700';
        right1ASpan.style.color = '#ff6700';
    }
    right1A.onmouseout = function () {
        carHide.style.display = '';
        right1A.style.color = '';
        right1ASpan.style.color = '';
    }
    /****************search****************/
    var search = document.querySelector('.ass-header .container .seach .search');
    var searchHide = document.querySelector('.search-hide');
    var faSearch = document.querySelector(".seach .fa-search");
    var searchP = document.querySelector('.seach-p');
    var searchHideLi = document.querySelectorAll('.seach .search-hide  li');
    var searchHideLiLen = searchHideLi.length;
    search.onfocus = function () {
        search.style.border = '1px solid #ff6700';
        searchHide.style.display = 'block';
        faSearch.style.borderLeft = '1px solid #ff6700';
        searchP.style.display = 'none';
    }
    search.onblur = function () {
        search.style.border = '';
        searchHide.style.display = '';
        faSearch.style.borderLeft = '';
        searchP.style.display = 'block';
    }
    faSearch.onmouseover = function () {
        faSearch.style.background = '#ff6700';
        faSearch.style.color = '#fff'
    }
    faSearch.onmouseout = function () {
        faSearch.style.background = '';
        faSearch.style.color = '';
    }
    for (var i = 0; i < searchHideLiLen; i++) {
        searchHideLi[i].onmouseover = function () {
            this.style.background = '#ccc';
            this.style.background = 'block'
        }
        searchHideLi[i].onmouseout = function () {
            this.style.background = '';
        }
    }

    /***********nav*************/
    var assNavLi = document.querySelectorAll('.ass-nav li');
    var assNavHide = document.querySelector('.ass-header .ass-nav-hide');
    var assNavHideDiv = assNavHide.children;
    var assNavLilen = assNavLi.length;
    for (var i = 0; i < assNavLilen - 2; i++) {
        assNavLi[i].index = i;
        assNavLi[i].onmouseover = function () {
            assNavHide.style.display = 'block'
            for (var j = 0; j < assNavLilen - 2; j++) {
                assNavHideDiv[j].style.display = 'none';
            }
            assNavHideDiv[this.index].style.display = 'block';
        }
        assNavHide.onmouseover = function () {
            this.style.display = 'block'
            for (var j = 0; j < 8; j++) {
                assNavHideDiv[this.index].style.display = 'block';
            }
        }
        assNavHide.onmouseout = function () {
            this.style.display = 'none'
            for (var j = 0; j < 8; j++) {
                assNavHideDiv[this.index].style.display = 'none';
            }
        }
    }

    /*************banner-left**********/
    var blLi = document.querySelectorAll('.banner-left ul li');
    var blHideDiv = document.querySelectorAll('.banner-left-hide div');
    var blLen = blLi.length;
    for (var i = 0; i < blLen; i++) {
        blLi[i].index = i;
        blLi[i].onmouseover = function () {
            for (var j = 0; j < blLen; j++) {
                blHideDiv[j].style.display = 'none';
                blLi[j].style = '';
            }
            blHideDiv[this.index].style.display = 'block';
            blLi[this.index].style.background = 'orangered'
        }
        blLi[i].onmouseout = function () {
            for (var j = 0; j < blLen; j++) {
                blHideDiv[j].style.display = 'none';
                blLi[j].style = '';
            }
        }
    }
    /**********banner-right************/
    var uiA = document.querySelectorAll('.ui-pager .ui-pager-item a');
    var buttonALeft = document.querySelector('.bbutton-left');
    var buttonARight = document.querySelector('.bbutton-right');
    var bRLLi = document.querySelectorAll('.banner-right ul li');
    var uiAlen = uiA.length;
    var index;
    var num = 0;

    function clear() {
        for (var j = 0; j < uiAlen; j++) {
            uiA[j].style.background = 'rgba(0,0,0,0.5)';
            bRLLi[j].style.display = 'none';
        }
    }

    //uiA 手动改变div
    for (var i = 0; i < uiAlen; i++) {
        uiA[i].index = i;
        uiA[i].onclick = function () {
            clear();
            bRLLi[this.index].style.display = 'block';
            this.style.background = '#fff';
            clearInterval(timer)
            num = this.index
        }
    }

    buttonALeft.onclick = function () {
        --num;
        if (num < 0) {
            num = uiAlen - 1;
        }
        clear(num);
        bRLLi[num].style.display = 'block';
        uiA[num].style.background = '#fff';
        clearInterval(timer)
    }
    buttonARight.onclick = function () {
        ++num;
        if (num > uiAlen - 1) {
            num = 0;
        }
        clear(num);
        bRLLi[num].style.display = 'block';
        uiA[num].style.background = '#fff';
        clearInterval(timer)
    }
    //自动
    var timer = setInterval(function () {
        ++num;
        if (num > uiAlen - 1) {
            num = 0;
        }
        clear(num);
        bRLLi[num].style.display = 'block';
        uiA[num].style.background = '#fff';
    }, 2000)

    /*****************************mibuy*************/
    var mibuyList = document.querySelector('.mibuy .mibuy-flow .list')
    var mibuyLeft = document.querySelector('.mibuy h3 .left ');
    var mibuyRight = document.querySelector('.mibuy h3 .right ');
    mibuyLeft.onclick = function () {
        var a = parseInt(mibuyList.style.left)
        a += 990;
        if (a >= 0 && a < 990) {
            mibuyList.style.left = a + 'px';
        }
        mibuyRight.style.color = 'rgba(0,0,0,.4)';
        this.style.color = '#e0e0e0';
    }
    mibuyRight.onclick = function () {
        var a = parseInt(mibuyList.style.left);
        a -= 990;
        if (a >= -990 && a <= 0) {
            mibuyList.style.left = a + 'px';
        }
        mibuyLeft.style.color = 'rgba(0,0,0,.4)';
        this.style.color = '#e0e0e0';
    }

    //time
    var box = document.querySelectorAll('.mibuy-time .box');

    function atime() {
        var time = new Date("2020 8 23 18:30:00").getTime() - new Date().getTime();
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var min = parseInt(time / 1000 / 60 % 60);
        var sec = parseInt(time / 1000 % 60);
        hour > 10 ? box[0].innerHTML = hour : box[0].innerHTML = '0' + hour;
        min > 10 ? box[1].innerHTML = min : box[1].innerHTML = '0' + min;
        sec > 10 ? box[2].innerHTML = sec : box[2].innerHTML = '0' + sec;
    }

    setInterval(atime, 1000);
    /*********************TV**********************/
    var ThLi = document.querySelectorAll('.TV-header ul li');
    var TbUl = document.querySelectorAll('.TV-right ul');
    var ThLilen = ThLi.length;
    for (var i = 0; i < ThLilen; i++) {
        ThLi[i].index = i;
        ThLi[i].onmouseover = function () {
            for (var j = 0; j < ThLilen; j++) {
                ThLi[j].className = '';
                TbUl[j].style.display = 'none';
            }
            TbUl[this.index].style.display = 'block';
            this.className = 'Thactive';
        }

    }

    var ThLi1 = document.querySelectorAll('.TV-header1 ul li');
    var TbUl1 = document.querySelectorAll('.TV-right1 ul');
    var ThLilen1 = ThLi1.length;
    for (var i = 0; i < ThLilen1; i++) {
        ThLi1[i].index = i;
        ThLi1[i].onmouseover = function () {
            for (var j = 0; j < ThLilen1; j++) {
                ThLi1[j].className = '';
                TbUl1[j].style.display = 'none';
            }
            TbUl1[this.index].style.display = 'block';
            this.className = 'Thactive';
        }

    }
    var ThLi2 = document.querySelectorAll('.TV-header2 ul li');
    var TbUl2 = document.querySelectorAll('.TV-right2 ul');
    var ThLilen2 = ThLi2.length;
    for (var b = 0; b < ThLilen2; b++) {
        ThLi2[b].index = b;
        ThLi2[b].onmouseover = function () {
            for (var j = 0; j < ThLilen2; j++) {
                ThLi2[j].className = '';
                TbUl2[j].style.display = 'none';
            }
            TbUl2[this.index].style.display = 'block';
            this.className = 'Thactive';
        }
    }
    var ThLi3 = document.querySelectorAll('.TV-header3 ul li');
    var TbUl3 = document.querySelectorAll('.TV-right3 ul');
    var ThLilen3 = ThLi3.length;
    for (var b = 0; b < ThLilen3; b++) {
        ThLi3[b].index = b;
        ThLi3[b].onmouseover = function () {
            for (var j = 0; j < ThLilen3; j++) {
                ThLi3[j].className = '';
                TbUl3[j].style.display = 'none';
            }
            TbUl3[this.index].style.display = 'block';
            this.className = 'Thactive';
        }
    }
    var ThLi4 = document.querySelectorAll('.TV-header4 ul li');
    var TbUl4 = document.querySelectorAll('.TV-right4 ul');
    for (var b = 0; b < 5; b++) {
        ThLi4[b].index = b;
        ThLi4[b].onmouseover = function () {
            for (var j = 0; j < 5; j++) {
                ThLi4[j].className = '';
                TbUl4[j].style.display = 'none';
            }
            TbUl4[this.index].style.display = 'block';
            this.className = 'Thactive';
        }
    }


    /*********************************为你推荐************************/
    var releft = document.querySelector('.recommend h3 .releft');
    var reright = document.querySelector('.recommend h3 .reright');
    var recommendUl = document.querySelector('.recommend .rec-flow ul')

    releft.onclick = function () {
        var a = parseInt(recommendUl.style.left);
        a += 1226;
        if (a <= 0) {
            recommendUl.style.left = a + 'px';
        }
        reright.style.color = 'rgba(0,0,0,.4)';
        this.style.color = '#e0e0e0';
    }
    reright.onclick = function () {
        var b = parseInt(recommendUl.style.left);
        b -= 1226;
        if (b >= -3678) {
            recommendUl.style.left = b + 'px';
        }
        releft.style.color = 'rgba(0,0,0,.4)';
        this.style.color = '#e0e0e0';
    }
    /*******************content*******************/
    var contentpage = document.querySelectorAll('.content .connum .contentpage span');
    var conlist = document.querySelector('.content .connum .conlist');
    var conleft = document.querySelector('.content .connum .conleft');
    var conright = document.querySelector('.content .connum .conright');

    function clearcssname() {
        for (var i = 0; i < 3; i++) {
            contentpage[i].className = '';
        }
    }

    function leftadd(cnum) {
        clearcssname();
        contentpage[cnum].className = 'pagecolor';
        conlist.style.left = -cnum * 296 + 'px';
    }

    var cnum = 0;
    conleft.onclick = function () {
        --cnum;
        if (cnum < 0) {
            cnum = 0;
        }
        leftadd(cnum);
    }
    conright.onclick = function () {

        ++cnum;
        if (cnum > 2) {
            cnum = 2;
        }
        leftadd(cnum);
    }
    for (var j = 0; j < 3; j++) {
        contentpage[j].index = j;
        contentpage[j].onclick = function () {
            leftadd(this.index);
            cnum = this.index;//点的下标提出来，存到num
        }
    }


    var contentpage1 = document.querySelectorAll('.content .connum1 .contentpage span');
    var conlist1 = document.querySelector('.content .connum1 .conlist');
    var conleft1 = document.querySelector('.content .connum1 .conleft1');
    var conright1 = document.querySelector('.content .connum1 .conright1');

    function clearcssname1() {
        for (var i = 0; i < 4; i++) {
            contentpage1[i].className = '';
        }
    }

    function leftadd1(num1) {
        clearcssname1();
        contentpage1[num1].className = 'pagecolor';
        conlist1.style.left = -num1 * 296 + 'px';
    }

    var num1 = 0;
    conleft1.onclick = function () {
        --num1;
        if (num1 < 0) {
            num1 = 0;
        }
        leftadd1(num1);
    }
    conright1.onclick = function () {

        ++num1;
        if (num1 > 3) {
            num1 = 3;
        }
        leftadd1(num1);
    }
    for (var j = 0; j < 4; j++) {
        contentpage1[j].index = j;
        contentpage1[j].onclick = function () {
            leftadd1(this.index);
            num1 = this.index;//点的下标提出来，存到num
        }
    }


    var contentpage2 = document.querySelectorAll('.content .connum2 .contentpage span');
    var conlist2 = document.querySelector('.content .connum2 .conlist');
    var conleft2 = document.querySelector('.content .connum2 .conleft2');
    var conright2 = document.querySelector('.content .connum2 .conright2');

    function clearcssname2() {
        for (var i = 0; i < 4; i++) {
            contentpage2[i].className = '';
        }
    }

    function leftadd2(num2) {
        clearcssname2();
        contentpage2[num2].className = 'pagecolor';
        conlist2.style.left = -num2 * 296 + 'px';
    }

    var num2 = 0;
    conleft2.onclick = function () {
        --num2;
        if (num2 < 0) {
            num2 = 0;
        }
        leftadd2(num2);
    }
    conright2.onclick = function () {

        ++num2;
        if (num2 > 3) {
            num2 = 3;
        }
        leftadd2(num2);
    }
    for (var j = 0; j < 4; j++) {
        contentpage2[j].index = j;
        contentpage2[j].onclick = function () {
            leftadd2(this.index);
            num2 = this.index;//点的下标提出来，存到num
        }
    }

    var contentpage3 = document.querySelectorAll('.content .connum3 .contentpage span');
    var conlist3 = document.querySelector('.content .connum3 .conlist');
    var conleft3 = document.querySelector('.content .connum3 .conleft3');
    var conright3 = document.querySelector('.content .connum3 .conright3');

    function clearcssname3() {
        for (var i = 0; i < 4; i++) {
            contentpage3[i].className = '';
        }
    }

    function leftadd3(num3) {
        clearcssname3();
        contentpage3[num3].className = 'pagecolor';
        conlist3.style.left = -num3 * 296 + 'px';
    }

    var num3 = 0;
    conleft3.onclick = function () {
        --num3;
        if (num3 < 0) {
            num3 = 0;
        }
        leftadd3(num3);
    }
    conright3.onclick = function () {

        ++num3;
        if (num3 > 3) {
            num3 = 3;
        }
        leftadd3(num3);
    }
    for (var j = 0; j < 4; j++) {
        contentpage3[j].index = j;
        contentpage3[j].onclick = function () {
            leftadd3(this.index);
            num3 = this.index;//点的下标提出来，存到num
        }
    }
}
