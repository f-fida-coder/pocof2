
//Search filter start here
var wizard_recent_searches_key = 'shdbsjd';
var wizard_recent_searches = {};
var wizardSearchGameTimeout;
var wizard_search_data='';
var ifFirstTime =true;

if (localStorage.getItem(wizard_recent_searches_key)) {
    wizard_recent_searches = JSON.parse(localStorage.getItem(wizard_recent_searches_key));
} else {
    // console.log(wizard_recent_searches_key + " not found");
}

function getWizardIdentifier(str) {
    str=str.replaceAll('_','');
    str=str.replaceAll('/','');
    str=str.replaceAll('{','');
    str=str.replaceAll('=','');
    str=str.replaceAll(', ','');
    str=str.replaceAll('}','');
    str=str.replaceAll('.','');
    str=str.replaceAll(':','');
    str=str.replaceAll('+','');
    str=str.replaceAll(' ','');
    return str;
}

function getWizardRecentData() {
    if (localStorage.getItem(wizard_recent_searches_key)) {
        wizard_recent_searches = JSON.parse(localStorage.getItem(wizard_recent_searches_key));
    }
    else {
        wizard_recent_searches ={};
    }
    return wizard_recent_searches;
}

function addToWizardSearch(data) {
    wizard_recent_searches[data.key] = data;
    // wizard_recent_searches.push(data);
    localStorage.setItem(wizard_recent_searches_key, JSON.stringify(wizard_recent_searches));
}

function removeFromWizardSearch(index) {
    if (index == 'all') {
        wizard_recent_searches = {};
    }
    else {
        delete wizard_recent_searches[index];
    }
    localStorage.setItem(wizard_recent_searches_key, JSON.stringify(wizard_recent_searches));
}

