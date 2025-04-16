// Simulasi database user
const userDB = { username: "joko", password: "rahasia", role: "asep" };

// fungsi untuk cek username dan password
function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    if (inputUsername === userDB.username && inputPassword === userDB.password) {
      callback(userDB);
    } else {
      callback(null);
    }
  }, 500);
}

// fungsi untuk ambil role
function getRole(user, callback) {
  setTimeout(() => {
    if (user) {
      callback(user.role);
    } else {
      callback(null);
    }
  }, 500);
}

// fungsi untuk menentukan menu berdasarkan role
function getMenu(role, callback) {
  setTimeout(() => {
    if (role === "admin") {
      callback("Dashboard admin");
    } else {
      callback("Dashboard");
    }
  }, 500);
}

// Pemanggilan fungsi dengan callback hell
loginUser("joko", "rahasia", function(user) {
  if (user) {
    getRole(user, function(role) {
      if (role) {
        getMenu(role, function(menu) {
          console.log(menu);
        });
      } else {
        console.log("Gagal mengambil role.");
      }
    });
  } else {
    console.log("Login gagal.");
  }
});
