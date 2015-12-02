define(['BaseView', "cUIInputClear","cUIImageSlider" ,"Model", "Store","UIGroupSelect","text!TplVisitlist"], function (BaseView, cUIInputClear,cUIImageSlider, Model, Store,UIGroupSelect,TplVisitlist) {
    var self;
    var View = BaseView.extend({
        ViewName: 'appointment',
        events: {
            "click .back" :"toIndex",
            "click .goto" :"toHouse",
            //"click .click" :"toSelect",
            //"click .next" :"toDel",
        },

        toIndex:function(){
            Lizard.goTo("newindex.html");
        },

        toHouse:function(e){
            var target = $(e.currentTarget);
            //alert(target.attr("r-id"));
            Lizard.goTo("houses_info.html?id=" + target.attr("r-id")+"&from=visit");
        },

        //toSelect:function(e){
        //
        //    var target = $(e.currentTarget);
        //    if(target.parent().children(".select").hasClass("on")){
        //        target.parent().children(".select").removeClass("on");
        //        target.parent().children(".select").attr("src","resource/zlzq/img/unselect.png")
        //    }else{
        //        target.parent().children(".select").addClass("on");
        //        target.parent().children(".select").attr("src","resource/zlzq/img/selected.png")
        //    }
        //},

        //toDel:function(){
        //    if(self.$el.find(".on").length==0) {
        //        self.showMyToast("请选择要删除的约看单", 1000);
        //    }else{
        //        self.$el.find(".on").each(function(){
        //            //alert($(this).attr("data-id"))
        //            var url=Lizard.host+Lizard.apiUrl+"review_forms/"+$(this).attr("data-id")+"?auth_token="+self.getCurrentUser().token;
        //            $.ajax({
        //                url: url,
        //                dataType: "json",
        //                type: "delete",
        //                success: function (data) {
        //                    if (data.error) {
        //                        self.showMyToast(data.error.message, 1000);
        //                        return
        //                    }
        //                    else {
        //                        self.showMyToast("删除成功", 1000);
        //
        //                    }
        //                },
        //                error: function (e) {
        //                    self.showMyToast(e.error, 1000);
        //
        //                }
        //            })
        //
        //        })
        //    }
        //    self.getList();
        //
        //},

        getList: function(){
            var url=Lizard.host+Lizard.apiUrl+"review_forms?auth_token="+self.getCurrentUser().token;
            $.ajax({
                url: url,
                dataType: "json",
                type: "get",
                success: function (data) {
                    if (data.error) {
                        self.showMyToast(data.error.message, 1000);
                        return
                    }
                    else {
                        self.$el.html(_.template(TplVisitlist)({list:data}));

                    }
                },
                error: function (e) {
                    self.showMyToast(e.error, 1000);

                }
            })
        },

        onCreate: function () {
            self = this;
        },

        onShow: function () {
            //var list=[
            //    {
            //        "id": 21,
            //        "renter_cell": "15026769688",
            //        "renter_avatar": {
            //            "avatar": {
            //                "url": null
            //            }
            //        },
            //        "renter_nick_name": "李先生",
            //        "realty_id": 208,
            //        "review_at": "11月 10日 周日 下午",
            //        "realty_cover_pic": {
            //            "avatar": {
            //                "url": null
            //            }
            //        },
            //        "realty_price": 455,
            //        "realty_title": "fbrbb",
            //        "realty_room": 1,
            //        "realty_hall": 3,
            //        "realty_wash": 1,
            //        "realty_area": 4884,
            //        "realty_type": ""
            //    },
            //    {
            //        "id": 22,
            //        "renter_cell": "15026769688",
            //        "renter_avatar": {
            //            "avatar": {
            //                "url": null
            //            }
            //        },
            //        "renter_nick_name": "李\b女士",
            //        "realty_id": 208,
            //        "review_at": "11月 15日 周日 \b晚上",
            //        "realty_cover_pic": {
            //            "avatar": {
            //                "url": null
            //            }
            //        },
            //        "realty_price": 455,
            //        "realty_title": "fbrbb",
            //        "realty_room": 1,
            //        "realty_hall": 3,
            //        "realty_wash": 1,
            //        "realty_area": 4884,
            //        "realty_type": ""
            //    },
            //]
            //
            //self.$el.html(_.template(TplVisitlist)({list:list}));
            self.getList();
            self.hideLoading();
        },
    });
    return View;
})