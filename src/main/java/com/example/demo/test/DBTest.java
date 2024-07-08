package com.example.demo.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBTest {

    private static final String JDBC_URL = "jdbc:oracle:thin:@localhost:1521:xe";
    private static final String USERNAME = "himedia";
    private static final String PASSWORD = "himedia";

    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        try {
            // Load Oracle JDBC driver class
            Class.forName("oracle.jdbc.driver.OracleDriver");

            // Establish connection
            connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
            statement = connection.createStatement();

            // Execute query
            String sql = "SELECT * FROM books";
            ResultSet resultSet = statement.executeQuery(sql);

            // Process result set
            while (resultSet.next()) {
                int bookId = resultSet.getInt("book_id");
                String title = resultSet.getString("title");
                String author = resultSet.getString("author");
                double price = resultSet.getDouble("price");
                int stock = resultSet.getInt("stock");

                System.out.printf("Book ID: %d, Title: %s, Author: %s, Price: %.2f, Stock: %d%n",
                        bookId, title, author, price, stock);
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close resources in finally block
            try {
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}