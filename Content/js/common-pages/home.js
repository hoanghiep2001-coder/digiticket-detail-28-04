$(function () {
  let digiticket = {
    init: function () {
      this.render();
      this.handleEvent();
    },
    render: function () {
      this.renderTourHightlight()
      this.renderSchedule()
      this.renderCareProduct()
    },
    handleEvent: function () {
      this.showCheckForm()
      this.showListMenu()

      this.scrollToElement()

      // xổ ra button cộng trừ số lượng
      this.coutQuantityOfProduct();

      this.showAcordionSchedule()

      this.compareProductInfo()

      this.stikcyOnScroll()

      // scroll Top
      this.scrollTop();
    },

    // Array
    tourHightlightArr: [
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Vịnh Hạ Long",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante lacus, eu congue augue vestibulum vel. Curabitur blandit eros at luctus volutpat. Maecenas dignissim,"
      },
    ],
    scheduleArr: [
      {
        date: "Ngày 1",
        name: "HÀ NỘI – VỊNH HẠ LONG (Ăn bữa: Trưa + Tối )",
        time1: "08:30: Đón khách",
        content1: "Xe ôtô của Công ty đón quý khách tại trung tâm thành phố Hà Nội. Khởi hành đi Hạ Long, trên đường đi đoàn tự do nghỉ ngơi và ngắm cảnh đẹp hai bên đường. 10h00 đoàn đến trạm nghỉ dừng chân nghỉ ngơi đôi chút và đi WC. Sau đó tiếp tục hành trình khởi hành đi Halong.",
        time2: "12h00: Ăn trưa",
        content2: "Quý khách tới bến tàu du lịch Tuần Châu, nghỉ ngơi đôi chút. 12h30 Làm thủ tục đón Quý khách ra du thuyền Margaret bằng xuồng nhỏ. ",
        time3: "13h00: Tham quan Vịnh Hạ Long",
        content3: "Tàu nhổ neo đưa Quý khách khám phá kỳ quan thiên nhiên thế giới Vịnh Hạ Long. Quý khách vừa dùng bữa trưa với những món ăn đặc sắc được chế biến từ các sản vật của địa phương (thực đơn tự chọn), vừa thưởng ngoạn các địa danh nổi tiếng như làng chài Ba Hang, hòn Đỉnh Hương, hòn Chó Đá, hòn Trống Mái …",
        time4: "15:00: Than quan đảo Titop",
        content4: "Đoàn chuyển sang thuyền nhỏ và thăm quan đảo Titop – hòn đảo mang tên người anh hùng vũ trụ Liên Xô, Gherman Titov được Hồ Chủ Tịch đặt tên từ năm 1962. Tại đây, Quý khách có thể tư do tắm biển hoặc leo núi. Trên đỉnh núi cao hơn 100m so với mặt nước biển, Quý khách có thế ngắm nhìn toàn cảnh Vịnh Hạ Long lung linh huyền ảo từ trên cao…",
        time5: "16h00: Chèo thuyền kayak tại Hang Luồn",
        content5: "Đoàn thăm quan và trải nghiệm dịch vụ chèo thuyền kayak tại Hang Luồn – Một trong những hang xuyên thủy lớn và đẹp nhất Vịnh Hạ Long. Đến đây đoàn tự do khám phá sự hoang sơ và tuyệt mỹ của Halong theo cách riêng của mình ( nếu may mắn bạn có cơ hội nhìn thấy bầy khỉ hoang lông vàng và những chú chim biển hoang dã hiện sinh sống tại nơi đây )",
        time6: "17h00: Đoàn quay lại du thuyền và khởi hành về điểm nghỉ đêm",
        content6: "Đoàn quay lại du thuyền và khởi hành về điểm nghỉ đêm ( dự kiến cách khu vực hang khoảng 30 phút – trên đường đi quý khách tự do nghỉ ngơi và ngắm cảnh màn đêm đang dần buông xuống Vịnh Hạ Long – quý khách tự do chụp hình và tham gia bữa trà chiều ( với một số loại hoa quả và nước ngọt )…..",
      },
      {
        date: "Ngày 2",
        name: "VỊNH HẠ LONG (Ăn bữa: Trưa + Tối )",
        time1: "08:30: Đón khách",
        content1: "Xe ôtô của Công ty đón quý khách tại trung tâm thành phố Hà Nội. Khởi hành đi Hạ Long, trên đường đi đoàn tự do nghỉ ngơi và ngắm cảnh đẹp hai bên đường. 10h00 đoàn đến trạm nghỉ dừng chân nghỉ ngơi đôi chút và đi WC. Sau đó tiếp tục hành trình khởi hành đi Halong.",
        time2: "12h00: Ăn trưa",
        content2: "Quý khách tới bến tàu du lịch Tuần Châu, nghỉ ngơi đôi chút. 12h30 Làm thủ tục đón Quý khách ra du thuyền Margaret bằng xuồng nhỏ. ",
        time3: "13h00: Tham quan Vịnh Hạ Long",
        content3: "Tàu nhổ neo đưa Quý khách khám phá kỳ quan thiên nhiên thế giới Vịnh Hạ Long. Quý khách vừa dùng bữa trưa với những món ăn đặc sắc được chế biến từ các sản vật của địa phương (thực đơn tự chọn), vừa thưởng ngoạn các địa danh nổi tiếng như làng chài Ba Hang, hòn Đỉnh Hương, hòn Chó Đá, hòn Trống Mái …",
        time4: "15:00: Than quan đảo Titop",
        content4: "Đoàn chuyển sang thuyền nhỏ và thăm quan đảo Titop – hòn đảo mang tên người anh hùng vũ trụ Liên Xô, Gherman Titov được Hồ Chủ Tịch đặt tên từ năm 1962. Tại đây, Quý khách có thể tư do tắm biển hoặc leo núi. Trên đỉnh núi cao hơn 100m so với mặt nước biển, Quý khách có thế ngắm nhìn toàn cảnh Vịnh Hạ Long lung linh huyền ảo từ trên cao…",
        time5: "16h00: Chèo thuyền kayak tại Hang Luồn",
        content5: "Đoàn thăm quan và trải nghiệm dịch vụ chèo thuyền kayak tại Hang Luồn – Một trong những hang xuyên thủy lớn và đẹp nhất Vịnh Hạ Long. Đến đây đoàn tự do khám phá sự hoang sơ và tuyệt mỹ của Halong theo cách riêng của mình ( nếu may mắn bạn có cơ hội nhìn thấy bầy khỉ hoang lông vàng và những chú chim biển hoang dã hiện sinh sống tại nơi đây )",
        time6: "17h00: Đoàn quay lại du thuyền và khởi hành về điểm nghỉ đêm",
        content6: "Đoàn quay lại du thuyền và khởi hành về điểm nghỉ đêm ( dự kiến cách khu vực hang khoảng 30 phút – trên đường đi quý khách tự do nghỉ ngơi và ngắm cảnh màn đêm đang dần buông xuống Vịnh Hạ Long – quý khách tự do chụp hình và tham gia bữa trà chiều ( với một số loại hoa quả và nước ngọt )…..",
      },
      {
        date: "Ngày 3",
        name: "Tham quan Vịnh Hạ Long",
        time1: "08:30: Đón khách",
        content1: "Xe ôtô của Công ty đón quý khách tại trung tâm thành phố Hà Nội. Khởi hành đi Hạ Long, trên đường đi đoàn tự do nghỉ ngơi và ngắm cảnh đẹp hai bên đường. 10h00 đoàn đến trạm nghỉ dừng chân nghỉ ngơi đôi chút và đi WC. Sau đó tiếp tục hành trình khởi hành đi Halong.",
        time2: "12h00: Ăn trưa",
        content2: "Quý khách tới bến tàu du lịch Tuần Châu, nghỉ ngơi đôi chút. 12h30 Làm thủ tục đón Quý khách ra du thuyền Margaret bằng xuồng nhỏ. ",
        time3: "13h00: Tham quan Vịnh Hạ Long",
        content3: "Tàu nhổ neo đưa Quý khách khám phá kỳ quan thiên nhiên thế giới Vịnh Hạ Long. Quý khách vừa dùng bữa trưa với những món ăn đặc sắc được chế biến từ các sản vật của địa phương (thực đơn tự chọn), vừa thưởng ngoạn các địa danh nổi tiếng như làng chài Ba Hang, hòn Đỉnh Hương, hòn Chó Đá, hòn Trống Mái …",
        time4: "15:00: Than quan đảo Titop",
        content4: "Đoàn chuyển sang thuyền nhỏ và thăm quan đảo Titop – hòn đảo mang tên người anh hùng vũ trụ Liên Xô, Gherman Titov được Hồ Chủ Tịch đặt tên từ năm 1962. Tại đây, Quý khách có thể tư do tắm biển hoặc leo núi. Trên đỉnh núi cao hơn 100m so với mặt nước biển, Quý khách có thế ngắm nhìn toàn cảnh Vịnh Hạ Long lung linh huyền ảo từ trên cao…",
        time5: "16h00: Chèo thuyền kayak tại Hang Luồn",
        content5: "Đoàn thăm quan và trải nghiệm dịch vụ chèo thuyền kayak tại Hang Luồn – Một trong những hang xuyên thủy lớn và đẹp nhất Vịnh Hạ Long. Đến đây đoàn tự do khám phá sự hoang sơ và tuyệt mỹ của Halong theo cách riêng của mình ( nếu may mắn bạn có cơ hội nhìn thấy bầy khỉ hoang lông vàng và những chú chim biển hoang dã hiện sinh sống tại nơi đây )",
        time6: "17h00: Đoàn quay lại du thuyền và khởi hành về điểm nghỉ đêm",
        content6: "Đoàn quay lại du thuyền và khởi hành về điểm nghỉ đêm ( dự kiến cách khu vực hang khoảng 30 phút – trên đường đi quý khách tự do nghỉ ngơi và ngắm cảnh màn đêm đang dần buông xuống Vịnh Hạ Long – quý khách tự do chụp hình và tham gia bữa trà chiều ( với một số loại hoa quả và nước ngọt )…..",
      },
    ],
    careProduct: [
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Cuộc thi đấu thể chất Hybrid Games | DaLat SufferFest™ 2020",
        price: "600.000 ₫",
        oldPrice: "1.735.000 ₫",
        locate: "Sa Pa"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail9.jpg",
        name: "Cuộc thi đấu thể chất Hybrid Games | DaLat SufferFest™ 2020",
        price: "600.000 ₫",
        oldPrice: "1.735.000 ₫",
        locate: "Sa Pa"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail10.jpg",
        name: "Cuộc thi đấu thể chất Hybrid Games | DaLat SufferFest™ 2020",
        price: "600.000 ₫",
        oldPrice: "1.735.000 ₫",
        locate: "Sa Pa"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail11.jpg",
        name: "Cuộc thi đấu thể chất Hybrid Games | DaLat SufferFest™ 2020",
        price: "600.000 ₫",
        oldPrice: "1.735.000 ₫",
        locate: "Sa Pa"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail8.jpg",
        name: "Cuộc thi đấu thể chất Hybrid Games | DaLat SufferFest™ 2020",
        price: "600.000 ₫",
        oldPrice: "1.735.000 ₫",
        locate: "Sa Pa"
      },
      {
        image: "../Content/image/home/thumbnail/thumbnail9.jpg",
        name: "Cuộc thi đấu thể chất Hybrid Games | DaLat SufferFest™ 2020",
        price: "600.000 ₫",
        oldPrice: "1.735.000 ₫",
        locate: "Sa Pa"
      },
    ],

    
    // Function
    renderTourHightlight: function () {
      let tours = this.tourHightlightArr.map(function (item, index) {
        return `
            <div class="content position-relative">
                <div class="background-overlay">
                </div>
                <img src="${item.image}" alt="">
                <div class="position-absolute text">
                    <h3 class="fz-14 lh-18 fw-500 medium mb4">
                        ${item.name}
                    </h3>
                    <p class="fz-14 lh-18 fw-500">
                        ${item.desc}
                    </p>
                </div>
            </div>
                `;
      });
      $(".tour-container").html(tours.join(""));
    },
    renderSchedule: function() {
      let schedules = this.scheduleArr.map(function (item, index) {
        return `
        <div class="row mb32 schedule-item">
        <div class="col-lg-2">
            <div class="date">
                <h3 class="heading fz-16 lh-20 fw-600 color-grey-900 pad12 padt8 padb8 ">${item.date}</h3>
            </div>
        </div>

        <div class="col-lg-10 position-relative">
          
            <div class="text position-relative">
                <img class="position-absolute schedule-icon" alt="" src="../content/image/home/schedule-icon.svg">
                <h3 class="heading fz-16 lh-20 fw-600 color-grey-900 pad12 padt8 padb8 ">${item.name}</h3>
                <ul class="text-list pad12 padl12 padr0">
                    <li class="list-item">
                        <h3 class="fz-16 lh-20 fw-600 color-grey-900">${item.time1}</h3>
                        <p class="fz-14 lh-20 fw-500 text-justify">${item.content1}</p>
                    </li>
                    <li class="list-item">
                        <h3 class="fz-16 lh-20 fw-600 color-grey-900">${item.time2}</h3>
                        <p class="fz-14 lh-20 fw-500 text-justify">
                            ${item.content2}
                        </p>
                    </li>
                    <li class="list-item">
                        <h3 class="fz-16 lh-20 fw-600 color-grey-900">${item.time3}</h3>
                        <p class="fz-14 lh-20 fw-500 text-justify">${item.content3}</p>
                    </li>
                    <li class="list-item">
                        <h3 class="fz-16 lh-20 fw-600 color-grey-900">${item.time4}</h3>
                        <p class="fz-14 lh-20 fw-500 text-justify">${item.content4}</p>
                    </li>
                    <li class="list-item">
                        <h3 class="fz-16 lh-20 fw-600 color-grey-900">${item.time5}</h3>
                        <p class="fz-14 lh-20 fw-500 text-justify">${item.content5}</p>
                    </li>
                    <li class="list-item">
                        <h3 class="fz-16 lh-20 fw-600 color-grey-900">${item.time6}</h3>
                        <p class="fz-14 lh-20 fw-500 text-justify">
                        ${item.content6}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    <div class="position-absolute schedule-dashed">
        </div>
                `;
      });
      $(".schedule-container").html(schedules.join(""));
    },
    renderCareProduct: function() {
      let products = this.careProduct.map(function (item, index) {
        return `
        <div class="body__container-sale-product-col col-lg-2">
        <div class="body__container-sale-product-col-box-shadow For-you">
          <img src="${item.image}" alt="" />
          <div style="padding: 8px" class="body__container-sale-product-inner-col">
            <h3 class="fz-14 lh-18 fw-500 medium color-grey-900">${item.name}</h3>
            <div class="body__container-sale-product-col-price">
              <h3 class="color-error-500 fz-14 lh-16 fw-500 medium mt4 mb4">${item.price}</h3>
              <div class="clear-fix">
                <p class="fz-12 lh-12 color-grey-700" style="
                              text-decoration: line-through;
                              color: var(--p-color);
                            ">
                 ${item.oldPrice}
                </p>
               
              </div>
              <p class="fz-12 lh-16 color-grey-700" style="color: var(--p-color)">${item.locate}</p>
            </div>
          </div>
        </div>
      </div>
                `;
      });
      $(".js-Hot-product").html(products.join(""));
    },

    compareProductInfo: function () {
      $('.service-choose-item').click(function (e) { 
        e.preventDefault();
        let $this = $(this)
        let $thisValue = $(this).text()

        $($this).addClass('active');
        $('.service-choose-item').not($this).removeClass('active')

        $('.compare-with-service').html($thisValue)
      });
    },
    
    showCheckForm: function () {
      $(document).on(
        "click",
        ".header__subnav-container-check-button",
        function (e) {
          e.stopPropagation();
          $(".header__subnav-container-check-button-form").toggleClass("open");
        }
      );

      $('html').click(function (e) { 
         $(".header__subnav-container-check-button-form").removeClass("open");
      });
    },
    showListMenu: function () {
      $(document).on("click", ".header__subnav-container-bars", function (e) {
        e.preventDefault();
        $(".header__subnav-container-bars-list").toggleClass("open");
      });

      $('html').click(function (e) { 
        $(".header__subnav-container-bars-list").removeClass("open");
      });
    },
    showAcordionSchedule: function () {
      $('.schedule-item').click(function (e) { 
        e.preventDefault();
        let $this = $(this)
        let $acordion = $this.find('.text-list')

        $($acordion).slideToggle();
        $('.schedule .text-list').not($acordion).slideUp()
      });

      $('.schedule .text-list').click(function (e) { 
        e.stopPropagation();
      });

      $('.schedule-item:first-child').trigger('click');
    },
    coutQuantityOfProduct: function () {
      $('.number-service-container').click(function (e) { 
        e.stopPropagation();

        let $this = $(this)
        let $count = $this.find('.count')
        let $minusButton = $count.find('.minus')
        let $plusButton = $count.find('.plus')
        let $input = $count.find('.quantity')
        let $inputValue = $count.find('.quantity').val()
        let $price = $this.find('.main-price').text()
        let $name = $this.find('.main-name')

        let currentIndex = 0;
        currentIndex = $inputValue

        $($this).addClass('active');
        $('.number-service-container').not($this).removeClass('active')

                // trừ số lượng
                $($minusButton).click(function (e) {
                  e.preventDefault();
                  
                  if (currentIndex < 1) {
                    currentIndex = 0;
                  } else {
                    currentIndex--;
                  }
                  $($input).val(currentIndex)
                });
        
                // cộng số lượng
                $($plusButton).click(function (e) {
                  e.preventDefault();
                  currentIndex++;

                  if(currentIndex > 3) {
                    currentIndex = 3
                  }

                  $($input).val(currentIndex)

                });
      });

      $('html').click(function (e) { 
        $('.number-service-container').removeClass('active')
      });

    },

    scrollToElement: function() {
      $('.scroll-to-introduce').click(function (e) { 
        e.preventDefault();
       
          $('html, body').animate({
              scrollTop: $("#introduce").offset().top - 200
          }, 2000);
      
      });
      $('.scroll-to-service').click(function (e) { 
        e.preventDefault();
       
          $('html, body').animate({
              scrollTop: $("#service").offset().top - 200
          }, 2000);
      
      });
      $('.scroll-to-schedule').click(function (e) { 
        e.preventDefault();
       
          $('html, body').animate({
              scrollTop: $("#schedule").offset().top - 200
          }, 2000);
      
      });
      $('.scroll-to-condition').click(function (e) { 
        e.preventDefault();
       
          $('html, body').animate({
              scrollTop: $("#condition").offset().top - 200
          }, 2000);
      
      });
    },
    scrollTop: function () {
      jQuery(".scroll-top-behavior").click(function (event) {
        var id_button = ".scroll-top-behavior";

        // Kéo xuống khoảng cách 220px thì xuất hiện button
        var offset = 220;

        // THời gian di trượt là 0.5 giây
        var duration = 500;

        // Thêm vào sự kiện scroll của window, nghĩa là lúc trượt sẽ
        // kiểm tra sự ẩn hiện của button
        jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(id_button).fadeIn(duration);
          } else {
            jQuery(id_button).fadeOut(duration);
          }
        });

        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    },
    stikcyOnScroll: function() {
        window.onscroll = () => {
          let openHeaderScroll = $('.heading-nav');
          
          if (window.pageYOffset > 90) {
              $(openHeaderScroll).addClass('position-sticky')
          } else {
              $(openHeaderScroll).removeClass('position-sticky');
          }
      }
    },
    onChangeProgress: function (e) {
      let addString = new String(".000")
        $('.price-range-field').append('<p>.000đ</p>');
    //   $('[data-rangeslider]').rangeslider({
    //     polyfill: false,
    //     rangeClass: 'rangeslider',
    //     disabledClass: 'rangeslider--disabled',
    //     activeClass: 'rangeslider--active',
    //     horizontalClass: 'rangeslider--horizontal',
    //     verticalClass: 'rangeslider--vertical',
    //     fillClass: 'rangeslider__fill',
    //     handleClass: 'rangeslider__handle',

    //     onInit:function() {
    //       $(document).on('input', '[data-rangeslider]', function(e) {
    //         $('output').html(e.target.value + '.000đ')
    //       })
    //     },

    //   })
    },

  }

  digiticket.init();
});
