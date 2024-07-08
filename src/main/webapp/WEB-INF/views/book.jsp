<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Book List</title>
    <link type="text/css" rel="stylesheet" href="<%= request.getContextPath() %>/css/book.css">
    <script>
        function deleteBook(event, frm) {
            event.preventDefault();
            let choice = confirm("Delete this book?");
            if (choice) {
                frm.submit();
            }
        }
    </script>
</head>
<body>
    <h1>Book List</h1>
    <table border="1" cellpadding="5" cellspacing="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Created At</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${books}" var="book">
                <tr>
                    <td>${book.bookId}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                    <td>${book.stock}</td>
                    <td>${book.createdAt}</td>
                    <td>
                        <form method="POST" action="<%= request.getContextPath() %>/book/delete.jsp" onsubmit="deleteBook(event, this)">
                            <input type="hidden" name="bookId" value="${book.bookId}">
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <br>
    <p>
        <a href="<%= request.getContextPath() %>/book/form.jsp">Add New Book</a>
    </p>
</body>
</html>