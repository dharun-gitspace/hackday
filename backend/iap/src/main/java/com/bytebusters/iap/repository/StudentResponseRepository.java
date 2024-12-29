package com.bytebusters.iap.repository;

import com.bytebusters.iap.model.StudentResponse;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentResponseRepository extends MongoRepository<StudentResponse, String> {}

