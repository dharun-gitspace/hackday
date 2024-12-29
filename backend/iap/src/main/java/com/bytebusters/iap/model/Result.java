package com.bytebusters.iap.model;

import java.util.Map;

public class Result {
    private String id;
    private String studentId;
    private String testId;
    private Map<String, Integer> topicWiseScores; // Topic -> Score
    private Map<String, Integer> frequencyAnalysis; // Topic -> Frequency of wrong answers
}
