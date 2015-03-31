<script type = "text/javascript"> 
function validateForm() { 
	var full_name = document.getElementById('full_name').value; 
	var email = document.getElementById('email_id').value; 
	
	
	if ((full_name !== null || full_name !== "") && (email !== null || email !== ""))
		{
			alert ("Please fill in all the mandatory fields"); 
			return false;
		}
		else {
			return true;
		}
		} 
</script>
