//code for live search + comments update below //

$(document).ready(function(){
	
	 var content = $("#content");
	 var homesection = $("#homesection");
	 var searchbox = $("#search");
	 
	 $('#home').on("click", function(){
		 
		 content.css("display", "none");
		 homesection.css("display", "block");
		 
		 
		});

    searchbox.on("keyup input", function(){

        var input = $(this).val();

        var dropdown = $(this).siblings(".result");

        if(input.length){

            $.get("admin/phpscripts/search.php", {term: input}).done(function(data){

                dropdown.html(data);
				$('.detailsbut').css("display", "none");
				content.css("display", "block");
				content.html(data);
				$("#resultstitle").css("display", "block");
				
				$(document).on("click", ".result p", function(){

        		searchbox.val($(this).text());
        		$(".result").empty();
				 $.get("admin/phpscripts/search.php", {term: $(this).text()}).done(function(data){
				content.html(data);
				homesection.css("display", "none");
		});

    });

            });
			
			
        } else{

            dropdown.empty();
			content.empty();

        }

    });
	

	$(document).on("click", ".detailsbut", function(){
		
		 $.get("admin/phpscripts/details.php", {term: this.id}).done(function(data){
			$("#resultstitle").css("display", "none");
			content.html(data);	
		 });
		
		});
		
		

	
	 $('.filter').on("click", function(e){


        var links = e.target.id;

        if(links){

            $.get("admin/phpscripts/filter.php", {term: links}).done(function(data){

			   content.css("display", "block");
			   homesection.css("display", "none");
			   $("#resultstitle").css("display", "none");
               content.html(data);

            });

        } else{

            content.empty();

        }

    });

	
});



function sendPost(e) {
	
var comment = document.querySelector("#comment").value;
var name = document.querySelector("#username").value;
var movie = document.querySelector("#movie").value;
var comments = document.querySelector("#comments");

	if (comment && name && movie) {
	
		$.ajax({ type: 'POST', url: 'admin/phpscripts/comment.php',
	
		data: {
		comment_text: comment,
		comment_username: name,
		comment_movie: movie
	
				},
		success: function (response) {
	
	console.log(comment);

	comments.innerHTML = response + comments.innerHTML;
	comment.value = "";
	name.value = "";

	}
});

}

return false;
}


