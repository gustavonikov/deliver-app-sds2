package com.devsuperior.dsdeliver.repositories;

import com.devsuperior.dsdeliver.entities.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Product, Long> {
    
}