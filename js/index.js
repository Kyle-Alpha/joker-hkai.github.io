// app下载
$("#downloadApp").mouseenter(function () {
    $(this).addClass("active")
});
$("#downloadApp").mouseleave(function () {
    $(this).removeClass()
});

// 呼吸轮播图
$(function () {
    let currentIndex = 0;
    let timeId = setInterval(function () {
        $(".next").trigger("click")
    }, 8000)
    $(".home-hero-swiper").on("mouseenter", function () {
        $(".arrow").show();
        clearInterval(timeId);
    });
    $(".home-hero-swiper").on("mouseleave", function () {
        $(".arrow").hide();
        timeId = setInterval(function () {
            $(".next").trigger("click")
        }, 8000)
    })
    $(".next").on("click", function () {
        currentIndex++;
        if (currentIndex == $(".home-hero-swiper>ul>li").length) {
            currentIndex = 0;
        }
        $(".home-hero-swiper>ul>li").eq(currentIndex).fadeIn(600).siblings().fadeOut();
        $(".swiper-circle ul>li").eq(currentIndex).addClass("current").siblings().removeClass();
    });
    $(".prev").on("click", function () {
        currentIndex--;
        if (currentIndex == -1) {
            currentIndex = $(".home-hero-swiper>ul>li").length - 1;
        }
        $(".home-hero-swiper>ul>li").eq(currentIndex).fadeIn(600).siblings().fadeOut();
        $(".swiper-circle>ul>li").eq(currentIndex).addClass("current").siblings().removeClass();
    })
    $(".swiper-circle ul>li").on("click", function () {
        $(".home-hero-swiper>ul>li").eq($(this).index()).fadeIn(600).siblings().fadeOut();
        $(".swiper-circle>ul>li").eq($(this).index()).addClass("current").siblings().removeClass();
        currentIndex = $(this).index();
    })
})

// 搜索框
$(".search-text").on("focus", function () {
    $(".search-hot-words").fadeOut(300);
    $(".search-text, .search-btn").css("borderColor", "#ff6700")

})
$(".search-text").on("blur", function () {
    $(".search-hot-words").fadeIn(300);
    $(".search-text, .search-btn").css("borderColor", "#ccc")
})

// 倒计时
$(function () {
    // let date = new Date()
    // let hour = date.getHours();
    // let min = date.getMinutes();
    //秒设置
    setInterval(function () {
        let date = new Date()
        let sec = date.getSeconds();
        $('#second').text((59 - sec) < 10 ? "0" + (59 - sec) : (59 - sec))

    }, 1000)
    setInterval(function () {
        let date = new Date()
        let min = date.getMinutes();
        $('#min').text((59 - min) < 10 ? "0" + (59 - min) : (59 - min))

    }, 60000)
    setInterval(function () {
        let date = new Date()
        let hour = date.getHours();
        $('#hour').text((23 - hour) < 10 ? "0" + (23 - hour) : (23 - hour))

    }, 3600000)
})

// 整点抢购倒计时
$(function () {
    show_time();
});

function show_time() {
    var time_start = new Date().getTime(); //设定当前时间
    var times = $("#closed_group").val();
    var time_end = new Date(times).getTime(); //设定目标时间
    var time_distance = time_end - time_start; // 计算时间差
    if (time_distance == 0) {
        alterTimes();
        show_time();
        return false;
    }
    //天

    var int_day = Math.floor(time_distance / 86400000);
    time_distance -= int_day * 86400000;
    // 时

    var int_hour = Math.floor(time_distance / 3600000);
    time_distance -= int_hour * 3600000;
    // 分

    var int_minute = Math.floor(time_distance / 60000);
    time_distance -= int_minute * 60000;
    // 秒

    var int_second = Math.floor(time_distance / 1000);

    //时分秒为单数时、前面加零
    if (int_day == 0) {
        int_day = '';
    } else if (int_day < 10) {
        int_day = "0" + int_day + '天';
    } else {
        int_day = int_day + '天';
    }
    if (int_hour == 0) {
        int_hour = '';
    } else if (int_hour < 10) {
        int_hour = "0" + int_hour + '时';
    } else {
        int_hour = int_hour + '时';
    }
    if (int_minute == 0) {
        int_minute = '';
    } else if (int_minute < 10) {
        int_minute = "0" + int_minute + '分';
    } else {
        int_minute = int_minute + '分';
    }
    if (int_second == 0) {
        int_second = '';
    } else if (int_second < 10) {
        int_second = "0" + int_second + '秒';
    } else {
        int_second = int_second + '秒';
    }
    if (int_day == 0 && int_hour == 0 && int_hour == 0 && int_second == 0) {
        int_time = "活动结束";
    }

    // 显示时间

    var int_time = int_day + int_hour + int_minute + int_second;
    $('#closed_group_time').html(int_time);
    // 设置定时器
    setTimeout("show_time()", 1000);
}
