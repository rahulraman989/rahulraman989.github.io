<script> 
function validateForm() { 
	var full_name = document.getElementById('full_name').value; 
	var email = document.getElementById('email_id').value; 
	var newsletter_subscriptionchecked = document.getElementById('newsletter_subscription').checked; 
	
	if ((full_name !== null || full_name !== "") && (email !== null || email !== "") && 
		(newsletter_subscriptionchecked))
		{
			alert ("Please fill in all the mandatory fields"); 
			return false;
		}
		else {
			return true;
		}
		return true;
		} 
</script>
