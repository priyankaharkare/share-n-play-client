const store = require('../store')
const config = require('../config')

// <script type="text/javascript">
// $(document).ready(function (e){
// 	$("#uploadForm").on('submit',(function(e){
// 		e.preventDefault();
// 		$.ajax({
// 			url: "upload.php",
// 			type: "POST",
// 			data: new FormData(this),
// 			contentType: false,
// 			cache: false,
// 			processData:false,
// 			success: function(data){
// 				$("#image").html(data);
// 			},
// 			error: function(){}
// 		});
// 	}));
// });
// </script>

const uploadImage = function (formData) {
  console.log(`api data is`, formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/toys',
    data: {
      toy: {
        data: formData,
        processData: false,
        contentType: false

      }
    }
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  uploadImage
}
