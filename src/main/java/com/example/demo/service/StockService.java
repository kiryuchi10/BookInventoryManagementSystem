package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Stock;
import com.example.demo.repository.StockRepository;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock getStockById(Long stockId) {
        return stockRepository.findById(stockId).orElse(null);
    }

    public Stock createStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long stockId, Stock stockDetails) {
        Stock stock = stockRepository.findById(stockId).orElse(null);
        if (stock != null) {
            stock.setBook(stockDetails.getBook());
            stock.setQuantity(stockDetails.getQuantity());
            stock.setStockType(stockDetails.getStockType());
            stock.setCreatedAt(stockDetails.getCreatedAt());
            return stockRepository.save(stock);
        }
        return null;
    }

    public void deleteStock(Long stockId) {
        stockRepository.deleteById(stockId);
    }
}
