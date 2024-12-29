package com.bytebusters.iap.repository;

import com.bytebusters.iap.model.Result;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResultRepository extends MongoRepository<Result, String> {}

