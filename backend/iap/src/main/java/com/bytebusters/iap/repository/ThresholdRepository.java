package com.bytebusters.iap.repository;

import com.bytebusters.iap.model.Threshold;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ThresholdRepository extends MongoRepository<Threshold, String> {}

