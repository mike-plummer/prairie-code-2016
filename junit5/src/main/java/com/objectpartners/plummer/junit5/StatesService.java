package com.objectpartners.plummer.junit5;

import java.util.List;
import java.util.regex.Pattern;

public interface StatesService {
    List<String> getStates();

    List<String> getStatesMatching(Pattern regex);
}
