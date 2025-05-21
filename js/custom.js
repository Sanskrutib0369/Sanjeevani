// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});


// Gallery Js

function startInfiniteScroll(rowId, contentId, direction = 'right', speed = 0.1) {
      const row = document.getElementById(rowId);
      const content = document.getElementById(contentId);

      // Duplicate content for seamless loop
      const clone = content.cloneNode(true);
      row.appendChild(clone);

      let scroll = 0;

      function loop() {
        if (direction === 'right') {
          scroll+= 0.2;
          if (scroll >= content.scrollWidth) scroll = 0;
        } else {
          scroll-=0.2;
          if (scroll <= 0) scroll = content.scrollWidth;
        }

        row.scrollLeft = scroll;
        requestAnimationFrame(loop);
      }

      loop();
    }

// Gallery Js

function startInfiniteScroll(rowId, contentId, direction = 'right', speed = 0.1) {
      const row = document.getElementById(rowId);
      const content = document.getElementById(contentId);

      // Duplicate content for seamless loop
      const clone = content.cloneNode(true);
      row.appendChild(clone);

      let scroll = 0;

      function loop() {
        if (direction === 'right') {
          scroll+= 0.2;
          if (scroll >= content.scrollWidth) scroll = 0;
        } else {
          scroll-=0.2;
          if (scroll <= 0) scroll = content.scrollWidth;
        }

        row.scrollLeft = scroll;
        requestAnimationFrame(loop);
      }

      loop();
    }

    // Start scrolling
    startInfiniteScroll('row1', 'content1', 'right', 0.2);
    startInfiniteScroll('row2', 'content2', 'left', 0.2);