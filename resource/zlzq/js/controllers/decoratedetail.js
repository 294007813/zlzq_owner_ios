define(['BaseView', "cUIInputClear","cUIImageSlider" ,"Model", "Store","text!TplDecorateDetail","cImageZoom"], function (BaseView, cUIInputClear,cUIImageSlider, Model, Store,TplDecorateDetail,cImageZoom) {
    var self,
        listModel=Model.ListModel.getInstance();
    var View = BaseView.extend({
        ViewName: 'decoratedetail',
        events: {
            "click .housing .btn":"toReserve",
            "click .location_icon" :"toLocation",
            "click .search-btn":"toSearch",
            "click .info_list li:first-child":"toComment",
            "click .back":"toBack",

        },

        toBack:function(){
            Lizard.goTo("decoratelist.html");
        },

        toReserve:function(e){
            self.$el.find(".info_ct").hide();
            self.$el.find(".housing").hide();
            self.$el.find(".reserve_ct").show();
        },
        ajaxException: function (msg) {
            self.loginBtn.html("登录");
            self.hideLoading();
            self.showMyToast('网络错误，请重试', 2000);
        },

        getDetail:function(callback) {


                var url =Lizard.host+Lizard.apiUrl+"companies/" + Lizard.P("d");

            $.ajax({
                url: url,
                dataType: "json",
                contentType: "application/json",
                type: "get",
                success: function (data) {
                    callback(data);
                    self.houseData = data;
                    self.hideLoading();
                },
                error: function (e) {

                    self.showMyToast("网络错误", 1000);
                }
            });
        },
        onCreate: function () {
            self = this;

        },
        onShow: function () {

            $("#headerview").hide();
            $("#main").css("padding","0");
            


            //self.hideLoading();
			
			// var data={"updated_at":"2015-08-28T11:30:40.000+08:00","avatar":{"url":"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fcompany%2Favatar%2F7%2F__1.jpg"},"id":7,"before_pic1":{"url":null},"before_pic2":{"url":null},"before_pic3":{"url":null},"before_pic4":{"url":null},"after_pic1":{"url":null},"after_pic2":{"url":null},"after_pic3":{"url":null},"after_pic4":{"url":null},"after_pic5":{"url":null},"after_pic6":{"url":null},"title":"六组装修模板","body":"\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e一、北欧小屋\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F6%2Fcontent___2.jpg\" style=\"width: 623px; height: 416px;\" /\u003e\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F9%2Fcontent___1.jpg\" style=\"width: 622px; height: 416px;\" /\u003e\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F10%2Fcontent___3.jpg\" style=\"width: 650px; height: 431px;\" /\u003e\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e2、仿佛看见海\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F13%2Fcontent___2.jpg\" /\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F14%2Fcontent___1.jpg\" style=\"width: 423px; height: 613px;\" /\u003e\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cspan style=\"font-size:12px;\"\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F12%2Fcontent___3.jpg\" /\u003e\u003c/span\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e三、故事脚本\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F15%2Fcontent___1.jpg\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F16%2Fcontent___2.jpg\" style=\"width: 429px; height: 295px;\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F17%2Fcontent___3.jpg\" style=\"width: 296px; height: 350px;\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e四、懒洋洋的朋友\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F18%2Fcontent___1.jpg\" style=\"width: 581px; height: 800px;\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F19%2Fcontent___2.jpg\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F20%2Fcontent___3.jpg\" style=\"width: 417px; height: 413px;\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e五、你的榻榻米\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F21%2Fcontent___1.jpg\" style=\"width: 604px; height: 401px;\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F22%2Fcontent___2.jpg\" style=\"width: 604px; height: 400px;\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e六、请进\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F23%2Fcontent___1.jpg\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u003cimg alt=\"\" src=\"http://7xiap4.com1.z0.glb.clouddn.com/uploads%2Fckeditor%2Fpictures%2F24%2Fcontent___2.jpg\" /\u003e\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n\r\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\r\n","created_at":"2015-08-28T08:59:44.000+08:00","after_info":null,"room":null,"hall":null,"wash":null,"area":null,"before_title1":null,"before_title2":null,"before_title3":null,"before_title4":null,"after_title1":null,"after_title2":null,"after_title3":null,"after_title4":null,"after_title5":null,"after_title6":null}
            // self.$el.html(_.template(TplDecorateDetail, {decorate: data}));
			   // self.changeP();
			   // self.hideLoading();

			// return;
            self.getDetail(function (data) {

                self.setHeader();

                self.$el.html(_.template(TplDecorateDetail, {decorate: data}));
                //self.hideLoading();

                self.changeP();

            });


        },

        changeP:function(){
            //根据屏幕大小切换图片
            var width=$(window).width();
            self.$(".house_slider>img").css("width",width+"px");
            var body=self.$(".bodys img");
                body.width(width-40+'px');
                body.height('auto');
			$('img').fancyzoom();
        },

        //设置标题
        setHeader: function (type) {
            self.header.set({
                title: '装修效果参考',
                back: true,
                backtext: '<i class="icon-back "></i> ',
                view: this,

                events: {
                    returnHandler: function () {

                        Lizard.goTo("decoratelist.html");

                    },
                    commitHandler: function () {
                        self.$('.searchBar').toggleClass('active');
                    }
                }
            });
        },
        onHide: function () {
            $("#headerview").show();
            $("#main").css("padding-top","44px");
        }
    });

    return View;
})
