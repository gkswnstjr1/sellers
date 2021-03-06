/////////////////////////////////////////////////////////////////////////////////////
//공통
/////////////////////////////////////////////////////////////////////////////////////
$('.modalpop').hide();
$('.modal_screen').hide();

/////////////////////////////////////////////////////////////////////////////////////
//바로가기 메뉴 설정 팝업 : 2018-10-18
/////////////////////////////////////////////////////////////////////////////////////
// 설정팝업 띄우기
$('.btn_quickmenu_set').click(function(){ // 설정팝업 띄우기
  $('.modalpop_menuset').show();
  $('.modalpop_screen').show();
  return false;
});

$('.menu_icon_add').click(function(){ // 바로가기 메뉴 추가
  $('.modalpop_menuset').show();
  $('.modalpop_screen').show();
  return false;
});

$('.btn_modalpop_menuset_close').click(function(){ //설정창 닫기
  $('.modalpop_menuset').hide();
  $('.modalpop_screen').hide();
  return false;
});

// 팝업내 Tabmenu 콘트롤
$('.tabMenu_inner>li a.title').click(function(){
  $('.tabMenu_inner>li a.title').removeClass('active');
  $('.tabMenu_inner>li .tab_cont').hide();
  $(this).addClass('active');
  $(this).next().show();
  return false;
});

$('.setmenulist li a').click(function(){ // 메뉴선택
  $(this).toggleClass('active');
  return false;
});

/*$('.btn_reset').click(function(){ // 메뉴선택 초기화
  $('.setmenulist li a').removeClass('active');
  return false;
});*/

/////////////////////////////////////////////////////////////////////////////////////
//로그인페이지 
/////////////////////////////////////////////////////////////////////////////////////
// 아이디/비밀번호 저장 체크 이미지 토글
$('.btn_check').click(function(){
	$('.btn_check img').toggle();
	return false;
});

// 검색영역 
$('.btn_search').click(function(){
	$('.search').show();
});

$('.btn_search_close').click(function(){
	$('.search').hide();
});

/////////////////////////////////////////////////////////////////////////////////////
// 사이드 메뉴 
////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function(){
	// var docHeight=$(document).height(); // 모바일 문서의 높이 체크
	var tarHeight=$(window).height(); // 모바일 브라우저 높이 체크
	$('.sidemenu').css("height",tarHeight);
	$('.sidemenu_schedule').css("height",tarHeight);
	$('.container_pg').css("min-height",tarHeight);	
	tabmenuLiWidth();
	tabmenuLiWidth4();
}).load();

$(window).resize(function(){
	var tarHeight=$(window).height(); 
	$('.sidemenu').css("height",tarHeight);
	$('.sidemenu_schedule').css("height",tarHeight);
}).resize();

$('.btn_sideMenu').click(function(){
	$('.sidemenu').show().animate({left:'0%'},300);
	$('body').css('overflow', 'hidden');
	// $('body').append('<div class="modal_screen"></div>');
	$('.modal_screen').show();
	$('.modal_screen').animate({opacity:'100'},600);
	return false;
});

$('.btn_sidemenu_close').click(function(){
	$('.sidemenu').animate({left:'-85%'},300);
	$('html').css('overflow', 'scroll');
	$('.modal_screen').animate({opacity:'0'},600);
	return false;
});


$('.btn_one').click(function(){
	$(this).next().toggle();
	$(this).find('img').toggle();
	return false;
});

$('.side_gnb a.sideTab').click(function(){
	$('.side_cont').hide();
	$('.side_gnb a.sideTab.active').removeClass('active');
	$(this).next().show();
	$(this).addClass('active');
	return false;
});

// 일정관리 사이드 메뉴
$('.btn_sideMenu_schedule').click(function(){
	$('.sidemenu_schedule').show();
	$('body').css('overflow', 'hidden');
	// $('body').append('<div class="modal_screen"></div>');
	$('.modal_screen').show();
	return false;
});

$('.btn_sideMenu_schedule_close').click(function(){
	$('.sidemenu_schedule').hide();
	$('html').css('overflow', 'scroll');
	$('.modal_screen').hide();
	return false;
});


/////////////////////////////////////////////////////////////////////////////////////
// tabmenu의 리스트 개수에 따른 li의 width값 자동 조절
/////////////////////////////////////////////////////////////////////////////////////
function tabmenuLiWidth(){
	// 상세, 수정페이지 상단 TAb
	var tabmenu_w = $('.tabmenu').width();
	var tabmenu_length = $('.tabmenu li').length;
	var tabmenuLi_w = tabmenu_w/tabmenu_length;
	$('.tabmenu li').width(tabmenuLi_w);

	// 하단 고정버튼 영역 TAb
	// var pg_bottom_func_w = $('.pg_bottom_func').width();
	// var pg_bottom_func_length = $('.pg_bottom_func li').length;
	// var pg_bottom_funcLi_w = pg_bottom_func_w/pg_bottom_func_length;
	// $('.pg_bottom_func li').width(pg_bottom_funcLi_w);
};

function tabmenuLiWidth4(){
	// 상세, 수정페이지 상단 TAb
	var tabmenu_w4 = $('.tabmenu_type4').width();
	var tabmenu_length4 = $('.tabmenu_type4 li').length;
	var tabmenuLi_w4 = tabmenu_w4/tabmenu_length4;
	$('.tabmenu_type4 li').width(tabmenuLi_w4);
	// alert(tabmenu_length4);
};

$( window ).resize(function() {
	// 탭 메뉴 width값 컨트롤 
  	tabmenuLiWidth();
  	tabmenuLiWidth4();
});


/////////////////////////////////////////////////////////////////////////////////////
// 드롭다운 메뉴
/////////////////////////////////////////////////////////////////////////////////////
$('.dropdown-toggle').click(function(){
	// $('.dropdown-menu').toggle();
	$(this).next().toggle();
	$('.caret').toggleClass('caret_up');
});


/////////////////////////////////////////////////////////////////////////////////////
// 일정추가 옵션 컨트롤 
/////////////////////////////////////////////////////////////////////////////////////
//종일
/*
var sch_option = 0;
$('.option_dayfull').click(function(){
	sch_option++;
	if(sch_option%2 == 1){
		$('.daytime select').attr('disabled','');
		$('.daytime select').css('background','#ddd');
	}
	if(sch_option%2 == 0){
		$('.daytime select').removeAttr('disabled','');	
		$('.daytime select').css('background','#fff');
	}
	
});
*/
/*
// 반복
$('.option_repeat').click(function(){
	$('.repeat_option').toggle();
});

// 이동소요시간
$('.option_movetiime').click(function(){
	$('.move_time').toggle();
});
*/


// modal 팝업 컨트롤
function modalpop_open(){
	$('.modalpop').show();
	$('.modal_screen').show();
};
function modalpop_close(){
	$('.modalpop').hide();
	$('.modal_screen').hide();
	$('.daysch_list_pop').hide();//월별 일정 모달팝업 가리기
};

$('.btn-customAdd').click(function(){
	modalpop_open();
	return false;
});

$('.btn_modal_close').click(function(){
	modalpop_close();
	return false;
});

$('.modal_screen').click(function(){
	$('.sidemenu').animate({left:'-85%'},300);
	modalpop_close();
	$('.sidemenu').hide();
	$('.sidemenu_schedule').hide();
	$('html').css('overflow', 'scroll');
	return false;
});


// 직원검색 영역 ---
$('.f_invite').click(function(){
	$('.invite_option').toggle();
	return false;
});
$('.invite-area .btn-search').click(function(){
	$('.invite-member-pop').show();
	return false;
});
$('.invite-member-pop .close').click(function(){
	$('.invite-member-pop').hide();
});


// 검색 : 파트너, 직원
$('.search_input_after .btn_search_pop').click(function(){
	$('.search_input_after_pop').show();
	// modalpop_open();
	return false;
});

$('.search_input_after_pop .close').click(function(){
	$('.search_input_after_pop').hide();
	// modalpop_close();
	return false;
});


// 컨텍선택
$('.btn_contact_sel').click(function(){
	$(this).toggleClass('active');
	return false;
});


// 월별 캘린더화면에서 일별 일정 팝업
$('.schedule_table td').click(function(){
	$('.daysch_list_pop').show();
	$('.modal_screen').show();
});


