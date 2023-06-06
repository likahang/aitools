$(document).ready(function() {
  var count = 0; // 追踪进入範圍的箭头数量

  function animateArrow() {
    // 箭头初始位置在.box範圍外
    $('.arrow1, .arrow2, .arrow3').css({ top: '100%' });

    // 向上滑動到.box範圍
    $('.arrow1').delay(2000).animate({ top: 0 }, 500, function() {
      setTimeout(function() {
        $('.arrow1').animate({ top: '-100%' }, 1000, function() {
          // 箭头1动画完成后的回调函数
          count++;
          checkAllArrowsInBox();
        });
      }, 400); // 延迟时间增加至400毫秒
    });

    $('.arrow2').delay(1000).animate({ top: 0 }, 500, function() {
      setTimeout(function() {
        $('.arrow2').animate({ top: '-100%' }, 1000, function() {
          // 箭头2动画完成后的回调函数
          count++;
          checkAllArrowsInBox();
        });
      }, 1200); // 延迟时间增加至1200毫秒
    });

    $('.arrow3').delay(0).animate({ top: 0 }, 500, function() {
      setTimeout(function() {
        $('.arrow3').animate({ top: '-100%' }, 1000, function() {
          // 箭头3动画完成后的回调函数
          count++;
          checkAllArrowsInBox();
        });
      }, 2000);
    });
  }

  function checkAllArrowsInBox() {
    if (count === 3) {
      // 当所有箭头都进入範圍后执行滑出动画
      $('.arrow1').animate({ top: '-100%' }, 1000);
      $('.arrow2').animate({ top: '-100%' }, 1000);
      $('.arrow3').animate({ top: '-100%' }, 1000, function() {
        // 动画完成后重置计数器和重新开始动画
        count = 0;
        setTimeout(animateArrow, 1000); // 重新开始动画，延迟时间增加至1000毫秒
      });
    }
  }

  animateArrow();
});


//https://medium.com/@networkaaron/swiper-how-to-destroy-swiper-on-min-width-breakpoints-a947491ddec8//

let swiper;

const breakpoint = window.matchMedia('(min-width: 767px)');

const breakpointChecker = function() {
if (breakpoint.matches === true) {
  if (swiper !== undefined) {
    swiper.destroy(true, true);
    swiper = undefined;
  }
} else if (breakpoint.matches === false) {
  if (swiper === undefined) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
