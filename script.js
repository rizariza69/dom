
	function validasi() {
		var nama = document.getElementById("nama").value;
		var email = document.getElementById("email").value;
		var alamat = document.getElementById("alamat").value;
		if (nama != "" && email!="" && alamat !="") {
			alert('Halo ' + nama + '! Kamu sudah terdaftar dengan email: ' + email + ' !')
		}else{
			alert('Anda harus mengisi data dengan lengkap !');
		}
	}
