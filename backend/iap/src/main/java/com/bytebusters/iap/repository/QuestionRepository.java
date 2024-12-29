package com.bytebusters.iap.repository;

import com.bytebusters.iap.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {}

