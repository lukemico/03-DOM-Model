<!DOCTYPE html>
<html>
<head>
<title>miniFacebook</title>
<link rel="stylesheet" href="css/styles.css" type="text/css" media="all" />
</head>
<body>
<div id="container">
<header>
<h1><a href="register.php">miniFacebook</a></h1>
</header>

<ul id="main_menu">
<li><a href="register.php" title="Register new user">Register</a></li>
<li><a href="search.php" title="Users list">Search</a></li>
<li><a href="login.php" title="Login private area">Login</a></li>
</ul>

<form method="post" action="login_action.php">
<fieldset>
<legend>Login</legend>
<p><label> Username: </label><input type="text" name="username" /></p>
<p><label> Password: </label><input type="password" name="password" /></p>
<p class="center"><input value="Login" type="submit" class="center" /></p>
</fieldset>
</form>

<footer>
<p>Copyright &copy; 2012 Sergio Luján Mora</p>
<p><a href="mailto:sergio.lujan%20at%20ua.es">Contact</a></p>
</footer>

</div>
</body>
</html>