<?xml version="1.0" encoding="UTF-8"?>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Book Inventory Management System</title>
<style>
body {
	font-family: Arial, sans-serif;
}

.container {
	margin: 0 auto;
	max-width: 800px;
	padding: 20px;
	text-align: center;
}

h1 {
	color: #333;
}

.btn {
	display: inline-block;
	padding: 10px 20px;
	margin: 10px;
	text-decoration: none;
	color: white;
	background-color: #007bff;
	border-radius: 5px;
}

.btn:hover {
	background-color: #0056b3;
}
</style>
</head>
<body>
	<div class="container">
		<h1>Welcome to the Book Inventory Management System</h1>
		<p>Manage your book inventory efficiently and effectively.</p>
		<a href="${pageContext.request.contextPath}/books" class="btn">View
			Book List</a> <a href="${pageContext.request.contextPath}/books/new"
			class="btn">Add New Book</a> <a
			href="${pageContext.request.contextPath}/orders" class="btn">View
			Orders</a> <a href="${pageContext.request.contextPath}/vendors"
			class="btn">View Vendors</a>
	</div>
</body>
</html>