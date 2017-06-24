! function(e) {
  function o(e, o) {
    l++, d = l / c, TweenLite.to(g, .7, {
      progress: d,
      ease: Linear.easeNone
    })
  }

  function t() {
    d = Math.round(100 * g.progress()), e(".txt-perc").text(d + "%")
  }

  function a() {
    var o = new TimelineMax;
    return o.to(e(".progress"), .3, {
      y: 100,
      autoAlpha: 0,
      ease: Back.easeIn
    }).to(e(".txt-perc"), .3, {
      y: 100,
      autoAlpha: 0,
      ease: Back.easeIn
    }, .1).set(e("body"), {
      className: "-=is-loading"
    }).set(e("#intro"), {
      className: "+=is-loaded"
    }).to(e("#preloader"), .7, {
      yPercent: 100,
      ease: Power4.easeInOut
    }).set(e("#preloader"), {
      className: "+=is-hidden"
    }).from(e("#intro .title"), 1, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }, "-=0.2").from(e("#intro p"), .7, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }, "+=0.2").from(e(".scroll-hint"), .3, {
      y: -20,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, "+=0.1"), o
  }
  var r = new ScrollMagic.Controller,
    n = ["#slide01", "#slide02", "#slide03"],
    s = ["#slide01 header", "#slide02 header", "#slide03 header"],
    i = ["#cb01", "#cb02", "#cb03"],
    l = 0,
    c = e(".bcg").length,
    d = 0;
  e(".bcg").imagesLoaded({
    background: !0
  }).progress(function(e, t) {
    o()
  });
  var g = new TimelineMax({
    paused: !0,
    onUpdate: t,
    onComplete: a
  });
  if (g.to(e(".progress span"), 1, {
      width: 100,
      ease: Linear.easeNone
    }), !Modernizr.touch) {
    s.forEach(function(e, o) {
      {
        var t = o + 1;
        new ScrollMagic.Scene({
          triggerElement: e,
          offset: -95
        }).setClassToggle("#slide0" + t, "is-active").addTo(r)
      }
    }), i.forEach(function(o, t) {
      {
        var a = e(o).attr("id");
        new ScrollMagic.Scene({
          triggerElement: o,
          triggerHook: .75
        }).setClassToggle("#" + a, "is-active").on("enter", function(o) {
          e("nav").attr("class", "is-light")
        }).addTo(r)
      }
    }), n.forEach(function(o, t) {
      new ScrollMagic.Scene({
        triggerElement: o
      }).on("enter", function(o) {
        e("nav").removeAttr("class")
      }).addTo(r)
    }), n.forEach(function(o, t) {
      {
        var a = e(o).find(".bcg");
        new ScrollMagic.Scene({
          triggerElement: o,
          triggerHook: 1,
          duration: "100%"
        }).setTween(TweenMax.from(a, 1, {
          y: "-40%",
          autoAlpha: .3,
          ease: Power0.easeNone
        })).addTo(r)
      }
    });
    var u = new TimelineMax;
    u.to(e("#intro header, .scroll-hint"), .2, {
      autoAlpha: 0,
      ease: Power1.easeNone
    }).to(e("#intro"), .7, {
      autoAlpha: .5,
      ease: Power1.easeNone
    }, 0); {
      new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: "100%"
      }).setTween(u).addTo(r)
    }
    r.scrollTo(function(e) {
      TweenMax.to(window, 1, {
        scrollTo: {
          y: e
        },
        ease: Power1.easeInOut
      })
    }), e(document).on("click", "a[href^='#']", function(o) {
      var t = e(this).attr("href");
      e(t).length > 0 && (o.preventDefault(), r.scrollTo(t), window.history && window.history.pushState && history.pushState("", document.title, t))
    })
  }
}(jQuery);
