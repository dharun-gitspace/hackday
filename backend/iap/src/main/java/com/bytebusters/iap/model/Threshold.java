package com.bytebusters.iap.model;

import java.util.Map;

public class Threshold {
    private String id;
    private String teacherId;
    private String unitId;
    private Map<String, Integer> topicWiseThreshold; // Topic -> Threshold value
}