//파일첨부 2017-02-09 //////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
  var fileTarget1 = $('.filebox01 .upload_hidden1');
  var fileTarget2 = $('.filebox02 .upload_hidden2');

  fileTarget1.on('change', function(){  // 값이 변경되면
    if(window.FileReader){  // modern browser
      var filename = $(this)[0].files[0].name;
    } 
    else {  // old IE
      var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
    }
    
    // 추출한 파일명 삽입
    $(this).siblings('.upload_name1').val(filename);
  });

  fileTarget2.on('change', function(){  // 값이 변경되면
    if(window.FileReader){  // modern browser
      var filename = $(this)[0].files[0].name;
    } 
    else {  // old IE
      var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
    }
    
    // 추출한 파일명 삽입
    $(this).siblings('.upload_name2').val(filename);
  });

}); 



function fncGoBack(){
	window.history.go(-1);
}

$(document).ready(function() {
	//fncNoticeCount();
	//fncNoticeDetail();
});


function numberWithCommas(_num) {
    var parts = _num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


function undefinedCheck(_param) {
    // 목표일과 완료일 undefined 체크
    if (typeof _param != "undefined") {
        return _param;
    } else {
        return "";
    }
}




//############################## 이하 pc버전의 common.js 소스를 가져옴
//LTRIM
String.prototype.ltrim = function() {
  var re = /\s*((\S+\s*)*)/;
  return this.replace(re, "$1");
};

//RTRIM
String.prototype.rtrim = function() {
  var re = /((\s*\S+)*)\s*/;
  return this.replace(re, "$1");
};

//TRIM
String.prototype.trim = function() {
  return this.ltrim().rtrim();
};

//replaceALL
String.prototype.replaceAll = function(str1, str2) {
  var temp = this;

  while (1) {
      if (temp.indexOf(str1) != -1)
          temp = temp.replace(str1, str2);
      else
          break;
  }
  return temp;
};

//쿠키 생성
function setCookie(cName, cValue, cDay){
  var expire = new Date();
  expire.setDate(expire.getDate() + cDay);
  cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
  if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
  document.cookie = cookies;
}

//쿠키 가져오기
function getCookie(cName) {
  cName = cName + '=';
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = '';
  if(start != -1){
      start += cName.length;
      var end = cookieData.indexOf(';', start);
      if(end == -1)end = cookieData.length;
      cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}

//공백 및 널 체크
function isEmpty(value){
  if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
      return true
  }else{
      return false
  }
};

//필드 초기화
function filedReset(obj){
  obj.find('input').val(null);
  obj.find('textarea').text(null);
  obj.find('select option:first').prop("selected",true);
  obj.find('input:checkbox').prop("checked",false);
}

//새창띄우기
function fncOpenPanel(strUrl, inrWidth, intHeight) {
  var newp = "width=" + inrWidth + ", height=" + intHeight + ", directories=no, scrollbars=no, resizable=yes";
  window.open(strUrl, "new", newp);
}

//새창띄우기 스크롤
function fncOpenPanel_SC(strUrl, inrWidth, intHeight) {
  var newp = "width=" + inrWidth + ", height=" + intHeight + ", directories=no, scrollbars=yes, resizable=no";
  window.open(strUrl, "new", newp);
}

var commonDate = {
      now : new Date(),
      year : new Date().getFullYear(),
      month : (new Date().getMonth()+1)>9 ? ''+(new Date().getMonth()+1) : '0'+(new Date().getMonth()+1),
      day : new Date().getDate()>9 ? ''+new Date().getDate() : '0'+new Date().getDate(),
      quarter : function(month){
          if(isEmpty(month)){
              return Math.ceil( commonDate.month / 3 ); 
          }else{
              return Math.ceil( month / 3 );
          }
      },
      compareDate : function(startDate,endDate){
          var returnFlag = true;
          if((startDate != null && startDate != "") && (endDate != null && endDate != "")){
              alert("시작일이 종료일보다 클 수 없습니다.");
              returnFlag  = false;
          }else if((startDate == null || startDate == "") && (endDate != null && endDate != "")){
              alert("시작일을 선택해 주세요.");
              returnFlag  = false;
          }
          return returnFlag;
      }
}

//파일 업로드 (추후 변경 예정)
var commonFile ={
      fileCount : 0,
      returnIcon : null,
      extension : null,
      checkFileBlank : function(pk){
          if($("#divFileUploadList span[name='modalFile"+pk+"']").length == 0){
              $("#divFileUploadList span.blank-ment").show();
          }
      },
      
      reset : function(){
          $("input[name='fileModalUploadFile[]']").remove();
          $("div.fileUpload.btn.btn-seller").append('<input type="file" name="fileModalUploadFile[]" onchange="commonFile.upload(this);" class="upload"/>');
      },
      
      removeFileElement : function(obj,fileName){
          $("input[name='fileModalUploadFile[]']").each(function(i,v){
              if($(this)[0].files[0]){
                  if(($(this)[0].files[0].name == fileName) && $(this).css("display") == "none"){
                      $(this).remove();
                  }
              }
          });
          $(obj).parent("span[name='spanUploadFile']").remove();
          if($("#divFileUploadList span:visible").not(".blank-ment").length == 0){
              $("#divFileUploadList span.blank-ment").show();
          }
      },
      
      checkExtension : function(fileName){
          commonFile.extension = fileName.split('.').pop().toLowerCase();
          if($.inArray(commonFile.extension, ['jpg','png','gif','jpeg','xls','xlsx','pdf','ppt','pptx','doc','docx','hwp','txt']) == -1) {
              alert("업로드할 수 없는 파일입니다.");
              commonFile.returnIcon = false;
          }else{
              if($.inArray(commonFile.extension, ['jpg','png','gif','jpeg']) != -1){
                  commonFile.returnIcon = 'image';
              }else if($.inArray(commonFile.extension, ['xls','xlsx']) != -1){
                  commonFile.returnIcon = 'excel';
              }else if($.inArray(commonFile.extension, ['pdf']) != -1){
                  commonFile.returnIcon = 'pdf';
              }else if($.inArray(commonFile.extension, ['ppt','pptx']) != -1){
                  commonFile.returnIcon = 'powerpoint';
              }else if($.inArray(commonFile.extension, ['doc','docx','hwp','txt']) != -1){
                  commonFile.returnIcon =  'word';
              }
          }
      },
      
      upload : function(obj){
              var file = $(obj)[0].files[0]
              var fileFlag = true;
              $("#divFileUploadList span:visible").each(function(idx){
                  if(file.name.trim() == $(this).text().trim()){
                      $(obj).remove();
                      $("div.fileUpload.btn.btn-seller").append('<input type="file" name="fileModalUploadFile[]" onchange="commonFile.upload(this);" class="upload"/>');
                      fileFlag = false;
                      return false;
                  }
              });
              if(fileFlag){
                  commonFile.checkExtension(file.name);
                  if(commonFile.returnIcon != false){
                      $("#divFileUploadList span.blank-ment").hide();
                      $(obj).hide();
                      $("div.fileUpload.btn.btn-seller").append('<input type="file" name="fileModalUploadFile[]" onchange="commonFile.upload(this);" class="upload"/>');
                      $("#divFileUploadList").append('<span name="spanUploadFile" style="padding-left:5px;"><i class="fa fa-file-'+commonFile.returnIcon+'-o fa-lg"></i> '+file.name+' <a href="javascript:void(0);" onClick="commonFile.removeFileElement(this,\''+file.name+'\');"><i class="fa fa-times-circle"></i></a></span>');
                  }
              }
      }
} 
  

var commonCheck = {
      onlyNumber : function(obj){
          obj.value=obj.value.replace(/[^0-9]/g,'');
      }
}

var commonSearch = {
  //고객사 자동완성 검색   
  company : function(obj, obj_hidden, obj_id){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "고객사",
          emptyUrl : "/clientManagement/listClientCompanyGate.do?modalReset=1",
          source: function(term, response){
              $.ajax({
                  url: "/common/searchCompanyInfo.do",
                  dataType: "json",
                  data: {
                    companyName: term
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function( item ) {
                                      return {
                                          label: item.COMPANY_NAME,
                                          value: item.COMPANY_ID
                                      }
                              })
                          );  
                  }
              });
          },
          onSelect : function(e, term, item){
              //선택 값 hidden input
              obj_hidden.val($(item).attr("hidden-data"));
              //고객사 ID
              obj_id.val($(item).attr("hidden-data"));
          }
      });
  },
  
  //고객명 자동완성 검색
  customer : function(obj, obj_hidden, obj_rank, obj_companyId){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "고객",
          emptyUrl : "/clientManagement/listClientIndividualGate.do",
          source: function(term, response){
              $.ajax({
                  url: "/common/searchCustomerInfo.do",
                  dataType: "json",
                  data: {
                      customerName: term,
                      companyId : obj_companyId.val()
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function( item ) {
                                      return {
                                          label: item.CUSTOMER_NAME,
                                          value: item.CUSTOMER_ID,
                                          position : item.POSITION,
                                          calendarId : item.COMPANY_NAME
                                      }
                              })
                          );  
                  }
              });
          },
          onSelect : function(e, term, item){
              //선택 값 hidden input
              obj_hidden.val($(item).attr("hidden-data"));
              obj_rank.val($(item).attr("hidden-position"));
          }
      });
  },
  
  //직원명 자동완성 검색
  member : function(obj, hiddenObj){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "직원",
          emptyUrl : null,
          source: function(term, response){
              $.ajax({
                  url: "/common/searchMemberInfo.do",
                  dataType: "json",
                  data: {
                      memberName: term
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function( item ) {
                                      return {
                                          label: item.HAN_NAME,
                                          value: item.MEMBER_ID_NUM
                                      }
                              })
                          );  
                  }
              });
          },
          onSelect : function(e, term, item){
              //선택 값 hidden input
              hiddenObj.val($(item).attr("hidden-data"));
          }
      });
  },
  
  //고객사 자동완성 검색   (그리드)
  companyGrid : function(obj, obj_hidden, obj_id){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "고객사",
          emptyUrl : "/clientManagement/listClientCompanyGate.do?modalReset=1",
          source: function(term, response){
              $.ajax({
                  url: "/common/searchCompanyInfo.do",
                  dataType: "json",
                  data: {
                    companyName: term
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function( item ) {
                                      return {
                                          label: item.COMPANY_NAME,
                                          value: item.COMPANY_ID
                                      }
                              })
                          );  
                  }
              });
          },
          onSelect : function(e, term, item){
              //선택 값 hidden input
              obj_hidden.html($(item).attr("hidden-data"));
              //고객사 ID
              //obj_id.html($(item).attr("hidden-data"));
          }
      });
  },
  
  //고객명 자동완성 검색 (그리드)
  customerGrid : function(obj, obj_hidden, obj_rank, obj_company){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "고객",
          emptyUrl : "/clientManagement/listClientIndividualGate.do",
          source: function(term, response){
              $.ajax({
                  url: "/common/searchCustomerInfo.do",
                  dataType: "json",
                  data: {
                      customerName: term,
                      companyId : obj_company.html()
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function( item ) {
                                      return {
                                          label: item.CUSTOMER_NAME,
                                          value: item.CUSTOMER_ID,
                                          position : item.POSITION
                                      }
                              })
                          );  
                  }
              });
          },
          onSelect : function(e, term, item){
              //선택 값 hidden input
              obj_hidden.html($(item).attr("hidden-data"));
              obj_rank.html($(item).attr("hidden-position"));
          }
      });
  },
  
  //직원명 자동완성 검색 (그리드)
  memberGrid : function(obj,hiddenObj){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "직원",
          emptyUrl : null,
          source: function(term, response){
              $.ajax({
                  url: "/common/searchMemberInfo.do",
                  dataType: "json",
                  data: {
                      memberName: term
                  },
                  success: function( data ) {
                      response( 
                              $.map(data.list, function( item ) {
                                  return {
                                      label: item.HAN_NAME,
                                      value: item.MEMBER_ID_NUM
                                  }
                              })
                      );  
                  }
              });
          },
          onSelect : function(e, term, item){
              hiddenObj.html($(item).attr("hidden-data"));
          }
      });
  },
  
  //파트너사 자동완성 검색
  partner : function(obj,hiddenObj){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "파트너",
          emptyUrl : "/partnerManagement/listPartnerCompanyGate.do?modalReset=1",
          source: function(term, response){
              $.ajax({
                  url: "/common/searchPartnerInfo.do",
                  dataType: "json",
                  data: {
                      companyName: term
                  },
                  success: function( data ) {
                      response( 
                              $.map(data.list, function( item ) {
                                  console.log(item.PARTNER_PERSONAL_NAME);
                                  return {
                                      label: item.COMPANY_NAME,
                                      value: item.PARTNER_ID
                                  }
                              })
                      );  
                  }
              });
          },
          onSelect : function(e, term, item){
              hiddenObj.val($(item).attr("hidden-data"));
          }
      });
  },
  
  //파트너사 자동완성 검색 (그리드)
  partnerGrid : function(obj,hiddenObj){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "파트너",
          emptyUrl : "/partnerManagement/listPartnerCompanyGate.do?modalReset=1",
          source: function(term, response){
              $.ajax({
                  url: "/common/searchPartnerInfo.do",
                  dataType: "json",
                  data: {
                      companyName: term
                  },
                  success: function( data ) {
                      response( 
                              $.map(data.list, function( item ) {
                                  console.log(item.PARTNER_PERSONAL_NAME);
                                  return {
                                      label: item.COMPANY_NAME,
                                      value: item.PARTNER_ID
                                  }
                              })
                      );  
                  }
              });
          },
          onSelect : function(e, term, item){
              hiddenObj.html($(item).attr("hidden-data"));
          }
      });
  },
  
  //파트너 개인 자동완성 검색 (그리드)
  partnerMemberGrid : function(obj,hiddenObj){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "파트너 개인",
          emptyUrl : null,
          source: function(term, response){
              $.ajax({
                  url: "/common/searchPartnerMemberInfo.do",
                  dataType: "json",
                  data: {
                      partner_personal_name: term
                  },
                  success: function( data ) {
                      response( 
                              $.map(data.list, function( item ) {
                                  return {
                                      label: item.PARTNER_PERSONAL_NAME,
                                      value: item.PARTNER_INDIVIDUAL_ID
                                  }
                              })
                      );  
                  }
              });
          },
          onSelect : function(e, term, item){
              hiddenObj.html($(item).attr("hidden-data"));
          }
      });
  },
  
  //캘린더 초대 직원명 자동완성 검색
  calendarMember : function(obj, hiddenObj, memberEMail, memberCalendarId){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "직원",
          emptyUrl : null,
          source: function(term, response){
              $.ajax({
                  url: "/common/searchCalendarMemberInfo.do",
                  dataType: "json",
                  data: {
                      memberName: term
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function( item ) {
                                      return {
                                          label: item.HAN_NAME,
                                          value: item.MEMBER_ID_NUM,
                                          position :item.EMAIL, 
                                          calendarId : item.CALENDAR_ID
                                      }
                              })
                          );  
                  }
              });
          },
          onSelect : function(e, term, item){
              //선택 값 hidden input
              hiddenObj.val($(item).attr("hidden-data"));
              memberEMail.val($(item).attr("hidden-position"));
              memberCalendarId.val($(item).attr("hidden-calendarId"));
          }
      });
  },
  
  //===========================================
  inviteMemberArray : [],
  
  inviteMemberSerch : function(){
      $.ajax({
          url: "/common/selectInviteMemberInfo.do",
          async : false,
          dataType: "json",
          data: {
              memberName: $("#textCommonSearchMultipleMember").val()
          },
          beforeSend : function() {
              if ($("#textCommonSearchMultipleMember").val().length < 2) {
                  alert("검색어를 2글자 이상 입력해 주세요.");
                  return false;
              }
              $.ajaxLoading();
          },
          success : function(data) {
              var memberList = data.list;
              $("ul.member-list").html("");
              if (memberList.length > 0) {
                  for (var i = 0; i < memberList.length; i++) {
                      $("ul.member-list")
                              .append(
                                      "<li><span>"
                                              + memberList[i].HAN_NAME + memberList[i].POSITION_STATUS
                                              + "</span><input type='checkbox' id='checkboxMultipleMember' name='checkboxMultipleMember' onClick='commonSearch.multipleMemberHtml(this)'; value="
                                              + memberList[i].EMAIL + "/" + memberList[i].MEMBER_ID_NUM + "/" + memberList[i].HAN_NAME
                                              + "></input></li>");
                  }
              } else {
                  $("ul.member-list").append(
                          "<li><span>데이터가 없습니다.</span></li>");
              }
          },
          complete : function() {

          },
          error : function() {
              alert("직원 검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  
  inviteMemberSelect : function(eventId) {
      $.ajax({
          url : "/calendar/getInviteMemberList.do",
          async : false,
          data : {
              hiddenModalEventId : eventId
          },
          beforeSend : function() {
          },
          success : function(data) {
              var multimemberList = data.InviteMemberList;
              $("div.member-current").html("");
              if (multimemberList.length > 0) {
                  for (var i = 0; i < multimemberList.length; i++) {
                      $("div.member-current")
                              .append(
                                      '<span id="span_'
                                              + multimemberList[i].SHARE_MEMBER_ID
                                              + '">'
                                              + multimemberList[i].HAN_NAME
                                              + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.partnerIdRemove(\''
                                              + multimemberList[i].SHARE_MEMBER_ID
                                              + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
                      commonSearch.multipleMemberArray
                              .push(multimemberList[i].SHARE_MEMBER_ID);
                  }
              }
          },
          complete : function() {
              $("#hiddenModalMemberList").val(
                      commonSearch.multipleMemberArray);
          },
          error : function() {
              alert("검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  //=============================================
  
  multipleMemberArray : [],
  
  multipleMember : function(){
      $.ajax({
          url: "/common/searchMemberInfo.do",
          async : false,
          dataType: "json",
          data: {
              memberName: $("#textCommonSearchMember").val()
          },
          beforeSend : function() {
              if ($("#textCommonSearchMember").val().length < 2) {
                  alert("검색어를 2글자 이상 입력해 주세요.");
                  return false;
              }
              $.ajaxLoading();
          },
          success : function(data) {
              var memberList = data.list;
              $("ul.member-list").html("");
              if (memberList.length > 0) {
                  for (var i = 0; i < memberList.length; i++) {
                      $("ul.member-list")
                              .append(
                                      "<li><span>"
                                              + memberList[i].HAN_NAME
                                              + "</span><input type='checkbox' id='checkboxMultipleMember' name='checkboxMultipleMember' onClick='commonSearch.multipleMemberHtml(this)'; value="
                                              + memberList[i].MEMBER_ID_NUM
                                              + "></input></li>");
                  }
              } else {
                  $("ul.member-list").append(
                          "<li><span>데이터가 없습니다.</span></li>");
              }
          },
          complete : function() {

          },
          error : function() {
              alert("직원 검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  
  multipleMemberSelect : function(calendarId) {
      $
              .ajax({
                  url : "/calendar/selectShareCalendar.do",
                  async : false,
                  data : {
                      calendarId : calendarId
                  },
                  beforeSend : function() {
                  },
                  success : function(data) {
                      var multimemberList = data.selectShareCalendar;
                      $("div.member-current").html("");
                      if (multimemberList.length > 0) {
                          for (var i = 0; i < multimemberList.length; i++) {
                              $("div.member-current")
                                      .append(
                                              '<span id="span_'
                                                      + multimemberList[i].SHARE_MEMBER_ID
                                                      + '">'
                                                      + multimemberList[i].HAN_NAME
                                                      + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.partnerIdRemove(\''
                                                      + multimemberList[i].SHARE_MEMBER_ID
                                                      + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
                              commonSearch.multipleMemberArray
                                      .push(multimemberList[i].SHARE_MEMBER_ID);
                          }
                      }
                  },
                  complete : function() {
                      $("#hiddenModalMemberList").val(
                              commonSearch.multipleMemberArray);
                  },
                  error : function() {
                      alert("검색을 실패했습니다.\n관리자에게 문의하세요.");
                  }
              });
  },
  
  multipleMemberHtml : function(obj) {
      if ($(obj).prop("checked")) {
          $("div.member-current")
                  .append(
                          '<span id="span_'
                                  + $(obj).val()
                                  + '">'
                                  + $(obj).prev('span').html()
                                  + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.multipleMemberRemove(\''
                                  + $(obj).val()
                                  + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
          commonSearch.multipleMemberArray.push($(obj).val());
      } else {
          $("span#span_" + $(obj).val()).remove();
          commonSearch.multipleMemberRemove($(obj).val());
      }
      $("#hiddenModalMemberList").val(commonSearch.multipleMemberArray);
  },

  multipleMemberRemove : function(val) {
      $("input:checkbox[name='checkboxMultipleMember'][value='" + val + "']").prop(
              "checked", false);
      commonSearch.multipleMemberArray = $.grep(commonSearch.multipleMemberArray, function(
              value) {
          return value != val;
      });
      $("#hiddenModalMemberList").val(commonSearch.multipleMemberArray);
  },
  
  partnerInfo2 : function() {
              $.ajax({
                  url : "/common/searchPartnerInfo.do",
                  async : false,
                  data : {
                      companyName : $("#textCommonSearchPartner").val()
                  },
                  beforeSend : function() {
                      if ($("#textCommonSearchPartner").val().length < 2) {
                          alert("검색어를 2글자 이상 입력해 주세요.");
                          return false;
                      }
                      $.ajaxLoading();
                  },
                  success : function(data) {
                      var companyList = data.list;
                      $("ul.partner-list").html("");
                      if (companyList.length > 0) {
                          for (var i = 0; i < companyList.length; i++) {
                              $("ul.partner-list")
                                      .append(
                                              "<li><span>"
                                                      + companyList[i].COMPANY_NAME
                                                      + "</span><input type='radio' id='radioCompany' name='radioCompany' onClick='commonSearch.partnerHtml2(\""
                                                      + companyList[i].COMPANY_NAME
                                                      + "\","
                                                      + companyList[i].PARTNER_ID
                                                      + ")';/></li>");
                          }
                      } else {
                          $("ul.partner-list").append(
                                  "<li><span>데이터가 없습니다.</span></li>");
                      }
                  },
                  complete : function() {

                  },
                  error : function() {
                      alert("고객사 검색을 실패했습니다.\n관리자에게 문의하세요.");
                  }
              });
  },

  partnerHtml2 : function(companyName, companyId) {
      $("div.partner-current").html("");
      $("div.partner-current")
              .append(
                      '<span>'
                              + companyName
                              + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();$(\'#hiddenModalPartnerId\').val(\'\');"><i class="fa fa-times-circle va_m"></i></a></span>');
      $("#hiddenModalPartnerId").val(companyId);
  },

  companyInfo : function() {
      $
              .ajax({
                  url : "/common/searchCompanyInfo.do",
                  async : false,
                  data : {
                      companyName : $("#textCommonSearchCompany").val()
                  },
                  beforeSend : function() {
                      if ($("#textCommonSearchCompany").val().length < 2) {
                          alert("검색어를 2글자 이상 입력해 주세요.");
                          return false;
                      }
                      $.ajaxLoading();
                  },
                  success : function(data) {
                      var companyList = data.list;
                      $("ul.company-list").html("");
                      if (companyList.length > 0) {
                          for (var i = 0; i < companyList.length; i++) {
                              $("ul.company-list")
                                      .append(
                                              "<li><span>"
                                                      + companyList[i].COMPANY_NAME
                                                      + "</span><input type='radio' id='radioCompany' name='radioCompany' onClick='commonSearch.companyHtml(\""
                                                      + companyList[i].COMPANY_NAME
                                                      + "\","
                                                      + companyList[i].COMPANY_ID
                                                      + ")';/></li>");
                          }
                      } else {
                          $("ul.company-list").append(
                                  "<li><span>데이터가 없습니다.</span></li>");
                      }
                  },
                  complete : function() {

                  },
                  error : function() {
                      alert("고객사 검색을 실패했습니다.\n관리자에게 문의하세요.");
                  }
              });
  },

  companyHtml : function(companyName, companyId) {
      $("div.company-current").html("");
      $("div.company-current")
              .append(
                      '<span>'
                              + companyName
                              + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();$(\'#hiddenModalCompanyId\').val(\'\');"><i class="fa fa-times-circle va_m"></i></a></span>');
      $("#hiddenModalCompanyId").val(companyId);
  },

  partnerArray : [],

  partnerInfo : function() {
      $.ajax({
          url : "/common/searchPartnerInfo.do",
          async : false,
          data : {
              companyName : $("#textCommonSearchPartner").val()
          },
          beforeSend : function() {
              if ($("#textCommonSearchPartner").val().length < 2) {
                  alert("검색어를 2글자 이상 입력해 주세요.");
                  return false;
              }
              //$.ajaxLoading();
          },
          success : function(data) {
              var partnerList = data.list;
              $("ul.company-list").html("");
              if (partnerList.length > 0) {
                  for (var i = 0; i < partnerList.length; i++) {
                      $("ul.company-list").append(
                              '<li><span>'+partnerList[i].COMPANY_NAME+'</span>&nbsp;<a href="javascript:commonSearch.addPartner('+partnerList[i].PARTNER_ID+',\''+partnerList[i].COMPANY_NAME+'\');void(0);"><i class="fa fa-plus va_m"></i></a></li>'
                      );
                  }
              } else {
                  $("ul.company-list").append(
                          "<li><span>데이터가 없습니다.</span></li>");
              }
          },
          complete : function() {

          },
          error : function() {
              alert("파트너 검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  
  addPartner : function(partnerid,companyName){
      if($.inArray(partnerid,commonSearch.partnerArray) == -1) {
          $("div.company-current")
          .append(
                  '<span id="span_'
                  + partnerid
                  + '">'
                  + companyName
                  + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.partnerIdRemove(\''
                  + partnerid
                  + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
          commonSearch.partnerArray.push(partnerid);
          $("#hiddenModalPartnerId").val(commonSearch.partnerArray);
      }
  },
  
  partnerHtml : function(obj) {

      if ($(obj).prop("checked")) {
          $("div.partner-current")
                  .append(
                          '<span id="span_'
                                  + $(obj).val()
                                  + '">'
                                  + $(obj).prev('span').html()
                                  + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.partnerIdRemove(\''
                                  + $(obj).val()
                                  + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
          commonSearch.partnerArray.push($(obj).val());
      } else {
          $("span#span_" + $(obj).val()).remove();
          commonSearch.partnerIdRemove($(obj).val());
      }
      $("#hiddenModalPartnerId").val(commonSearch.partnerArray);
  },

  partnerIdRemove : function(val) {
      $("input:checkbox[name='checkboxPartner'][value='" + val + "']").prop(
              "checked", false);
      commonSearch.partnerArray = $.grep(commonSearch.partnerArray, function(
              value) {
          return value != val;
      });
      $("#hiddenModalPartnerId").val(commonSearch.partnerArray);
  },

  partnerSelect : function(partnerArray) {
      $.ajax({
          url : "/common/selectPartnerInfo.do",
          async : false,
          data : {
              partnerArray : partnerArray
          },
          beforeSend : function() {
          },
          success : function(data) {
              var partnerList = data.list;
              $("div.company-current").html("");
              if (partnerList.length > 0) {
                  for (var i = 0; i < partnerList.length; i++) {
                      $("div.company-current")
                              .append(
                                      '<span id="span_'
                                              + partnerList[i].PARTNER_ID
                                              + '">'
                                              + partnerList[i].COMPANY_NAME
                                              + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.partnerIdRemove(\''
                                              + partnerList[i].PARTNER_ID
                                              + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
                      commonSearch.partnerArray
                              .push(partnerList[i].PARTNER_ID);
                  }
              }
          },
          complete : function() {
              $("#hiddenModalPartnerId").val(
                      commonSearch.partnerArray);
          },
          error : function() {
              alert("파트너 검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  
  partnerArrayName : [],
  partnerSelect2 : function(partnerArray) {
	  $.ajax({
		  url : "/common/selectPartnerInfo.do",
		  async : false,
		  data : {
			  partnerArray : partnerArray
		  },
		  beforeSend : function() {
		  },
		  success : function(data) {
			  var partnerList = data.list;
			  $("div.company-current").html("");
			  if (partnerList.length > 0) {
				  for (var i = 0; i < partnerList.length; i++) {
					  commonSearch.partnerArrayName.push(partnerList[i].COMPANY_NAME);
				  }
			  }
		  },
		  complete : function() {
			  $("div#divOppPartnerM").html(
					  commonSearch.partnerArrayName.join(","));
		  },
		  error : function() {
			  alert("파트너 검색을 실패했습니다.\n관리자에게 문의하세요.");
		  }
	  });
  },
  
  multipleMemberPop : function(){
      $.ajax({
          url: "/common/searchMemberInfo.do",
          async : false,
          dataType: "json",
          data: {
              memberName: $("#textCommonSearchMember").val()
          },
          beforeSend : function() {
              if ($("#textCommonSearchMember").val().length < 2) {
                  alert("검색어를 2글자 이상 입력해 주세요.");
                  return false;
              }
              //$.ajaxLoading();
          },
          success : function(data) {
              var memberList = data.list;
              $("ul.company-list").html("");
              if (memberList.length > 0) {
                  for (var i = 0; i < memberList.length; i++) {
                      $("ul.company-list").append(
                              '<li><span>'+memberList[i].HAN_NAME+'</span>&nbsp;<a href="javascript:commonSearch.addMember(\''+memberList[i].MEMBER_ID_NUM+'\',\''+memberList[i].HAN_NAME+'\',\''+memberList[i].EMAIL+'\');void(0);"><i class="fa fa-plus va_m"></i></a></li>'
                      );
                  }
              } else {
                  $("ul.company-list").append(
                          "<li><span>데이터가 없습니다.</span></li>");
              }
          },
          complete : function() {
          },
          error : function() {
              alert("직원 검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  
  addMember : function(memberId,memberName,email){
      if($.inArray(memberId,commonSearch.multipleMemberArray) == -1) {
          $("div.company-current")
          .append(
                  '<span id="span_'
                  + memberId
                  + '">'
                  + memberName
                  + '<a href="javascript:void(0);" onClick="$(this).parent(\'span\').remove();commonSearch.memberIdRemove(\''
                  + memberId
                  + '\');"><i class="fa fa-times-circle va_m"></i></a></span>');
          commonSearch.multipleMemberArray.push(memberId+"/"+email+"/"+memberName);
          $("#hiddenModalMemberList").val(commonSearch.multipleMemberArray);
      }
  },
  
  memberIdRemove : function(val){
      $("input:checkbox[name='checkboxPartner'][value='" + val + "']").prop("checked", false);
      commonSearch.multipleMemberArray = $.grep(commonSearch.multipleMemberArray, function(value) {
          return value != val;
      });
      $("#hiddenModalMemberList").val(commonSearch.multipleMemberArray);
  },
  
  multipleMemberPop2 : function(){
      $.ajax({
          url: "/common/searchMemberInfo.do",
          async : false,
          dataType: "json",
          data: {
              memberName: $("#textCommonSearchMember2").val()
          },
          beforeSend : function() {
              if ($("#textCommonSearchMember2").val().length < 2) {
                  alert("검색어를 2글자 이상 입력해 주세요.");
                  return false;
              }
          },
          success : function(data) {
              var memberList = data.list;
              $("ul.company-list").html("");
              if (memberList.length > 0) {
                  for (var i = 0; i < memberList.length; i++) {
                      $("ul.company-list").append(
                              '<li><span>'+memberList[i].HAN_NAME+'</span>&nbsp;<a href="javascript:commonSearch.addMember(\''+memberList[i].MEMBER_ID_NUM+'\',\''+memberList[i].HAN_NAME+'\',\''+memberList[i].EMAIL+'\');void(0);"><i class="fa fa-plus va_m"></i></a></li>'
                      );
                  }
              } else {
                  $("ul.company-list").append(
                          "<li><span>데이터가 없습니다.</span></li>");
              }
          },
          complete : function() {

          },
          error : function() {
              alert("직원 검색을 실패했습니다.\n관리자에게 문의하세요.");
          }
      });
  },
  
  multipleCustmoerIdArray : [],
  multipleCustmoerNameArray : [],
  multipleCustmoerRankArray : [],
  
  //고객명 자동완성 검색 
  contactClients : function(obj, obj_hidden, obj_rank, obj_companyId, companyName, obj_memberList){
      obj.autoComplete({
          minChars: 2,
          cache: 0,
          emptyMsg : "고객",
          emptyUrl : "/clientManagement/listClientIndividualGate.do",
          source: function(term, response, item){
              $.ajax({
                  url: "/common/searchCustomerInfo.do",
                  dataType: "json",
                  data: {
                      customerName: term,
                      companyId : $('#textCommonSearchCompanyId').val() // 해당고객사의 고객들을 검색을 위한 값
                    	  //obj_companyId.val()
                  },
                  success: function( data ) {
                          response( 
                              $.map(data.list, function(item) {
                                      return {
                                          label: item.CUSTOMER_NAME,
                                          value: item.CUSTOMER_ID,
                                          position : item.POSITION
                                      }
                              })
                          );  
                  },
	              complete : function() {
	            	
				  }
              });
          },
          onSelect : function(e, term, item){
        	//선택 값 hidden input
    		//hiddenObj.val($(item).attr("hidden-data"));
	    	commonSearch.addCustomerId(obj_companyId, $(item).attr("hidden-data"), $(item).attr("data-val"), $(item).attr("hidden-position"));
	    	obj.val('');
	    	//유효성검사
    		//hiddenObj.valid();
          }
      }).keyup(function(key){
			//backspace or delete
			if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					hiddenObj.val("");
					hiddenObj.valid();
				}
			}
		});
  },
 
  //자동완성 li 생성라인
  addCustomerId : function(obj_memberList, obj_companyId, obj_companyName, obj_rank){
		if($.inArray(obj_companyId,commonSearch.multipleCustmoerIdArray) == -1) {
			
			obj_memberList.before(
			'<li class="value">'+
	            '<span class="txt" id="'+ obj_companyId +'">'+ obj_companyName +' '+ (obj_rank == null ? obj_rank : '' ) + '</span>'+
	            '<a href="#" class="remove" onclick="$(this).parent(\'li\').remove();commonSearch.removeCustomerId(\''+ obj_companyId +'\',\''+ obj_companyName +'\');">'+
	            '<i class="fa fa-times-circle"></i></a>'+
            '</li>'
	    	);
			
			commonSearch.multipleCustmoerIdArray.push(obj_companyId);
			commonSearch.multipleCustmoerNameArray.push(obj_companyName);
			commonSearch.multipleCustmoerRankArray.push(obj_rank);
			console.log(commonSearch.multipleCustmoerIdArray);
			console.log(commonSearch.multipleCustmoerNameArray);
			console.log(commonSearch.multipleCustmoerRankArray);
			$("#hiddenModalCustomerIdList").val(commonSearch.multipleCustmoerIdArray);
			$("#hiddenModalCustomerNameList").val(commonSearch.multipleCustmoerNameArray);
			$("#hiddenModalCustomerRankList").val(commonSearch.multipleCustmoerRankArray);
		}
	},
	
	removeCustomerId : function(id, name){
		//$("input:checkbox[name='checkboxPartner'][value='" + val + "']").prop("checked", false);
		commonSearch.multipleCustmoerIdArray = $.grep(commonSearch.multipleCustmoerIdArray, function(value) {
			return value != id;
		});
		commonSearch.multipleCustmoerNameArray = $.grep(commonSearch.multipleCustmoerNameArray, function(value) {
			return value != name;
		});
		console.log(commonSearch.multipleCustmoerIdArray);
		console.log(commonSearch.multipleCustmoerNameArray);
		console.log(commonSearch.multipleCustmoerRankArray);
		$("#hiddenModalCustomerList").val(commonSearch.multipleCustmoerIdArray);
		$("#hiddenModalCustomerNameList").val(commonSearch.multipleCustmoerNameArray);
		$("#hiddenModalCustomerRankList").val(commonSearch.multipleCustmoerRankArray);
	},
	
	//메일공유 복수검색 (공통)
	multipleMailShareMemberArray : [], //전역변수~
	multipleMailShareMember : function(obj, obj_hidden, obj_list){
		obj.autoComplete({
		    minChars: 2,
		    cache: 0,
		    emptyMsg : "직원",
		    //emptyUrl : "/clientManagement/viewClientIndividualInfoGate.do",
		    source: function(term, response){
		    	$.ajax({
	    		  url: "/common/searchMemberInfo.do",
		            dataType: "json",
		            data: {
		            	memberName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                				label: item.HAN_NAME,
			                  			 	value: item.MEMBER_ID_NUM,
			                  			 	position : item.POSITION_STATUS,
			                  			 	email: item.EMAIL
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	commonSearch.addMultipleMailShareMember(obj_hidden,obj_list, $(item).attr("hidden-data"), $(item).attr("data-val"), $(item).attr("hidden-email"),$(item).attr("hidden-position"));
		    	obj.val('');
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//메일공유 복수검색 추가 (공통)
	addMultipleMailShareMember : function(obj_hidden,obj_list, memberId, memberName, memberEmail, memberPosition){
		var emailInfo = memberId+"/"+memberEmail+"/"+memberName;
		if($.inArray(emailInfo,commonSearch.multipleMailShareMemberArray) == -1) {
			obj_list.before(
	    		'<li class="value">'+
                '<span class="txt" id="'+ memberId +'">'+ memberName +' '+ (memberPosition == null ? memberPosition : '') +'</span>'+
                '<a href="#" class="remove" onclick="$(this).parent(\'li\').remove();commonSearch.removeMultipleMailShareMember(\''+ emailInfo +'\', \''+ obj_hidden.selector +'\');">'+
                '<i class="fa fa-times-circle"></i></a>'+
                '</li>'
	    	);
			commonSearch.multipleMailShareMemberArray.push(emailInfo);
			obj_hidden.val(commonSearch.multipleMailShareMemberArray);
		}
	},
	
	//메일공유 복수검색 삭제(공통)
	removeMultipleMailShareMember : function(emailInfo,obj_hidden){
		commonSearch.multipleMailShareMemberArray.splice(commonSearch.multipleMailShareMemberArray.indexOf(emailInfo),1);
		$(obj_hidden).val(commonSearch.multipleMailShareMemberArray);
	},
	
	//고객명 복수검색 (공통)
	multipleMultipleClientArray : [], //전역변수~
	multipleMultipleClient : function(obj, obj_hidden, obj_list){
		obj.autoComplete({
			minChars: 2,
			cache: 0,
			emptyMsg : "고객",
			emptyUrl : "/clientManagement/viewClientIndividualInfoGate.do",
			source: function(term, response){
				$.ajax({
					url: "/common/searchClientInfo.do",
					dataType: "json",
					data: {
						clientName: term
					},
					beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
					success: function( data ) {
						response( 
								$.map(data.list, function( item ) {
									var position = '';
									if(!isEmpty(item.POSITION)){
										position = item.POSITION;
									}
									return {
										label: item.CUSTOMER_NAME,
		                  			 	value: item.CUSTOMER_ID,
		                  			 	position : item.COMPANY_NAME,
		                  			 	calendarId : position,
		                  			 	type : 'multiClientIndividual'
									}
								})
						);	
					},
					complete : function() {
						
					}
				});
			},
			onSelect : function(e, term, item){
				commonSearch.addMultipleClient(obj_hidden,obj_list, $(item).attr("hidden-data"), $(item).attr("data-val"), $(item).attr("hidden-position"));
				obj.val('');
				obj_hidden.valid();
			}
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객명 복수검색 추가 (공통)
	addMultipleClient : function(obj_hidden,obj_list, clientId, clientName, clientCompany){
		if($.inArray(clientId,commonSearch.multipleMultipleClientArray) == -1) {
			obj_list.before(
					'<li class="value">'+
					'<span class="txt" id="'+ clientId +'">'+ clientName +' ['+ clientCompany +']</span>'+
					'<a href="#" class="remove" onclick="$(this).parent(\'li\').remove();commonSearch.removeMultipleClient(\''+ clientId +'\', \''+ obj_hidden.selector +'\');">'+
					'<i class="fa fa-times-circle"></i></a>'+
					'</li>'
			);
			commonSearch.multipleMultipleClientArray.push(clientId);
			obj_hidden.val(commonSearch.multipleMultipleClientArray);
		}
	},
	
	//고객명 복수검색 삭제(공통)
	removeMultipleClient : function(clientId,obj_hidden){
		commonSearch.multipleMultipleClientArray.splice(commonSearch.multipleMultipleClientArray.indexOf(clientId),1);
		$(obj_hidden).val(commonSearch.multipleMultipleClientArray);
	},
	
	//직원 자동 완성 (single)
	singleMember : function(obj, obj_view, obj_hidden, obj_hidden2){
		obj.autoComplete({
		    minChars: 2,
		    cache: 0,
		    emptyMsg : "직원",
		    emptyUrl : null,
		    source: function(term, response){
		    	$.ajax({
		    		url: "/common/searchMemberInfo.do",
		            dataType: "json",
		            data: {
		            	memberName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                				label: item.HAN_NAME,
			                  			 	value: item.MEMBER_ID_NUM,
			                  			 	position: item.POSITION_STATUS,
			                  			 	type : 'singleMember'
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var han_name = $(item).attr("data-val");
		    	var member_id_num = $(item).attr("hidden-data");
		    	var position = '';
		    	if(!isEmpty($(item).attr("hidden-position"))){
		    		position = ' ['+ $(item).attr("hidden-position") +']';
		    	}
		    	
		    	obj_hidden.val(member_id_num);
		    	obj_hidden.valid();
		    	
		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						'<span class="txt" id="'+ member_id_num +'">'+ han_name + position +'</span>'+
						'<a href="#" class="remove" onclick="$(this).parent(\'li\').remove();commonSearch.removeSingleMember(\''+obj.attr("id")+'\',\''+obj_view.attr("id")+'\',\''+obj_hidden.attr("id")+'\');">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'
				);
		    	
		    	if(!isEmpty(obj_hidden2)){
		    		obj_hidden2.val(han_name + ($(item).attr("hidden-position") != null ? ' '+ $(item).attr("hidden-position") : ''));
		    	}
		    	
		    	//유효성검사
		    	//obj_hidden.valid();
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객사 삭제시 hidden값 삭제
	removeSingleMember : function(obj, obj_view, obj_hidden){
		$("#" + obj).show();
		$("#" + obj_hidden).val("");
	},
	
	singleMember2 : function(obj,objHidden){
		var obj_view =  obj.parent('li');
		var obj_hidden = "";
		var obj_hidden_name = "";
		if(objHidden){
			obj_hidden = objHidden;
		}else{
			obj_hidden = obj.next();
			obj_hidden_name = obj.next().next();
		}
		
		obj.autoComplete({
		    minChars: 2,
		    cache: 0,
		    emptyMsg : "직원",
		    emptyUrl : null,
		    source: function(term, response){
		    	$.ajax({
		    		url: "/common/searchMemberInfo.do",
		            dataType: "json",
		            data: {
		            	memberName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                				label: item.HAN_NAME,
			                  			 	value: item.MEMBER_ID_NUM,
			                  			 	position: item.POSITION_STATUS
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var memberName = $(item).attr("data-val");
		    	var memberIdNum = $(item).attr("hidden-data");
		    	var memberPosition = '';
		    	if(!isEmpty($(item).attr("hidden-position"))){
		    		memberPosition = ' ['+ $(item).attr("hidden-position") +']';
		    	}
		    	
		    	obj_hidden.val(memberIdNum);
		    	if(obj_hidden_name) obj_hidden_name.val(memberName);
		    	
		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						'<span class="txt" id="'+ memberIdNum +'">'+ memberName + memberPosition +'</span>'+
						'<a href="#" class="remove" onclick="commonSearch.removeSingleMember2(this,\''+ obj_hidden.attr("id") +'\');">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'
				);
		    	//유효성검사
		    	//obj_hidden.valid();
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객개인 삭제
	removeSingleMember2 : function(obj,obj_hidden) {
		$(obj).parent("li").next("li").find("input[type='text']").show();
		if(obj_hidden && obj_hidden != "undefined"){
			$("#"+obj_hidden).val("");
		}else{
			$(obj).parent("li").next("li").find("input[type='hidden']").val("");
		}
		$(obj).parent("li").remove();
	},
	
	//고객사 자동 완성 (single)
	singleCompany : function(obj, obj_view, obj_hidden){
		obj.autoComplete({
		    minChars: 2,
		    cache: 0,
		    emptyMsg : "고객사",
		    emptyUrl : "/clientManagement/viewClientCompanyInfoGate.do?modalReset=1",
		    source: function(term, response){
		    	$.ajax({
		    		url: "/common/searchCompanyInfo.do",
		            dataType: "json",
		            data: {
		            	companyName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                				label: item.COMPANY_NAME,
			                  			 	value: item.COMPANY_ID,
			                  			 	type : 'singleCompany'
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var company_name = $(item).attr("data-val");
		    	var company_id = $(item).attr("hidden-data");
		    	
		    	obj_hidden.val(company_id);
		    	obj_hidden.valid();
		    	
		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						'<span class="txt" id="'+ company_id +'">'+ company_name +'</span>'+
						'<a href="#" class="remove" onclick="commonSearch.removeSingleCompany(this);">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'+
						'<a href="/clientManagement/viewClientCompanyInfoDetail.do?company_id='+company_id+'&searchDetail='+encodeURI(company_name)+'" target="_blank" name="aMoveSingleCompany" class="btn-group-sum" style="margin:6px 0 0 5px">바로가기</a>'
				);
		    	
		    	//유효성검사
		    	//obj_hidden.valid();
		    	
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객사 삭제시 hidden값 삭제
	removeSingleCompany : function(obj){
		$(obj).parent("li").next().next("li").find("input:nth-child(1)").show();
		$(obj).parent("li").next().next("li").find("input:nth-child(2)").val("");	
		$(obj).parent("li").next("a").remove();
		$(obj).parent("li").remove();
	},
	
	//고객사2 검색
	singleCompany2 : function(obj,objHidden){
		var obj_view =  obj.parent('li');
		var obj_hidden = "";
		var obj_hidden_name = "";
		if(objHidden){
			obj_hidden = objHidden;
		}else{
			obj_hidden = obj.next();
			obj_hidden_name = obj.next().next();
		}
		
		obj.autoComplete({
			minChars: 2,
		    cache: 0,
		    emptyMsg : "고객사",
		    emptyUrl : "/clientManagement/viewClientCompanyInfoGate.do?modalReset=1",
		    source: function(term, response){
		    	$.ajax({
		    		url: "/common/searchCompanyInfo.do",
		            dataType: "json",
		            data: {
		            	companyName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                				label: item.COMPANY_NAME,
			                  			 	value: item.COMPANY_ID,
			                  			 	type : 'singleCompany'
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var company_name = $(item).attr("data-val");
		    	var company_id = $(item).attr("hidden-data");
		    	
		    	obj_hidden.val(company_id);
		    	if(obj_hidden_name) obj_hidden_name.val(company_name);
		    	
		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						'<span class="txt" id="'+ company_id +'">'+ company_name +'</span>'+
						'<a href="#" class="remove" onclick="commonSearch.removeSingleCompany2(this,\''+ obj_hidden.attr("id") +'\');">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'
				);
		    	//유효성검사
		    	//obj_hidden.valid();
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객사2 삭제
	removeSingleCompany2 : function(obj,obj_hidden) {
		$(obj).parent("li").next("li").find("input[type='text']").show();
		if(obj_hidden && obj_hidden != "undefined"){
			$("#"+obj_hidden).val("");
		}else{
			$(obj).parent("li").next("li").find("input[type='hidden']").val("");
		}
		$(obj).parent("li").remove();
	},
	
	
	//고객사 자동 완성 (매출품목에서 사용)
	singleCompanyProduct : function(obj, obj_view, obj_hidden){
		obj.autoComplete({
		    minChars: 2,
		    cache: 0,
		    emptyMsg : "고객사",
		    emptyUrl : "/clientManagement/viewClientCompanyInfoGate.do?modalReset=1",
		    source: function(term, response){
		    	$.ajax({
		    		url: "/common/searchCompanyInfo.do",
		            dataType: "json",
		            data: {
		            	companyName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                				label: item.COMPANY_NAME,
			                  			 	value: item.COMPANY_ID,
			                  			 	type : 'singleCompany'
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var company_name = $(item).attr("data-val");
		    	var company_id = $(item).attr("hidden-data");
		    	
		    	obj_hidden.val(company_id);

		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						'<span class="txt" id="'+ company_id +'">'+ company_name +'</span>'+
						'<a href="#" class="remove" onclick="commonSearch.removeSingleCompanyProduct(this);">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'
				);
		    	
		    	//유효성검사
		    	//obj_hidden.valid();
		    	
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객사 삭제시 hidden값 삭제
	removeSingleCompanyProduct : function(obj){
		$(obj).parent("li").next("li").find("input:nth-child(1)").show();
		$(obj).parent("li").next("li").find("input:nth-child(2)").val("");	
		$(obj).parent("li").remove();
	},
	
	
	//고객담당자 자동 완성 (single) - 고객개인에서 가져옴~
	singleClientMaster : function(obj, obj_view, obj_hidden, obj_erp_hidden){
		obj.autoComplete({
		    minChars: 2,
		    cache: 0,
		    emptyMsg : "고객담당자",
		    emptyUrl : "/clientManagement/viewClientIndividualInfoGate.do?modalReset=1",
		    source: function(term, response){
		    	$.ajax({
		    		url: "/common/searchClientInfo.do",
		            dataType: "json",
		            data: {
		            	clientName: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
		                  			 		label: item.CUSTOMER_NAME,
			                  			 	value: item.CUSTOMER_ID,
			                  			 	position: item.COMPANY_NAME,
			                  			 	erpcd: item.ERP_CLIENT_CODE,
			                  			 	type : 'singleMember'
				                		}
			              		})
			              	);	
		            },
		            complete : function() {
					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var client_name = $(item).attr("data-val");
		    	var client_code = $(item).attr("hidden-data");
		    	var company_name = $(item).attr("hidden-position");
		    	var erp_cd = $(item).attr("hidden-erpcd");
		    	
		    	obj_hidden.val(client_code);
		    	obj_hidden.valid();
		    	
		    	if(erp_cd && erp_cd != 'undefined'){
		    		obj_erp_hidden.val(erp_cd);
		    	}else{
		    		obj_erp_hidden.val("");
		    	}

		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						'<span class="txt" id="'+ client_code +'">'+ client_name +' ['+ company_name +']</span>'+
						'<a href="#" class="remove" onclick="$(this).parent(\'li\').remove();commonSearch.removeSingleClientMaster(\''+obj.attr("id")+'\',\''+obj_view.attr("id")+'\',\''+obj_hidden.attr("id")+'\');">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'+
						'<a href="/clientManagement/viewClientIndividualInfoDetail.do?customer_id='+client_code+'&search_detail='+encodeURI(client_name)+'" target="_blank" id="aMoveSingleClientMaster" class="btn-group-sum" style="margin:6px 0 0 5px">바로가기</a>'
				);
		    	//obj_hidden.valid();
		    	
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//고객사 삭제시 hidden값 삭제
	removeSingleClientMaster : function(obj, obj_view, obj_hidden, obj_erp_hidden){
		$("#" + obj).show();
		$("#" + obj_hidden).val("");
		$("#" + obj_erp_hidden).val("");
		$("#divSingleClientMasterErr").hide();
		$("#aMoveSingleClientMaster").remove();
	},
	
	
	//영업기회 품목 자동완성
	singleProduct : function(obj, idx){
		var obj_view =  obj.parent('li');
		var obj_hidden = obj.next();
		var obj_hidden_works = obj.next().next();
		var obj_span = obj.parents('td').next().find("span");
		
		obj.autoComplete({
		    minChars: 3,
		    cache: 0,
		    emptyMsg : "품목",
		    wd : 600,
		    source: function(term, response){
		    	$.ajax({
		            url: "/common/searchProductInfo.do",
		            dataType: "json",
		            data: {
		            	searchProduct: term
		            },
		            beforeSend : function(xhr){
						xhr.setRequestHeader("AJAX", true);
					},
		            success: function( data ) {
		            		response( 
			                	$.map(data.list, function( item ) {
			                			return {
			                  				label: item.PRODUCT_NAME,
			                  			 	value: item.PRODUCT_CODE,
			                  			 	position : item.WORKS_CODE,
			                  			 	st : item.PRODUCT_STANDARD,
			                  			 	type : 'singleProduct'
				                		}
			              		})
			              	);	
		            },
		            complete : function() {

					}
		        });
		    },
		    onSelect : function(e, term, item){
		    	//선택 값 hidden input
		    	var productName = $(item).attr("data-val");
		    	var productCode = $(item).attr("hidden-data");
		    	var worksCode = $(item).attr("hidden-position");
		    	var st = $(item).attr("hidden-st");
		    	
		    	obj_hidden.val(productCode);
		    	obj_hidden_works.val(worksCode);
		    	obj_span.html(st);
		    	
		    	//선택된 값 디자인 적용 및 인풋 숨김
		    	obj.val('');
		    	obj.hide();
		    	obj_view.before(
						'<li class="value">'+
						/*'<span class="txt" id="'+ productCode +'">'+ productCode +' ['+ worksCode +']</span>'+*/
						'<span class="txt" id="'+ productCode +'">'+ productCode +'</span>'+
						'<a href="#" class="remove" onclick="commonSearch.removeSingleProduct(this);">'+
						'<i class="fa fa-times-circle"></i></a>'+
						'</li>'
				);
		    	//유효성검사
		    	//obj_hidden.valid();
		    }
		}).keyup(function(key){
			//backspace or delete
			/*if(key.keyCode == 46 || key.keyCode == 8){
				if((obj.val()).trim() == "" || obj.val() == null){
					obj_hidden.val("");	
			    	obj_hidden.valid();
				}
			}*/
		});
	},
	
	//품목 삭제시 hidden값 삭제
	removeSingleProduct : function(obj) {
		$(obj).parent("li").next("li").find("input:nth-child(1)").show();
		$(obj).parent("li").next("li").find("input:nth-child(2)").val("");	
		$(obj).parent("li").next("li").find("input:nth-child(3)").val("");	
		$(obj).parents("td").next("td").find("span").html("");
		$(obj).parents("td").next().next().find("input").val(0);
		$(obj).parents("td").next().next().next().find("input").val(0);
		$(obj).parent("li").remove();
		oppProduct.salesSum();
		oppProduct.psSum();
	}
	
}

//브라우저 확인
function getBrowserCheck(){
	var browser = "";
	var ua = window.navigator.userAgent;
	if(ua.indexOf('MSIE') > 0 || ua.indexOf('Trident') > 0){
		browser = getIEVersionCheck();
		
	}else if(ua.indexOf('Opera') > 0 || ua.indexOf('OPR') > 0){
		browser = "Opera";
	}else if(ua.indexOf('Firefix') > 0){
		browser = "Firefox";
	}else if(ua.indexOf('Safari') > 0){
		if(ua.indexOf('Chrome') > 0){
			browser = "Chrome";
		}else{
			browser = "Safari";
		}
	}
	return browser;
}

//익스플로러 버전 확인
function getIEVersionCheck(){ 
	 var word; 
	 var version = "N/A"; 
	 var agent = navigator.userAgent.toLowerCase(); 
	 var name = navigator.appName; 

	 // IE old version ( IE 10 or Lower ) 
	 if(name == "Microsoft Internet Explorer"){
		 word = "msie "; 
	 }else{ 
		 // IE 11 
		 if(agent.search("trident") > -1) word = "trident/.*rv:"; 
		 // Microsoft Edge  
		 else if(agent.search("edge/") > -1) word = "edge/"; 
	 } 

	 var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})"); 

	 if(reg.exec( agent ) != null) version = RegExp.$1 + RegExp.$2; 
	 //console.log("IEversion : "+version);
	 switch(version){
	 	case "N/A":
	 		return "N/A";
	 		break; //IE브라우저가 아닐경우
	 	case "11.0":
	 		return "11.0";
	 		break; //IE 11버전일 경우
	 	case "10.0":
	 		return "10.0";
	 		break; //IE 10버전일 경우
	 	case "9.0":
	 		return "9.0";
	 		break; //IE 9버전일 경우
	 	default :
	 		return false;
	 		break; //그 외(IE8 이전 or Edge)
	 }
	 
}