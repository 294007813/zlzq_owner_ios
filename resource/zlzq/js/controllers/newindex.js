define(['BaseView', "cUIInputClear","cUIImageSlider","text!TplNewIndex", "Model", "Store"], function (BaseView, cUIInputClear,cUIImageSlider,TplNewIndex,Model,Store) {
    var self;
    var View = BaseView.extend({
        ViewName: 'newindex',
        events: {
            "click .iconBrush":"toDecorate",
            "click .iconHouse":"toHouseUpload",
            "click .icon-person":"toPersonal",
            "click .iconPad":"toMyhouse",
            "click .iconNews":"toNews",
            "click .icon-note":"toVisit",

        },

        toVisit:function(){
            if(!this.isLogin()){
                this.showMyToast("请先登录", 1500);
            }else
                Lizard.goTo("visitlist.html");
        },

        toMyhouse:function(){
            if(!this.isLogin()){
                this.showMyToast("请先登录", 1500);
            }else
                Lizard.goTo("myhouses.html");
        },

        toHouseUpload:function(){
            if(!this.isLogin()){
                this.showMyToast("请先登录", 1500);
            }else
                Lizard.goTo("houses_upload.html");
        },

        toDecorate:function(){
            //Lizard.goTo("decoratelist.html");
            window.location.href="decoratelist.html";
        },

        toNews:function(){
        //Lizard.goTo("decoratelist.html");
        window.location.href="newslist.html";
    },

        onCreate:function(){
            self = this;
        },

        onShow: function () {
            self.hideLoading();
            self.$el.html(TplNewIndex);

            pic = [
                //{id: 1, src: './pic/slide1.png', href: './res/img/1.jpg'},
                {id: 1, src: './pic/ownerindex1.jpg' },
                {id: 2, src: './pic/ownerindex2.jpg' },
                {id: 3, src: './pic/ownerindex3.jpg' }
            ];

            self.houseSlider = new cUIImageSlider({
                datamodel: {
                    data: pic,
                    itemFn: function (item) {
                        return '<img data-src="' + item.src + '" src="' + item.src + '" >';
                    }
                },
                autoPlay: true,
                displayNum: 1,
                wrapper: this.$('.slide-block')
            });
            self.houseSlider.show();

            var height=$(window).height();
            ////alert(height);
            if(height<615){
                self.$(".slide-block").css("height","260px");
                self.$(".slide-block img").css("height","260px");
                self.$(".cui-navContainer").css("top","240px");
                self.$(".cm-slide").css("height","260px");
                //}else{
                //    self.$(".slide-block ").css("height","415px");
                //    self.$(".slide-block img").css("height","415px");
            }


            self.hideLoading();
        }


    });
    return View;
})