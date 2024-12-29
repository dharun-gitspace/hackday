package com.bytebusters.iap.model;

import java.util.List;

public class Question {
    private String id;
    private String topic;
    private String questionText;
    private List<String> choices;
    private String answer;
    private String source; // e.g., "AI-generated" or "Manually Added"
}
