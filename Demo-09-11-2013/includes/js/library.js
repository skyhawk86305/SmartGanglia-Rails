$(document).ready(function() {

	//init tabs
	initTabs('#main', '.QuicklinksT li', '.QuicklinksE .tabElE');
    initTabs('#main', '.NewsandAnnouncementsT li', '.NewsandAnnouncementsE .tabElE');


	
	$('ul.accordion').accordion({ 
            collapsible : true,
			autoHeight: false
        });	

	function searchTab(obj, searchMoreSelected) {
		   var jobj = $(obj);
		   $('#category').val(jobj.text());
		   /*  added the following lines to fix the issue related to employee search QC#125   */
		 $('#search_form').attr('method',$('#getMethod').val());
		   $('#search_form').attr('action',$('#searchTarget').val());
		   
		    $('#q').attr('name','q');
			
		  
		   if (jobj.text()=='Employees') {
				$('#category').val('employees');
				
				$('#search_form').attr('method',$('#postMethod').val());
				$('#search_form').attr('action',$('#empSearchTarget').val());
				$('#q').attr('name','cn');
				
				
		   } else if (jobj.text()=='HR') {	
				$('#category').val('hr');
		   } else if (jobj.text()=='Seascape/PDH') {
				$('#category').val('seascape_pdh');
		   } else if (jobj.text()=='Seawiki') {
				$('#category').val('wiki');
		   } else if (jobj.text()=='iMap') {
				$('#category').val('imap');
		   } else if (jobj.text()=='Knowledgebase') {
				$('#category').val('rkm_docs');
		   } else {
				$('#category').val('default_collection');
		   }
		   
		   if (searchMoreSelected != "") {
				   jobj = $(searchMoreSelected);
				   jobj.html($(obj).html());
				   $(obj).children('a').css('color', '#00cccc');
				   $(obj).siblings().each(function(ii, oo) {
				       $(oo).children('a').css('color', '#ffffff');
				   });
				   $(".searchDrop dd.searchMoreList ul").hide();
		   }
		   jobj.siblings().each(function(i, o) {
			   if ($(o).children('a').length == 0) {
			       $(o).children('span').wrap('<a href="javascript:void(null)"></a>');
			   }
		   });
		   jobj.html('<span>' + jobj.text() + '</span>');
		   if($('#q').attr('value').indexOf("Search") != -1){	
				$('#searchInput input').attr('alt', $('#searchOption').attr('alt') + ' ' + jobj.text() + '...')
				.attr('title', $('#searchInput input')[0].hoverText).altText();				
		   }
		   else{
				$("#q").focus();
		   }	
	}
	
	$(".searchDrop dt.searchMoreDrop, .searchDrop dd.searchMoreList").mouseenter(function() {

			$(".searchDrop dd.searchMoreList ul").show();
			$(".searchDrop dt.searchMoreDrop a").addClass("searchMoreHover");
			$(".searchDrop dt.searchMoreDrop span").addClass("searchMoreHover");

	});	

	$(".searchDrop dt.searchMoreDrop, .searchDrop dd.searchMoreList").mouseleave(function() {

			$(".searchDrop dd.searchMoreList ul").hide();
			$(".searchDrop dt.searchMoreDrop a").removeClass("searchMoreHover");
			$(".searchDrop dt.searchMoreDrop span").removeClass("searchMoreHover");	
	});	
	
	$('#searchOption dt.searchNotDrop').click(function() {
		   searchTab(this, "");
	});
	
	$('#searchOption dd.searchMoreList ul li').click(function() {
		   searchTab(this, '#searchMoreSelected');
		   
		   

	});
	// --
	// alternative text on inputs - call from plugin
	$('#searchInput input').altText();
	// --
});


function mySeagateDropdownSelect(select, vgnextoid)
{
	var newLocation = '?myseagate.newsLocation=' + select;
	if(vgnextoid!='null'){
		newLocation = newLocation + '&vgnextoid=' + vgnextoid ;
	}
	newLocation = newLocation  + '#Announcements'	;
	window.location=  newLocation;
}



function submitSearchForm() {
   var searchForm = document.getElementById("search_form");
   var searchString='';
   searchStringAlt='';
   if(typeof (searchForm.q) === "undefined"){
 	searchString = searchForm.cn.value;
    searchStringAlt = searchForm.cn.alt;
   }else{
    searchString = searchForm.q.value;
    searchStringAlt = searchForm.q.alt;
   }
   if (searchString.length == 0 || searchString === searchStringAlt ) {
      return false;
   }
   else{
	document.getElementById("search_form").submit();	
   }
}

function  resetToBlank(){
	var dirSearchForm = document.getElementById("dir_search_form");
    if(dirSearchForm){
		if(dirSearchForm.newssearch){
			if(dirSearchForm.newssearch.value=='Search Directory'){
				dirSearchForm.newssearch.value='';
			}
		}
	}
}
function  resetToSearch(){
	var dirSearchForm = document.getElementById("dir_search_form");
    if(dirSearchForm){
		if(dirSearchForm.newssearch){
			if(dirSearchForm.newssearch.value==''){
				dirSearchForm.newssearch.value='Search Directory';
			}
		}
	}	
 }