$("body").on('click','.be_search_wizard',function() {
        $('.search-clear').hide();
    $('.search-after').hide();
    $('.search-loader').hide();
    $('.no-search').show();
    $('.search-input-box').blur();
    $('.search-ex').removeClass('srch-tab-active');
    $('.search-ex[data_type=ex]').addClass('srch-tab-active');
    $('.search-input-box').val('')
    if ($(this).hasClass('loadData')) {
        preloader(1);
        $('.be_search_wizard_container').load('/getSearchWizard',function(){
            $('.be_search_wizard_container #modal-container').css('display', 'block')
            $('.be_search_wizard').removeClass('loadData');
            preloader(0);
        });
    }
    else {
        $('.be_search_wizard_container #modal-container').css('display', 'block')
    }
})

  $('body').on('keyup change input','.search-input-box',function(){
    wizard_search_data =$(this).val();
    wizardDebounce(wizardSearchGameOnKeyUp, 350);

  });


  function wizardDebounce(func, delay) {
      clearTimeout(wizardSearchGameTimeout);
      wizardSearchGameTimeout = setTimeout(func, delay);
  }

  // Function to perform AJAX call
  function wizardSearchGameOnKeyUp() {
    if($('.search-input-box').val().trim().length ==0){
        $('.search-after').hide();
        $('.no-search').hide();
        $('.search-clear').show();
        $('.search-ex[data_type=ex]').click();
        getRecentDataContainer()
        return false;
    }
    $('.no-search').hide();$('.search-clear').hide();
    $('.search-tab-results').hide();$('.search-after').show();
    $('.search-ex').css('pointer-events','none');$('.search-loader').show();
    $.ajax({
        type:'post',
        url: '/getSearchEvents?q='+$('#searchInput').val().trim(),
        data:{'_token': $('meta[name="csrf-token"]').attr('content')},
        success: function(data){
         makeSeachContainer(data)
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


 function makeSeachContainer(responce){
         let html='';let sb_sportname,ex_sportname ='';
         let shedule_date='';
                html +=  `<h4>${getLang('Search Result for')} '${wizard_search_data}'</h4>
                        <div class="search-ex-results active" id="tab1">`;
                if(responce.data.ex.length > 0){
                $('.search-tabs .search-ex[data_type=ex]').show();
                $.each(responce.data.ex,function (k,v) {
                    ex_sportname =getWizardIdentifier(exGameType[v['eventType']]).toLowerCase();
                html +=   ` <div class="ex-content seachcontainer_data" data_type="ex" data-id="${v['event_id']}">
                                <div class="ex-content-main ex_redirect" data_eventId="${v['event_id']}">
                                    <div class="logo-sports sport_img recent_casino">
                                        <img src="https://d3htdx7djhryaf.cloudfront.net/rjm/search_wizard/sport_icons/color/${ex_sportname}.svg" alt="${ex_sportname}" onerror="this.onerror=null; this.src='https://d3htdx7djhryaf.cloudfront.net/rjm/search_wizard/sport_icons/color/error_icon.svg'">
                                    </div>
                                    <div class="ex-sports-title">
                                        <div class="sports_name"> ${v['name']}</div>
                                        <div class="ex-sports-time sports_time"> ${v['date']}</div>
                                    </div>
                                </div>
                            </div>`;
                });
                }else{
                    // if(!$('.search-tabs .search-ex[data_type=ex]').hasClass('srch-tab-active')){
                    //   $('.search-tabs .search-ex[data_type=ex]').hide();
                    // }
                        html +=` <div class="search-no-result">
                                <h4>${getLang("No result found")}</h4>
                                <p>${getLang('Try searching again with different keywords')}</p>
                            </div>`;

                }
                // <h4>${getLang("No result found for")} ‘${wizard_search_data}’ </h4>

              html +=  `</div>
              <div class="search-ex-results" id="tab2">`;
              if(responce.data.sb.data.length > 0){
              $('.search-tabs .search-ex[data_type=sb]').show();
              $.each(responce.data.sb.data,function (k,v) {
                sb_sportname = getWizardIdentifier(v['sport_name']).toLowerCase();
                html +=  `  <div class="ex-content seachcontainer_data" data_type="sb" data-id="${v['event_id']}">
                                <div class="ex-content-main sb_redirect" data_eventId="${v['event_id']}">
                                    <div class="logo-sports sport_img recent_casino">
                                    <img src="https://d3htdx7djhryaf.cloudfront.net/rjm/search_wizard/sport_icons/color/${sb_sportname}.svg" alt="${sb_sportname}" onerror="this.onerror=null; this.src='https://d3htdx7djhryaf.cloudfront.net/rjm/search_wizard/sport_icons/color/error_icon.svg'">
                                    </div>
                                    <div class="ex-sports-title">`;
                                    if(v['event_id'].includes('sr:match')){
                                        html += `<div class="sports_name"> ${v['home_team_name']} vs ${v['away_team_name']}</div>`;
                                    }else{
                                        html += `<div class="sports_name"> ${v['season_name']}</div>`;
                                    }
                                  shedule_date = moment(v["scheduled_at"], 'YYYY-MM-DD HH:mm:ss').format('dddd D MMM YYYY, h:mm A');

                        html +=  ` <div class="ex-sports-time sports_time"> ${shedule_date}</div>
                                    </div>
                                </div>
                            </div>`;
                        });
                }else{
                    // if(!$('.search-tabs .search-ex[data_type=sb]').hasClass('srch-tab-active')){
                    //   $('.search-tabs .search-ex[data_type=sb]').hide();
                    // }
                    html +=` <div class="search-no-result">
                            <h4>${getLang('No result found for')} ‘${wizard_search_data}’ </h4>
                            <p>${getLang('Try searching again with different keywords')}</p>
                        </div>`;
                }
               html +=  `   </div>
                        <div class="search-ex-results" id="tab3">
                        <div class="casino-content">`;
                        if(responce.data.cg.data.length > 0){
                        $('.search-tabs .search-ex[data_type=cg]').show();
                        $.each(responce.data.cg.data,function (k,v) {
                        html +=`<div class="casino-card seachcontainer_data" data_type="cg" data-provider="${v['provider']}" data-link="${v['id']}" data-id="casino${(v['id'])}">
                                    <div class="casino-wrapper casinoLink sport_img" data-link="${v['id']}" data-provider="${v['provider']}" data-type="casino_game">
                                        <img src="${v['image']}" alt="diamond rush">
                                    </div>
                                    <div class="ex-sports-title" style="display:none">
                                        <div class="sports_name"> ${v['name']}</div>
                                        <div class="ex-sports-time sports_time"> ${v['date']}</div>
                                    </div>
                                </div>`;

                        });
                    }else{
                        // if(!$('.search-tabs .search-ex[data_type=cg]').hasClass('srch-tab-active')){
                        //  $('.search-tabs .search-ex[data_type=cg]').hide();
                        // }
                        html +=` <div class="search-no-result">
                                <h4>${getLang("No result found for")} ‘${wizard_search_data}’ </h4>
                                <p>${getLang("Try searching again with different keywords")}</p>
                            </div>`;
                    }
                    html +=`</div>
                        </div>
                        <div class="search-ex-results" id="tab4">
                        <div class="casino-content">`;
                        if(responce.data.sl.data.length > 0){
                        $('.search-tabs .search-ex[data_type=sl]').show();
                        $.each(responce.data.sl.data,function (k,v) {
                            html +=`<div class="casino-card  seachcontainer_data" data_type="sl" data-link="${v['id']}" data-provider="${v['provider']}" data-id="slots${(v['id'])}">
                                        <div class="casino-wrapper casinoLink sport_img" data-link="${v['id']}" data-provider="${v['provider']}" data-game_type="slots">
                                            <img src="${v['image']}" alt="diamond rush">
                                        </div>
                                        <div class="ex-sports-title" style="display:none">
                                            <div class="sports_name"> ${v['name']}</div>
                                            <div class="ex-sports-time sports_time"> ${v['date']}</div>
                                        </div>
                                    </div>`;

                        });
                        }else{
                            // if(!$('.search-tabs .search-ex[data_type=sl]').hasClass('srch-tab-active')){
                            //     $('.search-tabs .search-ex[data_type=sl]').hide();
                            // }

                            html +=` <div class="search-no-result">
                                    <h4>${getLang('No result found for')} ‘${wizard_search_data}’ </h4>
                                    <p>${getLang('Try searching again with different keywords')}</p>
                                </div>`;
                        }
                html +=`  </div>`;
                    $('.search-tab-results').html(html);
                    if(ifFirstTime){
                        ifFirstTime =false;
                        if(responce.data.ex.length == 0 ){
                            if(responce.data.sb.data.length > 0){
                                $('.search-ex[data_type=sb]').click();
                            }else if(responce.data.cg.data.length > 0){
                                $('.search-ex[data_type=cg]').click();
                            }else if(responce.data.sl.data.length > 0){
                                $('.search-ex[data_type=sl]').click();
                            }else{
                                $('.srch-tab-active').click();
                            }
                        }
                    }
                    else{ $('.srch-tab-active').click(); }
                    $('.search-loader').hide();
                    $('.search-ex').css('pointer-events','auto');
                    $('.search-tab-results').show();

 }

$('body').on('click', '.search-closeIcon', function() {
    $('.search-closeIcon').val('');
    $('.search-after').hide();
    $('.no-search').hide();
    $('.search-clear').show();
    getRecentDataContainer()
});

function getRecentDataContainer(){
    let html = '';let redirct_class='';let cs_type="";
    let obj_length=Object.keys(wizard_recent_searches).length;
    wizard_recent_searches= getWizardRecentData();
    if (obj_length > 0) {
            html += `<div class="search-clear-title">
                <h4>${getLang('Recent searches')}</h4>`;
            if (obj_length > 0) {
                html += `<p class="clear_recent_data">${getLang('Clear all')}</p>`;
            }
            html += `</div>`;
        $.each(wizard_recent_searches, function(k, data) {
            if (Object.keys(data).length != 0) {
            let data_time = data['sports_time'];
            if (data['game_type'] == "cg" || data['game_type'] == "sl") {
                data_time = data['sports_provider'];
                redirct_class="casinoLink live-game-icon"
                cs_type = data['game_type'] == "cg" ? "casino_game" : "slots";
            }
            if(data['game_type'] == "ex"){ redirct_class="ex_redirect"; }
            if(data['game_type'] == "sb"){ redirct_class="sb_redirect"; }
            html += `<div class="ex-content">
                        <div class="ex-content-main ${redirct_class}" data_eventId="${k}" data-link="${data['link']}" data-provider="${data['sports_provider']}" data-game_type="${cs_type}">
                            <div class="logo-sports recent_casino blackIconGame">
                                ${data['sport_img']}
                            </div>
                            <div class="ex-sports-title">
                                <div>${data['sports_name']}</div>
                                <div class="ex-sports-time">${data_time}</div>
                            </div>
                        </div>
                        <span class="clear-all-close remove_recent_data" data_index="${k}"><img src="https://d3htdx7djhryaf.cloudfront.net/rjm/header_search/close.svg" loading="lazy" alt="" width="18"></span>
                    </div>`;

            }
        });
    } else {
        html += `<div class="search-no-result">
                    <h4>${getLang('Bet on your strengths')}</h4>
                    <p>${getLang('Search for team, events, matches and more')}</p>
                </div>`;
    }

    // Clear the content of .search-clear before appending new HTML content
    $('.search-clear').html('');

    // Append the new HTML content to .search-clear
    $('.search-clear').html(html);
}
$('body').on('click','.ex-content .remove_recent_data',function(){
   let index ='';
   index= $(this).attr('data_index');
   $(this).parents('.ex-content').remove();

   removeFromWizardSearch(index);

});


 $('body').on('click','.clear_recent_data',function(){

    removeFromWizardSearch('all');

    let html='';
    // html+= `<div class="search-clear-title">
    //             <h4>${getLang('Recent searches')}</h4>
    //         </div>`;
    html+=` <div class="search-no-result">
                <h4>${getLang('Bet on your strengths')} </h4>
                <p>${getLang('Search for team, events, matches and more')}</p>
             </div>`;
    $('.search-clear').html(html);
 });

 $('body').on('click','.seachcontainer_data',function(){
    let data = {};
    data['key'] =$(this).attr('data-id');
    data['link'] =$(this).attr('data-link');
    data['game_type'] =$(this).attr('data_type');
    data['sport_img'] = $(this).find('.sport_img').html();
    data['sports_name'] = $(this).find('.sports_name').html();
    data['sports_time'] = $(this).find('.sports_time').html();
    data['sports_provider'] = $(this).attr('data-provider');

    addToWizardSearch(data);

  });





  $('body').on('click', '.sb_redirect', function() {
    let event_id=$(this).attr('data_eventId');
    let url='/sb/event/'+event_id;
    window.location.href=url;
});
$('body').on('click', '.ex_redirect', function() {
    let event_id=$(this).attr('data_eventId');
    let url='/ex/sports-detail/'+event_id;
    window.location.href= url;
});

$("body").on('focus','.search-input-box',function(){
    if($('.search-input-box').val().trim().length ==0){
        $('.search-loader').hide();
        $('.no-search').hide();
        $('.search-after').hide();
        $('.search-clear').show();
        getRecentDataContainer()
    }
});
