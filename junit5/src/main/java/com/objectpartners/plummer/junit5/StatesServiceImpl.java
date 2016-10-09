package com.objectpartners.plummer.junit5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Component
public class StatesServiceImpl implements StatesService {

    @Autowired
    private ApplicationProperties applicationProperties;

    @Override
    public List<String> getStates() {
        return new ArrayList<>(applicationProperties.getStates());
    }

    @Override
    public List<String> getStatesMatching(Pattern regex) {
        Assert.notNull(regex);
        return applicationProperties.getStates().stream()
                .filter(state -> regex.matcher(state).find())
                .collect(Collectors.toList());
    }
}
