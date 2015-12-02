define(['BaseView', "cUIInputClear","cUIImageSlider", "Model", "Store","text!TplMyHouse"], function (BaseView, cUIInputClear,cUIImageSlider, Model, Store,TplMyHouse) {
    var self;
    var View = BaseView.extend({
        ViewName: 'myhouses',
        events: {
            "click .house-info": "toHousesInfo",
            "click .icon-person": "toPersonal",
            "click .icon-home": "toLocation",
            "click .back": "toLocation",
            "click .nothing": "toHouseUpload",
            "click .icon-note":"toVisit",
        },

        toVisit:function(){
            Lizard.goTo("visitlist.html");
        },

        toHouseUpload:function(){
                Lizard.goTo("houses_upload.html");
        },

        getHouseList: function (cb) {
            if (!self.user) {
                cb && cb();
                self.showMyToast("未登录", 1500);
                return;
            }
            var url = Lizard.host + Lizard.apiUrl + "/realties/my_owner_realties?auth_token=" + self.user.authentication_token;
            $.ajax({
                url: url,
                type: "get",
                success: function (data) {
                    self.hideLoading();
                    cb(data);

                },
                error: function (e) {
                    self.hideLoading();
                    self.showMyToast("网络错误", 1000);


                }
            });
        },
        toHousesInfo: function (e) {
            var target = $(e.currentTarget),
            id = target.data("id");
            //console.log(id);
            self.showLoading();
            Lizard.goTo("houses_info.html?id=" + id);
        },
        onCreate: function () {
            self = this;
            self.user= this.getCurrentUser()
        },
        onShow: function () {
            self.getHouseList(function (data) {
                self.$el.html(_.template(TplMyHouse)({realties: data.realties}));
                self.hideLoading();
            })
        }

    });
    return View;
})