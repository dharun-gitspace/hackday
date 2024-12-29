package com.bytebusters.iap.repository;

import com.bytebusters.iap.model.TestAssignment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestAssignmentRepository extends MongoRepository<TestAssignment, String> {}

