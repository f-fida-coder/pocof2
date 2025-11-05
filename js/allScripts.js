// jQuery.noConflict();
$('body').on('keydown', '.numbersOnly', function (e) {
    let code = e.keyCode;
    // console.log('code is '+code);
    let allow_codes = [8, 9];
    if (allow_codes.includes(code) || (code >= 96 && code <= 105)) {
        // do nothing
    } else {
        e.preventDefault();
    }
});


// $(document).ready(function(){
//     if(localStorage.getItem('remember_me')=='true'){
//         let password=localStorage.getItem('password');
//         let username=localStorage.getItem('username');
//         $('.username').val(username);
//         $('.password').val(password)

//     }
// })




function become_an_affilites_popup() { $("#app").addClass("blur"), $("#affilites_popup").addClass("dialog__content__active"), $("#affilites_popup .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>') }
function affilites_popup_reset() { $(".blur").removeClass("blur"), $(".dialog__content__active").removeClass("dialog__content__active"), $(".dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove() }
function join_popup() {
    $("#app").addClass("blur"), $("#join_popup").addClass("dialog__content__active").show(), $("#join_popup .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>')
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
    function join_popup_reset() {
        $(".blur").removeClass("blur"), $(".dialog__content__active").removeClass("dialog__content__active"), $(".dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove()

        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }
function logout_popup() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    $("#app").addClass("blur"), $("#logout_popup").addClass("dialog__content__active"), $("#logout_popup .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>')
}
function logout_popup_reset() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    $(".blur").removeClass("blur"), $(".dialog__content__active").removeClass("dialog__content__active"), $(".dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove()
} function notification_popup() { $("#app").addClass("blur"), $("#notification_popup").addClass("dialog__content__active"), $("#notification_popup .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>') } function notification_popup_reset() { $(".blur").removeClass("blur"), $(".dialog__content__active").removeClass("dialog__content__active"), $(".dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove() } function trancCancel_popup() { $("#app").addClass("blur"), $("#trancCancel_popup").addClass("dialog__content__active"), $("#trancCancel_popup .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>') } function trancCancel_popup_reset() { $(".blur").removeClass("blur"), $(".dialog__content__active").removeClass("dialog__content__active"), $(".dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove() }
function lowBalance_addMoney_popup() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    $("#app").addClass("blur"),
        $("#lowBalance_addMoney_popup_id").addClass("dialog__content__active"),
        $("#lowBalance_addMoney_popup_id .dialog").addClass("dialog--active").show(),
        $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>')
}
function play_BonusMoney() { $("#app").addClass("blur"), $("#play_BonusMoney_id").addClass("dialog__content__active"), $("#play_BonusMoney_id .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>') } function play_BonusMoney_reset() { $(".blur").removeClass("blur"), $(".dialog__content__active").removeClass("dialog__content__active"), $(".dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove() }
function login_page() {
    login_page_reset();
    // var username = localStorage.getItem('username');
    // var password = localStorage.getItem('password');
    $('#user_login').val(username)
    $('#pass_eye_user').val(password)
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    $("#app").addClass("blur"), $("#app_1").addClass("dialog__content__active"), $("#app_1 .loginModal").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 80;"></div>')
}

function login_page_reset() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    $('.login_form_div, .horizontal_or, .social_login_div').show();
    $('.mobile_otp_div, .mobile_number_div ').hide();
    $("#app").removeClass("blur"), $("#app_1").removeClass("dialog__content__active"), $("#app_1 .dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove()
}
function forgot_password() {
    document.body.style.overflow = 'hidden'; document.documentElement.style.overflow = 'hidden'; $("#app").addClass("blur"),
        $("#app_2").addClass("dialog__content__active"), $("#app_2 .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 80;"></div>')
} function forgot_password_inLoginModal() { $('#fpUsername').val(''), $("#app").removeClass("blur"), $("#app_1").removeClass("dialog__content__active"), $("#app_1 .dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove(), $("#app").addClass("blur"), $("#app_2").addClass("dialog__content__active"), $("#app_2 .dialog").addClass("dialog--active").show(), $("#app").prepend('<div class="overlay overlay--active" style="z-index: 201;"></div>') }
function fgt_page_reset() {
    document.body.style.overflow = ''; document.documentElement.style.overflow = ''; $("#app").removeClass("blur"),

        $("#app_2").removeClass("dialog__content__active"), $("#app_2 .dialog").removeClass("dialog--active").hide(), $(".overlay.overlay--active").remove()
}

function notify(o, t) { Snackbar.show({ text: o, showAction: !1, pos: "top-right", duration: 3e3 }), "warning" == t ? Snackbar.show({ text: o, backgroundColor: "#f0ad4e", showAction: !1, pos: "top-right", duration: 3e3 }) : "success" == t || "danger" != t && t ? Snackbar.show({ text: o, backgroundColor: "#5cb85c", showAction: !1, pos: "top-right", duration: 3e3 }) : Snackbar.show({ text: o, backgroundColor: "#da4a4c", showAction: !1, pos: "top-right", duration: 3e3 }), loader(0) }


$("body").on("submit", "#login_form", function (e) {
    e.preventDefault(),
        console.log("login from ccccccccccccc"),
        $(".login_error_msg").html(""),
        "" != $("#login_p_username").val() && "" != $("#pass_eye1_user").val()
            ? ($(".loginBtn_").attr("disabled", "disabled"),
              $(".loginBtn_").find(".login_loader").show(),
              $(".loginBtn_").find(".login_btn").hide(),
              notify(getLang("Please wait"), "warning"),
              $.ajax({
                  url: "/api2/v2/login",
                  type: "post",
                  data: { email: $("#login_p_username").val(), password: $("#pass_eye1_user").val(), digits: $("#validCode").val(), remember_me: $("#login_form").find("input[name=remember_me]").is(":checked") },
                  beforeSend: function (e) {
                      return e.setRequestHeader("X-CSRF-Token", $("meta[name='csrf-token']").attr("content"));
                  },
                  success: function (e) {
                      if (
                          (200 == e.status
                              ? (notify(e.message, "success"),
                                $(".loginWrapper,lBtns").hide(),
                                setTimeout(function () {

                                    let currentUrl = window.location.href;
                                    let separator = currentUrl.includes('?') ? '&' : '?';
                                    window.location.href = currentUrl + separator + 'redirecting=' + e.id;
                                    
                                    // location.reload();
                                }, 1e3))
                              : ($(".loginBtn_").html("Login").removeAttr("disabled"),
                                notify(e.message),
                                $(".loginBtn_").find(".login_btn").show(),
                                $(".loginBtn_").find(".login_loader").hide(),
                                $(".loginBtn_").removeAttr("disabled"),
                                loader(0)),
                          !0 == $("#login_form").find("input[name=remember_me]").is(":checked"))
                      ) {
                          
                      }
                  },
                  error: function (e) {
                      console.log(e);
                      notify('Something went wrong')
                      window.location.reload()
                  },
              }))
            : ((e = "") == $(".validCode").val() ? (e = "Please enter Valid Code") : "" == $("#login_p_username").val() ? (e = "Please enter username") : "" == $("#pass_eye1_user").val() && (e = "Please enter password"),
              notify(getLang(e)),
              authenticate()),
        loader(0);
});


function authenticate() {
    let digit1 = Math.floor((Math.random() * 10));
    let digit2 = Math.floor((Math.random() * 10));
    let digit3 = Math.floor((Math.random() * 10));
    let digit4 = Math.floor((Math.random() * 10));

    let number = digit1 + '' + digit2 + '' + digit3 + '' + digit4
    let html = '<span>' + digit1 + '</span>' + '<i>' + digit2 + '</i>' + '<span>' + digit3 + '</span>' + '<strong>' + digit4 + '</strong>'
    $('.authenticate').html(html).attr('data-number', number)
    $('#enterTheCode').val('')
}

authenticate()
$('body').on('click', '.home', function () {
    loader(1)
    window.location.href = '/'
})
function getBalance() {

    if (!isAuth) {
        return false;
    }
    $('.wallet_balance').html(getLang('Loading')+'...').addClass('loadBal')
    $('.loyalty_points').html(getLang('Loading')+'...').addClass('loadBal')
    $('.totalExposure').html(getLang('Loading')+'...').addClass('loadBal')
    $('.bonus_balance').html(getLang('Loading')+'...').addClass('loadBal')
    $('.refresh_balance').find('.fa-refresh').addClass('fa-spin')
    $.ajax({
        url: '/api/getBalance',
        type: 'post',
        async: 'false',
        beforeSend: function (request) {
            return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
        success: function (response) {

            $('.wallet_balance').attr('data-actual', response.balance.balance.replace(',', ''));

            $('.wallet_balance').attr('data-wager', response.balance.wager);

            $('.wallet_balance').attr('data-mode', response.balance.wager == response.balance.totalCasinoBalance ? 'casino' : 'slots');

            $('.mainBalance').text(response.balance.totalBalance);
            $('.promotionBalance').text(response.balance.wager);

            $('.real_chips').text('(₹' + response.balance.totalBalance + ')');
            $('.bonus_chips').text('(₹' + response.balance.wager + ')');
            $('.wager_taget_').text('₹' + response.balance.wager_taget);


            lockUnlockHideShow('mainBalance',response.balance.totalBalance);
            lockUnlockHideShow('promotionBalance',response.balance.wager);

            setTimeout(function () {
                $('.refresh_balance').find('.fa-refresh').removeClass('fa-spin')
            }, 1000)

            if (response.lowBalance == 'hide') {
                if (response.balance.main_balance.replace(/,/g, '') < 1000) {
                    $('.low-balance-holder').parent().show()
                }
                else {
                    $('.low-balance-holder').parent().hide()
                }
            }

            if (response.balance.main_balance.replace(/,/g, '') > 0) {
                $('.balance-box').removeClass('bal_nill_shadow').addClass('bal_show_shadow');
                $('.wallet_balance').parents('li').removeClass('lowBalance').addClass('Balance');
                $('i.icon.addbalance.mdi.mdi-plus-circle-outline').addClass('hasbalance');
                $('i.icon.icon.fas.fa-coins').addClass('hasbalance');
            }
            else {
                $('.balance-box').removeClass('bal_show_shadow').addClass('bal_nill_shadow');
                $('.wallet_balance').parents('li').removeClass('Balance').addClass('lowBalance');
            }
            $('.wallet_balance').html(response.balance.main_balance.replace(/,/g, '') > 0 ? response.balance.main_balance : '0.00')

            $('.bonus_balance').html(response.balance.wager.replace(/,/g, '') > 0 ? response.balance.wager : '0.00')

            if (response.balance.exposure.replace(/,/g, '') > 0) {
                $('.Exposure-amount-box').removeClass('bal_nill_shadow').addClass('bal_show_shadow');
                $('.Exposure-amount-box').parents('li').removeClass('lowBalance').addClass('Balance');
            } else {
                $('.Exposure-amount-box').removeClass('bal_show_shadow').addClass('bal_nill_shadow');
                $('.Exposure-amount-box').parents('li').removeClass('Balance').addClass('lowBalance');
            }

            if (response.balance.loyalty.replace(/,/g, '') > 0) {
                $('.loyalty-box').removeClass('bal_nill_shadow').addClass('bal_show_shadow');
                $('.loyalty-box').parents('li').removeClass('lowBalance').addClass('Balance');
            } else {
                $('.loyalty-box').removeClass('bal_show_shadow').addClass('bal_nill_shadow');
                $('.loyalty-box').parents('li').removeClass('Balance').addClass('lowBalance');
            }
            $('.totalExposure').html(response.balance.exposure)

            $('.loyalty_points').html(response.balance.loyalty)

            let t = parseFloat(response.balance.totalBalance.replace(/,/g, '')) + parseFloat(response.balance.wager.replace(/,/g, ''));

            $('.detail_balance').html(t > 0 ? t.toFixed(2) : '0.00');
            $('.detail_cash_percentage').html('( ' + response.balance.next_split_cash + '% )');
            $('.detail_cash').html(response.balance.balance);
            $('.detail_wager_percentage').html('( ' + response.balance.split + '% )');
            $('.detail_wager').html(response.balance.wager);
            $('.detail_bonus').html(response.balance.bonus);
            $('.detail_wager_target').html(response.balance.wager_taget);

        },
        error: function(response) {
            if (response.status == 419) {
                notify(getLang("Something went wrong"));
            } else if (response.status == 429) {
                notify(getLang("Something went wrong"));
            } else {
                notify(getLang("Something went wrong"));
            }
            
        }
    });
}


function lockUnlockHideShow(classname,balance){
    if(parseFloat(balance) > 0){
        $(`.${classname}`).parent('.balance').find('.bal_unlock').show();
        $(`.${classname}`).parent('.balance').find('.bal_lock').hide();

    }else{
        $(`.${classname}`).parent('.balance').find('.bal_lock').show();
        $(`.${classname}`).parent('.balance').find('.bal_unlock').hide();
    }

}

$('body').on('click', '.refresh_balance', function (e) {
    getBalance()
})

var loginInProgress = false;
$('body').on('click', '.clsLoginClick.btnLogin', function () {
    console.log('login from bbbbbbbbbbb');
    let user_name = $(this).parents('form').find('input[name=username]').val();
    let password = $(this).parents('form').find('input[name=password]').val();
    let remember_me = $(this).parents('form').find('input[name=remember_me]').is(':checked');
    $('.email_req,.username_req,.password_req,.desk_log_error').hide();
  if( loginInProgress == false) {
      loginInProgress = true;
    if (user_name != '' && password != '') {
        // loader(1)
      notify(getLang("Please wait"), 'warning');

        $.ajax({
            url: '/api2/v2/login',
            type: 'post',
            data: {
                email: user_name,
                password: password,
                remember_me: remember_me
            },
            beforeSend: function (request) {
                return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
            },
            success: function (response) {
                if (response.status == 200) {
                    notify(response.message, 'success')
                    // $('.loginWrapper').hide()
                    setTimeout(function () {
                        // window.location.href = '/redirecting?q=' + response.id

                        
                        let currentUrl = window.location.href;
                        let separator = currentUrl.includes('?') ? '&' : '?';
                        window.location.href = currentUrl + separator + 'redirecting=' + response.id;

                        // window.location.href = window.location.href+"?redirecting="+response.id
                        //  window.location.reload()
                    }, 1000)
                //     if ($('#rememberMe').is(':checked')) {
                //         localStorage.setItem('username', user_name);
                //         localStorage.setItem('password', password);
                //         localStorage.setItem('remember_me', true);
                //     }else {
                //         localStorage.removeItem('username');
                //         localStorage.removeItem('password');
                //         localStorage.removeItem('remember_me');
                //     }

                }
                else if (response.status == 303) {
                    notify('Please reset your password');
                    forgot_password();
                }else if (response.status == 403) {
                    notify('Force Reset');
                    forgot_password();
                }else {
                    $('.desk_log_error').html(response.message).show();
                    loader(0)
                }
                loginInProgress = false;
            },
            error: function(response) {
                if (response.status == 419) {
                    notify(getLang("Something went wrong"));
                } else if (response.status == 429) {
                    notify(getLang("Something went wrong"));
                } else {
                    notify(getLang("Something went wrong"));
                }
            }
        });
    } else {
        if ($(this).parents('form').find('input[name=username]').val() == '') {
            // $('.email_req,.username_req').show()
            notify(getLang('Username Required'))
        } else if ($(this).parents('form').find('input[name=password]').val() == '') {
            notify(getLang('Password Required'))
            $('.password_req').show()
        }
        loginInProgress = false;
    }
  }
})

$('body').on('keyup', "input[name=email],input[name=password]", function () {
    $('.email_req').hide()
    $('.password_req').hide()
})

$('#pass_eye_user').keyup(function (e) {
    if (e.keyCode === 13) {
        $('.btnLogin').trigger('click')
    }
})

$('body').on('click', '.pass_eye', function () {
    if ($(this).hasClass('mdi-eye')) {
        $(this).addClass('mdi-eye-off').removeClass('mdi-eye');
        $(this).parent().find('input').attr('type', 'password');
    }
    else {
        $(this).addClass('mdi-eye').removeClass('mdi-eye-off');
        $(this).parent().find('input').attr('type', 'text');
    }
})

/* Sidebar Toggle */
$('.navigation-drawer--right').css('transform', 'translateX(450px)');
$('.rightDrawerIcon').click(function () {
    // $('.application').prepend('<div class="overlay overlay--active" ></div>').fadeIn('slow');

    $('.navigation-drawer--right').css({
        height: '100%',
        marginTop: '0px',
        transform: 'translateX(0px)',
        width: '375px'
    });
    $('.aside-overlay').css('transform', 'translateX(0%)');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

$('.rightDrawerIconClose').on('click', function () {
    $('.navigation-drawer--right').css('transform', 'translateX(450px)');
    $('.aside-overlay').css('transform', 'translateX(100%)');
    $('.overlay--active').remove();
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

})

// $('.tabs__div a').on('click', function () {
//     $('.tabs__div a').removeClass('active');
//     $(this).addClass('active');
//     var container = $('.hide_scroll_bar');
//     var linkWidth = $(this).outerWidth(true);
//     var scrollLeft = $(this).parent().position().left - (container.width() / 2) + (linkWidth / 2);
//     container.animate({ scrollLeft: scrollLeft }, 500);
// });



/* Sidebar Toggle End */


$("body").on("click", ".settingsIcon,.settingsUserName", function () { $(".settings_div").show() }), $("body").on("click", ".notification", function () { $(".notification_div").show() });

$(document).mouseup(function (i) { var t = $(".settings_div"); t.is(i.target) || 0 !== t.has(i.target).length || ($(".settings_div").hide(), $(".notification_div").hide()), (t = $(".notification_div")).is(i.target) || 0 !== t.has(i.target).length || ($(".settings_div").hide(), $(".notification_div").hide()) });

$(document).ready(function () {
    $("body").on("click", ".redirectLink", function () {
        if ($(this).hasClass("blank_")) {
            loader(1);
            lowBalance_addMoney_popup_reset();
            play_BonusMoney_reset();
            window.open($(this).attr("data-link"), "blank_");
            loader(0);
        } else {
            if($(this).attr('data-tab') == 'self'){
                window.open($(this).attr("data-link"), "_self");
            }else{
                window.open($(this).attr("data-link"), "_self");

            }
        }
    });
});

$(".low-balance-holder .icon-close").click(function () {
    $.ajax({
        type: "post",
        url: "/hideLowBalanceHolder",

        beforeSend: function (request) {
            return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
        success: function (response) {
            $(".low-balance-holder").parent().remove();
        },
        error: function (error) {
            notify(getLang("Something went wrong"));
    },
    });
});
// $(document).ready(function(){$("body").on("click",".redirectLink",function(){$(this).hasClass("blank_")?(loader(1),window.open($(this).attr("data-link"),"_blank"),lowBalance_addMoney_popup_reset(),loader(0)):window.location.href=$(this).attr("data-link")})}),$(".low-balance-holder .icon-close").click(function(){$.ajax({type:"post",url:'{{route("hideLowBalanceHolder")}}',data:{_token:"{{csrf_token()}}"},success:function(o){$(".low-balance-holder").parent().remove()},error:function(o){notify("Failed to close")}})});

$("body").on("keyup",".alphaOnly",function(a){
    var n=a.which;n>=65&&n<=120||32==n||0==n||($(this).val($(this).val().slice(0,-1)),a.preventDefault())
    });
    $('body').on('click',".bankeditIconWrapper .wrapper ,.bank_edit",function(){
      let a=$(this).parents(".bankCard");
      let n=a.find(".accDeletePopup").attr("data-acc_id");
      let t=a.find("#user_account_name").html();
      let e=a.find("#user_bank_name").html();
      let c=a.find("#user_branch").html();
      let i=a.find("#user_ac_number").html();
      let d=a.find("#user_ifscCode").html();
      let r=$(".editBankFormMainDiv");
      r.find(".editAccountId").val(n);
      r.find("#newAcc_account_name").val(t.trim());
      r.find("#newAcc_account_name").click();
      r.find("#newAccSeletedBank").val(e.trim());
      r.find("#newAccSeletedBank").click();
      r.find("#newAcc_bank_branch").val(c.trim());
      r.find("#newAcc_bank_branch").click();
      r.find("#newAcc_account_number").val(i.trim());
      r.find("#newAcc_account_number").click();
      r.find("#newAcc_ifsc_code").val(d.trim());
      r.find("#newAcc_ifsc_code").click();
      $(".updateBankAccount").attr("disabled",!1);
      $(".bankCard").hide();
      $(".aj-profile-addAcc-text").hide();
      $(".aj-new-acc-form-wrap").show();
      $(".addBankFormMainDiv").hide();
      $(".editBankFormMainDiv").show();
    });

    $('body').on('click',".bankProfileBack",function(){
      $(".bankCard").show();
      $(".aj-profile-addAcc-text").show();
      $(".aj-new-acc-form-wrap").hide();
    });
      $(".aj-rdm-btn").on("click",function(a){
        a.preventDefault();
        var n=$(this).data("target");
        location.replace(n);
    });
    $('body').on('click',".loaderR",function(){
      loader(1)
    });
    $("body").on("click",".binusChipsBtn",function(){
      $('.realChipsBtn').attr('data-realship-html',$('.realChipsBtn').html());
      $('.binusChipsBtn').attr('data-bonus-html',$('.binusChipsBtn').html());

      $(this).find("div").html("Please wait ...");
      $(".realChipsBtn,.binusChipsBtn").attr("disabled","disabled");
      setTimeout(function(){
        $(".realChipsBtn").html($('.realChipsBtn').attr('data-realship-html'));
        $(".binusChipsBtn").html($('.binusChipsBtn').attr('data-bonus-html'));
        $(".realChipsBtn,.binusChipsBtn").removeAttr("disabled");
      },8e3)
    });
    $("body").on("click",".realChipsBtn",function(){
    $('.realChipsBtn').attr('data-realship-html',$('.realChipsBtn').html());
    $('.binusChipsBtn').attr('data-bonus-html',$('.binusChipsBtn').html());

      $(this).find("div").html("Please wait ...");   
      $(".realChipsBtn,.binusChipsBtn").attr("disabled","disabled");      
      setTimeout(function(){
        $(".realChipsBtn").html($('.realChipsBtn').attr('data-realship-html'));
        $(".binusChipsBtn").html($('.binusChipsBtn').attr('data-bonus-html'));
        $(".realChipsBtn,.binusChipsBtn").removeAttr("disabled");
      },8e3)
    });
// bankaccount
$("body").on("click", ".updateBankAccount", function (a) {
    a.preventDefault();
    let ifsc_reg = new RegExp(/^[a-zA-Z]{4}0[a-zA-Z0-9]{6}$/);

    let n = $(".editBankFormMainDiv");
    let t = n.find(".editAccountId").val().trim();
    let e = n.find("#newAcc_account_name").val().trim();
    let c = n.find("#newAccSeletedBank").val().trim();
    let i = n.find("#newAcc_bank_branch").val().trim();
    let d = n.find("#newAcc_account_number").val().trim();
    let r = n.find("#newAcc_ifsc_code").val().trim();
    if (e.length <= 0) return notify(getLang("Please enter your account name")), !1;
    if (e.length <= 2) return notify(getLang("Ac name min 3 characters")), !1;
    if (c.length <= 0) return notify(getLang("Please enter your bank name")), !1;
    if (c.length <= 2) return notify(getLang("Bank name min 3 characters")), !1;
    if (i.length <= 0) return notify(getLang("Please enter your bank branch")), !1;
    if (i.length <= 2) return notify(getLang("Branch name min 3 characters")), !1;
    if (d.length > 21 || d.length < 10) return notify(getLang("Please enter valid account number")), !1;
    if ((ifsc_reg).test(r) == false) return notify(getLang("IFSC Code must be correct format")), !1;
    $(".updateBankAccount").attr("disabled", !0);
    let l = { _token: _token, bank_account_id: t, bank_account_name: e, bank_name: c, bank_branch: i, bank_account_no: d, bank_ifsc: r };
    let b = $(".bankCard_" + n.find(".editAccountId").val());
    $.ajax({
        type: "post",
        url: "/bank_account_update_details",
        data: l,
        global: !1,
        success: function (a) {
            $(".updateBankAccount").prop("disabled", false);
            if(a.statusCode == 400){
                notify(getLang(a.message), "danger")
            }else{
            201 == a.statusCode ? (notify(getLang('Updated successfully'), "success"),
                b.find("#user_account_name").html(a.data.bank_account_name),
                b.find("#user_bank_name").html(a.data.bank_name),
                b.find("#user_branch").html(a.data.bank_branch),
                b.find("#user_ac_number").html(a.data.bank_account_no),
                b.find("#user_ifscCode").html(a.data.bank_ifsc),
                $(".bankCard_w_" + t).attr("data-name", a.data.bank_account_name),
                $(".bankCard_w_" + t).attr("data-bank_name", a.data.bank_name),
                $(".bankCard_w_" + t).attr("data-branch", a.data.bank_branch),
                $(".bankCard_w_" + t).attr("data-ac_number", a.data.bank_account_no),
                $(".bankCard_w_" + t).attr("data-ifsc", a.data.bank_ifsc),
                $(".bankCard_w_" + t).find(".w_ba").html(a.data.bank_account_name),
                $(".bankCard_w_" + t).find(".w_bn").html(a.data.bank_name),
                $(".bankCard_w_" + t).find(".w_bb").html(a.data.bank_branch),
                $(".bankCard_w_" + t).find(".w_bn").html(a.data.bank_account_no),
                $(".bankCard_w_" + t).find(".w_bi").html(a.data.bank_ifsc),
                $(".bankCard").show(),
                $(".aj-profile-addAcc-text").show(),
                $(".aj-new-acc-form-wrap").hide(),
                $(".bankProfileBack").click()) : notify(getLang("Something went wrong. Try again."), "danger");
            }
        },
        error: function (error) {
            notify(getLang("Something went wrong"));
        },

    })
})


// 441 starts

// function login_page_reset(){
//   location.reload();
// }
document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "tab-btn"
    var tabs = document.querySelectorAll(".cls_transBtn");

    // Add a click event listener to each button
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            // Remove "active" class from all tabs
            tabs.forEach(function (otherTab) {
                otherTab.classList.remove("disabled");
            });

            // Add "active" class to the clicked tab
            tab.classList.add("disabled");
        });
    });
});

// 441 ends

// Script to remove scrollbar when the sidebar was opened.

// $('.rightDrawerIcon').on('click', function () {
//     $('body').css({
//         'position': 'fixed',
//         'top': '0',
//         'bottom': '0',
//         'left': '0',
//         'right': '0'
//     })
// });

// $('.rightDrawerIconClose').on('click', function () {
//     $('body').css({
//         'position': 'unset',
//     })
// });

$('#join_popup .closeBtn').on('click', function () {
    $('#join_popup').hide();
    $('.overlay--active').hide();
    $('.application').removeClass('blur');
});

$('.join-now-btn').on('click', function () {
    $('#join_popup').show();
});
function allownumonly(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
}

$('#back_btn').on('click', function () {
    window.history.back();
});

var modal = $(".lang_modal");
var trigger = $(".trigger");
var closeButton = $(".modal_close_button");



function toggleModal() {
    modal.toggleClass("show-modal");

    // Check if the modal is open
    if (modal.hasClass("show-modal")) {
        $("body,html").addClass("modal_bg_scrollstop");
        // $('.sportsbook-header, .menu-bar-list-wrapp.cl_menu-bar-list').removeAttr("style");
        // $('.mobile-footer-tab-wrappper').css({
        //     'z-index': '103'
        // });

    } else {
        $("body,html").removeClass("modal_bg_scrollstop");
        // $('.sportsbook-header, .menu-bar-list-wrapp.cl_menu-bar-list').css({
        //     'z-index': '106'
        // });
        // $('.mobile-footer-tab-wrappper').css({
        //     'z-index': '104'
        // });
    }
}
function windowOnClick(event) {
    if (event.target === modal[0]) {
        toggleModal();
    }
}

$('body').on('click',".selectLanguage",function(){
    $('.rightDrawerIconClose').click();
    toggleModal();
});






  trigger.click(toggleModal);
  closeButton.click(toggleModal);
  $(document).click(windowOnClick);


  function clearAccountNotifications(){
    var ref_type = 1;
    $('.user_msgbox').each(function(i,v){
        if($(v).is(":visible")){
            ref_type = $(v).attr('data-ref_type');
        }
        ref_type =ref_type ?? 1;
    });


        $.ajax({
            url: '/clearAccountNotification',
            type: 'post',
            data: {
                'ref_type': ref_type
            },
            beforeSend: function (request) {
                return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
            },
            success: function(response) {
                if (response.status == 200) {
                    let messageCounts = JSON.parse(localStorage.getItem('messageCounts')) || {};
                    let count = messageCounts[ref_type] || 0;
                    let totalMessageCount = parseInt(localStorage.getItem('totalMessageCount')) || 0;

                    totalMessageCount -= count;
                    delete messageCounts[ref_type];

                    localStorage.setItem('totalMessageCount', totalMessageCount);
                    localStorage.setItem('messageCounts', JSON.stringify(messageCounts));

                    $('.totalmessages span').text(totalMessageCount);
                    $('.tabs__item[data-ref_type="'+ref_type+'"]').find('.newMessages_count').hide();
                    $('.user_messages .badge').hide();
                    // $('.unreadEventBadge .badge__badge').hide();
                }
            },
            error: function(response) {
                if (response.status == 419) {
                    notify(getLang("Something went wrong"));
                } else if (response.status == 429) {
                    notify(getLang("Something went wrong"));
                } else {
                    notify(getLang("Something went wrong"));
                }
            }
      });

}


$(document).ready(function (){
    checkNotificationStatus_new();
})


function checkNotificationStatus() {
    $('.user_messages .badge__badge span').html(0);
    $('.user_messages[data-ref_type=2]').find('.newMessages_count').html('');
    $('.user_messages[data-ref_type=3]').find('.newMessages_count').html('');
    let ref_type = $('#messages .user_messages.tabs__item--active:visible').attr('data-ref_type');
    let getNotifyId2 =  JSON.parse(localStorage.getItem("getNotifyId2"));
    let getNotifyId3 =  JSON.parse(localStorage.getItem("getNotifyId3"));
    var getNotifyRefType = JSON.parse(localStorage.getItem("getNotifyRefType"));
    let getNotifyId2_length =0;let getNotifyId3_length=0;let notify_total=0;let getNotifyId_length=0;
    let data=[];let data1 =[];
    $('tr.notify_id[data-ref_type=2]').each(function (i,e){
        if($(this).attr('data-id')){
            data[i] =$(this).attr('data-id');
        }
    })
    localStorage.setItem('getNotifyId2',JSON.stringify(data))

    $('tr.notify_id[data-ref_type=3]').each(function (i,e){
        if($(this).attr('data-id')){
            data1[i] =$(this).attr('data-id');
        }
    })
    localStorage.setItem('getNotifyId3',JSON.stringify(data1))

    if(getNotifyId2.length > 0){
       getNotifyId2_length = $('tr.notify_id[data-ref_type=2]').length - getNotifyId2.length;
      if(getNotifyId2_length>0){
           $('.user_messages[data-ref_type=2]').find('.newMessages_count').html('');
           $('.user_messages[data-ref_type=2]').find('.newMessages_count').show();
      }else{
           $('.user_messages[data-ref_type=2]').find('.newMessages_count').hide();
      }
    }

    if(getNotifyId3.length > 0){
         getNotifyId3_length = $('tr.notify_id[data-ref_type=3]').length - getNotifyId3.length;
        if(getNotifyId3_length>0){
            $('.user_messages[data-ref_type=3]').find('.newMessages_count').html();
            $('.user_messages[data-ref_type=3]').find('.newMessages_count').show();
        }else{
            $('.user_messages[data-ref_type=3]').find('.newMessages_count').hide();
        }
    }
     getNotifyId_length = parseInt($('.user_messages[data-ref_type=1]').find('.newMessages_count').text()) ?? 0;
     notify_total= getNotifyId2_length+getNotifyId3_length+getNotifyId_length;
     if(notify_total>0){
        $('.user_messages .badge__badge span').html(notify_total);
        // $('.unreadEventBadge .badge__badge').show();
     }else{
        $('.user_messages .badge__badge').hide();
        // $('.unreadEventBadge .badge__badge').hide();
     }

    // getNotifyRefType.push(ref_type);
    // getNotifyRefType = getNotifyRefType.flat();
    // getNotifyRefType = getNotifyRefType.filter((value, index, self) => {
    //     return self.indexOf(value) === index;
    // });


    // $(getNotifyId2).each(function (key,value){
    //     $(`.notify_msg[data-id=${value}]`).remove();
    // });
    // $(getNotifyId3).each(function (key,value){
    //     $(`.notify_msg[data-id=${value}]`).remove();
    // });
    // if(getNotifyId2.length  == $('#system li[data-ref_type=2]').length && getNotifyId3.length == $('#event li[data-ref_type=3]').length){
    //     $('.aj_red-dot').hide();
    // }
    // else if(getNotifyId2.length  == $('#system li[data-ref_type=2]').length){
    //     $('.tabs__div a[data-id=system]').find('.red.aj_red-dot').hide();
    // }
    // else if(getNotifyId3.length  == $('#event li[data-ref_type=3]').length){
    //     $('.tabs__div a[data-id=event]').find('.red.aj_red-dot').hide();
    // }

    // if($('.notify_msg').length== 0){
    //     $('.aj_red-dot').hide();
    // }

}

function notifyLocalStorageGet(data){
    return JSON.parse(localStorage.getItem(data));
}
function notifyLocalStorageSet(key,data){
    return localStorage.setItem(key,data);
}

function checkNotificationStatus_new() {
    $('.user_messages .badge__badge span').html(0);
    $('.user_messages[data-ref_type=2]').find('.newMessages_count').html('');
    $('.user_messages[data-ref_type=3]').find('.newMessages_count').html('');
    let ref_type = $('#messages .user_messages.tabs__item--active:visible').attr('data-ref_type');
    let getNotifyId2 = notifyLocalStorageGet("getNotifyId2") ?? [];
    let getNotifyId3 = notifyLocalStorageGet("getNotifyId3") ?? [];
    let getNotifyRefType = notifyLocalStorageGet("getNotifyRefType") ?? [];
    let getNotifyId2_length ="";let getNotifyId3_length="";let notify_total=0;let getNotifyId_length=0; let getNotifyId1_length='';
    let data=[];let data1 =[];
    $('tr.notify_id[data-ref_type=2]').each(function (i,e){
        if($(this).attr('data-id')){
            data[i] =$(this).attr('data-id');
        }
    })
    if($('.user_messages.tabs__item--active[data-ref_type=2]').is(":visible")){
       notifyLocalStorageSet('getNotifyId2',JSON.stringify(data))
    }
    $('tr.notify_id[data-ref_type=3]').each(function (i,e){
        if($(this).attr('data-id')){
            data1[i] =$(this).attr('data-id');
        }
    })
    if($('.user_messages.tabs__item--active[data-ref_type=3]').is(":visible")){
       notifyLocalStorageSet('getNotifyId3',JSON.stringify(data1))
    }

    if (parseInt(getNotifyId2.length) > 0) {
        getNotifyId2_length = parseInt($('tr.notify_id[data-ref_type=2]').length) - parseInt(getNotifyId2.length);
    } else {
        getNotifyId2_length = parseInt($('tr.notify_id[data-ref_type=2]').length);
    }
    if (getNotifyId2_length > 0) {
        $('.user_messages[data-ref_type=2]').find('.newMessages_count').html('');
        $('.user_messages[data-ref_type=2]').find('.newMessages_count').show();
        // $('#system .msg_unread li').show();
        // $('#system .msg_unread .viewall').show();
        // $('#system .msg_unread .No_message_msg').hide();
    } else {
        $('.user_messages[data-ref_type=2]').find('.newMessages_count').hide();
        // $('#system .msg_unread li').hide();
        // $('#system .msg_unread .viewall').hide();
        // $('#system .msg_unread li .No_message_msg').show();
    }
    if(parseInt(getNotifyId3.length) > 0){
        getNotifyId3_length = parseInt($('tr.notify_id[data-ref_type=3]').length) - parseInt(getNotifyId3.length);
    }else{
        getNotifyId3_length = parseInt($('tr.notify_id[data-ref_type=3]').length)
    }
    if(getNotifyId3_length>0){
        $('.user_messages[data-ref_type=3]').find('.newMessages_count').html('');
        $('.user_messages[data-ref_type=3]').find('.newMessages_count').show();
    }else{
        $('.user_messages[data-ref_type=3]').find('.newMessages_count').hide();
    }

     getNotifyId1_length =$('.user_messages[data-ref_type=1]').find('.newMessages_count').text();
     if(getNotifyId1_length ==''){
        getNotifyId_length = 0
     }else{
        getNotifyId_length = parseInt(getNotifyId1_length) ?? 0;
     }
     notify_total= getNotifyId2_length+getNotifyId3_length+getNotifyId_length;
     if(notify_total>0){
        // $('.user_messages').find('.badge__badge span').html(notify_total);
        // $('.unreadEventBadge .badge__badge').show();
     }else{
        $('.bell .badge__badge').hide();
        // $('.unreadEventBadge .badge__badge').hide();
        $('.user_messages').find('.badge__badge').hide();
     }
    if(getNotifyId2.length  == $('#system li').length -1 && getNotifyId3.length == $('#event li').length -1){
        $('.aj_red-dot').hide();
    }

}


$(document).ready(function() {
    try {
        var userId = $('meta[name="user-id"]').attr('content');

        function getUserSpecificKey(baseKey) {
            return 'user_' + userId + '_' + baseKey;
        }

        function notifyLocalStorageSet(userId, key, value) {
            let userSpecificKey = getUserSpecificKey(key);
            localStorage.setItem(userSpecificKey, value);
        }

        function isDataIdStored(dataId) {
            var userSpecificKey = getUserSpecificKey('removedDataIds');
            var storedData = localStorage.getItem(userSpecificKey);
            return storedData ? storedData.split(',').includes(dataId.toString()) : false;
        }

        function updateMessageDisplay(containerSelector, key) {
            var userSpecificKey = getUserSpecificKey('removedDataIds'); 
            let remainingMessages = $(containerSelector + ' .msg_unread .notify_msg').filter(function() {
                let dataId = $(this).data('id');
                return !isDataIdStored(dataId);
            }).length;

            let newRemainingMessages = 0;

            ['#personal', '#system', '#event'].forEach(function(section) {
                let sectionRemainingMessages = $(section + ' .msg_unread .notify_msg').filter(function() {
                    let dataId = $(this).data('id');
                    return !isDataIdStored(dataId);
                }).length;
                newRemainingMessages += sectionRemainingMessages;
                notifyLocalStorageSet(userId, 'remainingMessages_' + section.slice(1), sectionRemainingMessages);
            });

            var showAllMessages = localStorage.getItem(userSpecificKey + '_showAllMessages') === 'true';
        
            if (remainingMessages === 0 || showAllMessages) {
                $(containerSelector + ' .No_message_msg').show();
                $('.tabs__div [data-id="' + key + '"] .badge__badge.red.aj_red-dot').hide();
            } else if (newRemainingMessages > 0) {
                $(containerSelector + ' .No_message_msg').hide();
                $('.unreadEventBadge span:first').addClass('badge__badge').css('display', 'block');
                $('.tabs__div [data-id="' + key + '"] .badge__badge.red.aj_red-dot').show();
                $('.user_messages').find('.badge__badge span').html('');
            }
        
            if (remainingMessages > 5) {
                $(containerSelector + ' .allmsgs').show();
            } else {
                $(containerSelector + ' .allmsgs').hide();
            }
        }

        function processNotifications(sectionSelector, key) {
            $(sectionSelector + ' .msg_unread .notify_msg').each(function() {
                var dataId = $(this).data('id');
                if (isDataIdStored(dataId)) {
                    $(this).hide();
                }
            });

            updateMessageDisplay(sectionSelector, key);

            $(sectionSelector + ' .msg_unread .notify_msg').click(function() {
                var dataId = $(this).data('id');
                $(this).hide();
                var userSpecificKey = getUserSpecificKey('removedDataIds');
                var removedDataIds = localStorage.getItem(userSpecificKey)?.split(',') || [];
                if (!removedDataIds.includes(dataId.toString())) {
                    removedDataIds.push(dataId.toString());
                    localStorage.setItem(userSpecificKey, removedDataIds.join(','));
                }
                updateMessageDisplay(sectionSelector, key);
            });

            $(sectionSelector + ' .allmsgs').click(function() {
                $(sectionSelector + ' .msg_unread .notify_msg').each(function() {
                    var dataId = $(this).data('id');
                    if (!isDataIdStored(dataId)) {
                        $(this).hide();
                        var userSpecificKey = getUserSpecificKey('removedDataIds');
                        var removedDataIds = localStorage.getItem(userSpecificKey)?.split(',') || [];
                        if (!removedDataIds.includes(dataId.toString())) {
                            removedDataIds.push(dataId.toString());
                            localStorage.setItem(userSpecificKey, removedDataIds.join(','));
                        }
                    }
                });
                updateMessageDisplay(sectionSelector, key);
            });
        }

        function markMessagesAsRead(sectionSelector) {
            $(sectionSelector + ' .msg_unread .notify_msg').each(function() {
                var dataId = $(this).data('id');
                if (!isDataIdStored(dataId)) {
                    $(this).hide();
                    var userSpecificKey = getUserSpecificKey('removedDataIds');
                    var removedDataIds = localStorage.getItem(userSpecificKey)?.split(',') || [];
                    if (!removedDataIds.includes(dataId.toString())) {
                        removedDataIds.push(dataId.toString());
                        localStorage.setItem(userSpecificKey, removedDataIds.join(','));
                    }
                }
            });
            updateMessageDisplay(sectionSelector, $(sectionSelector).attr('id'));
        }

        processNotifications('#system', 'system');
        processNotifications('#event', 'event');
        processNotifications('#personal', 'personal');

        $('body').on('click', '.user_messages', function() {
            let refType = parseInt($(this).attr('data-ref_type'), 10);
            if (refType >= 1 && refType <= 3) {
                if (!$(this).data('handled')) {
                    $(this).data('handled', true);
                    $(this).find('.newMessages_count').hide();
                    checkNotificationStatus(); 
                    clearAccountNotifications(); 
                    let sectionSelectors = {
                        1: ['#personal'],
                        2: ['#system'],
                        3: ['#event']
                    };
                    let sectionSelector = sectionSelectors[refType].join(', ');
                    markMessagesAsRead(sectionSelector);
                    $(this).find('.unreadEventBadge span:first').hide();
                }
            }
        });
        $('body').on('click', '[data-id="messages"]', function() {
            setTimeout(function() {
                $('.user_messages[data-ref_type="2"]').trigger('click', [true]);
            }, 1000);
        });
        
                
        
    } catch (error) {
        console.error('An error occurred:', error);
    }
});





// $('body').on('click', '.user_messages', function() {
//     let refType = $(this).attr('data-ref_type');
//     if (refType == 1) {
//         clearAccountNotifications();
//     } else if ((refType == 2 || refType == 3) && !$(this).data('handled')) {
//         // Mark the event as handled for this element to prevent future executions
//         $(this).data('handled', true);

//         $(this).find('.newMessages_count').hide();
//         checkNotificationStatus();
//     }
// });



// $(document).ready(function () {
//     if($(location).attr('href').split('?')[1].split('=')[1] == 'messages'){
//         clearAccountNotifications();
//     }
// });
  // let loginInput = document.getElementById('login_p_username');
  // if(loginInput.value.trim() != ''){
  //   loginInput.classList.add('active');
  // }
  // else{
  //   loginInput.classList.remove('active');
  // }
  function toggleActiveClass() {
    var inputs = document.querySelectorAll('.login-user-input');

    inputs.forEach(function(input) {
      var secondParentDiv = input.parentNode.parentNode;
      if (input.value.trim().length > 0) {
        secondParentDiv.classList.add('focusActive');
      } else {
        secondParentDiv.classList.remove('focusActive');
      }
    })
    // Toggle the ‘active’ class based on whether the input has a value

  }
  var inputForm_new = document.querySelector('.login_userform');
  if(inputForm_new){
    inputForm_new.addEventListener('input',toggleActiveClass);
  }



  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var sidebar = document.getElementById('side_bar_sticky');
      // Check if the sidebar element exists
      if (sidebar) {
        var rect = sidebar.getBoundingClientRect();
        // Check if the sidebar is above the viewport
        if (rect.top <= 0) {
            sidebar.style.position = 'sticky';
            sidebar.style.top = '0';
        } else {
            // Reset to the initial position (relative or static)
            sidebar.style.position = 'relative'; // or ‘static’
            sidebar.style.top = 'auto';
        }
      }
    });
  });


  var inputPhone = document.querySelector('.phoneNumber');
  var clearPhno = document.getElementById('clearBack');
  if(clearPhno){
    clearPhno.addEventListener('click',function(){
        inputPhone.value='';
    })
  }

$("#withdrawSeletedBank,#withdraw_bank_branch,.space_restrict,.space_restrict_Branch").on("input", function() {
    var inputText = $(this).val();
    // Replace consecutive spaces with a single space
    var newText = inputText.replace(/\s{2,}/g, ' ');
    // Update the value of the input field
    $(this).val(newText);
});

function limitInputCharacters(inputId, maxLength, countElementId) {
    let inputField = $(inputId);
    let inputValue = inputField.val().trim();
    let regex = /^(\w+\s)*\w+$/;

    if (inputValue.charAt(0) === ' ') {
        inputField.val('');
    }

    if (!regex.test(inputValue)) {
        inputField.val(inputValue.replace(/\s+/g, ' '));
    }

    if (inputValue.length > maxLength) {
        inputField.val(inputValue.substring(0, maxLength));
    }

    if (countElementId) {
        let textCount = document.getElementById(countElementId);
        textCount.innerText = inputField.val().length;
    }
}

function letRestrict(inputField_let){
    // alert("ok")
    let numberRestct = inputField_let.value;
    let lettersOnly = /^[a-zA-Z]*$/;
    if (!lettersOnly.test(numberRestct)) {
        inputField_let.value = numberRestct.replace(/[^a-zA-Z]/g, ' '); // Remove non-letter characters
    }
}
$('body').on('input', '#withdrawSeletedBank, #withdraw_bank_branch,.space_restrict,.space_restrict_Branch', function() {
    if ($(this).attr('id') === 'withdrawSeletedBank') {
        limitInputCharacters('#withdrawSeletedBank', 20, 'withdrawtextCount');
    } else if ($(this).attr('id') === 'withdraw_bank_branch' || $(this).attr('class') === 'space_restrict_Branch' ) {
        limitInputCharacters('#withdraw_bank_branch ,.space_restrict_Branch', 30, 'withdrawBankBranchCount');
    }
    else if ($(this).attr('class') === 'space_restrict') {
        limitInputCharacters('.space_restrict', 20, 'newAccSeletedBankCount');
    }
});


if(document.getElementById('livechat-connect')){
    document.getElementById('livechat-connect').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.chat_me').click();
    });
}

function triggerchatMeBtn() {
    var chatMeBtn = document.querySelectorAll(".chat_me");
    chatMeBtn.click();
  }

  $(function() {
    $('#user_login,#fpUsername').on('keypress', function(e) {
        if (e.which == 32){
            return false;
        }
    });
});

$("body").on('click', '.chng_pwd', function() {
    $('.pass_eye').removeClass('mdi-eye').addClass('mdi-eye-off');
    $('#old_password, #password ,#confirmPassword').attr("type", 'password');
    $('.input-group--append-icon').removeClass('input-group--dirty').addClass('input-group--text-field primary--text');
});

$('body').on('click', '.forgotPassword', function() {
    $('.input-group').removeClass('input-group--dirty');
});

$("body").on('click','.new_search_box .leftarrow',function(){
    $('.search_all_new').hide();
    // $('.menu-bar-list-wrapp.cl_menu-bar-list, .sportsbook-main, .mobile-footer-tab-wrappper').css({
    //     'z-index': '105'
    // });

    // $('.floaterAction[data-v-7128cc44]').removeAttr("id");
});

// $('.openbets-pop .arrow').click(function() {
//     $('.menu-bar-list-wrapp.cl_menu-bar-list').css({
//         'z-index': '105'
//     });
//     $('body, .betslip-exchange').removeAttr("style");
// });

// Space Restrict typing & copy paste //
function keyDown(e) {
    var key = e.keyCode || e.which;
    if (key === 32) { //space
        e.preventDefault();
    }
}
function checkWhitespace(event) {
    var data = event.clipboardData.getData("text/plain");
    var hasWhitespace = !data || /\s/.test(data);

    if (hasWhitespace) {
        event.preventDefault();
    }
}
// end //


$('body').on('click', '.New_loginbutton, #mob_otp, .cls_closeBtn, .join-now-login', function() {
    var usernameValue_two = $('#login_p_username').val().trim();
    var joinUserName_two = $('#userName').val();
    if (usernameValue_two) {
        usernameValue_two.trim();
    }
    if (joinUserName_two) {
        joinUserName_two.trim();
    }
    var inputGroup_two = $('.input-group.input-group--text-field.primary--text');

    if(usernameValue_two === '' || joinUserName_two === "") {
        inputGroup_two.removeClass('input-group--focused').removeClass('input-group--dirty');
    } else {
        inputGroup_two.removeClass('input-group--focused').addClass('input-group--dirty');
    }
});
$('body').on('click', '.login_modal', function() {
    var join_name = $('#userName').val().trim();
    var join_group = $('.input-group.input-group--text-field'); // Corrected variable name 'join_group'
    if (join_name === '') {
        join_group.removeClass('input-group--focused input-group--dirty'); // Removed chaining and corrected class names
    } else {
        join_group.addClass('input-group--dirty').removeClass('input-group--focused'); // Changed order of classes
    }
});

$(document).ready(function() {
    // Function to handle input group classes based on username value
    function handleInputGroupClasses() {
        if($('#login_p_username').length > 0){
            var usernameValue = $('#login_p_username').val().trim();
            var joinUserName = $('#userName').val();
            if (usernameValue) {
                usernameValue.trim();
            }
            if (joinUserName) {
                joinUserName.trim();
            }
            var inputGroup = $('.input-group.input-group--text-field.primary--text');

            if(usernameValue === '' || joinUserName === "") {
                inputGroup.removeClass('input-group--focused').removeClass('input-group--dirty');
            }
            else {
                inputGroup.removeClass('input-group--focused').addClass('input-group--dirty');
            }
        }
    }
    handleInputGroupClasses();
});


$('body').on('click', '.dsfg', function() {
    $('#mobileNumber').val('');
    $('#mobileNumber').focus();
});

//Zero intially restrict
function intialzerorestrict(event) {
    // Get the input element
    var inputElement = event.target;
    var value = inputElement.value.trim();
    if (value.length > 0 && value.charAt(0) === '0') {
        inputElement.value = value.substring(1);
    }
}


if(window.location.href.includes("live-casino") || window.location.href.includes("slots")) {
    $('.mobile-footer-tab-wrappper li[data-liname="game"]').addClass('jrk_foot_active');
    $('.mobile-footer-tab-wrappper li.home').removeClass('jrk_foot_active');

    $('body').on('click','.before-login-header .secondaryToolbar .navigation li a.active', function(){
        $('.mobile-footer-tab-wrappper li[data-liname="game"]').addClass('jrk_foot_active');
    });
} else  {
    $('.mobile-footer-tab-wrappper li[data-liname="game"]').removeClass('jrk_foot_active');
}

if(window.location.href.includes("tournments")) {
    $('.mobile-footer-tab-wrappper li.tournament').addClass('jrk_foot_active');
    $('.mobile-footer-tab-wrappper li.home').removeClass('jrk_foot_active');

    $('body').on('click','.before-login-header .secondaryToolbar .navigation li a.active', function(){
        $('.mobile-footer-tab-wrappper li.tournament').addClass('jrk_foot_active');
    });
} else  {
    $('.mobile-footer-tab-wrappper li.tournament').removeClass('jrk_foot_active');
}

var menuItems = $('#dra .drawer-links ul.ulioi li a');

menuItems.each(function(index, element) {
    var href = $(element).attr('href');
    if(window.location.href.includes(href)) {
        $('.mobile-footer-tab-wrappper li').removeClass('jrk_foot_active');
    }
});

if(window.location.href.includes("promotions")) {
    $('.mobile-footer-tab-wrappper li').removeClass('jrk_foot_active');
}
// $('body').on('click', '.date_search', function(){
//     $(this).hide();
//     $('.date_close').show();
// });

// $('body').on('click', '.date_close', function(){
//     $(this).hide();
//     $('.date_search').show();
// });
// IOS devices type Date Placeholder*/
var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function applyIOSCSS() {
    var style = document.createElement('style');
    style.textContent = `
        input[type="date"].ios_placeholder::before {
            content: attr(placeholder);
            text-align: center;
            width: 0;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}
// Apply CSS rules if the device is iOS
if (isIOS) {
      $('body').on('click', '.from_date, .to_date', function(){
        $(this).find('.input_date_new.ios_placeholder').removeClass('ios_placeholder');
    });
    applyIOSCSS();
}

function phnoeModal(){
    var phone_popup = $('#phonepopup:visible');
    if(phone_popup.length === 1 || phone_popup.length === 2){
            $('body').addClass('back_scrl_stop')
    }
    else{
        $('body').removeClass('back_scrl_stop')
    }
}
phnoeModal();
$('body').on('click', '.phone_modal_close_button', function() {
    $('body').removeClass('back_scrl_stop')
});

 $('body').on('click', '.passwrd_modal_close_button', function() {
     $('body').removeClass('visible').removeAttr('style');
     $('.password_popup').hide();
 });

 function openPasswordPopup(){
     if(!location.search.includes('profileMain') && !location.pathname.includes('verify-account')){
        $('.password_popup').show().css('z-index', '1000');
     }
 }

 $('body').on('click', '.phone_popup .phone_close-button', function() {
    $('body').removeClass('visible').removeAttr('style');
    $('.phone_popup').hide();
});


function openPhonePopup(){
    if(!location.search.includes('profileMain') && !location.pathname.includes('verify-account')){
        $('.phone_popup').show().css('z-index',1000)
    }
}


 function resetPasswordPopup(){
    $('body').removeClass('visible').removeAttr('style');
    $('.password_popup').hide();

    $.ajax({
        url: '/setcookiepasswordpopup',
        type: 'post',
         beforeSend: function (request) {
                return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
        success: function(response) {

        },
        error: function(response) {
            if (response.status == 419) {
                notify(getLang("Something went wrong"));
            } else if (response.status == 429) {
                notify(getLang("Something went wrong"));
            } else {
                notify(getLang("Something went wrong"));
            }
        }

    });
 }



 function resetPhonePopup(){
    $('body').removeClass('visible').removeAttr('style');
    $('body').removeClass('back_scrl_stop');
    $('.phone_popup').hide();

    $.ajax({
        url: '/setcookiephonepopup',
        type: 'post',
         beforeSend: function (request) {
                return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
        success: function(response) {
        },
        error: function(response) {
            if (response.status == 419) {
                notify(getLang("Something went wrong"));
            } else if (response.status == 429) {
                notify(getLang("Something went wrong"));
            } else {
                notify(getLang("Something went wrong"));
            }
        }
});
 }

 $(".verifymobileNumber").on("input", function() {
    var mobileNumber = $(this).val();
    var firstDigit = mobileNumber.charAt(0);
    if (mobileNumber !='' && firstDigit < "6" || firstDigit > "9") {
        notify(getLang("Invalid Phone Number, Phone number must start with a digit from 6 to 9"), 'danger');
        $(this).val("");
    }
    }).on("keypress", function(event) {
    var charCode = event.which ? event.which : event.keyCode;
    var charTyped = String.fromCharCode(charCode);
    if (!/^\d$/.test(charTyped) && charCode !== 8) {
        event.preventDefault();
    }
});



var activeLi = $('.sb_baner_active a.active:first');
if (activeLi.length > 0) {
  console.log(activeLi.length > 0);
    var position = activeLi.position();
    scroll = $(".sb_baner_active").scrollLeft();
        $(".sb_baner_active").animate(
        {
            scrollLeft: scroll + position.left - 60
        },200);
} else {
    // console.log('No active list item found.');
}

/*amount append */
$('body').on('click', '.depo_quickamounts li', function() {
    let amtVal = $(this).data('amount');
    $(this).addClass('active').siblings().removeClass('active');
    $('.depo_amt:visible').val(amtVal);
    var container = $(this).closest('.depo_quickamounts').find('ul');
    var element = $(this);
    if (container.length && element.length) {
        var containerRect = container[0].getBoundingClientRect();
        var elementRect = element[0].getBoundingClientRect();
        var currentScrollLeft = container.scrollLeft();
        var scrollLeft = currentScrollLeft + elementRect.left - containerRect.left - (containerRect.width - elementRect.width) / 2;
        container.animate({scrollLeft: scrollLeft}, 500);
    }
});

$(document).ready(function(){
    amountHighlight();
});

function amountHighlight(){
    let amount =$('.depo_amt:visible').val();
    let defaultVal = [101, 1000, 2000, 5000,10000,20000,50000,100000];
    if (defaultVal.includes(parseInt(amount))) {
        $(`.depo_quickamounts li[data-amount='${amount}']`).addClass('active').siblings().removeClass('active');
    }else{
        $(`.depo_quickamounts li`).removeClass('active');
    }
}

$('body').on('keyup input','.depo_amt',function (e) {
    let val = $(this).val();
    let defaultVal = [101, 1000, 2000, 5000,10000,20000,50000,100000];
    if (defaultVal.includes(parseInt(val))) {
        $(`.depo_quickamounts li[data-amount='${val}']`).addClass('active').siblings().removeClass('active');
    }else{
        $(`.depo_quickamounts li`).removeClass('active');
    }
});

$('body').on('click', '.low_liq .info-icon,.sus .info-icon,.closed .info-icon', function() {
    $('body').addClass('back_scrl_stop');
});

$('body').on('click', '.multi-close.close-button', function() {
    $('body').removeClass('back_scrl_stop');
});

$('body').on('click', '.reset_btn.cancel-button', function() {
    $('body').removeClass('back_scrl_stop');
});

if(window.location.href.includes('contactus')) {
    $('.mobile-footer-tab-wrappper ul li.home').removeClass('jrk_foot_active');
}

$("#affmobileNumber").on("input", function() {
    var mobileNumber = $(this).val();
    var firstDigit = mobileNumber.charAt(0);
    if (mobileNumber !='' && firstDigit < "6" || firstDigit > "9") {
        notify(getLang("Invalid Phone Number, Phone number must start with a digit from 6 to 9"), 'danger');
        $(this).val("");
    }
    }).on("keypress", function(event) {
    var charCode = event.which ? event.which : event.keyCode;
    var charTyped = String.fromCharCode(charCode);
    if (!/^\d$/.test(charTyped) && charCode !== 8) {
        event.preventDefault();
    }
});
var container = $('.scrolling-text-container');
var text = $('.scrolling-text');
var containerWidth = container.width();
var textWidth = text.width();
var duration;
if ($(window).width() > 768) {
   duration = (textWidth / containerWidth) * 25; // For desktop
} else {
   duration = (textWidth / containerWidth) * 10; // For mobile
}
text.css('animation', 'marquee ' + duration + 's linear infinite');
container.hover(
   function() {
         text.css('animation-play-state', 'paused');
   },
   function() {
         text.css('animation-play-state', 'running');
   }
);

$('body').on('click','.ovrflw_btn',function(event) {
    setTimeout(function() {
        $('html').addClass('overflow_intly');
    }, 100);
});
$('body').on('click','.close',function(event) {
    $('html').removeAttr('class');
});
$(document).on('click',function(event) {
    if (!$(event.target).closest('.modal-content').length) {
        $('html').removeAttr('class');
    }
});

setTimeout(() => {
    if ($("#phonepopup:visible").length != 0) {
        $('html').addClass('overflow-hidden');
    } else {
        $('html').removeClass('overflow-hidden');
    }
}, 1000);

$('body').on('click','.phone-model-content,.cancel-btn',function(){
$('html').removeClass('overflow-hidden');
});
$('body').on('click','.clck_rotateBtn',function(){
    $('.clck_rotate').addClass('clck_rotate_img');
        setTimeout(function () {
            $('.clck_rotate').removeClass('clck_rotate_img');
        },2000)
});

$('body').on('click','.sportsbook-header .search-modal .casinoLink',function() {
    $('body').prepend('<div class="overlay overlay--active" style="z-index: 201; opacity: 0.9; background-color: #212121;"></div>');
    $('.before-login-body .sb-login-modal').css({
        'pointer-events': 'auto',
        'touch-action': 'none'
    });
});

$('body').on('click', '.loginModal-wrapper .login-mobile-close', function() {
    $('.overlay.overlay--active').remove();
});

$('body').on('click', '.bg_scrollstop', function() {
    setTimeout(function() {
    $('html').addClass('over_flow_hidden');
    },10);
});

$('body').on('click', '.close', function() {
    $('html').removeClass('over_flow_hidden');
});

$('body').on('click', function(event) {
    setTimeout(function() {
        if ($(event.target).closest('.modal-content').length === 0 && !$(event.target).hasClass('bg_scrollstop')) {
            $('html').removeClass('over_flow_hidden');
        }
    }, 10);
});


// scroll indicator for based on tab scroll
const scrollableContent = document.querySelector('.scrollableContent');
const scrollIndicator = document.getElementById('scrollIndicator');
const scrollIndicatorContainer = document.querySelector('.scroll-indicator-container');
function updateScrollIndicator() {
    const scrollLeft = scrollableContent.scrollLeft;
    const scrollWidth = scrollableContent.scrollWidth - scrollableContent.clientWidth;

    // Check if there is no scrollable content
    if (scrollWidth <= 0) {
        scrollIndicatorContainer.style.display = 'none'; // Hide the container
    } else {
        scrollIndicatorContainer.style.display = 'block'; // Show the container
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        scrollIndicator.style.width = scrollPercentage + '%';
    }
}
// Initial scroll position
window.addEventListener('load', () => {
    const initialScrollPercentage = 2; // Set the initial scroll percentage

    if(scrollableContent) {
        const scrollWidth = scrollableContent.scrollWidth - scrollableContent.clientWidth;

        // Check if there is no scrollable content
        if (scrollWidth <= 0) {
            scrollIndicatorContainer.style.display = 'none'; // Hide the container
        } else {
            scrollIndicatorContainer.style.display = 'block'; // Show the container
            const initialScrollPosition = (initialScrollPercentage / 100) * scrollWidth;
            scrollableContent.scrollLeft = initialScrollPosition;
            updateScrollIndicator();
        }
    }
});

if(scrollableContent) {
    scrollableContent.addEventListener('scroll', updateScrollIndicator);
}

document.addEventListener('DOMContentLoaded', function() {
    const openLoginModalButton = document.querySelector('.openLoginModal');
    const modalCloseBtn = document.querySelector('.closeBtn');
    if (openLoginModalButton) {
    openLoginModalButton.addEventListener('click', function() {
        document.getElementById('overlay_layer').style.display = 'block';
        document.querySelector('.loginModal').style.display ="block";
        document.documentElement.style.overflow = 'hidden';
        disableOutsideClicks();
    });
    }
    if(modalCloseBtn){
    modalCloseBtn.addEventListener('click', function() {
        document.getElementById('overlay_layer').style.display = 'none';
        document.documentElement.style.overflow = '';
        enableOutsideClicks();
    });
    }
function disableOutsideClicks() {
    document.getElementById('overlay_layer').addEventListener('click', preventOutsideClick);
}
function enableOutsideClicks() {
    document.getElementById('overlay_layer').removeEventListener('click', preventOutsideClick);
}
function preventOutsideClick(event) {
    event.stopPropagation();
}
});
if(performance.navigation.type == 2){    
    location.reload(true);
}



