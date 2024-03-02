import React from "react";

const ContactPage = () => {
  return (
    <main class="mainwrapper contact --ptop">
      <div class="container">
        <div class="textbox">
          <h2 class="title --t2">Liên hệ & Hỗ trợ</h2>
          <p class="desc">
            Bạn có bất cứ thắc mắc nào thì đừng ngần ngại liên hệ để được hỗ
            trợ?
            <br />
            Chúng tôi luôn ở đây
          </p>
        </div>
      </div>
      <div class="contact__content">
        <div class="container">
          <div class="wrapper">
            <div class="sidebar">
              <div class="sidebar__address infor">
                <div class="infor__item">
                  <label class="label">CFD Circle</label>
                  <p class="title --t4">
                    666/46/29 Ba Tháng Hai, phường 14, quận 10, TPHCM
                  </p>
                </div>
                <div class="infor__item">
                  <label class="label">Email</label>
                  <p class="title --t4">info@cfdcircle.vn</p>
                </div>
                <div class="infor__item">
                  <label class="label">Số điện thoại</label>
                  <p class="title --t4">098 9596 913</p>
                </div>
              </div>
              <div class="sidebar__business">
                <p>
                  Đối với yêu cầu kinh doanh xin vui lòng gửi cho chúng tôi tại:
                </p>
                <a href="#">business@cfdcircle.vn</a>
              </div>
              <a href="#" class="sidebar__messenger btn btn--primary">
                Trò chuyện trực tuyến
              </a>
            </div>
            <div class="form">
              <h3 class="title --t3">Gửi yêu cầu hỗ trợ</h3>
              <div class="form-group">
                <label class="label">
                  Họ và tên <span>*</span>
                </label>
                <input value="" type="text" class="form__input formerror" />
                <p class="error">Họ và tên không được để trống</p>
              </div>
              <div class="form-group">
                <label class="label">
                  Email <span>*</span>
                </label>
                <input value="" type="text" class="form__input" />
              </div>
              <div class="form-group">
                <label class="label">
                  Số điện thoại <span>*</span>
                </label>
                <input value="" type="text" class="form__input" />
              </div>
              <div class="form-group">
                <label class="label">
                  Chủ đề cần hỗ trợ <span>*</span>
                </label>
                <div class="select">
                  <div class="head form__input">--</div>
                  <div class="sub">
                    <a href="#">Web Responsive</a>
                    <a href="#">React & Redux</a>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="label">
                  Nội dung <span>*</span>
                </label>
                <textarea class="form__input"></textarea>
              </div>
              <div class="btncontrol">
                <button class="btn btn--primary">Gửi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
