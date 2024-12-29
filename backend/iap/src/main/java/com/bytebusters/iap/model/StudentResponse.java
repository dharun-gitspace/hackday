package com.bytebusters.iap.model;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class StudentResponse {
    private String id;
    private String studentId;
    private String testId;
    private Map<String, List<String>> topicWiseAnswers; // Topic -> List of answers
    private Date submittedAt;
}

