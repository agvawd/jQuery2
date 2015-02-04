$(document).ready(function(){
	$("#newtaskForm").hide();
	var listo = [];

	var Task = function(task){
		this.task = task;
		this.id = 'new';
	}

	var addTask = function(task){
		if(task){
			task = new Task(task);
			listo.push(task);

			$("#newItemInput").val('');
			$("#newList").append('<a href="#" class"" id="item"><li class="list-group-item">'+ 
			task.task + '<span class="arrow pull-right"><i class="glyphicon-arrow-right"></span></li></a>');
		}
		$("#newtaskForm, #newListItem").fadeToggle("fast", "linear");

	};

	$("#saveNewItem").on("click", function(e) {
		e.preventDefault();
		var task = $("#newItemInput").val().trim();
		addTask(task);
	})

	$("#cancel").on("click", function(e){
		e.preventDefault();
		$("newtaskForm, #newListItem").fadeToggle("fast", "linear");
	})
})